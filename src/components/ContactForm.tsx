'use client'

import {useState} from 'react'
import posthog from 'posthog-js'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'

// Phone photos are often 3–5 MB, so images are downscaled in the browser before upload
const MAX_IMAGE_DIMENSION = 1600
const JPEG_QUALITY = 0.8
// Base64 inflates size by ~33%, so cap the raw total at 3 MB to stay under Vercel's ~4.5 MB request body limit
const MAX_TOTAL_BYTES = 3 * 1024 * 1024

async function compressImage(file: File): Promise<Blob> {
    try {
        const bitmap = await createImageBitmap(file)
        const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(bitmap.width, bitmap.height))
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(bitmap.width * scale)
        canvas.height = Math.round(bitmap.height * scale)
        canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
        bitmap.close()
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY))
        return blob && blob.size < file.size ? blob : file
    } catch {
        // Formats the browser can't decode (e.g. HEIC in some browsers) are sent as-is
        return file
    }
}

function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve((reader.result as string).split(',')[1] ?? '')
        reader.onerror = () => reject(reader.error)
        reader.readAsDataURL(blob)
    })
}

function toJpegFilename(name: string) {
    return name.replace(/\.[^.]+$/, '') + '.jpg'
}

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<{type: 'success' | 'error', message: string} | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus(null)

        const form = e.currentTarget
        const formData = new FormData(form)
        const files = (formData.getAll('attachment') as File[]).filter((f) => f && f.size > 0)

        try {
            const images = await Promise.all(
                files.map(async (file) => {
                    const blob = await compressImage(file)
                    return {
                        filename: blob === file ? file.name : toJpegFilename(file.name),
                        blob,
                    }
                })
            )

            const totalBytes = images.reduce((sum, img) => sum + img.blob.size, 0)
            if (totalBytes > MAX_TOTAL_BYTES) {
                setStatus({type: 'error', message: siteText.contact.form.fileTooLargeMessage})
                return
            }

            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                postCodeAndLocation: formData.get('postCodeAndLocation'),
                message: formData.get('message'),
                website: formData.get('website'),
                attachments: await Promise.all(
                    images.map(async (img) => ({
                        filename: img.filename,
                        content: await blobToBase64(img.blob),
                    }))
                ),
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                posthog.capture('contact_form_submitted', {
                    attachment_count: images.length,
                })
                setStatus({type: 'success', message: siteText.contact.form.successMessage})
                // Reset form
                form.reset()
            } else if (response.status === 413) {
                setStatus({type: 'error', message: siteText.contact.form.fileTooLargeMessage})
            } else {
                setStatus({type: 'error', message: siteText.contact.form.errorMessage})
            }
        } catch (error) {
            console.error('Error:', error)
            setStatus({type: 'error', message: siteText.contact.form.errorMessage})
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="relative space-y-6">
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

            {/* Honeypot for spam bots — hidden from real users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-base py-6"
                size="lg"
            >
                {isSubmitting ? siteText.contact.form.submitting : siteText.contact.form.submitButton}
            </Button>

            {status && (
                <div
                    role={status.type === 'error' ? 'alert' : 'status'}
                    className={`p-4 rounded-md text-base ${status.type === 'error' ? `${colors.background.red[50]} ${colors.text.red[700]}` : `${colors.background.primary[50]} ${colors.text.primary[700]}`}`}>
                    {status.message}
                </div>
            )}
        </form>
    )
}
