import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { site, waLink } from "@/content/site";

export const runtime = "nodejs";

const schema = z.object({
  type: z.enum(["inquiry", "reservation"]),
  name: z.string().min(2).max(120),
  contact: z.string().min(5).max(160),
  date: z.string().max(20).optional().or(z.literal("")),
  time: z.string().max(10).optional().or(z.literal("")),
  guests: z.number().int().min(1).max(30).optional(),
  message: z.string().max(1000).optional().or(z.literal("")),
  lang: z.enum(["sr", "en"]).optional().default("sr"),
});

/** Naive per-IP rate limit: 6 submissions / minute. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const LIMIT = 6;

function rateLimited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= LIMIT) return true;
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

function composeWhatsappText(body: z.infer<typeof schema>): string {
  const lines = [
    "NOVA PORUKA — bistroandjars sajt",
    `Tip: ${body.type === "reservation" ? "REZERVACIJA" : "UPIT"}`,
    `Ime: ${body.name}`,
    `Kontakt: ${body.contact}`,
  ];
  if (body.type === "reservation") {
    if (body.date) lines.push(`Datum: ${body.date}`);
    if (body.time) lines.push(`Vreme: ${body.time}`);
    if (body.guests) lines.push(`Osoba: ${body.guests}`);
  }
  if (body.message) lines.push(`Poruka: ${body.message}`);
  lines.push("— poslato sa sajta");
  return lines.join("\n");
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
    if (rateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const body = schema.parse(await req.json());
    const text = composeWhatsappText(body);

    const token = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const notifyTo = (process.env.WHATSAPP_NOTIFY_TO ?? site.whatsappNumber).replace(
      /\D/g,
      ""
    );

    let delivery: "sent" | "fallback" | "failed" = "fallback";
    let waUrl: string | undefined;

    if (token && phoneNumberId) {
      try {
        const res = await fetch(
          `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: notifyTo,
              type: "text",
              text: { preview_url: false, body: text },
            }),
          }
        );
        delivery = res.ok ? "sent" : "failed";
        if (!res.ok) {
          console.error("WhatsApp Cloud API error:", res.status, await res.text());
          waUrl = waLink(text);
        }
      } catch (err) {
        console.error("WhatsApp Cloud API request failed:", err);
        delivery = "failed";
        waUrl = waLink(text);
      }
    } else {
      // Cloud API not configured in this environment — hand off to a wa.me link.
      waUrl = waLink(text);
    }

    try {
      await db.insert(inquiries).values({
        type: body.type,
        name: body.name,
        contact: body.contact,
        date: body.date || null,
        time: body.time || null,
        guests: body.guests ?? null,
        message: body.message || null,
        lang: body.lang,
        delivery,
      });
    } catch (err) {
      console.error("Failed to persist inquiry:", err);
    }

    return NextResponse.json({ ok: true, mode: delivery, waUrl });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "validation", issues: err.issues },
        { status: 400 }
      );
    }
    console.error("Inquiry error:", err);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
