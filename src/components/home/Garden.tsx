"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import Reveal from "@/components/anim/Reveal";

export default function Garden() {
  const { t } = useLang();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-garden-img]",
        { yPercent: -9 },
        {
          yPercent: 9,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden border-t border-line">
      <div className="relative h-[92svh] min-h-[560px]">
        <div data-garden-img className="absolute inset-[-12%_0] will-change-transform">
          <Image
            src="/images/garden.jpg"
            alt="The Bistro & Jars garden terrace at dusk"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-20 md:items-center md:px-10 md:pb-0">
          <div className="max-w-2xl">
            <Reveal y={16}>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-copper" />
                <p className="label-caps">{t.garden.kicker}</p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="headline text-[clamp(2.6rem,6vw,5.4rem)] text-cream">
                {t.garden.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-lg leading-relaxed text-cream/70">
                {t.garden.body}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 text-sm tracking-wide text-amber"
              >
                <span className="link-underline pb-1">{t.garden.cta}</span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
