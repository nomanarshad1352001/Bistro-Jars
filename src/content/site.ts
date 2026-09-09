export type Bilingual = { sr: string; en: string };

export const site = {
  name: "Bistro & Jars",
  shortName: "Bistro&Jars",
  address: {
    sr: "Pariske komune 59, Novi Beograd 11070",
    en: "Pariske komune 59, New Belgrade 11070",
  } as Bilingual,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bistro+%26+Jars+Pariske+komune+59+Beograd",
  phoneDisplay: "+381 60 555 0199",
  phoneHref: "tel:+381605550199",
  instagram: "https://instagram.com/bistroandjars",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "381605550199",
  hours: [
    { days: { sr: "Ponedeljak — Petak", en: "Monday — Friday" }, time: "07:00 — 23:00" },
    { days: { sr: "Subota", en: "Saturday" }, time: "08:00 — 00:00" },
    { days: { sr: "Nedelja", en: "Sunday" }, time: "09:00 — 22:00" },
  ],
};

export function waLink(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
