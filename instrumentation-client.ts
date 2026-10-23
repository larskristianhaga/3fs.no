import {loadPostHog} from '@/lib/analytics'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

if (!projectToken || !host) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('PostHog is disabled: set NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN and NEXT_PUBLIC_POSTHOG_HOST to enable analytics')
    }
} else {
    // Start analytics once the page has loaded and the browser is idle, so it never delays the first paint
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
