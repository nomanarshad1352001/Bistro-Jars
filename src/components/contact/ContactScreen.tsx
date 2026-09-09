"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  AtSign,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site, waLink } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/anim/Reveal";

type Fields = {
  type: "inquiry" | "reservation";
  name: string;
  contact: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; mode: string; waUrl?: string }
  | { kind: "error" };

const inputCls =
  "w-full border-b border-line bg-transparent py-3 text-cream placeholder:text-dim outline-none transition-colors focus:border-copper";
const errCls = "mt-1.5 text-xs tracking-wide text-[#d97757]";

function ContactInner() {
  const { t, lang } = useLang();
  const f = t.contactPage.form;
  const params = useSearchParams();

  const [fields, setFields] = useState<Fields>({
    type: params.get("type") === "reservation" ? "reservation" : "inquiry",
    name: "",
    contact: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set = (k: keyof Fields, v: string) =>
    setFields((p) => ({ ...p, [k]: v }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) e.name = f.errRequired;
    const c = fields.contact.trim();
    const okContact =
      /^\+?[0-9\s\-()]{6,20}$/.test(c) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
    if (!okContact) e.contact = f.errContact;
    if (fields.type === "reservation") {
      if (!fields.date) e.date = f.errRequired;
      if (!fields.time) e.time = f.errRequired;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          guests: parseInt(fields.guests, 10) || 2,
          lang,
        }),
      });
      const data = (await res.json()) as { ok: boolean; mode?: string; waUrl?: string };
      if (res.ok && data.ok) {
        setStatus({ kind: "success", mode: data.mode ?? "stored", waUrl: data.waUrl });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus({ kind: "error" });
      }
    } catch {
      setStatus({ kind: "error" });
    }
  };

  const reset = () => {
    setFields((p) => ({ ...p, name: "", contact: "", message: "" }));
    setStatus({ kind: "idle" });
  };

  return (
    <>
      <PageHeader
        kicker={t.contactPage.kicker}
        title={t.contactPage.title}
        sub={t.contactPage.sub}
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-28 md:px-10 lg:grid-cols-12 lg:gap-10">
        {/* info column */}
        <div className="space-y-10 lg:col-span-5">
          <Reveal y={24}>
            <div className="rounded-2xl border border-line bg-panel/40 p-7 md:p-8">
              <p className="label-caps mb-3 flex items-center gap-2">
                <MapPin size={13} strokeWidth={1.5} className="text-copper" />
                {t.contactPage.addressLabel}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-start gap-2 font-display text-2xl italic text-cream transition-colors hover:text-amber"
              >
                {site.address[lang]}
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1.5 shrink-0 text-copper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="mt-8 border-t border-line pt-6">
                <p className="label-caps mb-4 flex items-center gap-2">
                  <Clock size={13} strokeWidth={1.5} className="text-copper" />
                  {t.contactPage.hoursLabel}
                </p>
                <ul className="space-y-2.5">
                  {site.hours.map((h) => (
                    <li key={h.time} className="flex items-baseline gap-3 text-sm">
                      <span className="text-sand">{h.days[lang]}</span>
                      <span className="flex-1 border-b border-dotted border-cream/15" />
                      <span className="font-medium text-cream">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal y={24} delay={0.1}>
            <div className="space-y-4 px-1">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-cream"
              >
                <Phone size={15} strokeWidth={1.5} className="text-copper" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-cream"
              >
                <AtSign size={15} strokeWidth={1.5} className="text-copper" />
                bistroandjars — {t.contactPage.followLabel.toLowerCase()}
              </a>
              <div className="pt-2">
                <p className="label-caps mb-3">{t.contactPage.direct}</p>
                <a
                  href={waLink(t.visit.waText)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-copper/60 px-5 py-2.5 text-sm text-amber transition-all hover:bg-copper hover:text-ink"
                >
                  <MessageCircle size={15} strokeWidth={1.75} />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* form column */}
        <Reveal y={32} delay={0.05} className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-panel/40 p-7 md:p-10">
            {status.kind === "success" ? (
              <div className="pop-in flex flex-col items-start gap-6 py-6" style={{ animationDelay: "0ms" }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/50 bg-copper/10">
                  <MessageCircle size={20} strokeWidth={1.5} className="text-amber" />
                </span>
                <div>
                  <h2 className="headline text-3xl italic text-cream md:text-4xl">
                    {f.successTitle}
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-sand">
                    {status.mode === "sent" ? f.successSent : f.successFallback}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {status.waUrl ? (
                    <a
                      href={status.waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-full bg-copper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber"
                    >
                      <MessageCircle size={16} strokeWidth={1.75} />
                      {f.openWhats}
                    </a>
                  ) : null}
                  <button
                    onClick={reset}
                    className="cursor-pointer pb-1 text-sm text-cream/80 link-underline hover:text-cream"
                  >
                    {f.again}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-8">
                {/* type toggle */}
                <div
                  role="group"
                  aria-label="Type"
                  className="grid grid-cols-2 rounded-full border border-line p-1"
                >
                  {(["inquiry", "reservation"] as const).map((tp) => (
                    <button
                      key={tp}
                      type="button"
                      onClick={() => set("type", tp)}
                      className={`cursor-pointer rounded-full py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300 ${
                        fields.type === tp
                          ? "bg-cream text-ink"
                          : "text-cream/60 hover:text-cream"
                      }`}
                    >
                      {tp === "inquiry" ? f.typeInquiry : f.typeReservation}
                    </button>
                  ))}
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label-caps">
                      {f.name} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={fields.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder={f.namePh}
                      className={inputCls}
                      autoComplete="name"
                    />
                    {errors.name && <p className={errCls}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact" className="label-caps">
                      {f.contact} *
                    </label>
                    <input
                      id="contact"
                      type="text"
                      value={fields.contact}
                      onChange={(e) => set("contact", e.target.value)}
                      placeholder={f.contactPh}
                      className={inputCls}
                      autoComplete="tel"
                    />
                    {errors.contact && <p className={errCls}>{errors.contact}</p>}
                  </div>
                </div>

                {fields.type === "reservation" && (
                  <div className="fade-in grid gap-8 sm:grid-cols-3">
                    <div>
                      <label htmlFor="date" className="label-caps">
                        {f.date} *
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={fields.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => set("date", e.target.value)}
                        className={inputCls}
                      />
                      {errors.date && <p className={errCls}>{errors.date}</p>}
                    </div>
                    <div>
                      <label htmlFor="time" className="label-caps">
                        {f.time} *
                      </label>
                      <input
                        id="time"
                        type="time"
                        value={fields.time}
                        onChange={(e) => set("time", e.target.value)}
                        className={inputCls}
                      />
                      {errors.time && <p className={errCls}>{errors.time}</p>}
                    </div>
                    <div>
                      <label htmlFor="guests" className="label-caps">
                        {f.guests}
                      </label>
                      <select
                        id="guests"
                        value={fields.guests}
                        onChange={(e) => set("guests", e.target.value)}
                        className={`${inputCls} cursor-pointer`}
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n} className="bg-ink">
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="label-caps">
                    {f.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={fields.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder={f.messagePh}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status.kind === "error" && (
                  <p className="fade-in text-sm text-[#d97757]">{f.errGeneric}</p>
                )}

                <button
                  type="submit"
                  disabled={status.kind === "sending"}
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-copper px-7 py-4 text-sm font-medium text-ink transition-all hover:bg-amber disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {status.kind === "sending" ? (
                    <>
                      <Loader2 size={16} strokeWidth={1.75} className="animate-spin" />
                      {f.sending}
                    </>
                  ) : (
                    <>
                      <MessageCircle size={16} strokeWidth={1.75} />
                      {f.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </>
  );
}

export default function ContactScreen() {
  return (
    <Suspense fallback={<div className="min-h-svh" />}>
      <ContactInner />
    </Suspense>
  );
}
