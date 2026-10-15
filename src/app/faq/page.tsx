'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQSchema from '@/components/FAQSchema'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import { cn } from '@/lib/utils'
import { container, pageHeading, subHeading, bodyText, primaryButton } from '@/config/styles'

const {brand} = colors

export default function FAQPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null)

    const toggleQuestion = (question: string) => {
        setOpenQuestion(openQuestion === question ? null : question)
    }

    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <FAQSchema questions={siteText.faq.questions} />
            <Header />

            <main>
                <section className={cn(container, 'pt-14 pb-10 flex flex-col gap-5')}>
                    <h1 className={pageHeading}>{siteText.faq.title}</h1>
                    <p className={cn(bodyText, 'm-0 max-w-[52ch] text-lg')}>{siteText.faq.subtitle}</p>
                </section>

                <section className={cn(container, 'pb-24 max-w-[960px]')}>
                    <div className={cn('border-t-[1.5px]', brand.border.ink)}>
                        {siteText.faq.questions.map((item) => {
                            const isOpen = openQuestion === item.question
                            return (
                                <div key={item.question} className={cn('border-b', brand.border.inkSubtle)}>
                                    <button
                                        type="button"
                                        onClick={() => toggleQuestion(item.question)}
                                        className={cn('w-full py-5 text-left bg-transparent cursor-pointer flex justify-between items-center gap-6', brand.text.ink, brand.hover.text.emberDark, brand.focus.outline)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-lg font-semibold">{item.question}</span>
                                        <svg
                                            className={cn('w-6 h-6 flex-none transition-transform', brand.text.ember, isOpen && 'rotate-180')}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isOpen && (
                                        <p className={cn(bodyText, 'm-0 pb-6 max-w-[68ch]')}>{item.answer}</p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section className={brand.background.sand}>
                    <div className={cn(container, 'py-[72px] flex flex-col items-start gap-5')}>
                        <h2 className={subHeading}>{siteText.faq.moreQuestionsTitle}</h2>
                        <p className={cn(bodyText, 'm-0 max-w-[52ch]')}>
                            {siteText.faq.moreQuestionsText}
                        </p>
                        <a href="/kontakt-oss" className={primaryButton}>{siteText.common.contactCta}</a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
