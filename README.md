# Complete Portfolio

A modern personal portfolio built with Next.js, TypeScript, Tailwind CSS v4, and motion-enhanced UI components.

## Overview

This project is a responsive portfolio landing page with a desktop grid layout and mobile-friendly sections. It includes animated visual effects, polished section cards, and a custom cursor glow effect.

Key features:
- Responsive layout for desktop and mobile
- Animated cursor glow effect
- Sections for about, projects, skills, experience, contact, and more
- Uses Swiper for carousel-style components and React Icons/simple-icons for logos/icons
- Built with the Next.js App Router and Tailwind CSS styling

## Tech Stack

- Next.js 16+ (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Swiper
- React Icons
- Simple Icons

## Project Structure

- `app/`
  - `page.tsx` — main entrypoint rendering the portfolio layout
  - `layout.tsx` — global app layout and metadata
  - `globals.css` — Tailwind and Swiper global styles
- `components/sections/` — portfolio sections like `Beginning`, `About`, `Projects`, `Stacks`, `Experience`, `Contact`, and more
- `components/motions/` — animated motion utilities such as `CursorGlow`, `Counter`, and carousel effects
- `public/` — static image and icon assets

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `[https://aderinsola-portfolio.vercel.app/](https://aderinsola-portfolio.vercel.app/)` to view the site.

## Build & Production

Build the app for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Linting

Run lint checks with:

```bash
npm run lint
```

## Notes

- The app uses a custom `CursorGlow` client component to track mouse position and render a glowing background effect.
- The portfolio layout is composed from section components grouped into desktop and mobile views inside `components/sections/Portfolio.tsx`.
- Global styles include Tailwind CSS imports and Swiper styling in `app/globals.css`.

