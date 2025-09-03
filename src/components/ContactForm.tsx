'use client'

import {useState} from 'react'

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
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Navn *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-post *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <label htmlFor="postCodeAndLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Postnummer og poststed *
                </label>
                <input
                    type="text"
                    id="postCodeAndLocation"
                    name="postCodeAndLocation"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Melding *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                    Vedlegg
                </label>
                <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
                {isSubmitting ? 'Sender...' : 'Melding sent'}
            </button>

            {message && (
                <div
                    className={`p-4 rounded-md ${message.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {message}
                </div>
            )}
        </form>
    )
}
