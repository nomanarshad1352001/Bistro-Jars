"use client";

import { useLang } from "@/lib/i18n";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/anim/Reveal";

export default function PrivacyScreen() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        kicker={t.privacy.kicker}
        title={t.privacy.title}
        sub={t.privacy.updated}
      />
      <div className="mx-auto max-w-3xl px-5 pb-28 md:px-10">
        {t.privacy.sections.map((s, i) => (
          <Reveal key={s.h} y={24} delay={Math.min(i * 0.05, 0.2)}>
            <section className="border-t border-line py-10 first:border-t-0 first:pt-0">
              <div className="flex items-baseline gap-5">
                <span className="headline text-lg italic text-copper/80">
                  0{i + 1}
                </span>
                <h2 className="headline text-2xl text-cream md:text-3xl">{s.h}</h2>
              </div>
              <div className="mt-5 space-y-4 pl-0 md:pl-[3.35rem]">
                {s.p.map((para, j) => (
                  <p key={j} className="leading-relaxed text-sand">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}
