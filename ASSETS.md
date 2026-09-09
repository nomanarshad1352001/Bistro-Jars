# Bistro & Jars — media assets

**The site hotlinks all media from the free Pexels CDN** (images.pexels.com and
videos.pexels.com). Nothing needs to be stored in the repo — the code deploys
to Vercel with full imagery out of the box. All URLs are defined in
`src/content/media.ts`.

License: Pexels content is free for commercial use, no attribution required.
Credits below are optional, listed for reference.

## Photos (10)

| Slot          | Pexels source                        | Author                |
| ------------- | ------------------------------------ | --------------------- |
| Hero poster   | pexels.com/photo/5812847             | Khoa Võ               |
| Signature     | pexels.com/photo/32469289            | Đan Thy Nguyễn Mai    |
| Step 1 — base | pexels.com/photo/7937406             | Nicola Barts          |
| Step 2 — blend| pexels.com/photo/30895440            | Anderson Martins      |
| Step 3 — spiral| pexels.com/photo/17874586           | Emre Akyol            |
| Step 4 — crown| pexels.com/photo/16825488            | Dextar Studio         |
| Interior jars | pexels.com/photo/37987695            | Andy Lee              |
| Garden        | pexels.com/photo/8412054             | Zafer Erdoğan         |
| Barista       | pexels.com/photo/302899              | Chevanon Photography  |
| Beans         | pexels.com/photo/19162213            | Moussa Idrissi        |

## Videos (3)

| Slot            | Pexels source             | Duration |
| --------------- | ------------------------- | -------- |
| Hero background | pexels.com/video/2909914  | 0:27     |
| Latte art loop  | pexels.com/video/6769791  | 0:45     |
| Coffee pour     | pexels.com/video/9422639  | 0:34     |

## Optional: self-hosting

AI-generated brand shots and web-optimized video copies also exist locally in
`public/images/` and `public/videos/`, and bundled as
`public/downloads/bistro-jars-assets.zip`. To switch from hotlinks to
self-hosting later, replace the URLs in `src/content/media.ts` with the local
paths (`/images/…`, `/videos/…`) — everything else stays the same.
