import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'
import {colors} from '@/config/colors'
import {CtaBand, PageHero, PageShell, styles} from '@/components/Brand'
import PreloadLink from '@/components/PreloadLink'
import {cn} from '@/lib/utils'

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
        // The root layout's title template appends the company name
        title: `Trefelling i ${area.name}`,
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

export default async function LocationPage({params}: LocationPageProps) {
    const {area: areaSlug} = await params
    const area = getAreaBySlug(areaSlug)

    if (!area) {
        notFound()
    }

    const {brand} = colors
    const relatedCases = siteText.blog.posts
        .filter((post) => post.category === 'Case')
        .filter((post) => {
            const haystack = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase()
            return haystack.includes(area.name.toLowerCase())
        })

    return (
        <PageShell>
            <BreadcrumbSchema
                items={[
                    {name: 'Forside', url: companyInfo.website},
                    {name: area.name, url: `${companyInfo.website}/${area.slug}`}
                ]}
            />

            <PageHero title={`${siteText.locations.title} ${area.name}`} intro={siteText.locations.subtitle}/>

            <section className={cn(styles.container, 'pb-20')}>
                <div className={cn('pt-10 grid grid-cols-1 lg:grid-cols-2 gap-14', styles.ruleTop)}>
                    <p className={cn(styles.body, 'text-[19px]')}>{area.intro}</p>
                    <div className="flex flex-col gap-6">
                        <h2 className={styles.subHeading}>{siteText.common.areaHelpTitle}</h2>
                        <ul className={cn('flex flex-col', styles.ruleTop)}>
                            {area.highlights.map((highlight) => (
                                <li key={highlight} className={cn('py-4 border-b flex gap-3', brand.border.inkSubtle)}>
                                    <span className={cn('mt-3 w-4 h-0.5 flex-none', brand.background.ember)} aria-hidden="true"/>
                                    <span className={styles.body}>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {relatedCases.length > 0 && (
                <section className={brand.background.sand}>
                    <div className={cn(styles.container, 'py-20 flex flex-col gap-8')}>
                        <h2 className={styles.subHeading}>{siteText.common.areaCasesTitle} {area.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {relatedCases.map((post) => (
                                <PreloadLink
                                    key={post.id}
                                    href={`/blogg/${post.id}`}
                                    className={cn(styles.card, 'p-7 flex flex-col gap-2 no-underline transition-transform hover:-translate-y-0.5', brand.text.ink, brand.focus.outline)}
                                >
                                    <h3 className={styles.cardHeading}>{post.title}</h3>
                                    <p className={cn('m-0', brand.text.inkMuted)}>{post.excerpt}</p>
                                </PreloadLink>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBand title={siteText.locations.ctaTitle} text={siteText.locations.ctaText}/>
        </PageShell>
    )
}
