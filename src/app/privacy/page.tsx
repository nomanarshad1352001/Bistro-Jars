import type { Metadata } from "next";
import PrivacyScreen from "@/components/privacy/PrivacyScreen";

export const metadata: Metadata = {
  title: "Politika privatnosti — Privacy Policy",
  description:
    "Kako Bistro & Jars postupa sa vašim podacima — How Bistro & Jars handles your data.",
};

export default function PrivacyPage() {
  return <PrivacyScreen />;
}
