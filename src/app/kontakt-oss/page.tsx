import ContactForm from '@/components/ContactForm'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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

const businessHours = [
    {day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM'},
    {day: 'Saturday', hours: '8:00 AM - 4:00 PM'},
    {day: 'Sunday', hours: 'Emergency Only'},
    {day: 'Emergency Services', hours: '24/7 Available'}
]

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative bg-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Kontakt oss
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 text-gray-600 mb-8">
                        <p>
                            Alle oppdrag er ulike, og det kan være vanskelig å gi en konkret pris før vi vet litt mer.
                            I noen tilfeller kan vi gi en fastpris ved å se på bilder du kan legge ved i
                            kontaktskjemaet.
                            I andre tilfeller er det hensiktsmessig at vi møter opp på en uforpliktende befaring.
                        </p>
                        <p>
                            Vi hjelper deg gjerne, send oss en e-post i dag, så vi du bli kontaktet fortløpende for en
                            uforpliktende samtale eller avtale om en gratis befaring.
                        </p>
                        <p>
                            Ikke nøl med å ta kontakt med oss om du har noen spørsmål knyttet til vårt arbeid eller
                            tjenester.
                        </p>
                        <ContactForm/>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
