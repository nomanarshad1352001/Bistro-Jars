import type { Bilingual } from "./site";

export const videos = {
  hero: "https://videos.pexels.com/video-files/2909914/2909914-uhd_3840_2024_24fps.mp4",
  latte: "https://videos.pexels.com/video-files/6769791/6769791-uhd_3840_2160_24fps.mp4",
  pour: "https://videos.pexels.com/video-files/9422639/9422639-uhd_3840_2160_30fps.mp4",
} as const;

export type GalleryItem = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  tall?: boolean;
  caption: Bilingual;
};

export const galleryItems: GalleryItem[] = [
  {
    kind: "image",
    src: "/images/hero-poster.jpg",
    caption: { sr: "Naš bar uveče", en: "Our bar at night" },
  },
  {
    kind: "video",
    src: videos.latte,
    poster: "/images/barista.jpg",
    caption: { sr: "Iz ruku bariste", en: "From the barista's hands" },
  },
  {
    kind: "image",
    src: "/images/signature.jpg",
    tall: true,
    caption: { sr: "Kinder šejk — potpis kuće", en: "Kinder shake — the house signature" },
  },
  {
    kind: "image",
    src: "/images/step-01.jpg",
    tall: true,
    caption: { sr: "Baza, svako jutro", en: "The base, every morning" },
  },
  {
    kind: "image",
    src: "/images/interior.jpg",
    caption: { sr: "Tegle po kojima nosimo ime", en: "The jars we're named after" },
  },
  {
    kind: "video",
    src: videos.pour,
    poster: "/images/beans.jpg",
    caption: { sr: "Točeno, polako", en: "Poured, slowly" },
  },
  {
    kind: "image",
    src: "/images/step-03.jpg",
    tall: true,
    caption: { sr: "Čokoladna spirala", en: "The chocolate spiral" },
  },
  {
    kind: "image",
    src: "/images/barista.jpg",
    caption: { sr: "Rosetta od mleka", en: "A milk rosetta" },
  },
  {
    kind: "image",
    src: "/images/garden.jpg",
    caption: { sr: "Vrt — par stepeni hladniji", en: "The garden — a few degrees cooler" },
  },
  {
    kind: "image",
    src: "/images/step-04.jpg",
    tall: true,
    caption: { sr: "Kruna", en: "The crown" },
  },
  {
    kind: "image",
    src: "/images/beans.jpg",
    caption: { sr: "Sveže pržena", en: "Freshly roasted" },
  },
  {
    kind: "image",
    src: "/images/step-02.jpg",
    tall: true,
    caption: { sr: "Do kremaste svile", en: "To a creamy silk" },
  },
];

/** Compact set used for the home-page marquee strip. */
export const stripImages = [
  "/images/signature.jpg",
  "/images/barista.jpg",
  "/images/garden.jpg",
  "/images/interior.jpg",
  "/images/step-03.jpg",
  "/images/beans.jpg",
  "/images/step-01.jpg",
  "/images/hero-poster.jpg",
];
