# Roséa — Rose Flavored Milk

A scroll-driven, animated brand site for Roséa, built with Vite + React +
TypeScript + Tailwind CSS v4 + GSAP. Originally modeled on the Amul Kool
scroll-canvas technique, then fully rebuilt around Roséa's own product
photography, palette, and copy.

This is a **frontend-only** project — no backend. The newsletter signup and
store-locator pincode search are UI-only, same as the original reference.

## Getting started

```bash
npm install
npm run dev
```

Runs on `http://localhost:5173`.

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Structure

```
├── public/frames/         240 bottle-rotation JPGs used by the hero canvas
├── src/
│   ├── components/        Navbar, Hero, Features, Stats, Ingredients,
│   │                      Gallery, MarqueeTicker, Refreshment,
│   │                      StoreLocator, Footer, plus small reusable
│   │                      pieces: ScrollReveal, Parallax, TiltCard,
│   │                      CountUp, FloatingPetals, Loader
│   ├── hooks/
│   │   └── useFramePreloader.ts   preloads the 240 frames, reports progress
│   ├── index.css          theme tokens, animations, global styles
│   ├── App.tsx
│   └── main.tsx
```

## How the hero animation works

- `.hero` is a 300vh wrapper; `.canvas-container` inside it is
  `position: sticky` and pins a full-viewport `<canvas>` while you scroll
  through that 300vh.
- All 240 frames preload up front (with a loader + progress bar); page
  scroll is locked until they're ready.
- GSAP `ScrollTrigger` scrubs a `{ frame: 0 → 239 }` value against scroll
  position, drawing the matching frame to canvas on every update
  (cover-fit scaled, no letterboxing). The headline fades out over the
  first 30% of that scroll, the scroll-down cue fades even faster.

## Design system

- Palette sampled directly from the actual product photography (not a
  generic rose-pink): deep mauve-rose `#8c4a56`, blush `#e2a3ac`, rose-gold
  `#b8846f`, warm ivory background.
- Playfair Display (headings) + Inter (body).
- All animation/motion lives in `index.css` (keyframes) and a handful of
  small reusable components (`ScrollReveal` for one-time scroll-in
  reveals, `Parallax` for continuous scroll-linked drift, `TiltCard` for
  mouse-tracking 3D tilt, `CountUp` for animated numbers).

## Deploying

Static site — deploy `dist/` (after `npm run build`) anywhere that serves
static files: Vercel, Netlify, GitHub Pages, Render static sites, etc.
