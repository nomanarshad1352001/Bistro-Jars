"use client";

import type { CSSProperties } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";
import Reveal from "@/components/anim/Reveal";

function Stars() {
  return (
    <span className="flex gap-0.5 text-amber">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} strokeWidth={0} fill="currentColor" />
      ))}
    </span>
  );
}

export default function Reviews() {
  const { t } = useLang();
  const items = t.reviews.items;
  const rowA = items.slice(0, 3);
  const rowB = items.slice(3, 6);

  const Card = ({ item }: { item: (typeof items)[number] }) => (
    <article className="w-[300px] shrink-0 rounded-xl border border-line bg-panel/50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-copper/40 hover:shadow-2xl hover:shadow-black/50 sm:w-[380px] sm:p-7">
      <Stars />
      <p className="mt-4 text-sm leading-relaxed text-cream/80 sm:text-[0.95rem]">
        “{item.text}”
      </p>
      <footer className="mt-5 flex items-center gap-3">
        <span className="h-px w-6 bg-copper/70" />
        <p className="text-xs tracking-[0.14em] text-sand uppercase">
          {item.name} · {item.tag}
        </p>
      </footer>
    </article>
  );

  return (
    <section className="border-t border-line py-24 md:py-36">
      <div className="mx-auto mb-14 flex max-w-7xl flex-wrap items-end justify-between gap-10 px-5 md:px-10">
        <Reveal y={24}>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-copper" />
            <p className="label-caps">{t.reviews.kicker}</p>
          </div>
          <h2 className="headline text-[clamp(2.4rem,5vw,4.6rem)] text-cream">
            {t.reviews.title}
          </h2>
        </Reveal>

        <Reveal y={24} delay={0.1}>
          <div className="flex items-end gap-5">
            <p className="headline text-7xl leading-none text-cream md:text-8xl">4.8</p>
            <div className="pb-1">
              <Stars />
              <p className="label-caps mt-2.5 text-[10px]">{t.reviews.basedOn}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-amber link-underline pb-0.5"
              >
                {t.reviews.cta}
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="marquee-paused space-y-4 overflow-hidden">
        <div
          className="flex w-max animate-marquee gap-4 pr-4"
          style={{ "--marquee-duration": "72s" } as CSSProperties}
        >
          {[...Array(3)].flatMap((_, d) =>
            rowA.map((item, i) => <Card key={`a-${d}-${i}`} item={item} />)
          )}
        </div>
        <div
          className="flex w-max animate-marquee-rev gap-4 pr-4"
          style={{ "--marquee-duration": "86s" } as CSSProperties}
        >
          {[...Array(3)].flatMap((_, d) =>
            rowB.map((item, i) => <Card key={`b-${d}-${i}`} item={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
