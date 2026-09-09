import type { Bilingual } from "./site";

/**
 * All media is hotlinked from the free Pexels CDN (images.pexels.com /
 * videos.pexels.com) so the site deploys with code only — no binary files
 * required in the repo. License: free for commercial use, no attribution
 * required (see ASSETS.md for the source links).
 */

export const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const img = {
  heroPoster: px(5812847, 1920), // warm rustic coffee bar interior — Khoa Võ
  signature: px(32469289, 1000), // chocolate milkshake, whipped cream — Đan Thy Nguyễn Mai
  step01: px(7937406, 1000), // milk poured into coffee glass — Nicola Barts
  step02: px(30895440, 1000), // swirling blender vortex — Anderson Martins
  step03: px(17874586, 1000), // chocolate sauce poured into glass — Emre Akyol
  step04: px(16825488, 1000), // milkshake with whipped cream crown — Dextar Studio
  interior: px(37987695, 1600), // coffee bean jars with wooden lids — Andy Lee
  garden: px(8412054, 1920), // terrace at night with hanging lights — Zafer Erdoğan
  barista: px(302899, 1600), // barista pouring latte art — Chevanon Photography
  beans: px(19162213, 1600), // roasted beans on black surface — Moussa Idrissi
} as const;

export const videos = {
  hero: "https://videos.pexels.com/video-files/2909914/2909914-hd_2048_1080_24fps.mp4",
  latte: "https://videos.pexels.com/video-files/6769791/6769791-hd_1920_1080_24fps.mp4",
  pour: "https://videos.pexels.com/video-files/9422639/9422639-hd_1920_1080_30fps.mp4",
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
    src: img.heroPoster,
    caption: { sr: "Naš bar uveče", en: "Our bar at night" },
  },
  {
    kind: "video",
    src: videos.latte,
    poster: img.barista,
    caption: { sr: "Iz ruku bariste", en: "From the barista's hands" },
  },
  {
    kind: "image",
    src: img.signature,
    tall: true,
    caption: { sr: "Kinder šejk — potpis kuće", en: "Kinder shake — the house signature" },
  },
  {
    kind: "image",
    src: img.step01,
    tall: true,
    caption: { sr: "Baza, svako jutro", en: "The base, every morning" },
  },
  {
    kind: "image",
    src: img.interior,
    caption: { sr: "Tegle po kojima nosimo ime", en: "The jars we're named after" },
  },
  {
    kind: "video",
    src: videos.pour,
    poster: img.beans,
    caption: { sr: "Točeno, polako", en: "Poured, slowly" },
  },
  {
    kind: "image",
    src: img.step03,
    tall: true,
    caption: { sr: "Čokoladna spirala", en: "The chocolate spiral" },
  },
  {
    kind: "image",
    src: img.barista,
    caption: { sr: "Rosetta od mleka", en: "A milk rosetta" },
  },
  {
    kind: "image",
    src: img.garden,
    caption: { sr: "Vrt — par stepeni hladniji", en: "The garden — a few degrees cooler" },
  },
  {
    kind: "image",
    src: img.step04,
    tall: true,
    caption: { sr: "Kruna", en: "The crown" },
  },
  {
    kind: "image",
    src: img.beans,
    caption: { sr: "Sveže pržena", en: "Freshly roasted" },
  },
  {
    kind: "image",
    src: img.step02,
    tall: true,
    caption: { sr: "Do kremaste svile", en: "To a creamy silk" },
  },
];

/** Compact set used for the home-page marquee strip. */
export const stripImages = [
  img.signature,
  img.barista,
  img.garden,
  img.interior,
  img.step03,
  img.beans,
  img.step01,
  img.heroPoster,
];
