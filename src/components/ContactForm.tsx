'use client'

import {useEffect, useState} from 'react'
import {capture} from '@/lib/analytics'
import { cn } from '@/lib/utils'
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

// Lets other components (e.g. the services list on the home page) preselect a service in the form
export const SELECT_SERVICE_EVENT = 'contactform:select-service'

const text = siteText.contact.form
const services = siteText.home.servicesSection.items
const {brand} = colors
const agentTool = text.agentTool
const agentToolDescription = `${agentTool.description} ${services.map((s) => s.title).join(', ')}.`

const fieldLabel = 'flex flex-col gap-2 font-semibold text-[15px]'
const fieldInput = cn(
    'p-3.5 border rounded-md font-normal text-base',
    brand.background.white, brand.border.field, brand.focus.outline,
)

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [sent, setSent] = useState<{firstName: string, phone: string, summary: string} | null>(null)
    const [picked, setPicked] = useState<string[]>([])
    const [fileCount, setFileCount] = useState(0)

    useEffect(() => {
        const onSelect = (e: Event) => {
            const title = (e as CustomEvent<string>).detail
            setPicked((p) => p.includes(title) ? p : [...p, title])
        }
        window.addEventListener(SELECT_SERVICE_EVENT, onSelect)
        return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect)
    }, [])

    const toggle = (title: string) =>
        setPicked((p) => p.includes(title) ? p.filter((x) => x !== title) : [...p, title])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = submit(e.currentTarget)
        // WebMCP: when an AI agent submitted the form, tell it how it went
        const event = e.nativeEvent as SubmitEvent
        if (event.agentInvoked) event.respondWith?.(result)
    }

    // Resolves with the message shown to the user, which is also the response to an AI agent
    const submit = async (form: HTMLFormElement): Promise<string> => {
        setIsSubmitting(true)
        setError(null)

        const formData = new FormData(form)
        const files = (formData.getAll('attachment') as File[]).filter((f) => f && f.size > 0)
        const summary = picked.length ? picked.join(', ') : text.generalRequest
        const description = String(formData.get('message') ?? '')

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
                setError(text.fileTooLargeMessage)
                return text.fileTooLargeMessage
            }

            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                postCodeAndLocation: formData.get('postCodeAndLocation'),
                message: picked.length ? `${text.servicesPrefix}: ${summary}\n\n${description}` : description,
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
                capture('contact_form_submitted', {
                    attachment_count: images.length,
                    services: picked,
                })
                setSent({
                    firstName: String(data.name ?? '').trim().split(' ')[0],
                    phone: String(data.phone ?? ''),
                    summary,
                })
                form.reset()
                setPicked([])
                setFileCount(0)
                return `${text.successText} ${data.phone} ${text.successTextSuffix}`
            }
            const message = response.status === 413 ? text.fileTooLargeMessage : text.errorMessage
            setError(message)
            return message
        } catch (error) {
            console.error('Error:', error)
            setError(text.errorMessage)
            return text.errorMessage
        } finally {
            setIsSubmitting(false)
        }
    }

    if (sent) {
        return (
            <div role="status" className="flex flex-col gap-[18px] py-6">
                <span className={cn('w-14 h-14 rounded-full grid place-items-center text-[26px] font-bold', brand.background.forest, brand.text.cream)} aria-hidden="true">✓</span>
                <h3 className="m-0 font-heading stretch-condensed font-black text-[44px] leading-[.95] uppercase">
                    {text.successTitle}, {sent.firstName}!
                </h3>
                <p className={cn('m-0 text-[17px] leading-relaxed', brand.text.inkSoft)}>
                    {text.successText} {sent.phone} {text.successTextSuffix}
                </p>
                <p className={cn('m-0 text-[15px]', brand.text.inkMuted)}>{text.servicesPrefix}: {sent.summary}</p>
                <button
                    type="button"
                    onClick={() => setSent(null)}
                    className={cn('self-start px-5 py-3 border-[1.5px] rounded-full font-semibold cursor-pointer transition-colors', brand.border.ink, brand.hover.background.ink, brand.hover.text.cream, brand.focus.outline)}
                >
                    {text.newRequest}
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} toolname="bestill_befaring" tooldescription={agentToolDescription} className="relative flex flex-col gap-[26px]">
            <fieldset className="border-0 m-0 p-0 flex flex-col gap-3">
                <legend className="p-0 mb-3 font-semibold text-base">{text.servicesLegend}</legend>
                <div className="flex flex-wrap gap-2">
                    {services.map(({id, title}) => {
                        const on = picked.includes(title)
                        return (
                            <button
                                key={id}
                                type="button"
                                aria-pressed={on}
                                onClick={() => toggle(title)}
                                className={cn(
                                    'px-4 py-2.5 rounded-full border-[1.5px] text-[15px] font-medium cursor-pointer transition-colors',
                                    brand.focus.outline,
                                    on
                                        ? cn(brand.background.ink, brand.text.cream, brand.border.ink)
                                        : cn(brand.background.white, brand.text.ink, brand.border.field),
                                )}
                            >
                                {title}
                            </button>
                        )
                    })}
                </div>
            </fieldset>

            <label className={fieldLabel}>
                {text.messageLabel} {text.required}
                <textarea name="message" toolparamdescription={agentTool.params.message} rows={4} required placeholder={text.messagePlaceholder} className={cn(fieldInput, 'resize-y')}/>
            </label>

            <label className={cn(fieldLabel, 'relative')}>
                <span>
                    {text.attachmentLabel}{' '}
                    <span className={cn('font-normal text-sm', brand.text.inkMuted)}>{text.attachmentOptional}</span>
                </span>
                <span className={cn('flex items-center gap-3 p-3.5 border-[1.5px] border-dashed rounded-md font-medium cursor-pointer has-[+input:focus-visible]:outline-2 has-[+input:focus-visible]:outline-ember', brand.background.cream, brand.border.field)}>
                    <span className={cn('px-3.5 py-2 rounded-full text-sm', brand.background.ink, brand.text.cream)}>{text.attachmentButton}</span>
                    <span className={cn('text-[15px]', brand.text.inkSoft)}>
                        {fileCount ? `${fileCount} ${fileCount === 1 ? text.fileSelected : text.filesSelected}` : text.noFilesSelected}
                    </span>
                </span>
                <input
                    type="file"
                    name="attachment"
                    accept="image/*"
                    multiple
                    onChange={(e) => setFileCount(e.target.files?.length ?? 0)}
                    className="absolute w-px h-px opacity-0"
                />
                <span className={cn('font-normal text-sm', brand.text.inkMuted)}>{text.attachmentHint}</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={fieldLabel}>
                    {text.addressLabel}
                    <input name="address" toolparamdescription={agentTool.params.address} autoComplete="street-address" placeholder={text.addressPlaceholder} className={fieldInput}/>
                </label>
                <label className={fieldLabel}>
                    {text.postCodeAndLocation} {text.required}
                    <input name="postCodeAndLocation" toolparamdescription={agentTool.params.postCodeAndLocation} required placeholder={text.postCodePlaceholder} className={fieldInput}/>
                </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={fieldLabel}>
                    {text.name} {text.required}
                    <input name="name" toolparamdescription={agentTool.params.name} required autoComplete="name" className={fieldInput}/>
                </label>
                <label className={fieldLabel}>
                    {text.phone} {text.required}
                    <input type="tel" name="phone" toolparamdescription={agentTool.params.phone} required autoComplete="tel" className={fieldInput}/>
                </label>
            </div>

            <label className={fieldLabel}>
                <span>
                    {text.email}{' '}
                    <span className={cn('font-normal text-sm', brand.text.inkMuted)}>{text.emailOptional}</span>
                </span>
                <input type="email" name="email" toolparamdescription={agentTool.params.email} autoComplete="email" className={fieldInput}/>
            </label>

            {/* Honeypot for spam bots — hidden from real users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <input type="text" name="website" toolparamdescription={agentTool.params.website} tabIndex={-1} autoComplete="off" />
            </div>

            {error && (
                <p role="alert" className={cn('m-0 px-3.5 py-3 rounded-md text-[15px]', brand.background.alert, brand.text.alert)}>
                    {error}
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className={cn('px-6 py-[18px] border-0 rounded-full font-semibold text-[17px] cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-wait', brand.background.ember, brand.text.ink, brand.hover.background.emberLight, brand.focus.outline)}
            >
                {isSubmitting ? text.submitting : text.bookingSubmit}
            </button>
            <p className={cn('m-0 text-sm', brand.text.inkMuted)}>{text.freeNote}</p>
        </form>
    )
}
