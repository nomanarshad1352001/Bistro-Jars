"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { videos, img } from "@/content/media";
import Reveal from "@/components/anim/Reveal";

export default function Craft() {
  const { t } = useLang();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-parallax-img]",
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-parallax-wrap]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        "[data-video-card]",
        { y: 70, rotate: -5 },
        {
          y: -50,
          rotate: -2.5,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-parallax-wrap]",
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
    <section ref={rootRef} className="border-t border-line px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal y={16}>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-copper" />
              <p className="label-caps">{t.craft.kicker}</p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="headline text-[clamp(2.6rem,5vw,4.6rem)] text-cream">
              {t.craft.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md leading-relaxed text-sand">{t.craft.body}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/menu"
              className="group mt-10 inline-flex w-max items-center gap-3 text-sm tracking-wide text-amber"
            >
              <span className="link-underline pb-1">{t.craft.cta}</span>
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal y={60}>
            <div
              data-parallax-wrap
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line/60 md:aspect-[16/10]"
            >
              <div data-parallax-img className="absolute inset-[-14%_0]">
                <Image
                  src={img.barista}
                  alt="Barista pouring latte art"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </Reveal>

          <div
            data-video-card
            className="absolute -bottom-12 left-4 w-40 will-change-transform sm:w-52 md:-left-10 md:w-64"
          >
            <div className="overflow-hidden rounded-lg border border-copper/30 shadow-2xl shadow-black/60">
              <video
                className="aspect-[4/3] w-full object-cover"
                src={videos.latte}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <p className="label-caps mt-3 text-[9px]">{t.craft.videoCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
