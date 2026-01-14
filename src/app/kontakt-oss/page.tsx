import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { companyData } from '@/config/company';

export const metadata: Metadata = {
    title: 'Kontakt oss - Gratis befaring og pristilbud',
    description: `Kontakt ${companyData.name} for profesjonell trefelling, beskjæring og arboriststjenester. Gratis befaring og uforpliktende pristilbud. Ring ${companyData.phone.formatted} eller send oss en melding.`,
    keywords: `kontakt trefelling, gratis befaring, pristilbud trefelling, nødtjeneste trefelling, trefelling telefonnummer, ${companyData.serviceArea.regions.join(', ')}`,
    alternates: {
        canonical: '/kontakt-oss',
    },
    openGraph: {
        title: `Kontakt oss - Gratis befaring og pristilbud | ${companyData.name}`,
        description: `Få ditt gratis pristilbud for profesjonelle trefellingstjenester. Vi betjener ${companyData.serviceArea.regions.join(', ')}. Ring ${companyData.phone.formatted}.`,
        images: [{
            url: '/images/beskjaert-tre.jpg',
            width: 1200,
            height: 630,
            alt: `Kontakt ${companyData.name}`,
        }],
        url: `${companyData.website.url}/kontakt-oss`,
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: `Kontakt oss - Gratis befaring og pristilbud | ${companyData.name}`,
        description: `Få ditt gratis pristilbud for profesjonelle trefellingstjenester. Ring ${companyData.phone.formatted}.`,
        images: ['/images/beskjaert-tre.jpg'],
    },
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Kontakt oss
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-900">
                        <p className="mt-4 text-xl text-gray-600">
                            Alle oppdrag er ulike, og det kan være vanskelig å gi en konkret pris før vi vet litt mer.
                            I noen tilfeller kan vi gi en fastpris ved å se på bilder du kan legge ved i
                            kontaktskjemaet.
                            I andre tilfeller er det hensiktsmessig at vi møter opp på en uforpliktende befaring.
                        </p>
                        <p className="mt-4 text-xl text-gray-600">
                            Vi hjelper deg gjerne, send oss en e-post i dag, så vi du bli kontaktet fortløpende for en
                            uforpliktende samtale eller avtale om en gratis befaring.
                        </p>
                        <p className="mt-4 text-xl text-gray-600">
                            Ikke nøl med å ta kontakt med oss om du har noen spørsmål knyttet til vårt arbeid eller tjenester!
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ContactForm/>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
