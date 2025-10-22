# Armand Blin — Portfolio

[![Deploy to GitHub Pages](https://github.com/aygoun/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/aygoun/portfolio/actions/workflows/deploy.yml)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=github)

A minimal, modern, and fast portfolio site for ML research and engineering work. Built with Next.js App Router, Tailwind v4, and subtle Framer Motion animations. The content is data‑driven to make additions (education, projects, experience, hackathons) trivial.

> Visual style is inspired by the clean editorial feel of Adaptive ML’s blog ([source](https://www.adaptive-ml.com/blog?category=Research)).

---

## Demo

- GitHub Pages (after first deploy): `https://<your-username>.github.io/portfolio/`
- Local: `npm run dev` → open `http://localhost:3000`

---

## Features

- Clean, Apple‑like lists with separators; no heavy cards
- Responsive sticky header with centered navigation and icon links (GitHub, LinkedIn, CV)
- Reusable sections: Hero, Education, Projects, Experience, Hackathons
- Data‑first content from `data/` — no code changes for adding new items
- Subtle animations using Framer Motion
- Ready for GitHub Pages static export

---

## Getting Started

Prereqs: Node 20+

```bash
npm install
npm run dev
```

Build (SSR dev preview):

```bash
npm run build
```

Static Export for GitHub Pages:

```bash
npm run export
# output goes to ./out
```

---

## Deploy to GitHub Pages

This repo includes a ready‑to‑use workflow at `.github/workflows/deploy.yml`.

1. Push to `main` on GitHub.
2. In GitHub → Settings → Pages, set Source to “GitHub Actions”.
3. The workflow will build with `output: export` and publish the `out/` folder.

Badge status: [![Deploy to GitHub Pages](https://github.com/aygoun/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/aygoun/portfolio/actions/workflows/deploy.yml)

---

## Customize Content

Edit these files:

- `data/site.ts` — name, tagline, social links (GitHub, LinkedIn, CV)
- `data/content.ts` — arrays for `education`, `projects`, `experiences`, `hackathons`

Optional favicons next to titles:

- Set `image` on each item (use `/public/...` or a remote URL).
- Remote hosts must be allowed in `next.config.ts` under `images.remotePatterns`.

Tags and bullets:

- `tags` show compact chips (e.g., ML/DL, Infra)
- `bullets` render real list bullets with wrapping

---

## Structure

```
app/
  layout.tsx, page.tsx
components/
  NavBar, Hero, Section, Education, Projects, Experience, Hackathons, Footer
data/
  site.ts, content.ts
lib/
  motion.ts
public/
  CV_BLIN_Armand.pdf (and any images you add)
```

---

## Theming

Tailwind v4 with a light, modest theme. Global styles live in `app/globals.css` with a small set of tokens and utilities (`container-default`, `section-spacing`).

---

## Notes

- Static export is enabled via `output: "export"` in `next.config.ts`. Images are `unoptimized` for Pages.
- If you add new remote image hosts, append them to `images.remotePatterns`.

---

## License

MIT © Armand Blin
