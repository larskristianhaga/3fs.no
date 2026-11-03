# Builds the site and runs the Astro Node server (pages are prerendered; the server only
# adds the contact API and llms.txt). Works on any host that runs containers.
FROM node:24-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# PUBLIC_* values are baked in at build time
ARG PUBLIC_BASE_URL
ARG PUBLIC_POSTHOG_PROJECT_TOKEN
ARG PUBLIC_POSTHOG_HOST
RUN npm run build

FROM node:24-slim
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 3000
# RESEND_API_KEY is read at runtime
CMD ["node", "./dist/server/entry.mjs"]
