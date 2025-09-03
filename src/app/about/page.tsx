// src/app/about/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from "@/components/Header";
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'About Us - Professional Tree Service Company',
    description: 'Learn about GreenCut Tree Services - over 15 years of professional tree care experience. Licensed, insured arborists committed to safety and excellence.',
    keywords: 'about tree service company, professional arborists, licensed tree service, experienced tree care, tree service history',
    openGraph: {
        title: 'About GreenCut Tree Services - Professional Arborists',
        description: 'Over 15 years of professional tree care experience. Licensed, insured arborists committed to safety and excellence.',
        images: ['/images/about-hero.jpg'],
    },
}

const teamMembers = [
    {
        name: 'Mike Johnson',
        role: 'Owner & Certified Arborist',
        experience: '15+ years',
        image: '/images/team-mike.jpg',
        description: 'ISA Certified Arborist with extensive experience in tree health assessment and hazardous tree removal.'
    },
    {
        name: 'Sarah Williams',
        role: 'Operations Manager',
        experience: '8+ years',
        image: '/images/team-sarah.jpg',
        description: 'Manages daily operations and customer relations, ensuring every project meets our high standards.'
    },
    {
        name: 'Tom Rodriguez',
        role: 'Senior Tree Technician',
        experience: '12+ years',
        image: '/images/team-tom.jpg',
        description: 'Expert in tree climbing and removal techniques, specializing in complex and challenging removals.'
    }
]

const certifications = [
    {
        name: 'ISA Certified Arborist',
        description: 'International Society of Arboriculture certification',
        image: '/images/cert-isa.png'
    },
    {
        name: 'Tree Care Industry Association',
        description: 'TCIA member in good standing',
        image: '/images/cert-tcia.png'
    },
    {
        name: 'Licensed & Insured',
        description: 'Fully licensed and insured for your protection',
        image: '/images/cert-insurance.png'
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative bg-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                                About GreenCut Tree Services
                            </h1>
                            <p className="mt-4 text-xl text-gray-600">
                                Over 15 years of professional tree care experience serving our local community
                                with dedication, expertise, and unwavering commitment to safety.
                            </p>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/about-hero.jpg"
                                alt="GreenCut Tree Services team at work"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="mb-8 lg:mb-0">
                            <Image
                                src="/images/company-history.jpg"
                                alt="GreenCut Tree Services company history"
                                width={500}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Founded in 2010, GreenCut Tree Services began as a small family business with a
                                    simple mission:
                                    to provide safe, professional, and reliable tree care services to our local
                                    community.
                                </p>
                                <p>
                                    What started with just one truck and a passion for arboriculture has grown into the
                                    area's
                                    most trusted tree service company. We've built our reputation on quality
                                    workmanship,
                                    honest pricing, and exceptional customer service.
                                </p>
                                <p>
                                    Today, we're proud to serve hundreds of satisfied customers each year, from
                                    homeowners
                                    needing a single tree removed to large commercial properties requiring comprehensive
                                    tree management programs.
                                </p>
                                <p>
                                    Our commitment remains the same: treating every tree, every property, and every
                                    customer
                                    with the respect and care they deserve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Our Mission & Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m5.5-2a11 11 0 11-6 0c0-1.1.9-2 2-2h2a2 2 0 012 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
                            <p className="text-gray-600">
                                Every job begins with a comprehensive safety assessment. We never compromise on safety
                                protocols to protect our team, your property, and your family.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Care</h3>
                            <p className="text-gray-600">
                                We're passionate about preserving healthy trees and promoting sustainable tree care
                                practices.
                                Every removal is carefully considered and alternatives explored.
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
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
                            <p className="text-gray-600">
                                Your satisfaction is our priority. We listen to your needs, provide honest assessments,
                                and deliver services that exceed your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Meet Our Team
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Experienced professionals dedicated to excellence in tree care
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={`${member.name} - ${member.role}`}
                                        fill
                                        className="rounded-full object-cover shadow-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-green-600 font-medium">{member.role}</p>
                                <p className="text-gray-500 text-sm mb-3">{member.experience} Experience</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Credentials */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Certifications & Credentials
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Professional qualifications you can trust
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div
                                    className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                                <p className="text-gray-600 text-sm">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-16 bg-green-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Our Track Record
                        </h2>
                        <p className="mt-4 text-xl text-green-100">
                            Numbers that speak to our experience and reliability
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">15+</div>
                            <div className="text-green-100">Years in Business</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">2,500+</div>
                            <div className="text-green-100">Trees Removed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">1,200+</div>
                            <div className="text-green-100">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">0</div>
                            <div className="text-green-100">Safety Incidents</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Brochure Download */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Learn More About Our Services
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Download our comprehensive company brochure to learn more about our services,
                            certifications, and commitment to excellence.
                        </p>
                        <a
                            href="/documents/greencut-company-brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                            Download Company Brochure (PDF)
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-green-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Ready to Work With Us?
                    </h2>
                    <p className="mt-4 text-xl text-green-100">
                        Experience the difference that professional tree care makes
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
