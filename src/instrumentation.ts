import { logs } from '@opentelemetry/api-logs'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { BatchLogRecordProcessor, LoggerProvider } from '@opentelemetry/sdk-logs'
import type { PostHog } from 'posthog-node'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

function requirePostHogConfiguration(variableName: string) {
    if (process.env.NODE_ENV === 'development') {
        throw new Error(`${variableName} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${variableName} is configured`)
    }
}

if (!projectToken) {
    requirePostHogConfiguration('NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN')
} else if (!host) {
    requirePostHogConfiguration('NEXT_PUBLIC_POSTHOG_HOST')
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
