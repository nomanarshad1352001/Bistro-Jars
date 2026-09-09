"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { videos } from "@/content/media";

export default function Hero() {
  const { t } = useLang();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        "[data-eyebrow]",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.2
      )
        .fromTo(
          "[data-line] > span",
          { yPercent: 112 },
          { yPercent: 0, duration: 1.5, stagger: 0.14 },
          0.3
        )
        .fromTo(
          "[data-fade]",
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.09 },
          0.9
        );

      gsap.to("[data-video]", {
        yPercent: 16,
        scale: 1.07,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative flex min-h-svh flex-col overflow-hidden">
      {/* backdrop video */}
      <div data-video className="absolute inset-0 will-change-transform">
        <video
          className="h-full w-full object-cover"
          src={videos.hero}
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />

      {/* content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-28 pt-32 md:px-10 md:pb-32">
        <div data-eyebrow className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-copper" />
          <p className="label-caps">{t.hero.eyebrow}</p>
        </div>

        <h1 className="headline text-[clamp(4.2rem,16.5vw,13.5rem)] text-cream">
          <span data-line className="block overflow-hidden pb-1">
            <span className="inline-block will-change-transform">Bistro</span>
          </span>
          <span data-line className="block overflow-hidden pb-2">
            <span className="inline-block will-change-transform">
              <em className="italic text-copper">&amp;</em>
              <span className="ml-[0.18em]">Jars</span>
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p data-fade className="max-w-sm text-base leading-relaxed text-sand md:text-lg">
            {t.hero.tagline}
          </p>
          <div data-fade className="flex flex-wrap items-center gap-5">
            <Link
              href="/menu"
              className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-amber"
            >
              {t.hero.ctaMenu}
            </Link>
            <Link
              href="/gallery"
              className="link-underline pb-1 text-sm tracking-wide text-cream/85 hover:text-cream"
            >
              {t.hero.ctaStory}
            </Link>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute right-6 bottom-8 hidden flex-col items-center gap-4 md:flex md:right-10">
        <span
          className="label-caps text-[10px]"
          style={{ writingMode: "vertical-rl" }}
        >
          {t.hero.scroll}
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-line">
          <span className="scroll-line absolute inset-0 bg-copper" />
        </span>
      </div>
    </section>
  );
}
