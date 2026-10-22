import type {Metadata} from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {CtaBand, PageHero, PageShell, styles} from '@/components/Brand'
import {cn} from '@/lib/utils'

export const metadata: Metadata = {
    title: 'Trefelling pris | Hva koster trefelling i 2026?',
    description: 'Se pris for trefelling med konkrete prisintervaller, faktorer og eksempeloppdrag i Oslo, Nordre Follo, Akershus og Østfold. Gratis befaring og pristilbud.',
    keywords: 'trefelling pris, hva koster trefelling, pris trefelling oslo, trefelling nordre follo, stubbefjerning pris',
    alternates: {
        canonical: '/trefelling-pris',
    },
    openGraph: {
        title: 'Trefelling pris | Trefellingsspesialisten AS',
        description: 'Prisguide for trefelling med eksempler og gratis befaring.',
        url: `${companyInfo.website}/trefelling-pris`,
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trefelling pris | Trefellingsspesialisten AS',
        description: 'Prisguide for trefelling med eksempler og gratis befaring.',
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

export default function PricingPage() {
    const {brand} = colors
    return (
        <PageShell>
            <BreadcrumbSchema
                items={[
                    {name: 'Forside', url: companyInfo.website},
                    {name: 'Trefelling pris', url: `${companyInfo.website}/trefelling-pris`}
                ]}
            />

            <PageHero title={siteText.pricing.title} intro={siteText.pricing.subtitle}/>

            <section className={cn(styles.container, 'pb-20')}>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {siteText.pricing.ranges.map((range) => (
                        <li key={range.label} className={cn(styles.card, 'p-7 flex flex-col gap-3 border-t-4', brand.border.ink)}>
                            <h2 className="m-0 font-semibold text-base">{range.label}</h2>
                            <p className="m-0 font-heading stretch-semi-condensed font-extrabold text-[30px] leading-tight">{range.price}</p>
                            <p className={cn('m-0', brand.text.inkMuted)}>{range.details}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={brand.background.sand}>
                <div className={cn(styles.container, 'py-20 grid grid-cols-1 lg:grid-cols-2 gap-14')}>
                    {[
                        {title: siteText.pricing.factorsTitle, items: siteText.pricing.factors},
                        {title: siteText.pricing.examplesTitle, items: siteText.pricing.examples},
                    ].map((list) => (
                        <div key={list.title} className="flex flex-col gap-6">
                            <h2 className={styles.subHeading}>{list.title}</h2>
                            <ul className={cn('flex flex-col', styles.ruleTop)}>
                                {list.items.map((item, index) => (
                                    <li key={item} className={cn('py-4 border-b grid grid-cols-[40px_1fr] gap-3', brand.border.inkSubtle)}>
                                        <span className={cn('font-heading font-bold text-[15px] pt-0.5', brand.text.emberDark)}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className={styles.body}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <CtaBand title={siteText.pricing.ctaTitle} text={siteText.pricing.ctaText}/>
        </PageShell>
    )
}
