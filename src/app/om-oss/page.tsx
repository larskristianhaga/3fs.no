import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from "@/components/Header";
import TreeSpecialistCharacter from '@/components/TreeSpecialistCharacter'
import type {Metadata} from 'next'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'

export const metadata: Metadata = {
    title: 'Om oss - Over 15 års erfaring med trefelling',
    description: 'Lær mer om Trefellingsspesialisten AS - Over 15 års erfaring med profesjonell trepleie og trefelling. Vi holder til i Ås og betjener Oslo, Akershus, Østfold og Buskerud. Fullt forsikret og sertifiserte arborister.',
    keywords: 'om trefellingsfirma, profesjonelle arborister, sertifisert trefelling, erfaren trepleie, Ås, Oslo, Akershus, trefellingshistorie',
    alternates: {
        canonical: '/om-oss',
    },
    openGraph: {
        title: 'Om oss - Over 15 års erfaring med trefelling | Trefellingsspesialisten AS',
        description: 'Over 15 års erfaring med profesjonell trepleie og trefelling. Vi holder til i Ås og betjener Oslo, Akershus, Østfold og Buskerud. Fullt forsikret og sertifiserte arborister.',
        images: [{
            url: '/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg',
            width: 1200,
            height: 630,
            alt: 'Trefellingsspesialisten AS i arbeid',
        }],
        url: 'https://3fs.no/om-oss',
        type: 'website',
        locale: 'nb_NO',
    },
}

const teamMembers = siteText.about.team.map((member, index) => ({
    name: member.name,
    role: member.role,
    image: `/images/om-oss/portrett-${index === 0 ? 'pe' : index === 1 ? 'ruud' : index === 2 ? 'olli' : 'bobby'}.jpg`,
}))

export default function AboutPage() {
    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <Header/>

            <section className="relative  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="mb-8 lg:mb-0">
                            <div className="flex items-center gap-4 mb-6">
                                <TreeSpecialistCharacter width={80} height={80} />
                                <h1 className={`text-4xl font-bold ${colors.text.gray[900]} sm:text-5xl`}>
                                    {siteText.about.title}
                                </h1>
                            </div>
                            {siteText.about.intro.map((item) => (
                                <p className={`mt-4 text-xl ${colors.text.gray[600]}`}>
                                    {item.paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                                alt={siteText.about.imageAlt}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                                priority
                                quality={85}
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`py-16 ${colors.background.white}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={`Portrett av ${member.name}`}
                                        fill
                                        className="rounded-full object-cover shadow-lg"
                                        quality={85}
                                        sizes="192px"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className={`text-xl font-semibold ${colors.text.gray[900]}`}>{member.name}</h3>
                                <p className={`${colors.text.primary[600]} font-medium`}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className=" rounded-lg p-8">
                        <a
                            href="documents/forsikringssertifikat-ansvar-2025-2026.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center ${colors.background.primary[600]} ${colors.text.white} px-6 py-3 rounded-lg ${colors.hover.background.primary[700]} transition-colors font-semibold`}
                        >
                            {siteText.about.insurance.buttonText}
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
