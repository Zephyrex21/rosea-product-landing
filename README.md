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
│   ├── components/        Navbar (with mobile menu), Hero, Features, Stats,
│   │                      Ingredients, NutritionFacts, Gallery,
│   │                      MarqueeTicker, Refreshment, FAQ, StoreLocator,
│   │                      Footer, plus small reusable pieces: ScrollReveal,
│   │                      Parallax, TiltCard, CountUp, FloatingPetals,
│   │                      Loader
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

## Performance

A few real optimizations, each verified rather than assumed:

- **Icons**: swapped the Material Icons web font (which ships thousands of
  glyphs to use ~13) for hand-drawn inline SVGs in `Icon.tsx` — removes an
  entire external font dependency.
- **Fonts**: Google Fonts now load via `<link rel="preconnect">` +
  `<link rel="stylesheet">` in `index.html` instead of a CSS `@import`,
  which was forcing a serial network round-trip before the rest of the
  stylesheet could even be parsed.
- **Code-splitting**: everything below the Hero (`Features` through
  `Footer`) is loaded via `React.lazy` — none of it is reachable until a
  visitor scrolls through 300vh of hero anyway, so it doesn't need to be
  in the initial bundle. Cut the main JS chunk from ~346KB to ~319KB raw,
  and now streams in 10 small chunks (1–5KB each) in the background while
  someone's still scrolling the hero.
- **Lazy image loading**: Gallery and Ingredients photos use
  `loading="lazy"` so they don't compete with the hero's 240-frame
  preload for bandwidth.
- **Preload hint**: the very first hero frame gets `fetchpriority="high"`
  so it starts downloading before JS even runs.
- **Contrast fix**: darkened the muted text color after actually measuring
  it against every background it sits on — it was failing WCAG AA by a
  hair (4.42:1, needs 4.5:1) on one section.

**What I tried and reverted:** converting the 240 JPG frames to WebP.
Measured it directly — for this specific image set, WebP came out *larger*
than the source JPGs at every quality level tested (this can happen with
certain fine-grain/noise textures). Kept the JPGs rather than trade
quality or size for a change that doesn't actually help.

## Deploying

Static site — deploy `dist/` (after `npm run build`) anywhere that serves
static files: Vercel, Netlify, GitHub Pages, Render static sites, etc.

**One thing to update after you deploy:** `index.html` has `og:image` and
`twitter:image` set to `/og-image.jpg` (a relative path). Social platforms
require an absolute URL to render link previews correctly, so once you
have a live domain, change those to
`https://your-actual-domain.com/og-image.jpg`.
