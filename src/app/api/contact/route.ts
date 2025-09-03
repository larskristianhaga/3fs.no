// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string
        const service = formData.get('service') as string
        const propertyType = formData.get('propertyType') as string
        const urgency = formData.get('urgency') as string
        const message = formData.get('message') as string
        const attachment = formData.get('attachment') as File | null

        let attachments = []
        if (attachment && attachment.size > 0) {
            const bytes = await attachment.arrayBuffer()
            const buffer = Buffer.from(bytes)

            attachments.push({
                filename: attachment.name,
                content: buffer,
            })
        }

        const urgencyEmoji = urgency === 'emergency' ? '🚨 ' : urgency === 'urgent' ? '⚡ ' : ''

        await resend.emails.send({
            from: 'contact@yourdomain.com',
            to: ['your-email@example.com'],
            subject: `${urgencyEmoji}New Quote Request - ${service || 'General Inquiry'}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Service Details</h3>
          <p><strong>Service Requested:</strong> ${service || 'Not specified'}</p>
          <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${urgency || 'Not specified'}</p>
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Project Details</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>

        ${attachment ? '<p><strong>Attachment:</strong> Photo attached for reference</p>' : ''}

        <hr style="margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          This message was sent from the GreenCut Tree Services contact form.
        </p>
      `,
            attachments,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}
