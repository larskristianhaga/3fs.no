import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'

export const metadata: Metadata = {
    title: 'Kontakt oss - Gratis befaring og pristilbud',
    description: `Kontakt ${companyInfo.name} for profesjonell trefelling, beskjæring og arboriststjenester. Gratis befaring og uforpliktende pristilbud. Ring ${companyInfo.contact.phone.display} eller send oss en melding.`,
    keywords: `kontakt trefelling, gratis befaring, pristilbud trefelling, nødtjeneste trefelling, trefelling telefonnummer, ${companyInfo.serviceAreasText}`,
    alternates: {
        canonical: '/kontakt-oss',
    },
    openGraph: {
        title: `Kontakt oss - Gratis befaring og pristilbud | ${companyInfo.name}`,
        description: `Få ditt gratis pristilbud for profesjonelle trefellingstjenester. Vi betjener ${companyInfo.serviceAreasText}. Ring ${companyInfo.contact.phone.display}.`,
        images: [{
            url: '/images/beskjaert-tre.jpg',
            width: 1200,
            height: 630,
            alt: `Kontakt ${companyInfo.name}`,
        }],
        url: `${companyInfo.website}/kontakt-oss`,
        type: 'website',
        locale: 'nb_NO',
    },
}

export default function ContactPage() {
    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <Header/>

            <section className="relative py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className={`text-3xl font-bold ${colors.text.gray[900]} sm:text-5xl`}>
                            {siteText.contact.title}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center ${colors.text.gray[900]}`}>
                        {siteText.contact.intro.map((item) => (
                            <div>
                                <p className={`mt-4 text-base sm:text-xl ${colors.text.gray[600]} leading-relaxed`}>
                                    {item.paragraph}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ContactForm/>
                </div>
            </section>

            <section className="pb-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`${colors.background.primary[50]} rounded-lg p-6`}>
                        <h2 className={`text-xl font-bold ${colors.text.gray[900]} mb-2`}>
                            Vi dekker disse områdene
                        </h2>
                        <p className={`${colors.text.gray[700]} mb-4`}>
                            Les mer om tjenester i ditt nærområde:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {siteText.locations.areas.map((area) => (
                                <a
                                    key={area.slug}
                                    href={`/${area.slug}`}
                                    className={`inline-block px-3 py-2 rounded-md ${colors.background.white} ${colors.text.primary[700]} border ${colors.border.primary[200]} ${colors.hover.background.primary[100]} transition-colors`}
                                >
                                    {area.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
