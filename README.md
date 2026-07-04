# Roséa — An Interactive Luxury Film

A MERN recreation of the Amul Kool scroll-driven experience, rebuilt for **Roséa**
(Rose Flavored Milk). Same scroll-scrubbed canvas mechanic as the reference, your
240-frame bottle rotation instead of the source clip, and copy/palette pulled
from your actual product photography.

```
rosea-kool-project/
├── client/   Vite + React + TypeScript + GSAP + Tailwind v4
└── server/   Express + MongoDB (Mongoose) — minimal, health-check focused
```

## How the hero animation works

- `public/frames/` holds your 240 `ezgif-frame-XXX.jpg` bottle rotation frames.
- `src/hooks/useFramePreloader.ts` preloads all 240 images and reports progress
  to the loader screen.
- `src/components/Hero.tsx` pins a full-viewport `<canvas>` inside a 300vh
  `.hero` section (`position: sticky`), and uses GSAP `ScrollTrigger` to scrub
  a `{ frame: 0 → 239 }` value as you scroll, drawing the matching frame to
  canvas on every update (cover-fit scaled, no letterboxing). The hero
  headline fades out over the first 30% of that scroll.
- Page scroll is locked until all 240 frames finish loading, so nobody scrolls
  into a half-loaded sequence.

## Getting started

### 1. Client

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173`.

### 2. Server

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Runs on `http://localhost:5000`. `MONGODB_URI` in `.env` is optional — the
server boots fine without it; `GET /api/health` will just report
`db.state: "disconnected"` until you point it at a local or Atlas MongoDB
instance.

```bash
curl http://localhost:5000/api/health
# { "status": "ok", "service": "rosea-kool-server", "db": { "attempted": true, "state": "disconnected" } }
```

## What's kept the same as the Amul reference

Section order, layout, the canvas scroll mechanic, GSAP scrub logic, and
hover/transition behavior are all ported 1:1. What changed: copy, palette,
brand name, and the frame sequence.

## What changed for Roséa

| | Amul Kool | Roséa |
|---|---|---|
| Palette | Saturated magenta `#E91E63` + gold | Muted blush `#e2a3ac` + deep mauve-rose `#8c4a56`, sampled from your actual bottle photo |
| Hero copy | "Amul Kool" / "The taste of India" | "Roséa" / "An Interactive Luxury Film" |
| Feature cards | Generic energy-drink framing | Grounded in your real label claims (real rose extract, no preservatives, no artificial flavors) |
| CTA band | "Beat the Heat, Keep Your Cool" | "Slow Down, Savor the Bloom" |
| Dark mode | Toggle-based | Removed — fixed luxury-pink theme, per your call |
| Frames | 210 JPGs | Your 240 JPGs |

## Notes / next steps

- The newsletter form and store-locator pincode search are UI-only (same as
  the original reference) — no backend wiring, per your scope choice. If you
  want either to actually save to MongoDB later, the server is already
  structured (`src/routes/`, `src/config/db.js`) to drop in a `Lead` or
  `StoreQuery` model and route in five minutes.
- Deploy `client/` to Vercel the same way as the reference. Deploy `server/`
  to Render with `MONGODB_URI` set as an environment variable there.
