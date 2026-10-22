# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**3fs.no** is a professional website for Trefellingsspesialisten AS, a tree felling service company operating in Oslo, Akershus, Østfold, and Buskerud, Norway. The site is built with Next.js 16, React 19, TypeScript, and Tailwind CSS. It includes a contact form with file uploads, email notifications via Resend, and SEO optimization.

## Core Commands

### Development
```bash
npm run dev              # Start development server with Turbopack (localhost:3000)
npm run build           # Production build with Turbopack
npm start               # Run production server
```

### Build & Testing
- No unit tests. Changes require manual verification via `npm run dev` and build verification via `npm run build`.
- `npm run test:e2e` is a Playwright smoke test (`e2e/pages.spec.ts`) that loads every sitemap page and fails on a non-200 or a console error. Point it at a deployment with `BASE_URL=https://3fs.vercel.app npm run test:e2e` (defaults to `localhost:3000`).

## Architecture Overview

### Directory Structure
- **`src/app/`** – Next.js App Router (pages, layouts, API routes)
  - **`(pages)/`** – Public pages (home, services, about, FAQ, contact)
  - **`api/contact/`** – Email submission endpoint using Resend
  - **`layout.tsx`** – Root layout with global metadata and Vercel Speed Insights
- **`src/components/`** – React components
  - **`Brand.tsx`** – Shared design building blocks: `styles` (container, headings, pill buttons, links, cards), `PageShell` (cream page + Header/Footer), `PageHero`, `Eyebrow`, `CtaBand`, `AreaLinks`, `ContactDetails`. Build every page from these
  - **`ui/sheet.tsx`** – Radix dialog used for the mobile menu
  - **`Header.tsx`**, **`Footer.tsx`** – Main layout components (the footer also renders the phone-only call bar pinned to the bottom)
  - **`ContactForm.tsx`** – Contact form with file upload
  - **`*Schema.tsx`** – JSON-LD injectors (`StructuredData`, `ArticleSchema`, `ServiceSchema`, `FAQSchema`, `BreadcrumbSchema`)
  - **`PreloadLink.tsx`**, **`BlogCard.tsx`**, **`ServicesShowcase.tsx`** (interactive services list on the home page)
- **`src/proxy.ts`** – Next.js proxy (formerly middleware). Sets a 1-day cache (plus stale-while-revalidate) on `/images/*` only. Filenames aren't content-hashed, so don't make it `immutable`
- **`src/config/`** – Centralized configuration
  - **`colors.ts`** – `colors.brand` Tailwind classes for the brand palette (ink, cream, sand, forest, ember)
  - **`company.ts`** – Company info, contact details, address, service areas, stats, insurance, `yearsOfExperience`
- **`src/content/`** – All text content (Norwegian)
  - **`text.ts`** – Centralized copy for all pages, forms, services, FAQ
- **`src/lib/`** – Utilities
  - **`utils.ts`** – `cn()` function for merging Tailwind classes

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

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `src/app/page.tsx` | Home page: hero, services showcase, insurance, about, reviews, booking form |
| `/tjenester` | `src/app/tjenester/page.tsx` | Full services catalog; each row keeps an `#id` anchor and links to its service page |
| `/tjenester/[id]` | `src/app/tjenester/[id]/page.tsx` | Per-service SEO pages (description, FAQ, area links), generated from `siteText.services.items` via `generateStaticParams()` |
| `/om-oss` | `src/app/om-oss/page.tsx` | About page with team and insurance info |
| `/faq` | `src/app/faq/page.tsx` | FAQ with expandable questions |
| `/kontakt-oss` | `src/app/kontakt-oss/page.tsx` | Contact form page |
| `/trefelling-pris` | `src/app/trefelling-pris/page.tsx` | Pricing landing page |
| `/blogg`, `/blogg/[id]` | `src/app/blogg/…` | Blog index and article pages |
| `/[area]` | `src/app/[area]/page.tsx` | Per-service-area SEO landing pages, generated from `siteText.locations.areas` via `generateStaticParams()` |
| `/robots.txt`, `/sitemap.xml`, `/llms.txt` | `robots.ts`, `sitemap.ts`, `llms.txt/route.ts` | Generated routes |
| `/api/contact` | `src/app/api/contact/route.ts` | POST endpoint for contact form submissions |

### Key Components & Patterns

**Design system** (from the Claude Design "Trefellingsspesialisten" project):
- Cream pages, sand and ink (dark) section bands, condensed uppercase Archivo headings (`font-heading stretch-condensed font-black uppercase`), Instrument Sans body text, pill-shaped buttons (ember primary, ink outline)
- Use `styles`, `PageShell`, `PageHero` and `CtaBand` from `src/components/Brand.tsx` rather than re-creating these classes
- Merge classes with `cn()`; it registers the custom `font-heading` family so tailwind-merge doesn't drop it

**Contact Form** (`src/components/ContactForm.tsx`):
- Client-side form with file upload support
- Downscales images in the browser (max 1600px JPEG) and converts them to base64 before sending; total upload capped at 3 MB to stay under Vercel's 4.5 MB body limit
- Includes a hidden `website` honeypot field for spam bots
- Submits to `/api/contact` endpoint
- Shows success/error messages from `siteText.contact.form`

**Email System** (`src/app/api/contact/route.ts`):
- Uses Resend (resend.com) via `RESEND_API_KEY` environment variable
- Sends HTML-formatted emails with contact info and message
- Supports file attachments
- Validates required fields, HTML-escapes all user input in the email template, sets `replyTo` to the customer's email when given (email is optional; name, phone, postcode and message are required), and applies a simple per-instance rate limit
- Sends to `rs3felling@gmail.com`
- `/api/contact/health` sends a test email to Resend's test inbox; the weekly uptime workflow calls it

### Styling & Design System

**Tailwind CSS v4** with custom configuration:
- Brand tokens (colors and fonts) are defined in `src/app/globals.css` under `@theme`, e.g. `--color-ember` → `bg-ember`, `--font-heading` → `font-heading`
- Fonts load via `next/font` in `src/app/layout.tsx` (Archivo with its width axis, Instrument Sans). Archivo widths come from `.stretch-condensed` / `.stretch-semi-condensed`
- Components reference colors through `colors.brand` in `src/config/colors.ts`: `colors.brand.text.ink`, `colors.brand.background.sand`, etc.
- **All new components should use color config references, not hardcoded Tailwind classes**

**Hover States & Interactions**:
- Primary buttons lighten (`hover:bg-ember-light`), outline buttons fill with ink (`hover:bg-ink hover:text-cream`)
- Links turn ember-dark on hover; cards lift slightly (`hover:-translate-y-0.5`)
- Every interactive element gets `colors.brand.focus.outline` for a visible keyboard focus ring

### Environment Variables

Copy `.env.example` to `.env.local`. Every variable is optional locally:
```
RESEND_API_KEY=your_resend_api_key                 # contact form email; without it submissions return an error
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=...              # PostHog analytics, logs and exception capture
NEXT_PUBLIC_POSTHOG_HOST=...                       # without both, PostHog is disabled with a dev warning
```

The contact form endpoint sends to `rs3felling@gmail.com` (the `to` field in `src/app/api/contact/route.ts`).

### SEO & Metadata

- **Metadata** defined in each page using Next.js `Metadata` API
- **robots.ts** and **sitemap.ts** configured for search engines
- **StructuredData component** injects JSON-LD for rich snippets
- **Open Graph** configured for social sharing
- **Language**: Norwegian (nb_NO)

### Performance Optimizations

- **Next.js Image Optimization**: Configured for WebP/AVIF formats with 1-year cache
- **Turbopack**: Used for both dev and build for faster compilation
- **Vercel Speed Insights** integrated for performance monitoring (Vercel Analytics was removed; PostHog handles analytics)
- **Lazy loading**: Images lazy load with `loading="lazy"`

## Common Development Tasks

### Add a New Page
1. Create file in `src/app/[slug]/page.tsx`
2. Add content to `src/content/text.ts` under appropriate section
3. Import `Header` and `Footer` components
4. Use colors from `src/config/colors.ts` for styling
5. Add metadata using Next.js `Metadata` API

### Update Content
- Edit `src/content/text.ts` (all page copy, form labels, services, FAQ)
- Edit `src/config/company.ts` for company info or `yearsOfExperience`
- No need to redeploy for simple text changes

### Add a Service
1. Add entry to `siteText.services.items` in `src/content/text.ts`, including the service-page fields: `intro`, `metaDescription`, `details` (extra paragraphs) and `faq` (3–5 questions)
2. Add corresponding home page content in `siteText.home.servicesSection`
3. Add service image to `public/images/tjenester/[id].jpg` (also used as the page's Open Graph image)
4. The `/tjenester/[id]` page is generated automatically — do not create a new folder. Services automatically appear in the services page, home page showcase, footer links, sitemap and `llms.txt`

### Modify Colors
- Update `src/config/colors.ts`
- Change a token's value in `globals.css` to restyle everything that uses it; add new classes to `colors.brand`
- Never add hardcoded `bg-[#…]` or palette classes like `text-gray-900` – add a token in `globals.css` and reference it via `colors.brand`

### Update Contact Form
- Form labels/validation in `siteText.contact.form` (`src/content/text.ts`)
- Email template and destination in `src/app/api/contact/route.ts` (`resend.emails.send` call). Always pass user input through `escapeHtml()`
- Success/error messages in `siteText.contact.form` messages

## Important Notes

### Before Making Changes

- **All content is centralized**: Changing site copy requires editing `src/content/text.ts`. Do not hardcode text in components.
- **Colors use config**: Never add new `bg-*` or `text-*` classes directly. Use `src/config/colors.ts` and reference them in components.
- **Metadata is per-page**: Each page defines its own metadata. Update `metadata` export if changing page titles or descriptions.
- **Years of experience**: Never hardcode "15 år" – use `yearsOfExperience` from `src/config/company.ts` (this includes blog posts, so every page shows the same number).

### Code Style

- TypeScript strict mode enabled
- Path alias `@/` maps to `src/`
- Components use React 19 with modern hooks
- Tailwind classes merged with `cn()` utility (clsx + tailwind-merge)

### Validation & Type Safety

- TypeScript set to strict mode (`tsconfig.json`)
- All components properly typed
- Form data validated on submission via HTML5 + React form handling

### Add a Service Area
- Add an entry to `siteText.locations.areas` in `src/content/text.ts`.
- The `/[area]` route generates a page for it automatically via `generateStaticParams()` — do not create a new folder.

## Git Workflow

- Committing and pushing directly to `main` is allowed. When asked to commit and push, do so directly on `main` — no feature branch or PR required.

## CI

- **`SITE_URL`** (GitHub Actions repository variable) is the host the live checks run against — currently `https://3fs.vercel.app`, later `https://3fs.no`. Change it in the repo's Actions variables when the domain moves; no code change needed. It is separate from the canonical domain (`companyInfo.website` in `src/config/company.ts`), which the app uses for metadata, sitemap, robots and JSON-LD — never hardcode `https://3fs.no` in app code.
- A weekly **uptime check** requests every sitemap page (rewritten to `SITE_URL`) and the contact email health endpoint (`.github/workflows/uptime-check.yml`).
- A **smoke test** runs `npm run test:e2e` against every successful Vercel Preview deployment (`.github/workflows/smoke-test.yml`). Previews must stay public (Vercel Deployment Protection off) for it to reach them.
- **Dependabot** npm minor/patch updates come as one grouped PR. They are auto-approved and squash-merged when the Vercel build passes (`.github/workflows/dependabot-pr.yml`).
- A monthly **link-checker** workflow scans the live site for broken links (`.github/workflows/link-checker.yml`).
- A monthly **SEO audit** crawls every page with Unlighthouse (Lighthouse SEO, accessibility and best-practices) and fails if a page scores below the budgets (`.github/workflows/seo-audit.yml`, config in `.github/unlighthouse.config.ts`). Per-page scores and failed audits are printed in the job log and the run's job summary (`.github/scripts/unlighthouse-summary.mjs`).

When adding features, maintain these patterns: use the text config for copy, the colors config for styling, and the company config for shared data.
