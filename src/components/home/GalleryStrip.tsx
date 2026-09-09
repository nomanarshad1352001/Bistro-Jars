"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { stripImages } from "@/content/media";

export default function GalleryStrip() {
  const { t } = useLang();
  const items = [...stripImages, ...stripImages];

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between px-5 md:px-10">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-copper" />
          <p className="label-caps">{t.strip.heading}</p>
        </div>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-3 text-sm text-amber"
        >
          <span className="link-underline hidden pb-1 sm:inline">{t.strip.cta}</span>
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      </div>

      <div className="marquee-paused overflow-hidden">
        <div
          className="flex w-max animate-marquee gap-3 pr-3"
          style={{ "--marquee-duration": "58s" } as CSSProperties}
        >
          {items.map((src, i) => (
            <Link
              key={`${src}-${i}`}
              href="/gallery"
              className="group relative h-[36svh] w-[64vw] shrink-0 overflow-hidden rounded-md border border-line/60 sm:h-[42svh] sm:w-[40vw] md:h-[48svh] md:w-[27vw] lg:w-[22vw]"
              tabIndex={-1}
            >
              <Image
                src={src}
                alt="Bistro & Jars"
                fill
                sizes="(min-width: 768px) 27vw, 64vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition-opacity duration-500 group-hover:opacity-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
