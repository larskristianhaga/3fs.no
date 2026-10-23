import type {PostHog} from 'posthog-js'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

let client: Promise<PostHog> | null = null

// posthog-js (plus its core-js polyfills) is ~100 KB gzipped, so it is imported on demand
// instead of shipping in the bundle every page needs before it can render
export function loadPostHog(): Promise<PostHog> | null {
    // PostHog is optional: without a token (e.g. a fresh local checkout) analytics are skipped
    if (!projectToken || !host) {
        return null
    }

    client ??= import('posthog-js').then(({default: posthog}) => {
        posthog.init(projectToken, {
            api_host: host,
            defaults: '2026-01-30',
            // No cookies/localStorage, so no consent banner is needed under ekomloven § 3-15
            cookieless_mode: 'always',
            capture_exceptions: true,
            debug: process.env.NODE_ENV === 'development',
        })
        return posthog
    })

    return client
}

export function capture(event: string, properties?: Record<string, unknown>) {
    void loadPostHog()?.then((posthog) => posthog.capture(event, properties))
}

export function captureException(error: unknown) {
    void loadPostHog()?.then((posthog) => posthog.captureException(error))
}
