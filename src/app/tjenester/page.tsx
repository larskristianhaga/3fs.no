import Image from 'next/image'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'

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
        url: 'https://3fs.no/tjenester',
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
    return (
        <div className={`min-h-screen ${colors.background.white}`}>
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
            <Header/>

            <section className="relative  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className={`text-3xl font-bold ${colors.text.gray[900]} sm:text-5xl`}>
                            {siteText.services.title}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div id={service.id} key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                                <div className="p-6 sm:p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className={`text-xl sm:text-2xl font-bold ${colors.text.gray[900]}`}>
                                            {service.title}
                                        </h2>
                                        <span className={`${colors.text.primary[600]} font-semibold text-lg`}>
                    </span>
                                    </div>
                                    <p className={`text-sm sm:text-base ${colors.text.gray[600]} mb-6 leading-relaxed`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`${colors.background.primary[50]} rounded-lg p-6`}>
                        <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-2`}>
                            Tjenester i ditt område
                        </h2>
                        <p className={`${colors.text.gray[700]} mb-4`}>
                            Les mer om hvor vi tilbyr trefelling og trepleie.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-4">
                            {siteText.locations.areas.map((area) => (
                                <a
                                    key={area.slug}
                                    href={`/${area.slug}`}
                                    className={`inline-block px-4 py-2 rounded-md ${colors.background.white} ${colors.text.primary[700]} border ${colors.border.primary[200]} ${colors.hover.background.primary[100]} transition-colors`}
                                >
                                    {area.name}
                                </a>
                            ))}
                        </div>
                        <a
                            href="/trefelling-pris"
                            className={`inline-block px-4 py-2 rounded-md ${colors.background.primary[600]} ${colors.text.white} ${colors.hover.background.primary[700]} transition-colors font-semibold`}
                        >
                            Se prisguide for trefelling
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
