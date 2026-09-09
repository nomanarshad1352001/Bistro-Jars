"use client";

import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/content/site";

export default function WhatsAppFloat() {
  const { t } = useLang();
  return (
    <a
      href={waLink(t.visit.waText)}
      target="_blank"
      rel="noreferrer"
      aria-label={t.common.whatsappLabel}
      className="pop-in fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-amber/30 bg-copper text-ink shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110 hover:bg-amber md:bottom-8 md:right-8"
    >
      <MessageCircle size={20} strokeWidth={1.75} />
    </a>
  );
}
