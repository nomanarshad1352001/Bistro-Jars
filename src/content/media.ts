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
    src: px(36869502, 1600),
    tall: true,
    caption: { sr: "Classic Burger — Jokić meso", en: "Classic Burger — Jokić beef" },
  },
  {
    kind: "video",
    src: videos.latte,
    poster: img.barista,
    caption: { sr: "Iz ruku bariste", en: "From the barista's hands" },
  },
  {
    kind: "image",
    src: px(37305401, 1200),
    caption: { sr: "Pohovani sir — svakodnevni heroj", en: "Fried cheese — the everyday hero" },
  },
  {
    kind: "image",
    src: px(32469289, 1200),
    tall: true,
    caption: { sr: "Kinder Bueno — potpis u tegli", en: "Kinder Bueno — signature in a jar" },
  },
  {
    kind: "image",
    src: px(19938473, 1400),
    caption: { sr: "Caesar salata, piletina sa roštilja", en: "Caesar salad, grilled chicken" },
  },
  {
    kind: "video",
    src: videos.pour,
    poster: px(16523911, 1200),
    caption: { sr: "Espresso se toči, sporo", en: "Espresso, poured slow" },
  },
  {
    kind: "image",
    src: px(15913640, 1600),
    tall: true,
    caption: { sr: "Tortilja, savijena po porudžbini", en: "Tortilla, folded to order" },
  },
  {
    kind: "image",
    src: px(459489, 1400),
    caption: { sr: "Kapućino sa srcem", en: "Cappuccino with a heart" },
  },
  {
    kind: "image",
    src: px(29653191, 1200),
    tall: true,
    caption: { sr: "Crispy piletina sa sosom", en: "Crispy chicken with sauce" },
  },
  {
    kind: "image",
    src: px(18566888, 1200),
    caption: { sr: "Domaća kafa, iz džezve", en: "Turkish coffee, from the džezva" },
  },
  {
    kind: "image",
    src: px(7001005, 1400),
    caption: { sr: "Uvek rashlađeno", en: "Always ice cold" },
  },
  {
    kind: "image",
    src: px(29653160, 1400),
    caption: { sr: "Čizkejk — sezonski", en: "Cheesecake — seasonal" },
  },
];

/** Compact set used for the home-page marquee strip. */
export const stripImages = [
  px(36869502, 1200),
  px(32469289, 1200),
  px(459489, 1200),
  px(37305401, 1200),
  px(19938473, 1200),
  px(1239347, 1200),
  px(15913640, 1200),
  px(29653160, 1200),
];
