"use client";

import { useLang } from "@/lib/i18n";
import SplitWords from "@/components/anim/SplitWords";
import Reveal from "@/components/anim/Reveal";

const emphasize: Record<string, string[]> = {
  sr: ["ritual.", "svile,", "teglu."],
  en: ["ritual.", "silk,", "jar."],
};

export default function Manifesto() {
  const { t, lang } = useLang();

  return (
    <section className="relative px-5 py-[16svh] md:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal y={16}>
          <div className="mb-12 flex items-center gap-4">
            <span className="h-px w-10 bg-copper" />
            <p className="label-caps">{t.manifesto.kicker}</p>
          </div>
        </Reveal>
        <SplitWords
          text={t.manifesto.text}
          emphasize={emphasize[lang]}
          className="headline text-[clamp(1.9rem,5.3vw,4.5rem)] font-[360] leading-[1.14] text-cream"
        />
        <Reveal delay={0.15} y={20}>
          <p className="mt-12 font-display text-lg italic text-dim">
            — Bistro &amp; Jars, Novi Beograd
          </p>
        </Reveal>
      </div>
    </section>
  );
}
