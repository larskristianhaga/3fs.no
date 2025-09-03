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
                                Professional Tree Services You Can Trust
                            </h1>
                            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                                Expert tree cutting, removal, and arborist services. Licensed, insured, and committed to
                                safety.
                                Serving our community with reliable tree care solutions for over 15 years.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center"
                                >
                                    Get Free Quote
                                </Link>
                                <Link
                                    href="/services"
                                    className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors text-center"
                                >
                                    Our Services
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/hero-tree-cutting.jpg"
                                alt="Professional tree cutting service in action"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                                priority
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
