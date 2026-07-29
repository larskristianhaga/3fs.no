import {NextRequest, NextResponse} from 'next/server'
import {Resend} from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
    try {
        if (!resend) {
            console.error('Resend API key not configured')
            return NextResponse.json(
                {error: 'Email service not configured'},
                {status: 500}
            )
        }

        const data = await request.json()

        const {name, email, phone, address, postCodeAndLocation, message, attachment, attachments: incomingAttachments} = data

        let attachments = []

        // Support both the new multi-file array and the legacy single-attachment shape
        const rawAttachments = Array.isArray(incomingAttachments)
            ? incomingAttachments
            : attachment && attachment.content
                ? [attachment]
                : []

        for (const att of rawAttachments) {
            if (att && att.content) {
                attachments.push({
                    filename: att.filename,
                    content: Buffer.from(att.content, 'base64'),
                })
            }
        }

        await resend.emails.send({
            from: '3fs@paal-erik.no',
            to: ['larskhaga@gmail.com'],
            // to: ['rs3felling@gmail.com'],
            subject: `Ny innsending fra ${name} | 3fs.no`,
            html: `
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
          <h3>Kontaktinformasjon</h3>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Adresse:</strong> ${address || ''}</p>
          <p><strong>Postnummer og poststed:</strong> ${postCodeAndLocation}</p>
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px;">
          <h3>Melding</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
            attachments,
        })

        return NextResponse.json({success: true})
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            {error: 'Failed to send email'},
            {status: 500}
        )
    }
}