import type { Metadata } from "next";
import ContactScreen from "@/components/contact/ContactScreen";

export const metadata: Metadata = {
  title: "Kontakt — Contact",
  description:
    "Upiti i rezervacije direktno na naš WhatsApp — Bistro & Jars, Pariske komune 59, Novi Beograd. Inquiries and reservations via WhatsApp.",
};

export default function ContactPage() {
  return <ContactScreen />;
}
