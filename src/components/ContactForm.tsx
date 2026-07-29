'use client'

import {useState} from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')

    const MAX_TOTAL_BYTES = 4 * 1024 * 1024 // 4 MB — kept under Vercel's ~4.5 MB request body limit

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const formData = new FormData(form)
        const files = (formData.getAll('attachment') as File[]).filter((f) => f && f.size > 0)

        const totalBytes = files.reduce((sum, f) => sum + f.size, 0)
        if (totalBytes > MAX_TOTAL_BYTES) {
            setMessage(siteText.contact.form.fileTooLargeMessage)
            setIsSubmitting(false)
            return
        }

        const data: any = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            postCodeAndLocation: formData.get('postCodeAndLocation'),
            message: formData.get('message'),
        }

        if (files.length > 0) {
            data.attachments = await Promise.all(
                files.map(async (file) => {
                    const bytes = await file.arrayBuffer()
                    return {
                        filename: file.name,
                        content: Buffer.from(bytes).toString('base64'),
                        contentType: file.type,
                    }
                })
            )
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setMessage(siteText.contact.form.successMessage)
                // Reset form
                form.reset()
            } else if (response.status === 413) {
                setMessage(siteText.contact.form.fileTooLargeMessage)
            } else {
                setMessage(siteText.contact.form.errorMessage)
            }
        } catch (error) {
            console.error('Error:', error)
            setMessage(siteText.contact.form.errorMessage)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                    {siteText.contact.form.name} {siteText.contact.form.required}
                </Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="text-base py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                    {siteText.contact.form.email}
                </Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="text-base py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">
                    {siteText.contact.form.phone} {siteText.contact.form.required}
                </Label>
                <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="text-base py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="address" className="text-base">
                    {siteText.contact.form.address}
                </Label>
                <Input
                    type="text"
                    id="address"
                    name="address"
                    className="text-base py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="postCodeAndLocation" className="text-base">
                    {siteText.contact.form.postCodeAndLocation} {siteText.contact.form.required}
                </Label>
                <Input
                    type="text"
                    id="postCodeAndLocation"
                    name="postCodeAndLocation"
                    required
                    className="text-base py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-base">
                    {siteText.contact.form.message} {siteText.contact.form.required}
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="text-base py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="attachment" className="text-base">
                    {siteText.contact.form.attachment}
                </Label>
                <Input
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept="image/*"
                    multiple
                    className="text-base py-3"
                />
                <p className={`text-sm ${colors.text.gray[500]}`}>
                    {siteText.contact.form.attachmentHint}
                </p>
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-base py-6"
                size="lg"
            >
                {isSubmitting ? siteText.contact.form.submitting : siteText.contact.form.submitButton}
            </Button>

            {message && (
                <div
                    className={`p-4 rounded-md text-base ${message.includes('error') ? `${colors.background.red[50]} ${colors.text.red[700]}` : `${colors.background.primary[50]} ${colors.text.primary[700]}`}`}>
                    {message}
                </div>
            )}
        </form>
    )
}
