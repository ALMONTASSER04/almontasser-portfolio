# المهندس المنتصر بالله — Personal Website

A Next.js 14 (App Router) personal portfolio site with full i18n support
for **Arabic (default, RTL)**, **English**, and **German**, built with
`next-intl` and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/ar` by default.
Switch languages with the pill switcher in the header (`/en`, `/de`, `/ar`).

## Project structure

```
app/
  [locale]/
    layout.tsx     # root layout: sets <html lang> + dir="rtl"/"ltr", loads fonts
    page.tsx        # assembles all sections
  globals.css
components/
  Header.tsx, Hero.tsx, About.tsx, Experience.tsx,
  Portfolio.tsx, Hobbies.tsx, Social.tsx, ContactCTA.tsx, Footer.tsx,
  LanguageSwitcher.tsx
messages/
  ar.json, en.json, de.json   # all site copy, per language
i18n/routing.ts, i18n/request.ts, middleware.ts   # next-intl locale routing config
public/images/hero.jpg         # your photo, used in the hero section
```

## Editing content

All visible text lives in `messages/ar.json`, `messages/en.json`, and
`messages/de.json` — edit those to change any copy, and every language
stays in sync structurally (same keys, translated values).

## Replacing images

- Hero photo: replace `public/images/hero.jpg`.
- Portfolio cards currently use styled placeholder tiles with the
  project name — drop real screenshots into `public/images/` and swap
  the gradient `div` in `components/Portfolio.tsx` for a Next.js `<Image>`.

## Contact links

Update the WhatsApp (`https://wa.me/`) and Telegram (`https://t.me/`)
links in `components/ContactCTA.tsx` with your actual number/username,
and the social links (`#`) in `components/Social.tsx` and
`components/Footer.tsx` with your real profile URLs.

## Deploying

Works out of the box on Vercel: push to a Git repo and import it at
vercel.com/new. No extra environment variables are required.
