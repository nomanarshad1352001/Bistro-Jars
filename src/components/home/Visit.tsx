"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site, waLink } from "@/content/site";
import Reveal from "@/components/anim/Reveal";

export default function Visit() {
  const { t, lang } = useLang();

  return (
    <section className="border-t border-line px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Reveal y={16}>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-copper" />
              <p className="label-caps">{t.visit.kicker}</p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="headline text-[clamp(2.6rem,6vw,5.4rem)] text-cream">
              {t.visit.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md leading-relaxed text-sand">{t.visit.note}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={waLink(t.visit.waText)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-copper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber"
              >
                <MessageCircle size={16} strokeWidth={1.75} />
                {t.visit.ctaReserve}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 pb-1 text-sm text-cream/85 link-underline hover:text-cream"
              >
                {t.visit.ctaDirections}
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal y={48}>
          <div className="rounded-2xl border border-line bg-panel/40">
            <div className="border-b border-line p-7 md:p-9">
              <p className="label-caps mb-3">{t.visit.addressLabel}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl italic text-cream transition-colors hover:text-amber md:text-3xl"
              >
                {site.address[lang]}
              </a>
            </div>
            <div className="p-7 md:p-9">
              <p className="label-caps mb-4">{t.visit.hoursLabel}</p>
              <ul className="space-y-3">
                {site.hours.map((h) => (
                  <li
                    key={h.time}
                    className="flex items-baseline justify-between gap-6 text-sm"
                  >
                    <span className="text-sand">{h.days[lang]}</span>
                    <span className="mx-2 flex-1 border-b border-dotted border-cream/15" />
                    <span className="font-medium tracking-wide text-cream">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
