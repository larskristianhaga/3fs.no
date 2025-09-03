import Image from 'next/image'
import Link from 'next/link'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: 'Professional Tree Services & Woodcutting | GreenCut Tree Services',
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
            <Header />

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

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Why Choose Our Tree Services?
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Professional, safe, and reliable tree care for your property
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                            <p className="text-gray-600">
                                Fully licensed and insured for your peace of mind. All work is covered by comprehensive
                                insurance.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Services</h3>
                            <p className="text-gray-600">
                                24/7 emergency tree removal services. Storm damage? We're here to help when you need us
                                most.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Team</h3>
                            <p className="text-gray-600">
                                Over 15 years of experience with certified arborists. Professional equipment and safety
                                protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Our Tree Services
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Complete tree care solutions for residential and commercial properties
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/tree-removal.jpg"
                                alt="Tree removal service"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tree Removal</h3>
                                <p className="text-gray-600">
                                    Safe and efficient removal of dangerous, diseased, or unwanted trees from your
                                    property.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/tree-cutting.jpg"
                                alt="Tree cutting and pruning service"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tree Cutting & Pruning</h3>
                                <p className="text-gray-600">
                                    Professional tree cutting and pruning to maintain healthy, beautiful trees on your
                                    property.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/stump-grinding.jpg"
                                alt="Stump grinding service"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stump Grinding</h3>
                                <p className="text-gray-600">
                                    Complete stump removal and grinding services to reclaim your yard space.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/services"
                            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-green-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Ready to Get Started?
                    </h2>
                    <p className="mt-4 text-xl text-green-100">
                        Contact us today for a free estimate on your tree service needs
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get Free Quote
                        </Link>
                        <a
                            href="tel:+1234567890"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                        >
                            Call (123) 456-7890
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
