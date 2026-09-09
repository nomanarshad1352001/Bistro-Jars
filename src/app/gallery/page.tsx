import type { Metadata } from "next";
import GalleryScreen from "@/components/gallery/GalleryScreen";

export const metadata: Metadata = {
  title: "Galerija — Gallery",
  description:
    "Kadrovi iz lokala — tegle, para i vrt. Frames from Bistro & Jars, New Belgrade.",
};

export default function GalleryPage() {
  return <GalleryScreen />;
}
