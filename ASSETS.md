# Bistro & Jars — media assets

Everything the site uses is bundled in this repository (no external hotlinks),
and mirrored in `public/downloads/bistro-jars-assets.zip` for quick download.

## Photos — `public/images/` (10 files, AI-generated for this brand)

| File                | Used in                                        |
| ------------------- | ---------------------------------------------- |
| `hero-poster.jpg`   | Hero video poster, gallery, OG image           |
| `signature.jpg`     | Menu header card, gallery, marquee strip       |
| `step-01.jpg`       | Signature story step 1 (base), gallery, strip  |
| `step-02.jpg`       | Signature story step 2 (blend), gallery        |
| `step-03.jpg`       | Signature story step 3 (spiral), gallery, strip|
| `step-04.jpg`       | Signature story step 4 (crown), gallery        |
| `barista.jpg`       | Craft chapter, gallery, strip, video poster    |
| `beans.jpg`         | Gallery, strip, video poster                   |
| `garden.jpg`        | Garden chapter, gallery, strip                 |
| `interior.jpg`      | Gallery, strip                                 |

Rights: generated exclusively for Bistro & Jars — free to use on this brand's
site and socials.

## Videos — `public/videos/` (3 files, web-optimized 1920w, ~6 MB total)

| File        | Used in                              | Minutes | Source (Pexels, free license) |
| ----------- | ------------------------------------ | ------- | ----------------------------- |
| `hero.mp4`  | Home hero background                 | 0:27    | pexels.com/video/2909914      |
| `latte.mp4` | Craft chapter card, gallery, lightbox| 0:45    | pexels.com/video/6769791      |
| `pour.mp4`  | Gallery, lightbox                    | 0:34    | pexels.com/video/9422639      |

License: all Pexels videos are free to use for commercial purposes, no
attribution required. Originals were re-encoded to 1920w H.264 (CRF 28,
faststart, muted) for fast mobile-first loading — the hero autoplays without
strangling bandwidth.

## Usage

Files in `public/` are served from the site root, e.g. `/images/signature.jpg`.
They deploy to Vercel automatically with the repository — nothing else to do.
