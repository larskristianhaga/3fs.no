import Image from 'next/image'
import type {Metadata} from 'next'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {companyInfo, yearsOfExperience} from '@/config/company'
import {Eyebrow, PageShell, styles} from '@/components/Brand'
import {cn} from '@/lib/utils'

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

const teamMembers = siteText.about.team.map((member, index) => ({
    name: member.name,
    role: member.role,
    image: `/images/om-oss/portrett-${index === 0 ? 'pe' : index === 1 ? 'ruud' : index === 2 ? 'olli' : 'bobby'}.jpg`,
}))

export default function AboutPage() {
    const {brand} = colors
    return (
        <PageShell>
            <section className={cn(styles.container, 'pt-14 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center')}>
                <div className="flex flex-col gap-6">
                    <Eyebrow>{siteText.home.hero.areas}</Eyebrow>
                    <h1 className={styles.pageTitle}>{siteText.about.title}</h1>
                    {siteText.about.intro.map((item) => (
                        <p key={item.paragraph} className={styles.body}>
                            {item.paragraph}
                        </p>
                    ))}
                    <p className={cn('m-0 font-heading font-bold text-[22px] [font-stretch:80%]', brand.text.forest)}>
                        {siteText.home.about.tagline}
                    </p>
                </div>
                <div className="relative aspect-[4/3]">
                    <Image
                        src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                        alt={siteText.about.imageAlt}
                        fill
                        className="object-cover rounded-md"
                        priority
                        quality={80}
                        sizes="(max-width: 1024px) 100vw, 620px"
                    />
                </div>
            </section>

            <section className={brand.background.sand}>
                <div className={cn(styles.container, 'py-20 flex flex-col gap-10')}>
                    <h2 className={styles.sectionHeading}>{siteText.common.aboutTeamTitle}</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <li key={member.name} className="flex flex-col gap-2">
                                <div className={cn('relative aspect-[4/5] rounded-md overflow-hidden mb-2', brand.background.sandDark)}>
                                    <Image
                                        src={member.image}
                                        alt={`${siteText.common.portraitOf} ${member.name}`}
                                        fill
                                        className="object-cover"
                                        quality={80}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className={styles.cardHeading}>{member.name}</h3>
                                <p className={cn('m-0', brand.text.inkMuted)}>{member.role}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={cn(brand.background.ink, brand.text.cream)}>
                <div className={cn(styles.container, 'py-20 flex flex-col gap-6')}>
                    <Eyebrow className={brand.text.ember}>{siteText.home.insurance.eyebrow}</Eyebrow>
                    <h2 className={styles.sectionHeading}>{siteText.home.insurance.title}</h2>
                    <p className={cn('m-0 max-w-[50ch] text-lg leading-relaxed', brand.text.mist)}>
                        {siteText.home.insurance.description}
                    </p>
                    <a
                        href={companyInfo.insurance.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(styles.primaryButton, 'self-start')}
                    >
                        {siteText.about.insurance.buttonText}
                    </a>
                </div>
            </section>
        </PageShell>
    )
}
