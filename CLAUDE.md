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
- No tests currently configured. Changes require manual verification via `npm run dev` and build verification via `npm run build`.

## Architecture Overview

### Directory Structure
- **`src/app/`** – Next.js App Router (pages, layouts, API routes)
  - **`(pages)/`** – Public pages (home, services, about, FAQ, contact)
  - **`api/contact/`** – Email submission endpoint using Resend
  - **`layout.tsx`** – Root layout with global metadata, Analytics, SpeedInsights
- **`src/components/`** – React components
  - **`ui/`** – Shadcn/ui components (Button, Card, Input, Textarea, etc.)
  - **`Header.tsx`**, **`Footer.tsx`** – Main layout components
  - **`ContactForm.tsx`** – Contact form with file upload
- **`src/config/`** – Centralized configuration
  - **`colors.ts`** – Tailwind color definitions (primary green, grays)
  - **`company.ts`** – Company info, contact details, service areas, `yearsOfExperience`
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
| `/` | `src/app/page.tsx` | Home page with hero, services overview, testimonials |
| `/tjenester` | `src/app/tjenester/page.tsx` | Full services catalog with image gallery |
| `/om-oss` | `src/app/om-oss/page.tsx` | About page with team and insurance info |
| `/faq` | `src/app/faq/page.tsx` | FAQ with expandable questions |
| `/kontakt-oss` | `src/app/kontakt-oss/page.tsx` | Contact form page |
| `/api/contact` | `src/app/api/contact/route.ts` | POST endpoint for contact form submissions |

### Key Components & Patterns

**UI Components** use Shadcn-style components with Radix UI primitives:
- All components support `className` prop and use `cn()` utility for merging Tailwind classes
- Button variants defined in `src/components/ui/button.tsx` with consistent hover states
- Card components for layout structure

**Contact Form** (`src/components/ContactForm.tsx`):
- Client-side form with file upload support
- Converts file to base64 before sending
- Submits to `/api/contact` endpoint
- Shows success/error messages from `siteText.contact.form`

**Email System** (`src/app/api/contact/route.ts`):
- Uses Resend (resend.com) via `RESEND_API_KEY` environment variable
- Sends HTML-formatted emails with contact info and message
- Supports file attachments
- Currently configured to send to `larskhaga@gmail.com` (change to `rs3felling@gmail.com` for production)

### Styling & Design System

**Tailwind CSS v4** with custom configuration:
- Modern Tailwind v4 with `@tailwindcss/postcss`
- Colors centralized in `src/config/colors.ts`
- All pages reference colors from config: `colors.text.gray[900]`, `colors.background.primary[50]`, etc.
- **All new components should use color config references, not hardcoded Tailwind classes**

**Hover States & Interactions**:
- Buttons use `hover:scale-105` for consistent feedback
- Cards use `hover:shadow-lg` or `hover:bg-gray-50`
- All transitions use `transition-all` or `transition-colors`

### Environment Variables

Required for email functionality:
```
RESEND_API_KEY=your_resend_api_key
```

Note: Contact form endpoint currently sends to `larskhaga@gmail.com`. Update line 33 in `src/app/api/contact/route.ts` to production email when ready.

### SEO & Metadata

- **Metadata** defined in each page using Next.js `Metadata` API
- **robots.ts** and **sitemap.ts** configured for search engines
- **StructuredData component** injects JSON-LD for rich snippets
- **Open Graph** configured for social sharing
- **Language**: Norwegian (nb_NO)

### Performance Optimizations

- **Next.js Image Optimization**: Configured for WebP/AVIF formats with 1-year cache
- **Turbopack**: Used for both dev and build for faster compilation
- **Vercel Analytics** & **Speed Insights** integrated for monitoring
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
1. Add entry to `siteText.services.items` in `src/content/text.ts`
2. Add corresponding home page content in `siteText.home.servicesSection`
3. Add service image to `public/images/tjenester/[id].jpg`
4. Services automatically appear in services page, home page cards, and footer links

### Modify Colors
- Update `src/config/colors.ts`
- All components automatically use updated colors since they reference the config
- Never add hardcoded `bg-green-600` or `text-gray-900` – use color config

### Update Contact Form
- Form labels/validation in `siteText.contact.form` (`src/content/text.ts`)
- Email template in `src/app/api/contact/route.ts` (line 36-55)
- Email destination in `src/app/api/contact/route.ts` (line 33)
- Success/error messages in `siteText.contact.form` messages

## Important Notes

### Before Making Changes

- **All content is centralized**: Changing site copy requires editing `src/content/text.ts`. Do not hardcode text in components.
- **Colors use config**: Never add new `bg-*` or `text-*` classes directly. Use `src/config/colors.ts` and reference them in components.
- **Metadata is per-page**: Each page defines its own metadata. Update `metadata` export if changing page titles or descriptions.
- **Email configuration**: `src/app/api/contact/route.ts` line 33 currently sends to test email. Change to `rs3felling@gmail.com` for production.

### Code Style

- TypeScript strict mode enabled
- Path alias `@/` maps to `src/`
- Components use React 19 with modern hooks
- Forms use React Hook Form patterns where applicable
- Tailwind classes merged with `cn()` utility (clsx + tailwind-merge)

### Validation & Type Safety

- TypeScript set to strict mode (`tsconfig.json`)
- All components properly typed
- Form data validated on submission via HTML5 + React form handling

## Recent Improvements (Latest Commits)

Recent commits have standardized the codebase:
- Fixed incomplete content ("Ås kommune"), capitalization issues, and grammar errors
- Centralized experience timeline via `yearsOfExperience` constant
- Standardized all page colors to use centralized `colors` config
- Implemented dynamic footer services section with internal links
- Updated all service alt text to Norwegian descriptions

When adding features, maintain these patterns: use the text config for copy, the colors config for styling, and the company config for shared data.
