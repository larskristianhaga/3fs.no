'use client'

import {useState} from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const file = formData.get('attachment') as File

        const data: any = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            postCodeAndLocation: formData.get('postCodeAndLocation'),
            message: formData.get('message'),
        }

        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer()
            const base64 = Buffer.from(bytes).toString('base64')

            data.attachment = {
                filename: file.name,
                content: base64,
                contentType: file.type,
            }
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
                setMessage('Takk for din henvendelse!')
            } else {
                setMessage('Beklager noe gikk galt, ta kontakt direkte via e-post.')
            }
        } catch (error) {
            console.error('Error:', error)
            setMessage('Beklager noe gikk galt, ta kontakt direkte via e-post.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                    Navn *
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
                    E-post *
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
                    Telefon *
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
                    Adresse
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
                    Postnummer og poststed *
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
                    Melding *
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
                    Vedlegg
                </Label>
                <Input
                    type="file"
                    id="attachment"
                    name="attachment"
                    className="text-base py-3"
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-base py-6"
                size="lg"
            >
                {isSubmitting ? 'Sender...' : 'Send melding'}
            </Button>

            {message && (
                <div
                    className={`p-4 rounded-md text-base ${message.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {message}
                </div>
            )}
        </form>
    )
}
