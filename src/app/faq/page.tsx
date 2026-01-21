'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteText } from '@/content/text'

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                            {siteText.faq.title}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {siteText.faq.subtitle}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {siteText.faq.questions.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-lg font-semibold text-gray-900">
                                        {item.question}
                                    </span>
                                    <svg
                                        className={`w-6 h-6 text-green-600 transition-transform ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 py-4 bg-gray-50">
                                        <p className="text-gray-700 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-6 bg-green-50 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Har du andre spørsmål?
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Hvis du ikke finner svar på det du lurer på, ta gjerne kontakt med oss!
                        </p>
                        <a
                            href="/kontakt-oss"
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                        >
                            Kontakt oss
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
