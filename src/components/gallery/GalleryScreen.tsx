"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { galleryItems } from "@/content/media";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/anim/Reveal";

export default function GalleryScreen() {
  const { t, lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIdx((i) =>
        i === null ? i : (i + dir + galleryItems.length) % galleryItems.length
      ),
    []
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, close, step]);

  const current = openIdx === null ? null : galleryItems[openIdx];

  return (
    <>
      <PageHeader
        kicker={t.galleryPage.kicker}
        title={t.galleryPage.title}
        sub={t.galleryPage.sub}
      />

      <div className="mx-auto max-w-7xl px-5 pb-28 md:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.src} y={26} className="break-inside-avoid">
              <button
                onClick={() => setOpenIdx(i)}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-lg border border-line/60 text-left"
              >
                {item.kind === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.caption[lang]}
                    width={item.tall ? 900 : 1600}
                    height={item.tall ? 1200 : 1000}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 md:translate-y-2 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <p className="text-xs tracking-[0.14em] text-cream/90 uppercase">
                    {item.caption[lang]}
                  </p>
                  {item.kind === "video" && (
                    <span className="flex items-center gap-1.5 rounded-full border border-cream/25 px-2.5 py-1 text-[9px] tracking-[0.16em] text-cream/80 uppercase">
                      <Play size={9} strokeWidth={0} fill="currentColor" />
                      {t.galleryPage.videoTag}
                    </span>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {current && (
        <div
          className="fade-in fixed inset-0 z-[110] flex flex-col bg-ink/95 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label={t.galleryPage.close}
            className="absolute top-5 right-5 z-10 cursor-pointer rounded-full border border-line bg-ink/60 p-2.5 text-cream transition-colors hover:border-copper hover:text-amber"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <div
            className="flex flex-1 items-center justify-center gap-3 px-4 pt-16 pb-4 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => step(-1)}
              className="hidden cursor-pointer rounded-full border border-line p-2.5 text-cream/70 transition-colors hover:border-copper hover:text-amber sm:block"
              aria-label="Previous"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="relative max-h-full">
              {current.kind === "image" ? (
                <Image
                  src={current.src}
                  alt={current.caption[lang]}
                  width={current.tall ? 1000 : 1800}
                  height={current.tall ? 1400 : 1100}
                  className="max-h-[74svh] w-auto rounded-lg object-contain"
                  priority
                />
              ) : (
                <video
                  src={current.src}
                  poster={current.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="max-h-[74svh] w-auto max-w-full rounded-lg"
                />
              )}
            </div>

            <button
              onClick={() => step(1)}
              className="hidden cursor-pointer rounded-full border border-line p-2.5 text-cream/70 transition-colors hover:border-copper hover:text-amber sm:block"
              aria-label="Next"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          <p
            className="pb-8 text-center text-xs tracking-[0.18em] text-sand uppercase"
            onClick={(e) => e.stopPropagation()}
          >
            {current.caption[lang]} — {openIdx! + 1}/{galleryItems.length}
          </p>
        </div>
      )}
    </>
  );
}
