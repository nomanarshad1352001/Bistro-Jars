"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { menu } from "@/content/menu";
import { img } from "@/content/media";
import { waLink } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/anim/Reveal";

export default function MenuScreen() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(menu[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    menu.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHeader kicker={t.menuPage.kicker} title={t.menuPage.title} sub={t.menuPage.sub}>
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1.5 text-sm text-dim">
              <p>{t.menuPage.vat}</p>
              <p>{t.menuPage.soy}</p>
            </div>
            <div className="relative hidden h-36 w-56 rotate-2 overflow-hidden rounded-lg border border-line shadow-2xl shadow-black/50 lg:block">
              <Image
                src={img.signature}
                alt="Kinder shake"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </PageHeader>

      {/* sticky category rail */}
      <div className="sticky top-[61px] z-[60] border-y border-line bg-ink/85 backdrop-blur-xl md:top-[65px]">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max items-center gap-2 py-3">
            {menu.map((c) => (
              <button
                key={c.id}
                onClick={() =>
                  document
                    .getElementById(c.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={`cursor-pointer rounded-full border px-4 py-2 text-xs tracking-[0.12em] whitespace-nowrap uppercase transition-all duration-300 ${
                  active === c.id
                    ? "border-copper bg-copper text-ink"
                    : "border-line text-cream/60 hover:border-copper/50 hover:text-cream"
                }`}
              >
                {c.label[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* categories */}
      <div className="mx-auto max-w-7xl px-5 pb-28 md:px-10">
        {menu.map((c, ci) => (
          <section key={c.id} id={c.id} className="scroll-mt-36 pt-16 md:pt-24">
            <Reveal y={24}>
              <div className="mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="headline text-2xl italic text-copper/80">
                  0{ci + 1}
                </span>
                <h2 className="headline text-[clamp(2rem,4.6vw,3.6rem)] text-cream">
                  {c.label[lang]}
                </h2>
                {c.sub ? (
                  <>
                    <span className="hidden flex-1 md:block" />
                    <p className="w-full text-sm italic text-dim md:w-auto md:font-display">
                      {c.sub[lang]}
                    </p>
                  </>
                ) : null}
              </div>
            </Reveal>

            <ul className="divide-y divide-line">
              {c.items.map((item, i) => (
                <Reveal key={item.name.en} y={14} delay={Math.min(i * 0.04, 0.3)}>
                  <li className="group py-5 md:py-6">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-base font-medium tracking-wide text-cream transition-colors group-hover:text-amber md:text-lg">
                        {item.name[lang]}
                      </h3>
                      {item.tag ? (
                        <span className="rounded-full border border-copper/50 px-2.5 py-0.5 text-[9px] tracking-[0.16em] text-amber uppercase">
                          {item.tag[lang]}
                        </span>
                      ) : null}
                      <span className="mx-1 flex-1 border-b border-dotted border-cream/15" />
                      <p className="font-display text-xl italic text-amber md:text-2xl">
                        {item.price}
                        <span className="ml-1 text-xs not-italic text-dim">RSD</span>
                      </p>
                    </div>
                    {item.desc ? (
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-sand">
                        {item.desc[lang]}
                      </p>
                    ) : null}
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>
        ))}

        {/* closing note */}
        <Reveal>
          <div className="mt-24 flex flex-col items-center gap-6 rounded-2xl border border-line bg-panel/40 px-6 py-14 text-center">
            <p className="headline text-2xl italic text-cream md:text-3xl">
              {t.menuPage.order}
            </p>
            <a
              href={waLink(t.visit.waText)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-copper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              {t.visit.ctaReserve}
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
}
