# Personal Engineering Portfolio

A personal software engineering and product development portfolio built with Next.js App Router, React, TypeScript, CSS Modules, Framer Motion, and Lucide React.

## Requirements

- Node.js 20.9 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Search and social metadata

Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin when the production domain is known. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` supplies that origin when the variable is unset, and a production deployment can also use `VERCEL_URL`. Preview deployments are marked noindex and do not publish a guessed canonical domain. The sitemap and `robots.txt` include the production origin only when it is available.

## Commands

- `npm run dev` — start local development
- `npm run lint` — lint the project
- `npm run typecheck` — check TypeScript types
- `npm run build` — create a production build
- `npm start` — serve the production build

## Structure

- `app/` — App Router pages, layouts, and route error handling
- `components/` — reusable UI components
- `data/` — portfolio content
- `hooks/` — reusable React hooks
- `lib/` — shared utilities
- `public/` — static assets
- `styles/` — global styles, tokens, and shared utilities
- `types/` — shared TypeScript types

Component-level styles use CSS Modules. Tailwind CSS is not used.
