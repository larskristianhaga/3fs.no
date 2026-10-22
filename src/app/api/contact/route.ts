import {SeverityNumber} from '@opentelemetry/api-logs'
import {after, NextRequest, NextResponse} from 'next/server'
import {Resend} from 'resend'
import {loggerProvider} from '@/instrumentation'

const contactEmailLogger = loggerProvider?.getLogger('posthog-contact-email-exporter')

function logContactEmailLifecycle(
    body: string,
    severityNumber: SeverityNumber,
    attributes: Record<string, string | number>
) {
    contactEmailLogger?.emit({body, severityNumber, attributes})

    if (contactEmailLogger) {
        after(async () => {
            await loggerProvider?.forceFlush()
        })
    }
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const MAX_FIELD_LENGTH = 500
const MAX_MESSAGE_LENGTH = 10000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple per-instance rate limit. Serverless instances don't share memory, so
// this only slows down a single client hammering the endpoint — not a hard cap.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
const recentRequests = new Map<string, number[]>()

function isRateLimited(ip: string) {
    const now = Date.now()
    const timestamps = (recentRequests.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
    timestamps.push(now)
    recentRequests.set(ip, timestamps)
    return timestamps.length > RATE_LIMIT_MAX
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function asTrimmedString(value: unknown, maxLength: number) {
    return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function POST(request: NextRequest) {
    try {
        if (!resend) {
            logContactEmailLifecycle('Contact email service is unavailable', SeverityNumber.WARN, {
                'contact_email.outcome': 'service_unavailable',
            })
            console.error('Resend API key not configured')
            return NextResponse.json(
                {error: 'Email service not configured'},
                {status: 500}
            )
        }

        const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
        if (isRateLimited(ip)) {
            return NextResponse.json({error: 'Too many requests'}, {status: 429})
        }

        let data: Record<string, unknown>
        try {
            data = await request.json()
        } catch {
            return NextResponse.json({error: 'Invalid request body'}, {status: 400})
        }

        // Honeypot: hidden field that real users never fill in. Pretend success so bots don't retry.
        if (asTrimmedString(data.website, MAX_FIELD_LENGTH)) {
            return NextResponse.json({success: true})
        }

        const name = asTrimmedString(data.name, MAX_FIELD_LENGTH)
        const email = asTrimmedString(data.email, MAX_FIELD_LENGTH)
        const phone = asTrimmedString(data.phone, MAX_FIELD_LENGTH)
        const address = asTrimmedString(data.address, MAX_FIELD_LENGTH)
        const postCodeAndLocation = asTrimmedString(data.postCodeAndLocation, MAX_FIELD_LENGTH)
        const message = asTrimmedString(data.message, MAX_MESSAGE_LENGTH)

        if (!name || !phone || !postCodeAndLocation || !message || (email && !EMAIL_PATTERN.test(email))) {
            return NextResponse.json({error: 'Missing or invalid fields'}, {status: 400})
        }

        // Support both the new multi-file array and the legacy single-attachment shape
        const rawAttachments: unknown[] = Array.isArray(data.attachments)
            ? data.attachments
            : data.attachment
                ? [data.attachment]
                : []

        const attachments = []
        for (const att of rawAttachments) {
            if (att && typeof att === 'object' && 'content' in att && typeof att.content === 'string') {
                const filename = 'filename' in att && typeof att.filename === 'string' ? att.filename : 'vedlegg.jpg'
                attachments.push({
                    filename,
                    content: Buffer.from(att.content, 'base64'),
                })
            }
        }

        const {error} = await resend.emails.send({
            from: '3fs@paal-erik.no',
            to: ['rs3felling@gmail.com'],
            // Email is optional; without it the reply goes to the sender address and the customer is phoned instead
            ...(email ? {replyTo: email} : {}),
            subject: `Ny innsending fra ${name} | 3fs.no`,
            html: `
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
          <h3>Kontaktinformasjon</h3>
          <p><strong>Navn:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-post:</strong> ${escapeHtml(email || 'Ikke oppgitt')}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Adresse:</strong> ${escapeHtml(address)}</p>
          <p><strong>Postnummer og poststed:</strong> ${escapeHtml(postCodeAndLocation)}</p>
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px;">
          <h3>Melding</h3>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        </div>
      `,
            attachments,
        })

        // Resend reports API failures in the result instead of throwing
        if (error) {
            throw new Error(`Resend error: ${error.message}`)
        }

        logContactEmailLifecycle('Contact email delivered', SeverityNumber.INFO, {
            'contact_email.outcome': 'delivered',
            attachment_count: attachments.length,
        })
        return NextResponse.json({success: true})
    } catch (error) {
        logContactEmailLifecycle('Contact email delivery failed', SeverityNumber.ERROR, {
            'contact_email.outcome': 'delivery_failed',
        })
        console.error('Error sending email:', error)
        return NextResponse.json(
            {error: 'Failed to send email'},
            {status: 500}
        )
    }
}
