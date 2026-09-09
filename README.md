# Bistro & Jars — website

Premium, story-led site for the Bistro & Jars coffee bar (Pariske komune 59, Novi Beograd).
Bilingual (SR/EN), dark editorial design, scroll-driven storytelling, WhatsApp-first contact.

## Stack

- **Next.js (App Router)** + React 19, **Tailwind CSS v4**
- **GSAP + ScrollTrigger** for scroll-driven animation (pinned signature-shake story,
  word-by-word manifesto, parallax chapters, reveals)
- **Drizzle ORM + PostgreSQL** — inquiry archive (`inquiries` table)
- **WhatsApp Business Cloud API** — form submissions are delivered straight to the bar's WhatsApp

## Pages

| Route      | Purpose                                                        |
| ---------- | -------------------------------------------------------------- |
| `/`        | Home: video hero, manifesto, craft, signature story, garden, reviews, visit |
| `/menu`    | Full menu — the landing page for the printed QR code           |
| `/gallery` | Photo/video masonry with lightbox                              |
| `/contact` | Info + inquiry/reservation form → WhatsApp                     |
| `/privacy` | Privacy policy (SR/EN)                                         |

## Editing content

- **All copy (SR/EN)** lives in `src/content/dictionary.ts`.
- **Menu items & prices** live in `src/content/menu.ts`.
- **Address, hours, phone, links** live in `src/content/site.ts`.
- **Gallery items & videos** live in `src/content/media.ts` — all media is
  hotlinked from the free Pexels CDN, so no binary assets are required in the
  repo; swap URLs there to change any photo or video (see `ASSETS.md`).

## Language

The SR/EN toggle is client-side (no separate URLs); the choice persists in
`localStorage` under `bj-lang`. Serbian is the default.

## WhatsApp integration

`POST /api/inquiry` validates the payload, stores it in Postgres, and sends it to the
bar's WhatsApp via the Cloud API when `WHATSAPP_ACCESS_TOKEN` + `WHATSAPP_PHONE_NUMBER_ID`
are configured (see `.env.example`). Without them, the API responds with a `wa.me`
deep link and the UI offers an "Open WhatsApp" hand-off with the message pre-filled.

## Development

```bash
npm install
npx drizzle-kit push   # create tables
npm run dev
```
