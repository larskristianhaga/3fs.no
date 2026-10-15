import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from "@/components/Header";
import type {Metadata} from 'next'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {companyInfo, yearsOfExperience} from '@/config/company'
import {cn} from '@/lib/utils'
import {container, pageHeading, subHeading, bodyText, primaryButton} from '@/config/styles'

export const metadata: Metadata = {
    title: `Om oss - Over ${yearsOfExperience} års erfaring med trefelling`,
    description: `Lær mer om Trefellingsspesialisten AS - Over ${yearsOfExperience} års erfaring med profesjonell trepleie og trefelling. Vi holder til i Ås og betjener Oslo, Akershus, Østfold og Buskerud. Fullt forsikret og sertifiserte arborister.`,
    keywords: 'om trefellingsfirma, profesjonelle arborister, sertifisert trefelling, erfaren trepleie, Ås, Oslo, Akershus, trefellingshistorie',
    alternates: {
        canonical: '/om-oss',
    },
    openGraph: {
        title: `Om oss - Over ${yearsOfExperience} års erfaring med trefelling | Trefellingsspesialisten AS`,
        description: `Over ${yearsOfExperience} års erfaring med profesjonell trepleie og trefelling. Vi holder til i Ås og betjener Oslo, Akershus, Østfold og Buskerud. Fullt forsikret og sertifiserte arborister.`,
        images: [{
            url: '/images/tjenester/trefelling.jpg',
            width: 1280,
            height: 576,
            alt: 'Trefellingsspesialisten AS i arbeid',
        }],
        url: `${companyInfo.website}/om-oss`,
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: `Om oss - Over ${yearsOfExperience} års erfaring med trefelling | Trefellingsspesialisten AS`,
        description: `Over ${yearsOfExperience} års erfaring med profesjonell trepleie og trefelling. Vi holder til i Ås og betjener Oslo, Akershus, Østfold og Buskerud. Fullt forsikret og sertifiserte arborister.`,
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

const {brand} = colors

const teamMembers = siteText.about.team.map((member, index) => ({
    name: member.name,
    role: member.role,
    image: `/images/om-oss/portrett-${index === 0 ? 'pe' : index === 1 ? 'ruud' : index === 2 ? 'olli' : 'bobby'}.jpg`,
}))

export default function AboutPage() {
    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <Header/>

            <main>
                <section className={cn(container, 'pt-14 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center')}>
                    <div className="flex flex-col gap-6">
                        <h1 className={pageHeading}>{siteText.about.title}</h1>
                        {siteText.about.intro.map((item) => (
                            <p key={item.paragraph} className={cn(bodyText, 'm-0 text-lg text-pretty')}>
                                {item.paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="relative aspect-[3/2]">
                        <Image
                            src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                            alt={siteText.about.imageAlt}
                            fill
                            className="object-cover rounded-md"
                            priority
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 620px"
                        />
                    </div>
                </section>

                <section className={brand.background.sand}>
                    <div className={cn(container, 'py-[88px]')}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {teamMembers.map((member) => (
                                <div key={member.name} className="flex flex-col gap-4">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={member.image}
                                            alt={`${siteText.about.portraitAlt} ${member.name}`}
                                            fill
                                            className="rounded-md object-cover"
                                            quality={85}
                                            sizes="(max-width: 768px) 50vw, 300px"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <h3 className={cn(subHeading, 'text-[clamp(22px,2.2vw,28px)]')}>{member.name}</h3>
                                        <p className={cn('m-0 font-semibold', brand.text.forest)}>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={cn(brand.background.ink, brand.text.cream)}>
                    <div className={cn(container, 'py-20 flex justify-center')}>
                        <a
                            href={companyInfo.insurance.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={primaryButton}
                        >
                            {siteText.about.insurance.buttonText}
                        </a>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
