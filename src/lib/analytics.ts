import type {PostHog} from 'posthog-js'

const projectToken = import.meta.env.PUBLIC_POSTHOG_PROJECT_TOKEN
const host = import.meta.env.PUBLIC_POSTHOG_HOST

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
            debug: import.meta.env.DEV,
        })
        return posthog
    })

    return client
}

// Starts analytics once the page has loaded and the browser is idle, so it never delays the first paint
export function startAnalytics() {
    if (!projectToken || !host) {
        if (import.meta.env.DEV) {
            console.warn('PostHog is disabled: set PUBLIC_POSTHOG_PROJECT_TOKEN and PUBLIC_POSTHOG_HOST to enable analytics')
        }
        return
    }

    const start = () => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => void loadPostHog(), {timeout: 3000})
        } else {
            setTimeout(() => void loadPostHog(), 1)
        }
    }

    if (document.readyState === 'complete') {
        start()
    } else {
        window.addEventListener('load', start, {once: true})
    }
}

export function capture(event: string, properties?: Record<string, unknown>) {
    void loadPostHog()?.then((posthog) => posthog.capture(event, properties))
}
