import Image from 'next/image'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import { cn } from '@/lib/utils'
import { container, pageHeading, subHeading, bodyText, primaryButton } from '@/config/styles'

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

const {brand} = colors

const services = siteText.services.items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: `/images/tjenester/${item.id}.jpg`,
}))

export default function ServicesPage() {
    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <BreadcrumbSchema
                items={[
                    { name: siteText.common.breadcrumbHome, url: companyInfo.website },
                    { name: siteText.services.title, url: `${companyInfo.website}/tjenester` }
                ]}
            />
            {siteText.services.items.map((service) => (
                <ServiceSchema
                    key={service.id}
                    serviceName={service.title}
                    serviceDescription={service.description}
                />
            ))}
            <Header/>

            <main>
                <section className={cn(container, 'pt-14 pb-10')}>
                    <h1 className={pageHeading}>{siteText.services.title}</h1>
                </section>

                <section className={cn(container, 'pb-24')}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div id={service.id} key={service.id} className={cn('scroll-mt-[70px] rounded-md overflow-hidden border', brand.background.paper, brand.border.inkSubtle)}>
                                <div className="relative h-64">
                                    <Image
                                        src={service.image}
                                        alt={siteText.services.items.find(s => s.id === service.id)?.imageAlt || service.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index < 2}
                                        quality={85}
                                        {...(index >= 2 && { loading: "lazy" as const })}
                                    />
                                </div>
                                <div className="p-6 sm:p-8 flex flex-col gap-4">
                                    <h2 className={subHeading}>{service.title}</h2>
                                    <p className={cn(bodyText, 'm-0')}>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={brand.background.sand}>
                    <div className={cn(container, 'py-[72px] flex flex-col gap-6')}>
                        <h2 className={subHeading}>{siteText.services.areasTitle}</h2>
                        <p className={cn(bodyText, 'm-0 max-w-[52ch]')}>
                            {siteText.services.areasText}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {siteText.locations.areas.map((area) => (
                                <a
                                    key={area.slug}
                                    href={`/${area.slug}`}
                                    className={cn('inline-block px-4 py-2 rounded-md border font-semibold no-underline transition-colors', brand.background.cream, brand.border.inkSubtle, brand.hover.background.ink, brand.hover.text.cream, brand.focus.outline)}
                                >
                                    {area.name}
                                </a>
                            ))}
                        </div>
                        <div>
                            <a href="/trefelling-pris" className={primaryButton}>
                                {siteText.services.pricingLink}
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
