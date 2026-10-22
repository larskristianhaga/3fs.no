import posthog from 'posthog-js'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

// PostHog is optional: without a token (e.g. a fresh local checkout) analytics are skipped
if (!projectToken || !host) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('PostHog is disabled: set NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN and NEXT_PUBLIC_POSTHOG_HOST to enable analytics')
    }
} else {
    posthog.init(projectToken, {
        api_host: host,
        defaults: '2026-01-30',
        // No cookies/localStorage, so no consent banner is needed under ekomloven § 3-15
        cookieless_mode: 'always',
        capture_exceptions: true,
        debug: process.env.NODE_ENV === 'development',
    })
}
