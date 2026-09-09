import type { Metadata } from "next";
import MenuScreen from "@/components/menu/MenuScreen";

export const metadata: Metadata = {
  title: "Meni — Menu",
  description:
    "Kafa, potpis Kinder šejkovi, domaći ledeni čajevi i doručak — Bistro & Jars, Pariske komune 59. Coffee, shakes and breakfast menu.",
};

export default function MenuPage() {
  return <MenuScreen />;
}
