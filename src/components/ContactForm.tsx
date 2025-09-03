// src/components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
    name: string
    email: string
    phone: string
    service: string
    propertyType: string
    urgency: string
    message: string
}

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setSubmitStatus('success')
                reset()
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div>
            {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Thank you! Your message has been received. We'll get back to you within 24 hours.</span>
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Sorry, there was an error. Please try again or call us directly at (123) 456-7890.</span>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                        </label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                        </label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        {...register('phone')}
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="(123) 456-7890"
                    />
                </div>

                {/* Service and Property Type Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                            Service Needed *
                        </label>
                        <select
                            {...register('service', { required: 'Please select a service' })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="">Select a service</option>
                            <option value="tree-removal">Tree Removal</option>
                            <option value="tree-cutting">Tree Cutting & Pruning</option>
                            <option value="stump-grinding">Stump Grinding</option>
                            <option value="emergency">Emergency Service</option>
                            <option value="tree-health">Tree Health Assessment</option>
                            <option value="land-clearing">Land Clearing</option>
                            <option value="consultation">Free Consultation</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Type
                        </label>
                        <select
                            {...register('propertyType')}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="">Select property type</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="industrial">Industrial</option>
                            <option value="municipal">Municipal</option>
                        </select>
                    </div>
                </div>

                {/* Urgency */}
                <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                        Timeline
                    </label>
                    <select
                        {...register('urgency')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                        <option value="">Select timeline</option>
                        <option value="emergency">Emergency (ASAP)</option>
                        <option value="urgent">Within 1 week</option>
                        <option value="normal">Within 1 month</option>
                        <option value="flexible">Flexible timing</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Details *
                    </label>
                    <textarea
                        {...register('message', { required: 'Please describe your project' })}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Please describe your tree service needs, including tree size, location, and any specific concerns..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
                    ) : (
                        'Send Message & Get Free Quote'
                    )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by our team regarding your tree service needs.
                </p>
            </form>
        </div>
    )
}
