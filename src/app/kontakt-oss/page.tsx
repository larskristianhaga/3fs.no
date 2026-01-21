import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'

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
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                            {siteText.contact.title}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-900">
                        <p className="mt-4 text-base sm:text-xl text-gray-600 leading-relaxed">
                            {siteText.contact.intro.paragraph1}
                        </p>
                        <p className="mt-4 text-base sm:text-xl text-gray-600 leading-relaxed">
                            {siteText.contact.intro.paragraph2}
                        </p>
                        <p className="mt-4 text-base sm:text-xl text-gray-600 leading-relaxed">
                            {siteText.contact.intro.paragraph3}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ContactForm/>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
