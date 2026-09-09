"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { menu, type MenuItem } from "@/content/menu";
import Reveal from "@/components/anim/Reveal";

const pick = (catId: string, nameEn: string): MenuItem => {
  const found = menu
    .find((c) => c.id === catId)
    ?.items.find((i) => i.name.en === nameEn);
  if (!found) throw new Error(`Missing menu item: ${catId}/${nameEn}`);
  return found;
};

const featured: MenuItem[] = [
  pick("sendvici", "Bistro & Jars sandwich"),
  pick("burgeri", "Classic Burger"),
  pick("sejkovi", "Kinder Bueno"),
  pick("salate", "Caesar salad"),
  pick("sir", "Fried cheese"),
  pick("tortilje", "Tuna tortilla"),
  pick("dorucak", "Domestic"),
  pick("kafa", "Cappuccino"),
];

export default function MenuTeaser() {
  const { t, lang } = useLang();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cards]",
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-cards]", start: "top 88%", once: true },
        }
      );
      gsap.fromTo(
        "[data-wm]",
        { xPercent: 3 },
        {
          xPercent: -14,
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

  const fmt = (n: number) =>
    n.toLocaleString(lang === "sr" ? "de-DE" : "en-US");

  const Card = ({ item }: { item: MenuItem }) => (
    <Link
      href="/menu"
      className="group relative h-72 w-48 shrink-0 overflow-hidden rounded-xl border border-line will-change-transform sm:h-80 sm:w-56 md:h-[22rem] md:w-64"
    >
      {item.img ? (
        <Image
          src={item.img}
          alt={item.name[lang]}
          fill
          sizes="(min-width: 768px) 256px, 192px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
      {item.tag ? (
        <span className="absolute top-3 left-3 rounded-full border border-cream/25 bg-ink/50 px-2.5 py-1 text-[9px] tracking-[0.16em] text-amber uppercase backdrop-blur-sm">
          {item.tag[lang]}
        </span>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-medium tracking-wide text-cream transition-colors duration-300 group-hover:text-amber">
          {item.name[lang]}
        </p>
        <p className="mt-1 font-display text-lg italic text-amber">
          {fmt(item.price)}
          <span className="ml-1 text-[10px] not-italic text-cream/60">RSD</span>
        </p>
      </div>
    </Link>
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-t border-line py-24 md:py-36"
    >
      {/* scrolling watermark */}
      <div
        data-wm
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 font-display whitespace-nowrap text-[26vw] leading-none text-transparent uppercase select-none opacity-[0.05]"
        style={{ WebkitTextStroke: "1px rgba(237,229,216,0.9)" }}
      >
        Meni · Menu · Meni · Menu
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal y={16}>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-copper" />
                <p className="label-caps">{t.menuTeaser.kicker}</p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="headline text-[clamp(2.4rem,5.6vw,5rem)] text-cream">
                {t.menuTeaser.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg leading-relaxed text-sand">
                {t.menuTeaser.sub}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 rounded-full border border-copper/60 px-7 py-3.5 text-sm tracking-wide text-amber transition-all hover:bg-copper hover:text-ink"
            >
              {t.menuTeaser.cta}
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* infinite dish marquee — slides in a row like the gallery */}
      <div data-cards className="marquee-paused relative mt-14 overflow-hidden">
        <div
          className="flex w-max animate-marquee gap-4 pr-4"
          style={{ "--marquee-duration": "52s" } as CSSProperties}
        >
          {[...featured, ...featured].map((item, i) => (
            <Card key={`${item.name.en}-${i}`} item={item} />
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent md:w-28" />
      </div>
    </section>
  );
}
