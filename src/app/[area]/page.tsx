import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'
import {colors} from '@/config/colors'

interface LocationPageProps {
    params: {
        area: string
    }
}

function getAreaBySlug(slug: string) {
    return siteText.locations.areas.find((area) => area.slug === slug)
}

export function generateStaticParams() {
    return siteText.locations.areas.map((area) => ({area: area.slug}))
}

export async function generateMetadata({params}: LocationPageProps): Promise<Metadata> {
    const area = getAreaBySlug(params.area)

    if (!area) {
        return {title: 'Side ikke funnet'}
    }

    return {
        title: `Trefelling i ${area.name} | ${companyInfo.name}`,
        description: area.description,
        keywords: `trefelling ${area.name.toLowerCase()}, beskjæring ${area.name.toLowerCase()}, stubbefresing ${area.name.toLowerCase()}, ${companyInfo.name}`,
        alternates: {
            canonical: `/${area.slug}`,
        },
        openGraph: {
            title: `Trefelling i ${area.name} | ${companyInfo.name}`,
            description: area.description,
            url: `${companyInfo.website}/${area.slug}`,
            type: 'website',
            locale: 'nb_NO',
        },
    }
}

export default function LocationPage({params}: LocationPageProps) {
    const area = getAreaBySlug(params.area)

    if (!area) {
        notFound()
    }

    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <BreadcrumbSchema
                items={[
                    {name: 'Forside', url: companyInfo.website},
                    {name: area.name, url: `${companyInfo.website}/${area.slug}`}
                ]}
            />
            <Header/>

            <section className={`${colors.background.primary[50]} py-16`}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className={`text-4xl sm:text-5xl font-extrabold ${colors.text.gray[900]} mb-4`}>
                        {siteText.locations.title} {area.name}
                    </h1>
                    <p className={`text-lg sm:text-xl ${colors.text.gray[600]}`}>
                        {siteText.locations.subtitle}
                    </p>
                </div>
            </section>

            <section className="py-14">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className={`text-lg ${colors.text.gray[700]} leading-relaxed mb-6`}>
                        {area.intro}
                    </p>
                    <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-4`}>Hva vi hjelper med</h2>
                    <ul className="space-y-3">
                        {area.highlights.map((highlight) => (
                            <li key={highlight} className={`text-base ${colors.text.gray[700]}`}>
                                - {highlight}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`${colors.background.primary[50]} rounded-lg p-8`}>
                        <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-3`}>
                            {siteText.locations.ctaTitle}
                        </h2>
                        <p className={`${colors.text.gray[700]} mb-6`}>{siteText.locations.ctaText}</p>
                        <a
                            href="/kontakt-oss"
                            className={`inline-block ${colors.background.primary[600]} ${colors.text.white} px-6 py-3 rounded-lg ${colors.hover.background.primary[700]} transition-colors font-semibold`}
                        >
                            Kontakt oss
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
