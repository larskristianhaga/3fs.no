import Image from 'next/image'
import Link from 'next/link'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: 'Trefellingsspesialisten AS | Trefelling, Beskjæring, Tomteryddning, stubbefresing | Oslo, Akershus, Østfold, og Buskerud',
    description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Erfarne fagfolk med over 15 års erfaring. Forsikret og sertifisert. Gratis befaring og konkurransedyktige priser.',
    keywords: 'trefelling, trepleie, arborist, beskjæring, stubbefresing, tomterydding, trefeller, klatring, Oslo, Akershus, Østfold, Buskerud, Ås',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Trefellingsspesialisten AS | Profesjonelle Trefellingstjenester',
        description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Erfarne fagfolk med over 15 års erfaring. Gratis befaring og konkurransedyktige priser.',
        images: [{
            url: '/images/beskjaert-tre.jpg',
            width: 1200,
            height: 630,
            alt: 'Trefellingsspesialisten AS - Profesjonell trefelling og beskjæring',
        }],
        url: 'https://3fs.no',
        type: 'website',
        locale: 'nb_NO',
        siteName: 'Trefellingsspesialisten AS',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trefellingsspesialisten AS | Profesjonelle Trefellingstjenester',
        description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over 15 års erfaring.',
        images: ['/images/beskjaert-tre.jpg'],
    },
}

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            {/* Hero Section */}
            <section className="relative bg-green-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                                Trefellingsspesialisten
                            </h1>
                            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                                Med erfarne trefellere, maskiner, og riktig utstyr kan du være sikker på at jobben blir
                                gjennomført på en trygg, effektiv måte, og til konkurransedyktige priser.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/kontakt-oss"
                                    className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors text-center"
                                >
                                    Ta kontakt med oss i dag
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/beskjaert-tre.jpg"
                                alt="Profesjonell trefelling og beskjæring"
                                width={370}
                                height={500}
                                className="rounded-lg shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 USPs Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Hvorfor velge oss?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Over 15 års erfaring</h3>
                            <p className="text-gray-600">
                                Vår erfarne klatrer har mer enn 15 års erfaring med klatring og trefelling av vanskelige trær.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fullt forsikret</h3>
                            <p className="text-gray-600">
                                Vi har full ansvarsforsikring som dekker eventuelle skader. Trygghet for deg som kunde.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Raskt og effektivt</h3>
                            <p className="text-gray-600">
                                Med moderne utstyr og erfarne fagfolk leverer vi raske og effektive løsninger.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Konkurransedyktige priser</h3>
                            <p className="text-gray-600">
                                Gratis befaring og uforpliktende pristilbud. Vi gir deg en rettferdig pris for jobben.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                                Vår historie
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Trefellingsspesialisten AS holder til i Ås kommune, og vi tar på oss oppdrag i Oslo,
                                    Akershus, Østfold og store deler av Buskerud.
                                </p>
                                <p>
                                    Med erfarne fagfolk og korrekt utstyr feller og beskjærer vi alle typer trær på en
                                    skånsom og sikker måte. Vår erfaren klatrer med mer enn 15 års erfaring er vant med å
                                    håndtere utfordrende situasjoner i høyden og har spesialutstyr for å ta ned spesielt
                                    vanskelige trær.
                                </p>
                                <p>
                                    Trær som står litt vrient til i hagen, inneklemt mellom hus, ledningsnett, veier eller
                                    andre hindringer er ikke noe problem - vi tar jobben!
                                </p>
                                <p>
                                    Ingen oppdrag er for store eller små. Vi hjelper deg med akkurat den delen av jobben som
                                    du ikke får til eller ønsker å gjøre selv. Når jobben er ferdig sørger vi alltid for å
                                    rydde opp, og forlater stedet like fint som vi fant det.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                                alt="Trefellingsspesialisten i arbeid"
                                fill
                                className="rounded-lg shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Tjenester vi tilbyr
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Vi tilbyr et komplett spekter av trefellingstjenester
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trefelling</h3>
                            <p className="text-gray-600 mb-4">
                                Vi utfører felling av alle typer trær, både små og store. Med erfarne fagfolk og riktig
                                utstyr håndterer vi selv de mest utfordrende situasjoner.
                            </p>
                            <Link href="/tjenester#trefelling" className="text-green-600 hover:text-green-700 font-medium">
                                Les mer →
                            </Link>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Stubbefresing</h3>
                            <p className="text-gray-600 mb-4">
                                Den mest skånsomme og effektive måten å fjerne stubber på. Vi freser ca. 20-30 cm under
                                bakken for å fjerne alle spor.
                            </p>
                            <Link href="/tjenester#stubbefresing" className="text-green-600 hover:text-green-700 font-medium">
                                Les mer →
                            </Link>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Beskjæring</h3>
                            <p className="text-gray-600 mb-4">
                                Store trær kan beskjæres, reduseres, formes eller toppes. Våre dyktige trefellere har
                                gjennomført beskjæringskurs.
                            </p>
                            <Link href="/tjenester#beskjaering" className="text-green-600 hover:text-green-700 font-medium">
                                Les mer →
                            </Link>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tomterydding</h3>
                            <p className="text-gray-600 mb-4">
                                Vi har alt vi trenger for å effektivt klargjøre og rydde en eiendom for trær, busker og
                                annen vegetasjon.
                            </p>
                            <Link href="/tjenester#tomterydding" className="text-green-600 hover:text-green-700 font-medium">
                                Les mer →
                            </Link>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Flishugging</h3>
                            <p className="text-gray-600 mb-4">
                                Miljøvennlig og effektiv måte å rydde kvist, greiner og mindre trestammer på. Flisen egner
                                seg godt som dekkbark.
                            </p>
                            <Link href="/tjenester#flishugging" className="text-green-600 hover:text-green-700 font-medium">
                                Les mer →
                            </Link>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Bortkjøring</h3>
                            <p className="text-gray-600 mb-4">
                                Vi hjelper gjerne med bortkjøring av flis, greiner og trestammer etter gjennomført arbeid.
                            </p>
                            <Link href="/tjenester#bortkjoring" className="text-green-600 hover:text-green-700 font-medium">
                                Les mer →
                            </Link>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            href="/tjenester"
                            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            Se alle tjenester
                        </Link>
                    </div>
                </div>
            </section>

            {/* Customer Feedback Section */}
            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Hva våre kunder sier
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Vi er stolte av tilbakemeldingene vi får fra fornøyde kunder
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                "Meget fornøyd med jobben! Profesjonelt utført, ryddig og til en god pris. Ville
                                anbefale Trefellingsspesialisten til alle som trenger hjelp med trefelling."
                            </p>
                            <p className="font-semibold text-gray-900">- Knut Hansen, Oslo</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                "Fantastisk service! De kom raskt, gjorde en grundig jobb og ryddet opp perfekt etterpå.
                                Treet sto veldig vanskelig til, men de fikste det uten problemer."
                            </p>
                            <p className="font-semibold text-gray-900">- Line Johansen, Ski</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                "Hyggelige folk som gjorde en utmerket jobb. God kommunikasjon fra start til slutt.
                                Anbefales på det sterkeste!"
                            </p>
                            <p className="font-semibold text-gray-900">- Erik Olsen, Ås</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-green-600 rounded-2xl shadow-xl overflow-hidden">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="p-8 lg:p-12">
                                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                                    Kontakt oss i dag
                                </h2>
                                <p className="text-green-100 text-lg mb-6">
                                    Vi tilbyr gratis befaring og uforpliktende pristilbud. Ta kontakt så hjelper vi deg!
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center text-white">
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <a href="tel:+4747642970" className="text-lg hover:underline">
                                            47 64 29 70
                                        </a>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:rs3felling@gmail.com" className="text-lg hover:underline">
                                            rs3felling@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-start text-white">
                                        <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-lg">
                                            Dekker Oslo, Akershus, Østfold og Buskerud
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href="/kontakt-oss"
                                    className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Send oss en melding
                                </Link>
                            </div>
                            <div className="relative h-64 lg:h-auto">
                                <Image
                                    src="/images/beskjaert-tre.jpg"
                                    alt="Kontakt Trefellingsspesialisten"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
