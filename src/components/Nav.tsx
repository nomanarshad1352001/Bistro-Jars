"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

const routes = [
  { href: "/", key: "home" },
  { href: "/menu", key: "menu" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
] as const;

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link
            href="/"
            className="font-display text-xl italic tracking-tight text-cream transition-colors hover:text-amber md:text-2xl"
          >
            Bistro<span className="text-copper">&amp;</span>Jars
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className={`link-underline pb-0.5 text-sm tracking-wide transition-colors ${
                  pathname === r.href ? "text-amber" : "text-cream/80 hover:text-cream"
                }`}
              >
                {t.nav[r.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <div
              role="group"
              aria-label="Language"
              className="flex items-center rounded-full border border-line text-xs tracking-[0.18em]"
            >
              <button
                onClick={() => setLang("sr")}
                className={`cursor-pointer rounded-full px-3 py-1.5 transition-colors ${
                  lang === "sr" ? "bg-cream text-ink" : "text-cream/60 hover:text-cream"
                }`}
              >
                SR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`cursor-pointer rounded-full px-3 py-1.5 transition-colors ${
                  lang === "en" ? "bg-cream text-ink" : "text-cream/60 hover:text-cream"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/contact?type=reservation"
              className="hidden rounded-full border border-copper/60 px-4 py-1.5 text-sm text-amber transition-all hover:bg-copper hover:text-ink md:inline-block"
            >
              {t.nav.reserve}
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label={t.nav.open}
              className="cursor-pointer rounded-full border border-line p-2 text-cream transition-colors hover:border-copper hover:text-amber md:hidden"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-ink transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-xl italic">
            Bistro<span className="text-copper">&amp;</span>Jars
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label={t.nav.close}
            className="cursor-pointer rounded-full border border-line p-2 text-cream hover:border-copper hover:text-amber"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
          {routes.map((r, i) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={`headline py-2 text-5xl transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${pathname === r.href ? "italic text-amber" : "text-cream hover:text-amber"}`}
            >
              {t.nav[r.key]}
            </Link>
          ))}
          <Link
            href="/contact?type=reservation"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
            className={`mt-8 inline-flex w-max items-center rounded-full border border-copper px-6 py-3 text-amber transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {t.nav.reserve}
          </Link>
        </nav>
        <p className="px-8 pb-10 text-xs tracking-[0.2em] text-dim uppercase">
          Pariske komune 59 — Novi Beograd
        </p>
      </div>
    </>
  );
}
