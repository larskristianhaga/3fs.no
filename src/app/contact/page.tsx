import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - Get Your Free Tree Service Quote',
    description: 'Contact GreenCut Tree Services for professional tree removal, cutting, and arborist services. Free quotes, emergency services available. Call (123) 456-7890.',
    keywords: 'contact tree service, free tree quote, tree removal quote, emergency tree service, tree service phone number',
    openGraph: {
        title: 'Contact GreenCut Tree Services - Free Quote',
        description: 'Get your free quote for professional tree services. Emergency services available 24/7.',
        images: ['/images/contact-hero.jpg'],
    },
}

const serviceAreas = [
    'Downtown District',
    'Riverside Heights',
    'Oak Valley',
    'Pine Ridge',
    'Maple Grove',
    'Cedar Hills',
    'Willow Creek',
    'Birch Park'
]

const businessHours = [
    {day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM'},
    {day: 'Saturday', hours: '8:00 AM - 4:00 PM'},
    {day: 'Sunday', hours: 'Emergency Only'},
    {day: 'Emergency Services', hours: '24/7 Available'}
]

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-green-800">
                                GreenCut Tree Services
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/"
                                      className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">
                                    Home
                                </Link>
                                <Link href="/services"
                                      className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">
                                    Services
                                </Link>
                                <Link href="/about"
                                      className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">
                                    About Us
                                </Link>
                                <Link href="/contact"
                                      className="text-green-800 hover:text-green-600 px-3 py-2 text-sm font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to get started? Contact us today for a free, no-obligation quote.
                            We're here to help with all your tree service needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Phone */}
                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600 mb-4">Speak directly with our team</p>
                            <a
                                href="tel:+1234567890"
                                className="text-2xl font-bold text-green-600 hover:text-green-700"
                            >
                                (123) 456-7890
                            </a>
                            <p className="text-sm text-gray-500 mt-2">24/7 Emergency Services</p>
                        </div>

                        {/* Email */}
                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600 mb-4">Send us your questions</p>
                            <a
                                href="mailto:info@greencuttree.com"
                                className="text-lg font-semibold text-green-600 hover:text-green-700"
                            >
                                info@greencuttree.com
                            </a>
                            <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
                        </div>

                        {/* Location */}
                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600 mb-4">Our service area</p>
                            <p className="text-lg font-semibold text-green-600">
                                Serving Your Local Area
                            </p>
                            <p className="text-sm text-gray-500 mt-2">Licensed & Insured</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        {/* Contact Form */}
                        <div className="mb-12 lg:mb-0">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Get Your Free Quote
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Fill out the form below and we'll get back to you within 24 hours with a detailed
                                    quote
                                    for your tree service needs.
                                </p>
                                <ContactForm/>
                            </div>
                        </div>

                        {/* Business Info */}
                        <div className="space-y-8">
                            {/* Business Hours */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Business Hours
                                </h3>
                                <div className="space-y-3">
                                    {businessHours.map((schedule, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-gray-600">{schedule.day}</span>
                                            <span className="font-semibold text-gray-900">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                                    <p className="text-red-800 text-sm font-medium">
                                        🚨 Emergency services available 24/7 for storm damage and hazardous situations
                                    </p>
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Service Areas
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    We proudly serve the following areas and surrounding communities:
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    {serviceAreas.map((area, index) => (
                                        <div key={index} className="flex items-center">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                            <span className="text-gray-700 text-sm">{area}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 mt-4">
                                    Don't see your area listed? Contact us - we may still be able to help!
                                </p>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Why Choose Us?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span className="text-gray-700 text-sm">Free, detailed quotes with no hidden fees</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span className="text-gray-700 text-sm">Licensed, insured, and bonded for your protection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span
                                            className="text-gray-700 text-sm">15+ years of professional experience</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span
                                            className="text-gray-700 text-sm">Complete cleanup included with every job</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span className="text-gray-700 text-sm">24/7 emergency services available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact Banner */}
            <section className="py-8 bg-red-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Emergency Tree Services
                        </h2>
                        <p className="text-red-100 mb-4">
                            Storm damage? Fallen tree? Hazardous situation? We're available 24/7 for emergencies.
                        </p>
                        <a
                            href="tel:+1234567890"
                            className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            Call Emergency Line: (123) 456-7890
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">GreenCut Tree Services</h3>
                            <p className="text-gray-300">
                                Professional tree services serving the local community with expertise and care.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
                                </li>
                                <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <p className="text-gray-300">Phone: (123) 456-7890</p>
                            <p className="text-gray-300">Email: info@greencuttree.com</p>
                            <p className="text-gray-300">Licensed & Insured</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-300">
                            © 2025 GreenCut Tree Services. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
