import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'
import Eyebrow from '@/components/Eyebrow'
import {container, pageHeading, subHeading, bodyText, primaryButton} from '@/config/styles'

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

const {brand} = colors

export default function PricingPage() {
    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <BreadcrumbSchema
                items={[
                    {name: siteText.common.breadcrumbHome, url: companyInfo.website},
                    {name: siteText.pricing.breadcrumbLabel, url: `${companyInfo.website}/trefelling-pris`}
                ]}
            />
            <Header/>

            <main>
                <section className={cn(container, 'pt-14 pb-16 flex flex-col gap-6')}>
                    <Eyebrow className={brand.text.forest}>{companyInfo.name}</Eyebrow>
                    <h1 className={pageHeading}>{siteText.pricing.title}</h1>
                    <p className={cn(bodyText, 'max-w-[60ch] text-[19px] text-pretty')}>{siteText.pricing.subtitle}</p>
                </section>

                <section className={brand.background.sand}>
                    <div className={cn(container, 'py-[72px]')}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {siteText.pricing.ranges.map((range) => (
                                <div key={range.label} className={cn('border rounded-md p-7 flex flex-col gap-3', brand.background.paper, brand.border.inkSubtle)}>
                                    <h2 className={cn(subHeading, 'text-[clamp(22px,2.2vw,28px)]')}>{range.label}</h2>
                                    <p className={cn('m-0 font-heading stretch-condensed font-black text-2xl', brand.text.forest)}>{range.price}</p>
                                    <p className={cn('m-0 text-base leading-relaxed', brand.text.inkSoft)}>{range.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={cn(container, 'py-[72px] grid grid-cols-1 md:grid-cols-2 gap-12')}>
                    <div className="flex flex-col gap-5">
                        <h2 className={subHeading}>{siteText.pricing.factorsTitle}</h2>
                        <ul className="m-0 p-0 list-none">
                            {siteText.pricing.factors.map((factor) => (
                                <li key={factor} className={cn(bodyText, 'py-3 border-t', brand.border.inkSubtle)}>{factor}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className={subHeading}>{siteText.pricing.examplesTitle}</h2>
                        <ul className="m-0 p-0 list-none">
                            {siteText.pricing.examples.map((example) => (
                                <li key={example} className={cn(bodyText, 'py-3 border-t', brand.border.inkSubtle)}>{example}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className={cn(brand.background.ink, brand.text.cream)}>
                    <div className={cn(container, 'py-20 flex flex-col items-start gap-6')}>
                        <h2 className={subHeading}>{siteText.pricing.ctaTitle}</h2>
                        <p className={cn('m-0 max-w-[50ch] text-lg leading-relaxed', brand.text.mist)}>{siteText.pricing.ctaText}</p>
                        <a href="/kontakt-oss" className={primaryButton}>
                            {siteText.common.requestFreeQuoteCta}
                        </a>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
