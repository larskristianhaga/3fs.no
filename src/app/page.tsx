import Image from 'next/image'
import Link from 'next/link'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: 'Trefellingsspesialisten AS | Trefelling, Beskjæring, Tomteryddning, stubbefresing | Oslo, Akershus, Østfold, og Buskerud',
    description: 'Professional tree cutting, removal, and arborist services. Licensed, insured, and experienced. Serving the local area with safe, reliable tree care solutions.',
    keywords: 'tree cutting, tree removal, arborist, tree services, woodcutter, tree pruning, emergency tree service',
    openGraph: {
        title: 'Professional Tree Services & Woodcutting | GreenCut Tree Services',
        description: 'Professional tree cutting, removal, and arborist services. Licensed, insured, and experienced.',
        images: ['/images/hero-tree-cutting.jpg'],
    },
}

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

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
                                    href="/services"
                                    className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors text-center"
                                >
                                    Ta kontakt med oss i dag
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/beskjaert-tre.jpg"
                                alt="TODO"
                                width={370}
                                height={500}
                                className="rounded-lg shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-green-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                            USP 4 STYKKER
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative bg-green-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                            HISTORIE + FLERE USP
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative bg-green-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                            Tjenester vi tilbyr
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative bg-green-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                            Kundeanmeldelser
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative bg-green-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                                Kontakt oss
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
