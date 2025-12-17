## Forever Flexible Yoga – Next.js Site

This is a custom [Next.js](https://nextjs.org) website for a yoga teacher offering Hatha, Ashtanga-inspired, and Yin classes, inspired by the existing online studio on [Forever Flexible (Teachable)](https://foreverflexible.teachable.com).

The site is built with:

- Next.js (App Router, TypeScript)
- Tailwind CSS
- `next/image` with remote images (Pexels) for the default gallery

## Getting started

From the project root:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Where to edit content

Most of the visible content lives in:

- `src/app/page.tsx` – hero, yoga services, About, Schedule & Pricing, gallery, video, and contact/footer.
- `src/app/layout.tsx` – site-wide metadata (title and description).

Update these sections with your real details:

- **Teacher bio & experience** – in the `About your teacher` section.
- **Schedule & pricing** – in the Schedule table and pricing list.
- **Contact / booking** – update the `mailto:` email and any booking links.
- **Video** – replace the YouTube `src` URL in the `iframe` with your own video.
- **Images** – either:
  - Keep using the default Pexels images, or
  - Replace them with your own hosted images and, if needed, add their domains to `images.remotePatterns` in `next.config.ts`.

## Adding Pilates and other offerings later

When you’re ready to add Pilates or other services:

- Extend the **Services** section with a new card for Pilates.
- Add new **schedule rows** and pricing options for Pilates.
- Optionally add separate pages or sections (e.g. `/pilates`) if you want more detail.

## Deployment

This app can be deployed to any platform that supports Next.js (e.g. Vercel, Netlify, or your own server). Follow that platform’s Next.js deployment guide and build with:

```bash
npm run build
```
