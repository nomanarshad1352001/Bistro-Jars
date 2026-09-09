"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import Reveal from "@/components/anim/Reveal";

/**
 * Scroll-pinned chapter: a tall track drives four cross-fading
 * production steps of the signature Kinder shake.
 */
export default function SignatureStory() {
  const { t, lang } = useLang();
  const steps = t.signature.steps;
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const setBar = gsap.quickSetter(barRef.current, "scaleX");
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          setBar(self.progress);
          const idx = Math.min(
            steps.length - 1,
            Math.floor(self.progress * steps.length * 1.0001)
          );
          setActive((prev) => (prev === idx ? prev : idx));
        },
      });
    }, track);
    return () => ctx.revert();
  }, [steps.length]);

  const jumpTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const total = rect.height - window.innerHeight;
    window.scrollTo({
      top: top + ((idx + 0.5) / steps.length) * total,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative border-t border-line">
      {/* intro header */}
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-10 md:px-10 md:pt-36">
        <Reveal y={16}>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-copper" />
            <p className="label-caps">{t.signature.kicker}</p>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="headline max-w-4xl text-[clamp(2.4rem,6vw,5.2rem)] text-cream">
            {t.signature.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl leading-relaxed text-sand">{t.signature.body}</p>
        </Reveal>
      </div>

      {/* scroll track */}
      <div ref={trackRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-svh flex-col overflow-hidden md:grid md:grid-cols-2">
          {/* image stack */}
          <div className="relative h-[44svh] w-full overflow-hidden border-b border-line md:h-full md:border-b-0 md:border-r">
            {steps.map((s, i) => (
              <div
                key={s.img}
                className={`absolute inset-0 transition-all duration-[900ms] ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                }`}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/30" />
            <div className="absolute top-20 left-5 flex items-baseline gap-2 md:top-24 md:left-10">
              <span className="headline text-5xl italic text-cream md:text-6xl">
                0{active + 1}
              </span>
              <span className="label-caps">/ 0{steps.length}</span>
            </div>
          </div>

          {/* text panel */}
          <div className="relative flex flex-1 flex-col justify-center bg-ink px-5 py-8 md:px-14 lg:px-20">
            <p className="label-caps mb-5">
              {(lang === "sr" ? "Korak" : "Step") + ` 0${active + 1}`}
            </p>
            <div key={`${lang}-${active}`} className="step-in">
              <h3 className="headline text-[clamp(2.2rem,4.5vw,4rem)] italic text-amber">
                {steps[active].title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
                {steps[active].text}
              </p>
            </div>

            {/* step selector */}
            <div className="mt-10 flex items-center gap-2.5">
              {steps.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => jumpTo(i)}
                  aria-label={s.title}
                  className={`h-1 cursor-pointer rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-copper" : "w-4 bg-cream/20 hover:bg-cream/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* scroll progress */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-line">
            <div
              ref={barRef}
              className="h-full w-full origin-left scale-x-0 bg-copper"
            />
          </div>
        </div>
      </div>

      {/* outro */}
      <div className="mx-auto max-w-7xl px-5 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <p className="headline text-[clamp(1.6rem,3.4vw,2.6rem)] italic text-cream">
            {t.signature.outro}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/contact?type=reservation"
            className="mt-8 inline-block rounded-full border border-copper/60 px-8 py-3.5 text-sm tracking-wide text-amber transition-all hover:bg-copper hover:text-ink"
          >
            {t.signature.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
