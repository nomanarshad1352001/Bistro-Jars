import { img } from "./media";

/**
 * All bilingual (Serbian Latin / English) copy for the site.
 * `en` defines the shape; `sr` mirrors it.
 */

const en = {
  nav: {
    home: "Home",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    reserve: "Reserve",
    open: "Open menu",
    close: "Close",
  },
  hero: {
    eyebrow: "Coffee bar — New Belgrade",
    tagline: "Coffee, signature shakes and slow mornings at Pariske komune 59.",
    ctaMenu: "View the menu",
    ctaStory: "Our story",
    scroll: "Scroll",
  },
  manifesto: {
    kicker: "Manifesto",
    text: "We believe a coffee bar can be a small ritual. Beans ground to order, milk stretched to silk, shakes layered like desserts, and a garden that stays a few degrees cooler than the city. No hurry, no noise — just craft, poured into a jar.",
  },
  craft: {
    kicker: "01 — The Craft",
    title: "It starts with the bean",
    body: "We pick our espresso blend seasonally, from local roasteries we know by name. Every cup is ground, dosed and extracted from scratch — no shortcuts. Milk is steamed to exactly 60 degrees, which is why the cappuccino keeps that silk texture you remember. And when the day asks for something colder, there are house iced teas, espresso tonics and frappés.",
    cta: "Explore the menu",
    videoCaption: "Close-up, our bar",
  },
  signature: {
    kicker: "02 — The Signature",
    title: "How the Kinder shake is made",
    body: "Our most ordered jar, built in four moves. Watch it come together as you scroll.",
    steps: [
      {
        title: "The base",
        text: "Chilled milk, one scoop of vanilla gelato, and a ratio we recalibrate every single morning.",
        img: img.step01,
      },
      {
        title: "The blend",
        text: "Short and strong, to a creamy silk — never a second longer, so it stays dense and cold.",
        img: img.step02,
      },
      {
        title: "The spiral",
        text: "The jar is glazed with warm hazelnut chocolate, spiral by spiral, edge to edge.",
        img: img.step03,
      },
      {
        title: "The crown",
        text: "Whipped cream, Kinder Bueno, cocoa in the air. Served immediately. Always.",
        img: img.step04,
      },
    ],
    outro: "Taste it in person — Pariske komune 59.",
    cta: "Book a table",
  },
  strip: {
    heading: "From the jars",
    cta: "Open the gallery",
  },
  garden: {
    kicker: "03 — The Garden",
    title: "Always a few degrees cooler",
    body: "Behind the bar hides the garden — shade under the leaves in summer, string lights and heaters in winter. Come for a first coffee while the neighbourhood wakes up, or an evening shake once the lamps glow. This is where slow mornings turn into long afternoons.",
    cta: "Plan your visit",
  },
  reviews: {
    kicker: "Word of mouth",
    title: "What our guests say",
    basedOn: "Google rating · 96 reviews",
    cta: "Read all reviews",
    items: [
      {
        name: "Boško P.",
        tag: "Local Guide",
        text: "Beautifully decorated, excellent coffee and breakfast, and most importantly the service is outstanding — the guys really know what to recommend. All praise!",
      },
      {
        name: "Milena V.",
        tag: "Guest",
        text: "The Kinder shake. You can order it with soy milk as well. Delicious and original.",
      },
      {
        name: "A. Savina",
        tag: "Guest",
        text: "Wonderful place, pleasant interior, fast and friendly service, and a view of the cute garden. Large portions, fresh ingredients — we've come back for breakfast twice already.",
      },
      {
        name: "Jovan S.",
        tag: "Regular",
        text: "These people are incredible. I come here to rest, mentally and physically. Thank you.",
      },
      {
        name: "Anastasija F.",
        tag: "Guest",
        text: "All praise! Gorgeous ambiance, and the staff is always smiling and kind.",
      },
      {
        name: "Saša B.",
        tag: "Local Guide",
        text: "A really lovely place! The staff is exceptionally friendly and the coffee is great.",
      },
    ],
  },
  visit: {
    kicker: "04 — The Visit",
    title: "Come for the first coffee",
    note: "You'll find us in the heart of New Belgrade — five minutes from Ušće, and always one jar involved.",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    ctaReserve: "Reserve via WhatsApp",
    ctaDirections: "Get directions",
    waText: "Hi! I'd like to book a table at Bistro & Jars.",
  },
  footer: {
    tagline: "Coffee, shakes and slow mornings.",
    pages: "Pages",
    contact: "Contact",
    visit: "Visit",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
  },
  menuPage: {
    kicker: "Bistro & Jars",
    title: "The Menu",
    sub: "Welcome — you've probably scanned the QR code at your table.",
    vat: "All prices are in Serbian dinars (RSD), VAT included.",
    soy: "Every shake can be made with soy or oat milk (+40 RSD).",
    order: "To order, just wave — or message us.",
    promoDeal: "Mega deal: −400 RSD off orders over 1,000 RSD",
    promoDelivery: "Free delivery for your first 14 days",
    megaTag: "Mega deal",
    searchPh: "Search the menu — e.g. burger, tuna, fries…",
    searchLabel: "Search the menu",
    noResults: "Nothing under that name. Ask the staff — we might have it off-menu.",
  },
  galleryPage: {
    kicker: "Gallery",
    title: "Frames from the bar",
    sub: "Jars, steam and the garden — the way our camera sees them.",
    videoTag: "Video",
    close: "Close",
  },
  contactPage: {
    kicker: "Contact",
    title: "Message us on WhatsApp",
    sub: "An inquiry or a reservation — your message goes straight to our WhatsApp, and we answer fast.",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    phoneLabel: "Phone",
    followLabel: "Follow us",
    direct: "Or write to us directly:",
    form: {
      typeInquiry: "Inquiry",
      typeReservation: "Reservation",
      name: "Full name",
      namePh: "e.g. Milica Jovanović",
      contact: "Phone or email",
      contactPh: "+381 … or you@email.com",
      date: "Date",
      time: "Time",
      guests: "Guests",
      guestsSuffix: "people",
      message: "Message",
      messagePh: "Tell us what you need…",
      submit: "Send via WhatsApp",
      sending: "Sending…",
      successTitle: "Your message is in the jar",
      successSent:
        "It's already in our WhatsApp — we'll get back to you as soon as we look up from the bar.",
      successFallback:
        "One more tap: open WhatsApp and hit send, and your message lands right on our bar.",
      openWhats: "Open WhatsApp",
      again: "Write another message",
      errRequired: "Required",
      errContact: "Enter a valid phone or email",
      errGeneric: "Something didn't send — try again, or message us directly.",
    },
  },
  privacy: {
    kicker: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: January 2025",
    sections: [
      {
        h: "Who we are",
        p: [
          "Bistro & Jars is a coffee bar located at Pariske komune 59, 11070 Belgrade, Serbia. This policy explains what happens to the personal data you share with us through this website — nothing more, nothing less.",
        ],
      },
      {
        h: "What we collect",
        p: [
          "When you send an inquiry or a reservation request, we collect the details you type into the form: your name, your contact (phone number or email), reservation details (date, time, number of guests) and the content of your message.",
          "We do not use advertising trackers, analytics cookies or any third-party profiling. The only thing stored in your browser is your language preference (Serbian or English), saved in local storage so the site remembers you.",
        ],
      },
      {
        h: "How your message travels",
        p: [
          "Form submissions are delivered to our team's WhatsApp via the WhatsApp Business Platform (Cloud API) operated by Meta Platforms, Inc. Your message content therefore passes through Meta's servers in order to reach us, subject to Meta's own privacy terms.",
          "A copy of each inquiry is also stored in our secure database so we can follow up if a message is ever missed.",
        ],
      },
      {
        h: "What we use it for",
        p: [
          "Only to answer you: confirming a table, replying to a question, or calling you back. We do not send marketing messages, we do not sell or share your data with anyone else, and we never will.",
        ],
      },
      {
        h: "How long we keep it",
        p: [
          "Inquiry records are kept for up to 12 months, after which they are deleted. You can ask us to delete yours at any time — a single message is enough.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "Under Serbia's Law on Personal Data Protection (and the GDPR principles we follow voluntarily), you may request access to, correction of, or deletion of your data, or object to its processing. To exercise any of these rights, contact us via WhatsApp or in person at the bar — we respond within 30 days, usually much faster.",
        ],
      },
    ],
  },
  common: {
    skip: "Skip to content",
    whatsappLabel: "Chat with us on WhatsApp",
  },
};

export type Dict = typeof en;

const sr: Dict = {
  nav: {
    home: "Početna",
    menu: "Meni",
    gallery: "Galerija",
    contact: "Kontakt",
    reserve: "Rezerviši",
    open: "Otvori meni",
    close: "Zatvori",
  },
  hero: {
    eyebrow: "Kafić — Novi Beograd",
    tagline: "Kafa, potpis šejkovi i spora jutra — Pariske komune 59.",
    ctaMenu: "Pogledaj meni",
    ctaStory: "Naša priča",
    scroll: "Skroluj",
  },
  manifesto: {
    kicker: "Manifest",
    text: "Verujemo da kafić može da bude mali ritual. Zrno se melje po porudžbini, mleko se peni do svile, šejkovi se slažu kao deserti, a vrt je uvek par stepeni hladniji od grada. Bez žurbe, bez buke — samo zanat, natočen u teglu.",
  },
  craft: {
    kicker: "01 — Zanat",
    title: "Sve počinje od zrna",
    body: "Espresso mešavinu biramo sezonski, od domaćih pržionica koje znamo po imenu. Svaka šolja se melje, dozira i ekstrahuje od nule — bez prečica. Mleko penimo na tačno 60 stepeni, pa kapućino zadrži onu gustinu svile koja se pamti. A kada dan traži nešto hladnije, tu su domaći ledeni čajevi, espresso tonici i frapei.",
    cta: "Istraži meni",
    videoCaption: "Uži kadar, naš bar",
  },
  signature: {
    kicker: "02 — Potpis",
    title: "Kako nastaje Kinder šejk",
    body: "Naša najtraženija tegla, sastavljena od četiri poteza. Gledaj kako nastaje dok skroluješ.",
    steps: [
      {
        title: "Baza",
        text: "Ohlađeno mleko, kugla sladoleda od vanile i odnos koji kalibriramo svakog jutra.",
        img: img.step01,
      },
      {
        title: "Blend",
        text: "Kratko i jako, do kremaste svile — ni sekunde duže, da ostane gust i hladan.",
        img: img.step02,
      },
      {
        title: "Spirala",
        text: "Teglu oblažemo toplom čokoladom od lešnika, spiralu po spiralu, od ivice do ivice.",
        img: img.step03,
      },
      {
        title: "Kruna",
        text: "Šlag, Kinder Bueno, kakao u vazduhu. Servira se odmah. Uvek.",
        img: img.step04,
      },
    ],
    outro: "Probaj ga uživo — Pariske komune 59.",
    cta: "Rezerviši sto",
  },
  strip: {
    heading: "Iz tegli",
    cta: "Otvori galeriju",
  },
  garden: {
    kicker: "03 — Vrt",
    title: "Uvek par stepeni hladniji",
    body: "Iza bara se krije vrt — leti hlad pod lišćem, zimi lampioni i grejalice. Dođi na prvu kafu dok se kraj budi, ili na večernji šejk kad se svetla upale. Ovde spora jutra prelaze u duga popodneva.",
    cta: "Planiraj posetu",
  },
  reviews: {
    kicker: "Glas gostiju",
    title: "Šta kažu naši gosti",
    basedOn: "Google ocena · 96 recenzija",
    cta: "Pročitaj sve recenzije",
    items: [
      {
        name: "Boško P.",
        tag: "Lokalni vodič",
        text: "Mesto je prelepo uređeno, kafa i doručak odlični, a što je najvažnije — usluga je izvanredna. Momci su ljubazni i znaju šta da preporuče. Sve preporuke!",
      },
      {
        name: "Milena V.",
        tag: "Gost",
        text: "Kinder šejk. Moguće je naručiti i sa sojinim mlekom. Preukusno i originalno.",
      },
      {
        name: "A. Savina",
        tag: "Gost",
        text: "Divno mesto, prijatan enterijer, brza i ljubazna usluga i pogled na sladak vrt. Porcije su velike, namirnice sveže — već smo se dva puta vratili na doručak.",
      },
      {
        name: "Jovan S.",
        tag: "Stalni gost",
        text: "Ovi ljudi su neverovatni. Dolazim ovde da se odmorim i duševno i fizički. Hvala.",
      },
      {
        name: "Anastasija F.",
        tag: "Gost",
        text: "Sve pohvale! Prelep ambijent, osoblje uvek nasmejano i ljubazno.",
      },
      {
        name: "Saša B.",
        tag: "Lokalni vodič",
        text: "Vrlo lepo mesto! Osoblje je izuzetno ljubazno, a kafa je odlična.",
      },
    ],
  },
  visit: {
    kicker: "04 — Poseta",
    title: "Dođi na prvu kafu",
    note: "Nalazimo se u srcu Novog Beograda — pet minuta od Ušća, i uvek uz neku teglu.",
    addressLabel: "Adresa",
    hoursLabel: "Radno vreme",
    ctaReserve: "Rezerviši preko WhatsApp-a",
    ctaDirections: "Kako do nas",
    waText: "Zdravo! Želeo bih da rezervišem sto u Bistro & Jars.",
  },
  footer: {
    tagline: "Kafa, šejkovi i spora jutra.",
    pages: "Stranice",
    contact: "Kontakt",
    visit: "Poseta",
    privacy: "Politika privatnosti",
    rights: "Sva prava zadržana.",
  },
  menuPage: {
    kicker: "Bistro & Jars",
    title: "Meni",
    sub: "Dobrodošli — verovatno ste skenirali QR kod kod svog stola.",
    vat: "Sve cene su u dinarima (RSD) i uključuju PDV.",
    soy: "Svaki šejk može i sa sojinim ili ovsenim mlekom (+40 RSD).",
    order: "Za porudžbinu samo mahnite — ili nam pišite.",
    promoDeal: "Mega akcija: −400 RSD na porudžbine preko 1.000 RSD",
    promoDelivery: "Besplatna dostava prvih 14 dana",
    megaTag: "Mega akcija",
    searchPh: "Pretraži meni — npr. burger, tuna, pomfrit…",
    searchLabel: "Pretraga menija",
    noResults: "Ništa pod tim imenom. Pitajte osoblje — možda imamo van menija.",
  },
  galleryPage: {
    kicker: "Galerija",
    title: "Kadrovi iz lokala",
    sub: "Tegle, para i vrt — onako kako ih kamera vidi.",
    videoTag: "Video",
    close: "Zatvori",
  },
  contactPage: {
    kicker: "Kontakt",
    title: "Pišite nam na WhatsApp",
    sub: "Upit ili rezervacija — poruka ide direktno u naš WhatsApp, a mi odgovaramo brzo.",
    addressLabel: "Adresa",
    hoursLabel: "Radno vreme",
    phoneLabel: "Telefon",
    followLabel: "Pratite nas",
    direct: "Ili nam pišite direktno:",
    form: {
      typeInquiry: "Upit",
      typeReservation: "Rezervacija",
      name: "Ime i prezime",
      namePh: "npr. Milica Jovanović",
      contact: "Telefon ili e-mail",
      contactPh: "+381 … ili ime@email.com",
      date: "Datum",
      time: "Vreme",
      guests: "Osoba",
      guestsSuffix: "osobe",
      message: "Poruka",
      messagePh: "Recite nam šta vam treba…",
      submit: "Pošalji na WhatsApp",
      sending: "Šaljemo…",
      successTitle: "Poruka je u tegli",
      successSent:
        "Već je stigla u naš WhatsApp — javljamo se čim podignemo pogled sa bara.",
      successFallback:
        "Još jedan dodir: otvorite WhatsApp i pritisnite pošalji — poruka sleti pravo na naš bar.",
      openWhats: "Otvori WhatsApp",
      again: "Nova poruka",
      errRequired: "Obavezno polje",
      errContact: "Unesite ispravan telefon ili e-mail",
      errGeneric: "Slanje nije uspelo — pokušajte ponovo ili nam pišite direktno.",
    },
  },
  privacy: {
    kicker: "Pravno",
    title: "Politika privatnosti",
    updated: "Poslednje ažuriranje: januar 2025.",
    sections: [
      {
        h: "Ko smo",
        p: [
          "Bistro & Jars je kafić u Pariske komune 59, 11070 Beograd, Srbija. Ova politika objašnjava šta se dešava sa ličnim podacima koje nam poverite preko ovog sajta — ništa više, ništa manje.",
        ],
      },
      {
        h: "Šta prikupljamo",
        p: [
          "Kada pošaljete upit ili rezervaciju, čuvamo podatke koje upišete u formu: ime i prezime, kontakt (broj telefona ili e-mail), detalje rezervacije (datum, vreme, broj osoba) i sadržaj poruke.",
          "Ne koristimo reklamne tragače, analitičke kolačiće niti bilo kakvo profilisanje. Jedina stvar koja se čuva u vašem pretraživaču je izbor jezika (srpski ili engleski), sačuvan u lokalnoj memoriji da vas sajt zapamti.",
        ],
      },
      {
        h: "Kako poruka putuje",
        p: [
          "Poruke iz forme stižu našem timu na WhatsApp preko WhatsApp Business Platforme (Cloud API) koju upravlja Meta Platforms, Inc. Sadržaj poruke zato prolazi kroz Meta servere kako bi do nas stigao, pod uslovima Meta politike privatnosti.",
          "Kopija svakog upita čuva se i u našoj bezbednoj bazi podataka, za slučaj da poruka negde zapne.",
        ],
      },
      {
        h: "Čemu podatke koristimo",
        p: [
          "Isključivo da vam odgovorimo: da potvrdimo sto, odgovorimo na pitanje ili vas nazovemo. Ne šaljemo marketinške poruke, podatke ne prodajemo i nikome ih ne prosleđujemo — i nećemo.",
        ],
      },
      {
        h: "Koliko dugo ih čuvamo",
        p: [
          "Upite čuvamo najduže 12 meseci, nakon čega se brišu. Svoje podatke možete tražiti da obrišemo u bilo kom trenutku — dovoljna je jedna poruka.",
        ],
      },
      {
        h: "Vaša prava",
        p: [
          "Po Zakonu o zaštiti podataka o ličnosti Republike Srbije (i GDPR principima koje dobrovoljno poštujemo) imate pravo na uvid, ispravku ili brisanje svojih podataka, kao i prigovor na obradu. Za bilo koje od ovih prava pišite nam na WhatsApp ili nas pitajte uživo kod bara — odgovaramo u roku od 30 dana, obično mnogo brže.",
        ],
      },
    ],
  },
  common: {
    skip: "Preskoči na sadržaj",
    whatsappLabel: "Ćaskajte s nama na WhatsApp",
  },
};

export const dict: Record<"en" | "sr", Dict> = { en, sr };
