# 3fs.no

Website for **Trefellingsspesialisten AS** — tree felling in Oslo, Akershus, Østfold and Buskerud.

---

## 🔧 Debug / quick links

When something breaks, start here:

| What | Where | Notes |
|------|-------|-------|
| Hosting | Vercel for now (temporary) | Vercel builds use `@astrojs/vercel`; elsewhere the site is an Astro Node server (see `Dockerfile`) that runs on any host with Node or containers |
| Email (Resend) | https://resend.com/emails | Contact form delivery, logs, API keys |

### Common issues

- **Contact form not sending email** → check [Resend dashboard](https://resend.com/emails) for failed sends and verify `RESEND_API_KEY` is set on the server. Sender is `3fs@paal-erik.no`, recipient is set in `src/pages/api/contact.ts`.
- **Build/deploy failing** → run `npm run build` locally (`astro build`) and read the error; the host's build log shows the same output.
- **Broken links reported** → see the [link-checker workflow](https://github.com/larskristianhaga/3fs.no/actions) in GitHub Actions.
- **Checks hitting the wrong site** → the uptime, link-checker and SEO audit workflows run against the `SITE_URL` [Actions variable](https://github.com/larskristianhaga/3fs.no/settings/variables/actions). Update it, and the `PUBLIC_BASE_URL` build variable that sets the site's canonical address, when the domain moves from `3fs.vercel.app` to `3fs.no`.
- **Dependency PRs** → handled by Dependabot (`.github/dependabot.yml` + `dependabot-pr.yml`).

---

## Services used

| Service | Purpose | Dashboard |
|---------|---------|-----------|
| **Hosting** | Runs the Astro server | _not chosen yet_ |
| **Resend** | Transactional email (contact form) | https://resend.com |
| **GitHub** | Source, CI (Actions), Dependabot | https://github.com/larskristianhaga/3fs.no |

## Environment variables

Set these on the host (and in `.env` locally). `PUBLIC_*` values are read at build time, the rest at runtime:

```
RESEND_API_KEY=...          # Resend email API key
PUBLIC_BASE_URL=...         # the site's own address; https://3fs.vercel.app until the domain moves (also the default)
```

---

## Running locally

```bash
npm install
npm run dev      # dev server on http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build into dist/
npm start        # run the production build (node dist/server/entry.mjs)
```

## Project layout

- `src/pages/` — pages (`.astro`), the `/api/contact` route, sitemap, robots and llms.txt
- `src/layouts/` — the base layout (head, header, footer)
- `src/components/` — Astro components, plus two React islands (`ContactForm`, `ServicesShowcase`)
- `src/assets/` — photos and the Archivo font; Astro resizes the photos at build time
- `src/config/` — `company.ts` (company info), `colors.ts` (theme)
- `src/content/text.ts` — all Norwegian site copy (single source of truth)
- `src/lib/` — utilities

> More detail for editing content, colors and services is in `CLAUDE.md`.
