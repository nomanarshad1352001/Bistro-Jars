"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { BadgePercent, MessageCircle, Search, Truck, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { menu } from "@/content/menu";
import { img } from "@/content/media";
import { waLink } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/anim/Reveal";

export default function MenuScreen() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(menu[0].id);
  const [query, setQuery] = useState("");
  const [light, setLight] = useState<{ src: string; name: string } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!light) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLight(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [light]);

  const q = query.trim().toLowerCase();

  const visible = useMemo(() => {
    if (!q) return menu;
    return menu
      .map((c) => ({
        ...c,
        items: c.items.filter((it) =>
          [it.name.sr, it.name.en, it.desc?.sr ?? "", it.desc?.en ?? ""]
            .join(" ")
            .toLowerCase()
            .includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [q]);

  /* scroll-spy over the visible categories */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-32% 0px -58% 0px" }
    );
    visible.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [visible]);

  /* staggered section animation (disabled while searching) */
  useEffect(() => {
    if (q) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-cat]").forEach((section) => {
        const head = section.querySelector("[data-cat-head]");
        const rule = section.querySelector("[data-cat-rule]");
        const rows = section.querySelectorAll("[data-row]");
        if (head) {
          gsap.fromTo(
            head.children,
            { y: 34, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 86%", once: true },
            }
          );
        }
        if (rule) {
          gsap.fromTo(
            rule,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: { trigger: section, start: "top 86%", once: true },
            }
          );
        }
        if (rows.length) {
          gsap.fromTo(
            rows,
            { y: 26, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.05,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 82%", once: true },
            }
          );
        }
      });
    }, rootRef);
    return () => ctx.revert();
  }, [q, lang]);

  const fmt = (n: number) =>
    n.toLocaleString(lang === "sr" ? "de-DE" : "en-US");

  return (
    <div ref={rootRef}>
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

      {/* promo banner + search */}
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal y={24}>
          <div className="promo-glow rounded-2xl bg-panel/60 p-5 md:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-copper/40 bg-copper/10 px-4 py-2 text-xs tracking-wide text-amber">
                  <BadgePercent size={15} strokeWidth={1.75} />
                  {t.menuPage.promoDeal}
                </span>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 text-xs tracking-wide text-sand">
                  <Truck size={15} strokeWidth={1.75} className="text-copper" />
                  {t.menuPage.promoDelivery}
                </span>
              </div>
              <div className="relative lg:ml-auto lg:w-80">
                <Search
                  size={15}
                  strokeWidth={1.75}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-dim"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.menuPage.searchPh}
                  aria-label={t.menuPage.searchLabel}
                  className="w-full rounded-full border border-line bg-ink/60 py-2.5 pl-11 pr-10 text-sm text-cream placeholder:text-dim outline-none transition-colors focus:border-copper"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Clear"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 text-dim transition-colors hover:text-cream"
                  >
                    <X size={14} strokeWidth={1.75} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* sticky category rail */}
      <div className="sticky top-[61px] z-[60] mt-8 border-y border-line bg-ink/85 backdrop-blur-xl md:top-[65px]">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max items-center gap-2 py-3">
            {visible.map((c) => (
              <button
                key={c.id}
                onClick={() =>
                  document
                    .getElementById(c.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className={`cursor-pointer rounded-full border px-4 py-2 text-xs tracking-[0.12em] whitespace-nowrap uppercase transition-all duration-300 ${
                  active === c.id && !q
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
        {visible.length === 0 ? (
          <div key={q} className="step-in py-24 text-center">
            <p className="headline max-w-xl text-2xl italic text-cream md:text-3xl">
              {t.menuPage.noResults}
            </p>
            <a
              href={waLink(t.visit.waText)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-copper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              WhatsApp
            </a>
          </div>
        ) : (
          visible.map((c) => (
            <section key={c.id} id={c.id} data-cat className="scroll-mt-40 pt-14 md:pt-20">
              <div data-cat-head className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="headline text-2xl italic text-copper/80">
                  {String(menu.indexOf(c) + 1).padStart(2, "0")}
                </span>
                <h2 className="headline text-[clamp(1.9rem,4.4vw,3.4rem)] text-cream">
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
              <div
                data-cat-rule
                className="mt-5 h-px origin-left bg-gradient-to-r from-copper/50 via-line to-transparent"
              />

              <ul>
                {c.items.map((item) => (
                  <li
                    key={`${c.id}-${item.name.en}-${item.price}`}
                    data-row
                    className={`group menu-row rounded-lg px-3 py-5 md:px-5 md:py-6 ${
                      q ? "fade-in" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 md:gap-5">
                      {item.img ? (
                        <button
                          onClick={() =>
                            setLight({ src: item.img!, name: item.name[lang] })
                          }
                          aria-label={item.name[lang]}
                          className="relative h-14 w-14 shrink-0 cursor-zoom-in overflow-hidden rounded-xl border border-line md:h-16 md:w-16"
                        >
                          <Image
                            src={item.img}
                            alt={item.name[lang]}
                            fill
                            sizes="(min-width: 768px) 64px, 56px"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </button>
                      ) : null}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-3">
                          <h3 className="text-base font-medium tracking-wide text-cream transition-colors duration-300 group-hover:text-amber md:text-lg">
                            {item.name[lang]}
                          </h3>
                          {item.tag ? (
                            <span className="shrink-0 rounded-full border border-copper/50 px-2.5 py-0.5 text-[9px] tracking-[0.16em] text-amber uppercase">
                              {item.tag[lang]}
                            </span>
                          ) : null}
                          {item.oldPrice ? (
                            <span className="shrink-0 rounded-full bg-copper px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.16em] text-ink uppercase">
                              {t.menuPage.megaTag}
                            </span>
                          ) : null}
                          <span className="mx-1 hidden flex-1 border-b border-dotted border-cream/15 transition-colors duration-300 sm:block" />
                          <p className="ml-auto font-display text-xl italic whitespace-nowrap text-amber md:text-2xl">
                            {item.oldPrice ? (
                              <span className="mr-2.5 align-middle text-sm not-italic text-dim line-through">
                                {fmt(item.oldPrice)}
                              </span>
                            ) : null}
                            {fmt(item.price)}
                            <span className="ml-1.5 text-xs not-italic text-dim">RSD</span>
                          </p>
                        </div>
                        {item.desc ? (
                          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-sand">
                            {item.desc[lang]}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}

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

      {/* product photo lightbox */}
      {light ? (
        <div
          className="fade-in fixed inset-0 z-[110] flex flex-col items-center justify-center bg-ink/95 px-5 backdrop-blur-sm"
          onClick={() => setLight(null)}
        >
          <button
            onClick={() => setLight(null)}
            aria-label="Close"
            className="absolute top-5 right-5 cursor-pointer rounded-full border border-line bg-ink/60 p-2.5 text-cream transition-colors hover:border-copper hover:text-amber"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
          <div
            className="relative h-[70svh] w-[92vw] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={light.src}
              alt={light.name}
              fill
              sizes="(min-width: 768px) 768px, 92vw"
              className="rounded-xl object-contain"
              priority
            />
          </div>
          <p className="headline mt-6 text-2xl italic text-cream">{light.name}</p>
        </div>
      ) : null}
    </div>
  );
}
