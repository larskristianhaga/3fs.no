import Image from 'next/image'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSchema from '@/components/FAQSchema'
import ServiceSchema from '@/components/ServiceSchema'
import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'
import {colors} from '@/config/colors'
import {AreaLinks, CtaBand, PageHero, PageShell, styles} from '@/components/Brand'
import PreloadLink from '@/components/PreloadLink'
import {cn} from '@/lib/utils'

interface ServicePageProps {
    params: Promise<{
        id: string
    }>
}

function getServiceById(id: string) {
    return siteText.services.items.find((service) => service.id === id)
}

export function generateStaticParams() {
    return siteText.services.items.map((service) => ({id: service.id}))
}

export async function generateMetadata({params}: ServicePageProps): Promise<Metadata> {
    const {id} = await params
    const service = getServiceById(id)

    if (!service) {
        return {title: 'Side ikke funnet'}
    }

    // The root layout's title template appends the company name
    const title = `${service.title} i Oslo og Akershus`
    const image = `/images/tjenester/${service.id}.jpg`
    const name = service.title.toLowerCase()

    return {
        title,
        description: service.metaDescription,
        keywords: `${name}, ${name} oslo, ${name} akershus, ${name} østfold, ${name} buskerud, ${companyInfo.name}`,
        alternates: {
            canonical: `/tjenester/${service.id}`,
        },
        openGraph: {
            title: `${title} | ${companyInfo.name}`,
            description: service.metaDescription,
            images: [{url: image, alt: service.imageAlt}],
            url: `${companyInfo.website}/tjenester/${service.id}`,
            type: 'website',
            locale: 'nb_NO',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${companyInfo.name}`,
            description: service.metaDescription,
            images: [image],
        },
    }
}

export default async function ServicePage({params}: ServicePageProps) {
    const {id} = await params
    const service = getServiceById(id)

    if (!service) {
        notFound()
    }

    const {brand} = colors
    const text = siteText.services
    const otherServices = text.items.filter((item) => item.id !== service.id)

    return (
        <PageShell>
            <BreadcrumbSchema
                items={[
                    {name: 'Forside', url: companyInfo.website},
                    {name: 'Tjenester', url: `${companyInfo.website}/tjenester`},
                    {name: service.title, url: `${companyInfo.website}/tjenester/${service.id}`}
                ]}
            />
            <ServiceSchema serviceName={service.title} serviceDescription={service.description}/>
            <FAQSchema questions={service.faq}/>

            <PageHero title={service.title} intro={service.intro}>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                    <PreloadLink href="/kontakt-oss" className={styles.primaryButton}>
                        {siteText.common.bookVisit}
                    </PreloadLink>
                    <PreloadLink href="/tjenester" className={styles.textLink}>
                        {text.allServicesLink}
                    </PreloadLink>
                </div>
            </PageHero>

            <section className={cn(styles.container, 'pb-20')}>
                <div className={cn('pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start', styles.ruleTop)}>
                    <div className={cn('relative aspect-[4/3] rounded-md overflow-hidden', brand.background.sandDark)}>
                        <Image
                            src={`/images/tjenester/${service.id}.jpg`}
                            alt={service.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 620px"
                            priority
                            quality={80}
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className={styles.subHeading}>{text.detailsTitle}</h2>
                        <p className={styles.body}>{service.description}</p>
                        {service.details.map((paragraph) => (
                            <p key={paragraph} className={styles.body}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className={cn(styles.container, 'pb-20')}>
                <div className="max-w-[880px] flex flex-col gap-6">
                    <h2 className={styles.subHeading}>{text.faqTitle} {service.title.toLowerCase()}</h2>
                    <ul className={cn('flex flex-col', styles.ruleTop)}>
                        {service.faq.map((item) => (
                            <li key={item.question} className={cn('border-b', brand.border.inkSubtle)}>
                                <details className="group">
                                    <summary className={cn('list-none [&::-webkit-details-marker]:hidden py-6 flex justify-between items-start gap-6 cursor-pointer', brand.hover.text.emberDark, brand.focus.outline)}>
                                        <h3 className="m-0 font-heading stretch-semi-condensed font-extrabold uppercase text-[22px] sm:text-[26px] leading-tight">
                                            {item.question}
                                        </h3>
                                        <span
                                            aria-hidden="true"
                                            className={cn('flex-none grid place-items-center w-9 h-9 rounded-full border-[1.5px] text-xl leading-none transition-transform group-open:rotate-45', brand.border.ink)}
                                        >
                                            +
                                        </span>
                                    </summary>
                                    <p className={cn(styles.body, 'pb-6 max-w-[70ch]')}>{item.answer}</p>
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={brand.background.sand}>
                <div className={cn(styles.container, 'py-16 grid grid-cols-1 lg:grid-cols-2 gap-12')}>
                    <div className="flex flex-col gap-5">
                        <h2 className={styles.subHeading}>{text.areasTitle} {service.title.toLowerCase()}</h2>
                        <p className={styles.body}>{text.areasText}</p>
                        <AreaLinks/>
                        <PreloadLink href="/trefelling-pris" className={cn(styles.textLink, 'self-start')}>
                            {siteText.common.pricingGuide}
                        </PreloadLink>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className={styles.subHeading}>{text.otherServicesTitle}</h2>
                        <div className="flex flex-wrap gap-2">
                            {otherServices.map((item) => (
                                <PreloadLink key={item.id} href={`/tjenester/${item.id}`} className={styles.chip}>
                                    {item.title}
                                </PreloadLink>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CtaBand title={text.ctaTitle} text={text.ctaText}/>
        </PageShell>
    )
}
