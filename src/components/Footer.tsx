"use client";

import Link from "next/link";
import { AtSign, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-coal">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="flex flex-col gap-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-caps mb-6">{t.footer.tagline}</p>
            <p className="headline select-none text-[14vw] leading-[0.85] text-cream md:text-[8.5rem]">
              Bistro<span className="italic text-copper">&amp;</span>Jars
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16">
            <div>
              <p className="label-caps mb-5">{t.footer.pages}</p>
              <ul className="space-y-3 text-sm text-cream/70">
                <li><Link className="link-underline hover:text-cream" href="/">{t.nav.home}</Link></li>
                <li><Link className="link-underline hover:text-cream" href="/menu">{t.nav.menu}</Link></li>
                <li><Link className="link-underline hover:text-cream" href="/gallery">{t.nav.gallery}</Link></li>
                <li><Link className="link-underline hover:text-cream" href="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-caps mb-5">{t.footer.contact}</p>
              <ul className="space-y-3 text-sm text-cream/70">
                <li>
                  <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-cream">
                    <Phone size={14} strokeWidth={1.5} className="text-copper" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-cream"
                  >
                    <AtSign size={14} strokeWidth={1.5} className="text-copper" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="label-caps mb-5">{t.footer.visit}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-2 text-sm text-cream/70 hover:text-cream"
              >
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0 text-copper" />
                {site.address[lang]}
              </a>
              <ul className="mt-3 space-y-1 text-xs text-dim">
                {site.hours.map((h) => (
                  <li key={h.time}>
                    {h.days[lang]} · {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Bistro &amp; Jars. {t.footer.rights}</p>
          <Link href="/privacy" className="link-underline w-max hover:text-cream">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
