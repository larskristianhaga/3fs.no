'use client'

import { useState } from 'react'
import FAQSchema from '@/components/FAQSchema'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import {CtaBand, PageHero, PageShell, styles} from '@/components/Brand'
import {cn} from '@/lib/utils'

export default function FAQPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null)
    const {brand} = colors

    const toggleQuestion = (question: string) => {
        setOpenQuestion(openQuestion === question ? null : question)
    }

    return (
        <PageShell>
            <FAQSchema questions={siteText.faq.questions} />

            <PageHero title={siteText.faq.title} intro={siteText.faq.subtitle}/>

            <section className={cn(styles.container, 'pb-20')}>
                <ul className={cn('max-w-[880px] flex flex-col', styles.ruleTop)}>
                    {siteText.faq.questions.map((item, index) => {
                        const isOpen = openQuestion === item.question
                        return (
                            <li key={item.question} className={cn('border-b', brand.border.inkSubtle)}>
                                <button
                                    type="button"
                                    onClick={() => toggleQuestion(item.question)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    className={cn('w-full py-6 text-left flex justify-between items-start gap-6 cursor-pointer', brand.hover.text.emberDark, brand.focus.outline)}
                                >
                                    <span className="font-heading stretch-semi-condensed font-extrabold uppercase text-[22px] sm:text-[26px] leading-tight">
                                        {item.question}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className={cn('flex-none grid place-items-center w-9 h-9 rounded-full border-[1.5px] text-xl leading-none transition-transform', brand.border.ink, isOpen && 'rotate-45')}
                                    >
                                        +
                                    </span>
                                </button>
                                {isOpen && (
                                    <p id={`faq-answer-${index}`} className={cn(styles.body, 'pb-6 max-w-[70ch]')}>
                                        {item.answer}
                                    </p>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </section>

            <CtaBand title={siteText.common.faqCtaTitle} text={siteText.common.faqCtaText} label={siteText.common.contactUs}/>
        </PageShell>
    )
}
