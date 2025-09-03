import Image from 'next/image'
import Link from 'next/link'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: 'Tree Services - Cutting, Removal & Arborist Services',
    description: 'Complete tree services including tree removal, cutting, pruning, stump grinding, and emergency services. Professional arborists serving residential and commercial properties.',
    keywords: 'tree removal, tree cutting, tree pruning, stump grinding, arborist, emergency tree service, tree trimming, tree care',
    openGraph: {
        title: 'Professional Tree Services | GreenCut Tree Services',
        description: 'Complete tree services including removal, cutting, pruning, and emergency services. Licensed and insured arborists.',
        images: ['/images/services-hero.jpg'],
    },
}

const services = [
    {
        id: 'tree-removal',
        title: 'Tree Removal',
        description: 'Safe and efficient removal of dangerous, diseased, or unwanted trees. We handle trees of all sizes with professional equipment and techniques.',
        features: [
            'Hazardous tree removal',
            'Dead or diseased tree removal',
            'Large tree removal',
            'Complete cleanup included',
            'Damage-free removal techniques'
        ],
        image: '/images/tree-removal-service.jpg',
        price: 'Starting from $300'
    },
    {
        id: 'tree-cutting',
        title: 'Tree Cutting & Pruning',
        description: 'Professional tree cutting and pruning services to maintain healthy, beautiful trees and ensure safety around your property.',
        features: [
            'Crown reduction and thinning',
            'Deadwood removal',
            'Structural pruning',
            'Aesthetic shaping',
            'Health improvement pruning'
        ],
        image: '/images/tree-cutting-service.jpg',
        price: 'Starting from $150'
    },
    {
        id: 'stump-grinding',
        title: 'Stump Grinding & Removal',
        description: 'Complete stump removal services to reclaim your yard space and eliminate tripping hazards and pest breeding grounds.',
        features: [
            'Stump grinding to below ground level',
            'Root system removal',
            'Cleanup and wood chip removal',
            'Site restoration',
            'Multiple stump discounts'
        ],
        image: '/images/stump-grinding-service.jpg',
        price: 'Starting from $100'
    },
    {
        id: 'emergency-services',
        title: 'Emergency Tree Services',
        description: '24/7 emergency response for storm damage, fallen trees, and hazardous situations. Quick response to protect your property.',
        features: [
            '24/7 emergency response',
            'Storm damage cleanup',
            'Fallen tree removal',
            'Emergency tree stabilization',
            'Insurance claim assistance'
        ],
        image: '/images/emergency-tree-service.jpg',
        price: 'Call for pricing'
    },
    {
        id: 'tree-health',
        title: 'Tree Health & Consultation',
        description: 'Professional arborist consultations to assess tree health, diagnose problems, and provide treatment recommendations.',
        features: [
            'Tree health assessments',
            'Disease diagnosis and treatment',
            'Pest management',
            'Soil analysis',
            'Tree preservation planning'
        ],
        image: '/images/tree-health-service.jpg',
        price: 'Starting from $75'
    },
    {
        id: 'land-clearing',
        title: 'Land Clearing',
        description: 'Complete land clearing services for construction, landscaping, or property development projects.',
        features: [
            'Selective clearing',
            'Complete lot clearing',
            'Brush removal',
            'Debris cleanup',
            'Site preparation'
        ],
        image: '/images/land-clearing-service.jpg',
        price: 'Quote on request'
    }
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative bg-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Professional Tree Services
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete tree care solutions for residential and commercial properties.
                            Licensed, insured, and committed to safety and excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <Image
                                        src={service.image}
                                        alt={`${service.title} - Professional tree service`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {service.title}
                                        </h2>
                                        <span className="text-green-600 font-semibold text-lg">
                      {service.price}
                    </span>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            What's Included:
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2} d="M5 13l4 4L19 7"/>
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center block"
                                    >
                                        Get Free Quote
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Why Choose Our Tree Services?
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Professional expertise you can trust for all your tree care needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                            <p className="text-gray-600 text-sm">
                                Fully licensed and insured for your complete protection and peace of mind.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
                            <p className="text-gray-600 text-sm">
                                Quick response times for all services, with 24/7 emergency availability.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Cleanup</h3>
                            <p className="text-gray-600 text-sm">
                                Full cleanup included with every service. We leave your property spotless.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Pricing</h3>
                            <p className="text-gray-600 text-sm">
                                Competitive, transparent pricing with free estimates and no hidden fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Service Areas
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Proudly serving the local community and surrounding areas
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900">Downtown</h3>
                            <p className="text-gray-600 text-sm">Residential & Commercial</p>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900">Suburbs</h3>
                            <p className="text-gray-600 text-sm">All Neighborhoods</p>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900">Rural Areas</h3>
                            <p className="text-gray-600 text-sm">Farms & Large Properties</p>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900">Industrial</h3>
                            <p className="text-gray-600 text-sm">Commercial Properties</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-green-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Ready to Schedule Your Tree Service?
                    </h2>
                    <p className="mt-4 text-xl text-green-100">
                        Get a free, no-obligation quote for any of our professional tree services
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
