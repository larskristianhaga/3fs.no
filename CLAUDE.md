# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**3fs.no** is a professional website for Trefellingsspesialisten AS, a tree felling service company operating in Oslo, Akershus, Østfold, and Buskerud, Norway. The site is built with Astro, Tailwind CSS and TypeScript, with two small React islands. It includes a contact form with file uploads, email notifications via Resend, and SEO optimization. It was migrated from Next.js on Vercel to Astro so it can run on any European host.

## Core Commands

### Development
```bash
npm run dev              # Start the Astro dev server (localhost:3000)
npm run build            # Production build into dist/
npm start                # Run the production server (node dist/server/entry.mjs)
```

### Build & Testing
- No unit tests. Changes require manual verification via `npm run dev` and build verification via `npm run build`.
- `npm run test:e2e` is a Playwright smoke test (`e2e/pages.spec.ts`) that loads every sitemap page and fails on a non-200 or a console error. Point it at a deployment with `BASE_URL=https://3fs.vercel.app npm run test:e2e` (defaults to `localhost:3000`).
- `Dockerfile` builds the site and runs the Node server; it is the portable way to deploy.

## Architecture Overview

### Directory Structure
- **`src/pages/`** – Astro file-based routes (pages, API routes, generated files)
  - **`index.astro`**, **`tjenester/`**, **`blogg/`**, **`faq.astro`**, **`om-oss.astro`**, … – public pages
  - **`[area].astro`** – per-service-area landing pages
  - **`api/contact.ts`**, **`api/contact/health.ts`** – email endpoints using Resend (on-demand, `prerender = false`)
  - **`sitemap.xml.ts`**, **`robots.txt.ts`**, **`llms.txt.ts`** – generated routes
- **`src/layouts/BaseLayout.astro`** – `<head>` (title, canonical, Open Graph, Twitter), JSON-LD, header, footer and the analytics click listener. Every page wraps itself in it
- **`src/components/`**
  - **`Eyebrow`, `PageHero`, `CtaBand`, `AreaLinks`, `ContactDetails`, `BlogCard`** (`.astro`) – shared design building blocks. Build every page from these and from `styles` in `src/lib/styles.ts`
  - **`Header.astro`** (the mobile menu is a native `<dialog>` with a small script), **`Footer.astro`** (also renders the phone-only call bar)
  - **`*Schema.astro`**, **`StructuredData.astro`** – JSON-LD injectors
  - **`ContactForm.tsx`**, **`ServicesShowcase.tsx`** – the only React components; they are hydrated islands (`client:visible`)
- **`src/assets/`** – photos (`images/`) and the self-hosted Archivo font (`fonts/`)
- **`src/config/`** – Centralized configuration
  - **`colors.ts`** – `colors.brand` Tailwind classes for the brand palette (ink, cream, sand, forest, ember)
  - **`company.ts`** – Company info, contact details, address, service areas, stats, insurance, `yearsOfExperience`
- **`src/content/text.ts`** – All text content (Norwegian), centralized copy for all pages, forms, services, FAQ
- **`src/lib/`** – `utils.ts` (`cn()`), `styles.ts` (shared class strings), `images.ts` (`imageFor()`), `analytics.ts` (PostHog), `events.ts`
- **`src/styles/global.css`** – Tailwind import, brand tokens (`@theme`) and the Archivo `@font-face`

### Data Flow & Content Management

**All page content is stored in `src/content/text.ts`** as a single `siteText` object exported as `const`. This is the single source of truth for:
- Navigation menu items
- Page titles, descriptions, and body copy
- Service descriptions and alt text
- FAQ questions and answers
- Contact form labels

**Company information** (`src/config/company.ts`) stores:
- Business name, contact details, org number
- Service areas (Oslo, Akershus, Østfold, Buskerud)
- Dynamic variables like `yearsOfExperience` for templating

**Colors** (`src/config/colors.ts`) defines all Tailwind classes in a centralized object to ensure consistent theming across pages. All components should use references from this config, not hardcoded Tailwind classes.

### Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/pages/index.astro` | Home page: hero, services showcase, insurance, about, reviews, booking form |
| `/tjenester` | `src/pages/tjenester/index.astro` | Full services catalog; each row keeps an `#id` anchor and links to its service page |
| `/tjenester/[id]` | `src/pages/tjenester/[id].astro` | Per-service SEO pages (description, FAQ, area links), generated from `siteText.services.items` via `getStaticPaths()` |
| `/om-oss` | `src/pages/om-oss.astro` | About page with team and insurance info |
| `/faq` | `src/pages/faq.astro` | FAQ with native `<details>` accordions (one open at a time) |
| `/kontakt-oss` | `src/pages/kontakt-oss.astro` | Contact form page |
| `/trefelling-pris` | `src/pages/trefelling-pris.astro` | Pricing landing page |
| `/blogg`, `/blogg/[id]` | `src/pages/blogg/…` | Blog index and article pages |
| `/[area]` | `src/pages/[area].astro` | Per-service-area SEO landing pages, generated from `siteText.locations.areas` via `getStaticPaths()` |
| `/robots.txt`, `/sitemap.xml`, `/llms.txt` | `robots.txt.ts`, `sitemap.xml.ts`, `llms.txt.ts` | Generated routes (`llms.txt` is rendered per request so it can send `X-Robots-Tag: noindex`) |
| `/api/contact` | `src/pages/api/contact.ts` | POST endpoint for contact form submissions |

### Key Components & Patterns

**Design system** (from the Claude Design "Trefellingsspesialisten" project):
- Cream pages, sand and ink (dark) section bands, condensed uppercase Archivo headings (`font-heading stretch-condensed font-black uppercase`), Instrument Sans body text, pill-shaped buttons (ember primary, ink outline)
- Use `styles` from `src/lib/styles.ts` and the shared `.astro` components rather than re-creating these classes
- Merge classes with `cn()`; it registers the custom `font-heading` family so tailwind-merge doesn't drop it
- In `.astro` files use `class=`, not `className=`; only the two React islands use `className`

**Images**: photos live in `src/assets/images/` and are referred to by their old public path (`/images/tjenester/trefelling.jpg`). Resolve them with `imageFor(path)` from `src/lib/images.ts` and render with Astro's `<Image>` (resized to WebP at build time, with `widths` + `sizes`). The React islands cannot use `<Image>`: pass them URLs optimised with `getImage()` from the page (see the home page and `ServicesShowcase`).

**Analytics clicks**: put `data-capture="event_name"` (and optionally `data-capture-placement="…"`) on a link; the listener in `BaseLayout.astro` reports it to PostHog. Never `import posthog from 'posthog-js'`; use `capture()` from `src/lib/analytics.ts`, which loads PostHog on demand after the page is idle.

**Contact Form** (`src/components/ContactForm.tsx`):
- Client-side form with file upload support
- Downscales images in the browser (max 1600px JPEG) and converts them to base64 before sending; total upload capped at 3 MB
- Includes a hidden `website` honeypot field for spam bots
- Submits to `/api/contact` endpoint
- Shows success/error messages from `siteText.contact.form`

**Email System** (`src/pages/api/contact.ts`):
- Uses Resend (resend.com) via the `RESEND_API_KEY` environment variable, read at runtime
- Sends HTML-formatted emails with contact info and message
- Supports file attachments
- Validates required fields, HTML-escapes all user input in the email template, sets `replyTo` to the customer's email when given (email is optional; name, phone, postcode and message are required), and applies a simple per-process rate limit
- Sends to `larskhaga@gmail.com`
- `/api/contact/health` sends a test email to Resend's test inbox; the weekly uptime workflow calls it

### Styling & Design System

**Tailwind CSS v4** (via `@tailwindcss/vite`) with custom configuration:
- Brand tokens (colors and fonts) are defined in `src/styles/global.css` under `@theme`, e.g. `--color-ember` → `bg-ember`, `--font-heading` → `font-heading`
- Fonts: Instrument Sans is self-hosted through `@fontsource-variable/instrument-sans` (imported in `BaseLayout.astro`); Archivo is self-hosted from `src/assets/fonts/` via `@font-face` in `global.css` and preloaded in the layout. Archivo widths come from `.stretch-condensed` / `.stretch-semi-condensed`
- The Archivo file is cut down to weight 700–900 and width 68–100% to halve its size. `font-heading` with `font-semibold` or lighter, or a wider stretch, falls back to synthesized or clamped rendering. To widen the range, re-cut Google's Archivo latin file with `fonttools varLib.instancer` (e.g. `wght=600:900 wdth=68:100`) and update `font-weight` / `font-stretch` in `global.css`
- Components reference colors through `colors.brand` in `src/config/colors.ts`: `colors.brand.text.ink`, `colors.brand.background.sand`, etc.
- **All new components should use color config references, not hardcoded Tailwind classes**

**Hover States & Interactions**:
- Primary buttons lighten (`hover:bg-ember-light`), outline buttons fill with ink (`hover:bg-ink hover:text-cream`)
- Links turn ember-dark on hover; cards lift slightly (`hover:-translate-y-0.5`)
- Every interactive element gets `colors.brand.focus.outline` for a visible keyboard focus ring

### Environment Variables

Copy `.env.example` to `.env`. Every variable is optional locally:
```
PUBLIC_BASE_URL=https://3fs.vercel.app             # the site's own address; read at build time
RESEND_API_KEY=your_resend_api_key                 # contact form email, read at runtime; without it submissions return an error
PUBLIC_POSTHOG_PROJECT_TOKEN=...                   # PostHog analytics and exception capture, read at build time
PUBLIC_POSTHOG_HOST=...                            # without both, PostHog is disabled with a dev warning
```

The contact form endpoint sends to `larskhaga@gmail.com` (the `to` field in `src/pages/api/contact.ts`).

### SEO & Metadata

- **Metadata** is passed to `BaseLayout` as props per page (`title`, `fullTitle`, `description`, `path`, `ogTitle`, `ogImage`, …). `title` gets ` | Trefellingsspesialisten AS` appended; `fullTitle` is used as is
- **robots.txt.ts** and **sitemap.xml.ts** are generated routes
- **JSON-LD** is injected by the `*Schema.astro` components
- **Open Graph** configured for social sharing (images are resized at build time)
- **Language**: Norwegian (nb_NO)

### Performance Optimizations

- **Static output**: every page is prerendered to HTML at build time; only the API routes and `llms.txt` run on the server
- **Astro image optimization**: photos in `src/assets` become WebP at the right widths, with hashed filenames under `/_astro/`
- **Islands**: only `ContactForm` and `ServicesShowcase` ship React, and only when scrolled into view (`client:visible`)
- **PostHog loads after the page**: `posthog-js` (~100 KB gzipped) is imported on demand by `src/lib/analytics.ts` once the page is idle
- **Mobile menu needs no library**: it is a native `<dialog>` with ~10 lines of script in `Header.astro`

## Common Development Tasks

### Add a New Page
1. Create `src/pages/<slug>.astro`
2. Add content to `src/content/text.ts` under appropriate section
3. Wrap the page in `BaseLayout` and pass its metadata as props
4. Use colors from `src/config/colors.ts` for styling
5. Add the page to `sitemap.xml.ts`

### Update Content
- Edit `src/content/text.ts` (all page copy, form labels, services, FAQ)
- Edit `src/config/company.ts` for company info or `yearsOfExperience`
- Content is compiled into the pages, so a text change needs a rebuild and redeploy

### Add a Service
1. Add entry to `siteText.services.items` in `src/content/text.ts`, including the service-page fields: `intro`, `metaDescription`, `details` (extra paragraphs) and `faq` (3–5 questions)
2. Add corresponding home page content in `siteText.home.servicesSection`
3. Add service image to `src/assets/images/tjenester/[id].jpg` (also used as the page's Open Graph image)
4. The `/tjenester/[id]` page is generated automatically — do not create a new file. Services automatically appear in the services page, home page showcase, footer links, sitemap and `llms.txt`

### Modify Colors
- Update `src/config/colors.ts`
- Change a token's value in `global.css` to restyle everything that uses it; add new classes to `colors.brand`
- Never add hardcoded `bg-[#…]` or palette classes like `text-gray-900` – add a token in `global.css` and reference it via `colors.brand`

### Update Contact Form
- Form labels/validation in `siteText.contact.form` (`src/content/text.ts`)
- Email template and destination in `src/pages/api/contact.ts` (`resend.emails.send` call). Always pass user input through `escapeHtml()`
- Success/error messages in `siteText.contact.form` messages

## Important Notes

### Before Making Changes

- **All content is centralized**: Changing site copy requires editing `src/content/text.ts`. Do not hardcode text in components.
- **Colors use config**: Never add new `bg-*` or `text-*` classes directly. Use `src/config/colors.ts` and reference them in components.
- **Metadata is per-page**: Each page passes its own props to `BaseLayout`. Update them if changing page titles or descriptions.
- **Years of experience**: Never hardcode "15 år" – use `yearsOfExperience` from `src/config/company.ts` (this includes blog posts, so every page shows the same number).

### Code Style

- TypeScript strict mode enabled
- Path alias `@/` maps to `src/`
- Pages and layout components are `.astro`; React is only for the two islands
- Tailwind classes merged with `cn()` utility (clsx + tailwind-merge)

### Add a Service Area
- Add an entry to `siteText.locations.areas` in `src/content/text.ts`.
- The `/[area]` route generates a page for it automatically via `getStaticPaths()` — do not create a new file.

## Git Workflow

- Committing and pushing directly to `main` is allowed. When asked to commit and push, do so directly on `main` — no feature branch or PR required.

## CI

- **The site runs on a temporary domain, `https://3fs.vercel.app`** (3fs.no still serves the old Wix site). Nothing in the app or the checks may point at 3fs.no until the domain moves. Two variables hold the address, and both are `https://3fs.vercel.app` today:
  - **`PUBLIC_BASE_URL`** (build-time environment variable) is the site's own address. `companyInfo.website` in `src/config/company.ts` reads it (default `https://3fs.vercel.app`) and `astro.config.mjs` uses it as `site`. The app uses it for canonical URLs, metadata, sitemap, robots, llms.txt and JSON-LD. Never hardcode a domain in app code.
  - **`SITE_URL`** (GitHub Actions repository variable) is the host the live checks (uptime, link checker, SEO audit) run against.
  - When the domain moves, change both to `https://3fs.no` and redeploy; no code change needed.
- A weekly **uptime check** requests every sitemap page (rewritten to `SITE_URL`) and the contact email health endpoint (`.github/workflows/uptime-check.yml`).
- A **smoke test** runs `npm run test:e2e` against every successful Vercel Preview deployment (`.github/workflows/smoke-test.yml`). This workflow is tied to Vercel's `deployment_status` events and needs rewriting once the new host is chosen.
- **Dependabot** npm minor/patch updates come as one grouped PR. They are auto-approved and squash-merged when the checks pass (`.github/workflows/dependabot-pr.yml`).
- A monthly **link-checker** workflow scans the live site for broken links (`.github/workflows/link-checker.yml`).
- A monthly **SEO audit** crawls every page with Unlighthouse (Lighthouse SEO, accessibility and best-practices) and fails if a page scores below the budgets (`.github/workflows/seo-audit.yml`, config in `.github/unlighthouse.config.ts`). Per-page scores and failed audits are printed in the job log and the run's job summary (`.github/scripts/unlighthouse-summary.mjs`).

When adding features, maintain these patterns: use the text config for copy, the colors config for styling, and the company config for shared data.
