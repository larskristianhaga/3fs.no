'use client'

import {useState} from 'react'
import Image from 'next/image'
import {SELECT_SERVICE_EVENT} from '@/components/ContactForm'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'

const {brand} = colors
const {items, quoteLink} = siteText.home.servicesSection

// Numbered service list; hovering, focusing or tapping a row swaps the sticky image beside it
export default function ServicesShowcase() {
    const [active, setActive] = useState(0)
    const service = items[active]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ul className={cn('flex flex-col border-t-[1.5px]', brand.border.ink)}>
                {items.map((item, i) => (
                    <li key={item.id}>
                        {/* Inactive rows dim through muted colours, not opacity, to keep text contrast */}
                        <button
                            type="button"
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            onClick={() => setActive(i)}
                            aria-pressed={i === active}
                            className={cn(
                                'w-full text-left py-[22px] border-b grid grid-cols-[52px_1fr] gap-x-3 gap-y-1 transition-colors duration-200',
                                brand.border.inkSubtle,
                                brand.focus.outline,
                                i === active ? brand.text.ink : brand.text.inkMuted,
                            )}
                        >
                            <span className={cn('font-heading font-bold text-[15px] pt-2', i === active && brand.text.emberDark)}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="m-0 font-heading stretch-semi-condensed font-extrabold text-[28px] sm:text-[34px] uppercase leading-tight">
                                {item.title}
                            </h3>
                            <p className={cn('col-start-2 m-0 max-w-[52ch] text-base leading-relaxed', i === active && brand.text.inkSoft)}>
                                {item.description}
                            </p>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="lg:sticky lg:top-24 flex flex-col gap-3.5">
                <div className={cn('relative aspect-[4/5] rounded-md overflow-hidden', brand.background.sandDark)}>
                    {items.map((item, i) => (
                        <Image
                            key={item.id}
                            src={`/images/tjenester/${item.id}.jpg`}
                            alt={i === active ? item.title : ''}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            quality={75}
                            loading="lazy"
                            className={cn('object-cover transition-opacity duration-300', i === active ? 'opacity-100' : 'opacity-0')}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center gap-3 flex-wrap">
                    <a href={`/tjenester#${service.id}`} className={cn('font-semibold underline-offset-4 hover:underline', brand.text.ink)}>
                        {service.title}
                    </a>
                    <a
                        href="#befaring"
                        onClick={() => window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, {detail: service.title}))}
                        className={cn('font-semibold underline underline-offset-4', brand.text.emberDark, brand.hover.text.ink)}
                    >
                        {quoteLink} {service.title.toLowerCase()} →
                    </a>
                </div>
            </div>
        </div>
    )
}
