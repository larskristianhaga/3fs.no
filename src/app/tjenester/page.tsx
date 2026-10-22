import Image from 'next/image'
import type {Metadata} from 'next'
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import {AreaLinks, CtaBand, PageHero, PageShell, styles} from '@/components/Brand'
import PreloadLink from '@/components/PreloadLink'
import {cn} from '@/lib/utils'

export const metadata: Metadata = {
    title: 'Trefelling tjenester | Erfarne trefellere i Oslo og Akershus',
    description: 'Profesjonelle trefellere for trefelling, stubbefresing, beskjæring, tomterydding og flishugging i Oslo, Akershus, Østfold og Buskerud.',
    keywords: 'trefelling, trefellere, stubbefresing, stubbefjerning oslo, beskjæring, tomterydding, flishugging, trefelling oslo, trefelling follo, trepleie, arborist',
    alternates: {
        canonical: '/tjenester',
    },
    openGraph: {
        title: 'Trefelling tjenester | Erfarne trefellere',
        description: 'Komplette trefellingstjenester: felling, stubbefresing, beskjæring og opprydding.',
        images: [{
            url: '/images/tjenester/trefelling.jpg',
            width: 1280,
            height: 576,
            alt: 'Trefellingsspesialisten AS - Trefellingstjenester',
        }],
        url: `${companyInfo.website}/tjenester`,
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trefelling tjenester | Erfarne trefellere',
        description: 'Komplette trefellingstjenester: felling, stubbefresing, beskjæring og opprydding.',
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

const services = siteText.services.items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: `/images/tjenester/${item.id}.jpg`,
}))

export default function ServicesPage() {
    const {brand} = colors
    return (
        <PageShell>
            <BreadcrumbSchema
                items={[
                    { name: 'Forside', url: companyInfo.website },
                    { name: 'Tjenester', url: `${companyInfo.website}/tjenester` }
                ]}
            />
            {siteText.services.items.map((service) => (
                <ServiceSchema
                    key={service.id}
                    serviceName={service.title}
                    serviceDescription={service.description}
                />
            ))}

            <PageHero title={siteText.services.title} intro={siteText.home.servicesSection.subtitle}/>

            <section className={cn(styles.container, 'pb-20')}>
                <div className={cn('flex flex-col', styles.ruleTop)}>
                    {services.map((service, index) => (
                        <article
                            id={service.id}
                            key={service.id}
                            className={cn('scroll-mt-[90px] py-12 border-b grid grid-cols-1 lg:grid-cols-2 gap-10 items-center', brand.border.inkSubtle)}
                        >
                            <div className={cn('relative aspect-[4/3] rounded-md overflow-hidden', brand.background.sandDark, index % 2 === 1 && 'lg:order-2')}>
                                <Image
                                    src={service.image}
                                    alt={siteText.services.items.find(s => s.id === service.id)?.imageAlt || service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 620px"
                                    priority={index < 2}
                                    quality={80}
                                    {...(index >= 2 && { loading: "lazy" as const })}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className={cn('font-heading font-bold text-[15px]', brand.text.emberDark)}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h2 className={styles.subHeading}>
                                    <PreloadLink href={`/tjenester/${service.id}`} className={cn('no-underline transition-colors', brand.hover.text.emberDark, brand.focus.outline)}>
                                        {service.title}
                                    </PreloadLink>
                                </h2>
                                <p className={styles.body}>{service.description}</p>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    <PreloadLink href={`/tjenester/${service.id}`} className={styles.textLink}>
                                        {siteText.services.readMore} {service.title.toLowerCase()} →
                                    </PreloadLink>
                                    <PreloadLink href="/kontakt-oss" className={styles.textLink}>
                                        {siteText.home.servicesSection.quoteLink} {service.title.toLowerCase()} →
                                    </PreloadLink>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className={brand.background.sand}>
                <div className={cn(styles.container, 'py-16 flex flex-col gap-5')}>
                    <h2 className={styles.subHeading}>{siteText.common.areasTitle}</h2>
                    <p className={styles.body}>{siteText.common.areasText}</p>
                    <AreaLinks/>
                    <PreloadLink href="/trefelling-pris" className={cn(styles.textLink, 'self-start')}>
                        {siteText.common.pricingGuide}
                    </PreloadLink>
                </div>
            </section>

            <CtaBand title={siteText.common.servicesCtaTitle} text={siteText.common.servicesCtaText}/>
        </PageShell>
    )
}
