import { logs } from '@opentelemetry/api-logs'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { BatchLogRecordProcessor, LoggerProvider } from '@opentelemetry/sdk-logs'
import type { PostHog } from 'posthog-node'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

// PostHog is optional: without a token (e.g. a fresh local checkout) logs and exceptions are not exported
if ((!projectToken || !host) && process.env.NODE_ENV === 'development') {
    console.warn('PostHog is disabled: set NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN and NEXT_PUBLIC_POSTHOG_HOST to enable logs and exception capture')
}

export const loggerProvider = projectToken && host
    ? new LoggerProvider({
        resource: resourceFromAttributes({'service.name': '3fs-nextjs'}),
        processors: [
            new BatchLogRecordProcessor({
                exporter: new OTLPLogExporter({
                    url: new URL('/i/v1/logs', host).toString(),
                    headers: {
                        Authorization: `Bearer ${projectToken}`,
                        'Content-Type': 'application/json',
                    },
                }),
            }),
        ],
    })
    : null

let posthog: PostHog | null = null

export function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs' && loggerProvider) {
        logs.setGlobalLoggerProvider(loggerProvider)
    }
}

export async function onRequestError(error: Error) {
    if (process.env.NEXT_RUNTIME !== 'nodejs' || !projectToken || !host) {
        return
    }

    if (!posthog) {
        const { PostHog } = await import('posthog-node')
        posthog = new PostHog(projectToken, {
            host,
            enableExceptionAutocapture: true,
            flushAt: 1,
            flushInterval: 0,
        })
    }

    posthog.captureException(error)
    await posthog.flush()
}
