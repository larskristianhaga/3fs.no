import {NextRequest, NextResponse} from 'next/server'
import {Resend} from 'resend'
import { companyData } from '@/config/company'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        const {name, email, phone, address, postCodeAndLocation, message, attachment} = data

        let attachments = []

        if (attachment && attachment.content) {
            const buffer = Buffer.from(attachment.content, 'base64')

            attachments.push({
                filename: attachment.filename,
                content: buffer,
            })
        }

        await resend.emails.send({
            from: '3fs@paal-erik.no',
            to: ['larskhaga@gmail.com'],
            // to: [companyData.email.address],
            subject: `Ny innsending fra ${name} | ${companyData.website.domain}`,
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

        <hr style="margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          Denne meldingen er sendt fra ${companyData.website.domain}, kontakt oss skjema.
        </p>
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