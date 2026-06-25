import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'

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
}

export default function PricingPage() {
    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <BreadcrumbSchema
                items={[
                    {name: 'Forside', url: companyInfo.website},
                    {name: 'Trefelling pris', url: `${companyInfo.website}/trefelling-pris`}
                ]}
            />
            <Header/>

            <section className={`${colors.background.primary[50]} py-16`}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className={`text-4xl sm:text-5xl font-extrabold ${colors.text.gray[900]} mb-4`}>
                        {siteText.pricing.title}
                    </h1>
                    <p className={`text-lg sm:text-xl ${colors.text.gray[700]}`}>
                        {siteText.pricing.subtitle}
                    </p>
                </div>
            </section>

            <section className="py-14">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {siteText.pricing.ranges.map((range) => (
                            <div key={range.label} className={`${colors.background.white} border ${colors.border.gray[200]} rounded-lg p-6 shadow-sm`}>
                                <h2 className={`text-lg font-bold ${colors.text.gray[900]} mb-2`}>{range.label}</h2>
                                <p className={`text-xl font-semibold ${colors.text.primary[700]} mb-2`}>{range.price}</p>
                                <p className={`${colors.text.gray[600]}`}>{range.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-4`}>
                        {siteText.pricing.factorsTitle}
                    </h2>
                    <ul className="space-y-2">
                        {siteText.pricing.factors.map((factor) => (
                            <li key={factor} className={`${colors.text.gray[700]}`}>- {factor}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-4`}>
                        {siteText.pricing.examplesTitle}
                    </h2>
                    <ul className="space-y-2">
                        {siteText.pricing.examples.map((example) => (
                            <li key={example} className={`${colors.text.gray[700]}`}>- {example}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`${colors.background.primary[50]} rounded-lg p-8`}>
                        <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-3`}>
                            {siteText.pricing.ctaTitle}
                        </h2>
                        <p className={`${colors.text.gray[700]} mb-6`}>{siteText.pricing.ctaText}</p>
                        <a
                            href="/kontakt-oss"
                            className={`inline-block ${colors.background.primary[600]} ${colors.text.white} px-6 py-3 rounded-lg ${colors.hover.background.primary[700]} transition-colors font-semibold`}
                        >
                            Be om gratis befaring
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
