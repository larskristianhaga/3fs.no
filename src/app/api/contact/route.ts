import {NextRequest, NextResponse} from 'next/server'
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        console.info("Starting to send email")
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
            from: 'laline.no',
            to: ['larskhaga@gmail.com'],
            subject: `New Quote Request from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Address:</strong> ${address || 'Not provided'}</p>
          <p><strong>Post Code & Location:</strong> ${postCodeAndLocation || 'Not provided'}</p>
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message</h3>
          <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
        </div>

        ${attachment ? '<p><strong>Attachment:</strong> File attached for reference</p>' : ''}

        <hr style="margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          This message was sent from the GreenCut Tree Services contact form.
        </p>
      `,
            attachments,
        })

        console.info("Sent!")

        return NextResponse.json({success: true})
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            {error: 'Failed to send email'},
            {status: 500}
        )
    }
}