import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import PreloadLink from '@/components/PreloadLink'
import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'
import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'
import Eyebrow from '@/components/Eyebrow'
import {container, pageHeading, subHeading, bodyText, primaryButton} from '@/config/styles'

interface LocationPageProps {
    params: Promise<{
        area: string
    }>
}

function getAreaBySlug(slug: string) {
    return siteText.locations.areas.find((area) => area.slug === slug)
}

export function generateStaticParams() {
    return siteText.locations.areas.map((area) => ({area: area.slug}))
}

export async function generateMetadata({params}: LocationPageProps): Promise<Metadata> {
    const {area: areaSlug} = await params
    const area = getAreaBySlug(areaSlug)

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
        twitter: {
            card: 'summary_large_image',
            title: `Trefelling i ${area.name} | ${companyInfo.name}`,
            description: area.description,
            images: ['/images/tjenester/trefelling.jpg'],
        },
    }
}

const {brand} = colors

export default async function LocationPage({params}: LocationPageProps) {
    const {area: areaSlug} = await params
    const area = getAreaBySlug(areaSlug)

    if (!area) {
        notFound()
    }

    const relatedCases = siteText.blog.posts
        .filter((post) => post.category === 'Case')
        .filter((post) => {
            const haystack = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase()
            return haystack.includes(area.name.toLowerCase())
        })

    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <BreadcrumbSchema
                items={[
                    {name: 'Forside', url: companyInfo.website},
                    {name: area.name, url: `${companyInfo.website}/${area.slug}`}
                ]}
            />
            <Header/>

            <main>
                <section className={cn(container, 'pt-14 pb-16 flex flex-col gap-6')}>
                    <Eyebrow className={brand.text.forest}>{companyInfo.name}</Eyebrow>
                    <h1 className={pageHeading}>{siteText.locations.title} {area.name}</h1>
                    <p className={cn(bodyText, 'max-w-[60ch] text-[19px] text-pretty')}>{siteText.locations.subtitle}</p>
                </section>

                <section className={brand.background.sand}>
                    <div className={cn(container, 'py-[72px] grid grid-cols-1 lg:grid-cols-2 gap-12')}>
                        <p className={cn(bodyText, 'm-0 text-lg text-pretty')}>{area.intro}</p>
                        <div className="flex flex-col gap-5">
                            <h2 className={subHeading}>{siteText.locations.highlightsTitle}</h2>
                            <ul className="m-0 p-0 list-none">
                                {area.highlights.map((highlight) => (
                                    <li key={highlight} className={cn(bodyText, 'py-3 border-t', brand.border.inkSubtle)}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {relatedCases.length > 0 && (
                    <section className={container}>
                        <div className="py-[72px] flex flex-col gap-6">
                            <h2 className={subHeading}>{siteText.locations.casesTitle} {area.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {relatedCases.map((post) => (
                                    <PreloadLink
                                        key={post.id}
                                        href={`/blogg/${post.id}`}
                                        className={cn('block border rounded-md p-6 no-underline transition-colors', brand.background.paper, brand.border.inkSubtle, brand.hover.border.ink, brand.focus.outline)}
                                    >
                                        <h3 className="m-0 mb-2 text-lg font-semibold">{post.title}</h3>
                                        <p className={cn('m-0 text-[15px] leading-relaxed', brand.text.inkSoft)}>{post.excerpt}</p>
                                    </PreloadLink>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className={cn(brand.background.ink, brand.text.cream)}>
                    <div className={cn(container, 'py-20 flex flex-col items-start gap-6')}>
                        <h2 className={subHeading}>{siteText.locations.ctaTitle}</h2>
                        <p className={cn('m-0 max-w-[50ch] text-lg leading-relaxed', brand.text.mist)}>{siteText.locations.ctaText}</p>
                        <a href="/kontakt-oss" className={primaryButton}>
                            {siteText.common.contactCta}
                        </a>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
