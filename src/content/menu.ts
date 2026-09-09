import type { Bilingual } from "./site";
import { px } from "./media";

export type MenuItem = {
  name: Bilingual;
  desc?: Bilingual;
  price: number;
  /** Crossed-out price for discounted items. */
  oldPrice?: number;
  tag?: Bilingual;
  /** Hotlinked product photo (Pexels CDN). */
  img?: string;
};

export type MenuCategory = {
  id: string;
  label: Bilingual;
  sub?: Bilingual;
  items: MenuItem[];
};

const fasting: Bilingual = { sr: "Posno", en: "Fasting" };
const signature: Bilingual = { sr: "Potpis kuće", en: "House signature" };
const P = (id: number) => px(id, 1080);

export const menu: MenuCategory[] = [
  {
    id: "mega",
    label: { sr: "Mega akcija", en: "Mega Deals" },
    sub: { sr: "Sniženo na određeno vreme", en: "Marked down for a limited time" },
    items: [
      {
        name: { sr: "Pohovani sir", en: "Fried cheese" },
        desc: { sr: "pohovani sir 240g, majonez, pomfrit 150g", en: "fried cheese 240g, mayonnaise, french fries 150g" },
        price: 890,
        img: P(37305401),
      },
      {
        name: { sr: "Pomfrit i čips", en: "French fries and chips" },
        desc: { sr: "pavlaka, kulen, šunka, jaje, sir, pomfrit 150g, kečap", en: "sour cream, kulen, ham, egg, cheese, french fries 150g, ketchup" },
        price: 690,
        oldPrice: 760,
        img: P(39034209),
      },
      {
        name: { sr: "Tuna tortilja", en: "Tuna tortilla" },
        desc: { sr: "posni majonez, iceberg, crveni luk, paradajz, tuna 170g, marinata, posni sos", en: "lean mayonnaise, iceberg, red onion, tomato, tuna 170g, marinade, lean sauce" },
        price: 880,
        oldPrice: 980,
        tag: fasting,
        img: P(18177326),
      },
      {
        name: { sr: "Crispy chicken tortilja", en: "Crispy chicken tortilla" },
        desc: { sr: "iceberg, paradajz, crispy pileći štapići 150g, sir, pomfrit 150g, sos", en: "iceberg, tomato, 150g crispy chicken sticks, cheese, french fries 150g, sauce" },
        price: 890,
        oldPrice: 980,
        img: P(15913640),
      },
      {
        name: { sr: "Caesar gorgonzola tortilja", en: "Caesar gorgonzola tortilla" },
        desc: { sr: "gorgonzola sos, iceberg, parmezan, panceta, pileći file 150g, marinata, pomfrit 150g, kečap", en: "gorgonzola sauce, iceberg, parmesan, pancetta, chicken fillet 150g, marinade, french fries 150g, ketchup" },
        price: 890,
        oldPrice: 980,
        img: P(5779364),
      },
      {
        name: { sr: "Classic Burger", en: "Classic Burger" },
        desc: { sr: "burger sos, iceberg, Jokić meso 150g, topljeni sir, pomfrit 150g", en: "burger sauce, iceberg, Jokić beef 150g, melted cheese, potatoes 150g" },
        price: 1160,
        oldPrice: 1280,
        img: P(36869502),
      },
      {
        name: { sr: "Daska kranjska", en: "Carniolan sausage board" },
        desc: { sr: "kranjska kobasica 300g, sos, pomfrit 150g", en: "Carniolan sausage 300g, sauce, potatoes 150g" },
        price: 990,
        oldPrice: 1190,
        img: P(27643041),
      },
    ],
  },
  {
    id: "dorucak",
    label: { sr: "Doručak", en: "Breakfast" },
    sub: { sr: "Svakog dana od 09:00", en: "Every day from 9 AM" },
    items: [
      {
        name: { sr: "Pomfrit i čips", en: "French fries and chips" },
        desc: { sr: "pavlaka, kulen, šunka, jaje, sir, pomfrit 150g, kečap", en: "sour cream, kulen, ham, egg, cheese, french fries 150g, ketchup" },
        price: 690,
        oldPrice: 760,
        img: P(39034209),
      },
      {
        name: { sr: "Omlet", en: "Omelette" },
        desc: { sr: "panceta, gauda, feta sir, čeri paradajz", en: "pancetta, gouda, feta cheese, cherry tomatoes" },
        price: 580,
        img: P(15352990),
      },
      {
        name: { sr: "Domaća", en: "Domestic" },
        desc: { sr: "3 kuvana jajeta, roštiljska slanina, topljeni sir, beli sir, čeri, pomfrit 150g, marinirani hleb", en: "3 hard-boiled eggs, grilled bacon, melted cheese, white cheese, cherries, french fries 150g, marinated bread" },
        price: 690,
        img: P(37930119),
      },
      {
        name: { sr: "Malo jača", en: "A little stronger" },
        desc: { sr: "2 kuvana jajeta, kranjska kobasica, 2 mozzarella štapića, čeri, beli preliv, senf, marinirani hleb", en: "2 hard-boiled eggs, Carniolan sausage, 2 mozzarella sticks, cherries, white dressing, mustard, marinated bread" },
        price: 740,
        img: P(15352992),
      },
    ],
  },
  {
    id: "sendvici",
    label: { sr: "Sendviči", en: "Sandwiches" },
    items: [
      {
        name: { sr: "Lu Lu sendvič", en: "Lu Lu sandwich" },
        desc: { sr: "zemička sa susamom, pavlaka, iceberg, paradajz, panceta, 3 jaja na oko, pomfrit 150g, kečap", en: "sesame bun, sour cream, iceberg, tomato, pancetta, 3 sunny-side-up eggs, french fries 150g, ketchup" },
        price: 790,
        img: P(1239347),
      },
      {
        name: { sr: "Bistro & Jars sendvič", en: "Bistro & Jars sandwich" },
        desc: { sr: "lepinja, pavlaka, sos, pečurke sa roštilja, dimljeni sir, šunka, gauda, pomfrit 150g", en: "flatbread, sour cream, sauce, grilled mushrooms, smoked cheese, ham, gouda, french fries 150g" },
        price: 795,
        tag: signature,
        img: P(34384842),
      },
    ],
  },
  {
    id: "tortilje",
    label: { sr: "Tortilje", en: "Tortillas" },
    items: [
      {
        name: { sr: "Tuna tortilja", en: "Tuna tortilla" },
        desc: { sr: "posni majonez, iceberg, crveni luk, paradajz, tuna 170g, marinata, posni sos", en: "lean mayonnaise, iceberg, red onion, tomato, tuna 170g, marinade, lean sauce" },
        price: 880,
        oldPrice: 980,
        tag: fasting,
        img: P(18177326),
      },
      {
        name: { sr: "Crispy chicken tortilja", en: "Crispy chicken tortilla" },
        desc: { sr: "iceberg, paradajz, crispy pileći štapići 150g, sir, pomfrit 150g, sos", en: "iceberg, tomato, 150g crispy chicken sticks, cheese, french fries 150g, sauce" },
        price: 890,
        oldPrice: 980,
        img: P(15913640),
      },
      {
        name: { sr: "Caesar gorgonzola tortilja", en: "Caesar gorgonzola tortilla" },
        desc: { sr: "gorgonzola sos, iceberg, parmezan, panceta, pileći file 150g, marinata, pomfrit 150g, kečap", en: "gorgonzola sauce, iceberg, parmesan, pancetta, chicken fillet 150g, marinade, french fries 150g, ketchup" },
        price: 890,
        oldPrice: 980,
        img: P(5779364),
      },
    ],
  },
  {
    id: "salate",
    label: { sr: "Obrok salate", en: "Salad Meals" },
    items: [
      {
        name: { sr: "Caesar salata", en: "Caesar salad" },
        desc: { sr: "iceberg, čeri paradajz, panceta, piletina 150g, dresing, parmezan", en: "iceberg, cherry tomatoes, pancetta, chicken 150g, dressing, parmesan" },
        price: 990,
        img: P(19938473),
      },
      {
        name: { sr: "Tuna salata", en: "Tuna salad" },
        desc: { sr: "posni majonez, iceberg, crveni luk, čeri paradajz, tuna 170g", en: "lean mayonnaise, iceberg, red onion, cherry tomatoes, tuna 170g" },
        price: 990,
        tag: fasting,
        img: P(35532838),
      },
    ],
  },
  {
    id: "burgeri",
    label: { sr: "Burgeri", en: "Burgers" },
    items: [
      {
        name: { sr: "Classic Burger", en: "Classic Burger" },
        desc: { sr: "burger sos, iceberg, Jokić meso 150g, topljeni sir, pomfrit 150g", en: "burger sauce, iceberg, Jokić beef 150g, melted cheese, potatoes 150g" },
        price: 1160,
        oldPrice: 1280,
        img: P(36869502),
      },
      {
        name: { sr: "Spicy Burger", en: "Spicy Burger" },
        desc: { sr: "Jokić meso 150g, dimljeni sir, BBQ sos, burger sos, iceberg, karamelizovani luk, pomfrit 150g", en: "Jokić beef 150g, smoked cheese, BBQ sauce, burger sauce, iceberg, caramelized onions, potatoes 150g" },
        price: 1195,
        img: P(17095325),
      },
    ],
  },
  {
    id: "daske",
    label: { sr: "Daske", en: "Boards" },
    items: [
      {
        name: { sr: "Daska kranjska", en: "Carniolan sausage board" },
        desc: { sr: "kranjska kobasica 300g, sos, pomfrit 150g", en: "Carniolan sausage 300g, sauce, potatoes 150g" },
        price: 990,
        oldPrice: 1190,
        img: P(27643041),
      },
      {
        name: { sr: "Daska crispy chicken", en: "Crispy chicken sticks board" },
        desc: { sr: "crispy piletina 200g, sos, pomfrit 150g", en: "crispy chicken 200g, sauce, potatoes 150g" },
        price: 1095,
        img: P(29653191),
      },
    ],
  },
  {
    id: "sir",
    label: { sr: "Sir", en: "Cheese" },
    items: [
      {
        name: { sr: "Pohovani sir", en: "Fried cheese" },
        desc: { sr: "pohovani sir 240g, majonez, pomfrit 150g", en: "fried cheese 240g, mayonnaise, french fries 150g" },
        price: 890,
        img: P(37305401),
      },
    ],
  },
  {
    id: "prilozi",
    label: { sr: "Prilozi i porcije", en: "Sides & Portions" },
    items: [
      { name: { sr: "Mozzarella štapići 200g", en: "Mozzarella sticks 200g" }, price: 840, img: P(10065187) },
      { name: { sr: "Pomfrit 200g", en: "French fries 200g" }, price: 390, img: P(13187610) },
      { name: { sr: "Povrće 200g", en: "Veggies 200g" }, price: 410, img: P(30225365) },
      { name: { sr: "Kringe od luka 200g", en: "Onion rings 200g" }, price: 420, img: P(10970330) },
    ],
  },
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
        img: P(16523911),
      },
      {
        name: { sr: "Domaća kafa", en: "Turkish coffee" },
        desc: { sr: "u džezvi, kako se ovde pije", en: "brewed in a džezva, the local way" },
        price: 220,
        img: P(18566888),
      },
      { name: { sr: "Nes kafa", en: "Nescafé" }, price: 230, img: P(5112659) },
      { name: { sr: "Espresso macchiato", en: "Espresso macchiato" }, price: 280, img: P(36192953) },
      {
        name: { sr: "Kapućino", en: "Cappuccino" },
        desc: { sr: "mleko na 60°, svilena pena", en: "milk at 60°, silk foam" },
        price: 320,
        img: P(459489),
      },
      { name: { sr: "Kapućino sa pavlakom", en: "Cappuccino with cream" }, price: 350, img: P(31139336) },
      { name: { sr: "Caffe latte", en: "Caffè latte" }, price: 350, img: P(17305195) },
      {
        name: { sr: "Caffe latte vanila", en: "Vanilla caffè latte" },
        desc: { sr: "sa domaćim sirupom od vanile", en: "with house-made vanilla syrup" },
        price: 390,
        img: P(31212160),
      },
      { name: { sr: "Flat white", en: "Flat white" }, price: 380, img: P(302899) },
      { name: { sr: "Moka", en: "Mocha" }, price: 420, img: P(34441699) },
      { name: { sr: "Topla čokolada", en: "Hot chocolate" }, price: 320, img: P(34508625) },
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
        tag: signature,
        img: P(32469289),
      },
      { name: { sr: "Nutella", en: "Nutella" }, price: 590, img: P(27626320) },
      { name: { sr: "Ferrero Rocher", en: "Ferrero Rocher" }, price: 620, img: P(16825482) },
      { name: { sr: "Oreo", en: "Oreo" }, price: 560, img: P(16825488) },
      { name: { sr: "Slana karamela", en: "Salted caramel" }, price: 560, img: P(16825489) },
      { name: { sr: "Vanila", en: "Vanilla" }, price: 490, img: P(22222985) },
      { name: { sr: "Čokolada", en: "Chocolate" }, price: 490, img: P(8753649) },
      { name: { sr: "Jagoda", en: "Strawberry" }, price: 520, img: P(11410542) },
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
        img: P(34040947),
      },
      { name: { sr: "Ledeni čaj — breskva", en: "Iced tea — peach" }, price: 320, img: P(20240640) },
      {
        name: { sr: "Limunada — nana i đumbir", en: "Lemonade — mint & ginger" },
        price: 340,
        img: P(33840581),
      },
      { name: { sr: "Espresso tonic", en: "Espresso tonic" }, price: 420, img: P(4113667) },
      { name: { sr: "Ledeni latte", en: "Iced latte" }, price: 420, img: P(19834042) },
      { name: { sr: "Frape", en: "Frappé" }, price: 380, img: P(6897909) },
      {
        name: { sr: "Sveže ceđena pomorandža", en: "Fresh-squeezed orange" },
        price: 380,
        img: P(11009217),
      },
    ],
  },
  {
    id: "pica",
    label: { sr: "Pića", en: "Soft Drinks" },
    sub: { sr: "Uvek rashlađeno", en: "Always ice cold" },
    items: [
      { name: { sr: "Coca-Cola limenka 0.33L", en: "Coca-Cola can 0.33L" }, price: 210, img: P(7001005) },
      { name: { sr: "Next sokovi", en: "Next juices" }, price: 210, img: P(16142274) },
      { name: { sr: "Rosa negazirana 0.33L", en: "Rosa still water 0.33L" }, price: 190, img: P(8113351) },
      { name: { sr: "Rosa gazirana 0.33L", en: "Rosa sparkling water 0.33L" }, price: 190, img: P(31107435) },
      { name: { sr: "Ultra energy limenka", en: "Ultra energy can" }, price: 210, img: P(17423276) },
      { name: { sr: "Fuzetea ledeni čaj 0.25L", en: "Fuzetea iced tea 0.25L" }, price: 210, img: P(10883347) },
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
        img: P(29653160),
      },
      { name: { sr: "Brauni sa lešnikom", en: "Hazelnut brownie" }, price: 420, img: P(4051730) },
      { name: { sr: "Kolač dana", en: "Cake of the day" }, price: 390, img: P(28377761) },
    ],
  },
];
