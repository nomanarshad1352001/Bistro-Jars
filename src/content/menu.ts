import type { Bilingual } from "./site";

export type MenuItem = {
  name: Bilingual;
  desc?: Bilingual;
  price: number;
  tag?: Bilingual;
};

export type MenuCategory = {
  id: string;
  label: Bilingual;
  sub?: Bilingual;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "kafa",
    label: { sr: "Kafa", en: "Coffee" },
    sub: {
      sr: "Sezonska mešavina, mljevena po porudžbini",
      en: "Seasonal blend, ground to order",
    },
    items: [
      {
        name: { sr: "Espresso", en: "Espresso" },
        desc: { sr: "jednostruk ili dupli, kućna mešavina", en: "single or double, house blend" },
        price: 250,
      },
      {
        name: { sr: "Domaća kafa", en: "Turkish coffee" },
        desc: { sr: "u džezvi, kako se ovde pije", en: "brewed in a džezva, the local way" },
        price: 220,
      },
      { name: { sr: "Nes kafa", en: "Nescafé" }, price: 230 },
      { name: { sr: "Espresso macchiato", en: "Espresso macchiato" }, price: 280 },
      {
        name: { sr: "Kapućino", en: "Cappuccino" },
        desc: { sr: "mleko na 60°, svilena pena", en: "milk at 60°, silk foam" },
        price: 320,
      },
      { name: { sr: "Kapućino sa pavlakom", en: "Cappuccino with cream" }, price: 350 },
      { name: { sr: "Caffe latte", en: "Caffè latte" }, price: 350 },
      {
        name: { sr: "Caffe latte vanila", en: "Vanilla caffè latte" },
        desc: { sr: "sa domaćim sirupom od vanile", en: "with house-made vanilla syrup" },
        price: 390,
      },
      { name: { sr: "Flat white", en: "Flat white" }, price: 380 },
      { name: { sr: "Moka", en: "Mocha" }, price: 420 },
      { name: { sr: "Topla čokolada", en: "Hot chocolate" }, price: 320 },
    ],
  },
  {
    id: "sejkovi",
    label: { sr: "Šejkovi", en: "Shakes" },
    sub: { sr: "Služeni u tegli, kako i dolikuje", en: "Served in a jar, as they should be" },
    items: [
      {
        name: { sr: "Kinder Bueno", en: "Kinder Bueno" },
        desc: {
          sr: "naš potpis — čokolada od lešnika, sladoled od vanile, Kinder Bueno kruna",
          en: "our signature — hazelnut chocolate, vanilla gelato, Kinder Bueno crown",
        },
        price: 590,
        tag: { sr: "Potpis kuće", en: "House signature" },
      },
      { name: { sr: "Nutella", en: "Nutella" }, price: 590 },
      { name: { sr: "Ferrero Rocher", en: "Ferrero Rocher" }, price: 620 },
      { name: { sr: "Oreo", en: "Oreo" }, price: 560 },
      { name: { sr: "Slana karamela", en: "Salted caramel" }, price: 560 },
      { name: { sr: "Vanila", en: "Vanilla" }, price: 490 },
      { name: { sr: "Čokolada", en: "Chocolate" }, price: 490 },
      { name: { sr: "Jagoda", en: "Strawberry" }, price: 520 },
    ],
  },
  {
    id: "hladno",
    label: { sr: "Hladno i sveže", en: "Cold & Fresh" },
    sub: { sr: "Za dane kad grad gori", en: "For the days when the city burns" },
    items: [
      {
        name: { sr: "Domaći ledeni čaj — kivi", en: "House iced tea — kiwi" },
        desc: { sr: "kuva se svako jutro", en: "brewed fresh every morning" },
        price: 350,
        tag: { sr: "Omiljen", en: "Guest favorite" },
      },
      { name: { sr: "Ledeni čaj — breskva", en: "Iced tea — peach" }, price: 320 },
      {
        name: { sr: "Limunada — nana i đumbir", en: "Lemonade — mint & ginger" },
        price: 340,
      },
      { name: { sr: "Espresso tonic", en: "Espresso tonic" }, price: 420 },
      { name: { sr: "Ledeni latte", en: "Iced latte" }, price: 420 },
      { name: { sr: "Frape", en: "Frappé" }, price: 380 },
      {
        name: { sr: "Sveže ceđena pomorandža", en: "Fresh-squeezed orange" },
        price: 380,
      },
    ],
  },
  {
    id: "dorucak",
    label: { sr: "Doručak i zalogaji", en: "Breakfast & Bites" },
    sub: { sr: "Dok traje — pravi se sveže", en: "While it lasts — made fresh" },
    items: [
      {
        name: { sr: "Sendvič No1 — piletina", en: "No1 sandwich — chicken" },
        desc: { sr: "fokača, pečena piletina, domaći preliv", en: "focaccia, roast chicken, house dressing" },
        price: 460,
        tag: { sr: "No1", en: "No1" },
      },
      { name: { sr: "Sendvič — pršuta", en: "Prosciutto sandwich" }, price: 520 },
      { name: { sr: "Klub sendvič", en: "Club sandwich" }, price: 540 },
      {
        name: { sr: "Granola sa jogurtom", en: "Granola with yogurt" },
        desc: { sr: "domaća granola, med, sezonsko voće", en: "house granola, honey, seasonal fruit" },
        price: 420,
      },
      { name: { sr: "Avokado tost", en: "Avocado toast" }, price: 590 },
      { name: { sr: "Kroasan", en: "Croissant" }, price: 260 },
      { name: { sr: "Punjeni kroasan", en: "Filled croissant" }, price: 340 },
    ],
  },
  {
    id: "slatko",
    label: { sr: "Slatko", en: "Sweet" },
    sub: { sr: "Za kraj — ili za početak", en: "For the end — or the start" },
    items: [
      {
        name: { sr: "Čizkejk", en: "Cheesecake" },
        desc: { sr: "menja se po sezoni", en: "changes with the season" },
        price: 480,
      },
      { name: { sr: "Brauni sa lešnikom", en: "Hazelnut brownie" }, price: 420 },
      { name: { sr: "Kolač dana", en: "Cake of the day" }, price: 390 },
    ],
  },
];
