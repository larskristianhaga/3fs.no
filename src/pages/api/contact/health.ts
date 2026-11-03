import type {APIRoute} from 'astro'
import {Resend} from 'resend'

export const prerender = false

// The endpoint is public, so a successful check is reused for a while to keep
// repeated calls from using up the Resend quota. Per process only.
const COOLDOWN_MS = 5 * 60 * 1000
let lastSuccess: {at: number, id: string} | null = null

const json = (body: unknown, status = 200) => Response.json(body, {status})

// Verifies the contact form's email path without emailing anyone:
// delivered@resend.dev is Resend's test inbox, which accepts mail but delivers nowhere.
export const POST: APIRoute = async () => {
    const key = process.env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY
    if (!key) {
        return json({error: 'Email service not configured'}, 500)
    }

    if (lastSuccess && Date.now() - lastSuccess.at < COOLDOWN_MS) {
        return json({success: true, id: lastSuccess.id, cached: true})
    }

    const resend = new Resend(key)
    const {data, error} = await resend.emails.send({
        from: '3fs@paal-erik.no',
        to: ['delivered@resend.dev'],
        subject: 'Health check | 3fs.no',
        text: 'Automated health check of the contact form email path.',
    })

    if (error) {
        console.error('Email health check failed:', error)
        return json({error: error.message}, 500)
    }

    lastSuccess = {at: Date.now(), id: data.id}
    return json({success: true, id: data.id})
}
