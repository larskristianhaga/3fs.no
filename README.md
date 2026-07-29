# 3fs.no

Website for **Trefellingsspesialisten AS** — tree felling in Oslo, Akershus, Østfold and Buskerud.

---

## 🔧 Debug / quick links

When something breaks, start here:

| What | Where | Notes |
|------|-------|-------|
| Hosting (Vercel) | https://vercel.com/dashboard | Deployments, build logs, env vars, Analytics & Speed Insights |
| Email (Resend) | https://resend.com/emails | Contact form delivery, logs, API keys |

### Common issues

- **Contact form not sending email** → check [Resend dashboard](https://resend.com/emails) for failed sends and verify `RESEND_API_KEY` is set in Vercel. Sender is `3fs@paal-erik.no`, recipient is set in `src/app/api/contact/route.ts` (~line 33).
- **Build/deploy failing** → check [Vercel deployment logs](https://vercel.com/dashboard). Build uses Turbopack (`next build --turbopack`).
- **Broken links reported** → see the [link-checker workflow](https://github.com/larskristianhaga/3fs.no/actions) in GitHub Actions.
- **Dependency PRs** → handled by Dependabot (`.github/dependabot.yml` + `dependabot-pr.yml`).

---

## Services used

| Service | Purpose | Dashboard |
|---------|---------|-----------|
| **Vercel** | Hosting, deployments, Analytics, Speed Insights | https://vercel.com/dashboard |
| **Resend** | Transactional email (contact form) | https://resend.com |
| **GitHub** | Source, CI (Actions), Dependabot | https://github.com/larskristianhaga/3fs.no |

## Environment variables

Set these in Vercel (and `.env` locally):

```
RESEND_API_KEY=...          # Resend email API key
NEXT_PUBLIC_BASE_URL=...    # e.g. https://3fs.no
```

---

## Running locally

```bash
npm install
npm run dev      # dev server on http://localhost:3000 (Turbopack)
```

Other scripts:

```bash
npm run build    # production build (Turbopack)
npm start        # run production build
```

## Project layout

- `src/app/` — pages, layouts and the `/api/contact` route (App Router)
- `src/components/` — React + Shadcn/ui components
- `src/config/` — `company.ts` (company info), `colors.ts` (theme)
- `src/content/text.ts` — all Norwegian site copy (single source of truth)
- `src/lib/` — utilities

> More detail for editing content, colors and services is in `CLAUDE.md`.
