import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: 'Kontakt oss | Trefellingsspesialisten AS',
    description: 'Contact GreenCut Tree Services for professional tree removal, cutting, and arborist services. Free quotes, emergency services available. Call (123) 456-7890.',
    keywords: 'contact tree service, free tree quote, tree removal quote, emergency tree service, tree service phone number',
    openGraph: {
        title: 'Contact GreenCut Tree Services - Free Quote',
        description: 'Get your free quote for professional tree services. Emergency services available 24/7.',
        images: ['/images/contact-hero.jpg'],
    },
}

const serviceAreas = [
    'Downtown District',
    'Riverside Heights',
    'Oak Valley',
    'Pine Ridge',
    'Maple Grove',
    'Cedar Hills',
    'Willow Creek',
    'Birch Park'
]

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
                            Ikke nøl med å ta kontakt med oss om du har noen spørsmål knyttet til vårt arbeid eller
                            tjenester.
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
