import {NextResponse} from 'next/server'
import {Resend} from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// The endpoint is public, so a successful check is reused for a while to keep
// repeated calls from using up the Resend quota. Per instance only.
const COOLDOWN_MS = 5 * 60 * 1000
let lastSuccess: {at: number, id: string} | null = null

// Verifies the contact form's email path without emailing anyone:
// delivered@resend.dev is Resend's test inbox, which accepts mail but delivers nowhere.
export async function POST() {
    if (!resend) {
        return NextResponse.json({error: 'Email service not configured'}, {status: 500})
    }

    if (lastSuccess && Date.now() - lastSuccess.at < COOLDOWN_MS) {
        return NextResponse.json({success: true, id: lastSuccess.id, cached: true})
    }

    const {data, error} = await resend.emails.send({
        from: '3fs@paal-erik.no',
        to: ['delivered@resend.dev'],
        subject: 'Health check | 3fs.no',
        text: 'Automated health check of the contact form email path.',
    })

    if (error) {
        console.error('Email health check failed:', error)
        return NextResponse.json({error: error.message}, {status: 500})
    }

    lastSuccess = {at: Date.now(), id: data.id}
    return NextResponse.json({success: true, id: data.id})
}
