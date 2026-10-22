import type {Metadata} from 'next'
import ContactForm from "@/components/ContactForm";
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {AreaLinks, ContactDetails, Eyebrow, PageShell, styles} from '@/components/Brand'
import {cn} from '@/lib/utils'

export const metadata: Metadata = {
    title: 'Kontakt oss - Gratis befaring og pristilbud',
    description: `Kontakt ${companyInfo.name} for profesjonell trefelling, beskjæring og arboriststjenester. Gratis befaring og uforpliktende pristilbud. Ring ${companyInfo.contact.phone.display} eller send oss en melding.`,
    keywords: `kontakt trefelling, gratis befaring, pristilbud trefelling, nødtjeneste trefelling, trefelling telefonnummer, ${companyInfo.serviceAreasText}`,
    alternates: {
        canonical: '/kontakt-oss',
    },
    openGraph: {
        title: `Kontakt oss - Gratis befaring og pristilbud | ${companyInfo.name}`,
        description: `Få ditt gratis pristilbud for profesjonelle trefellingstjenester. Vi betjener ${companyInfo.serviceAreasText}. Ring ${companyInfo.contact.phone.display}.`,
        images: [{
            url: '/images/tjenester/trefelling.jpg',
            width: 1280,
            height: 576,
            alt: `Kontakt ${companyInfo.name}`,
        }],
        url: `${companyInfo.website}/kontakt-oss`,
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: `Kontakt oss - Gratis befaring og pristilbud | ${companyInfo.name}`,
        description: `Få ditt gratis pristilbud for profesjonelle trefellingstjenester. Vi betjener ${companyInfo.serviceAreasText}. Ring ${companyInfo.contact.phone.display}.`,
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

export default function ContactPage() {
    const {brand} = colors
    return (
        <PageShell>
            <section className={cn(styles.container, 'pt-14 pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-14 items-start')}>
                <div className="flex flex-col gap-6">
                    <Eyebrow className={brand.text.emberDark}>{siteText.home.booking.eyebrow}</Eyebrow>
                    <h1 className={styles.pageTitle}>{siteText.contact.title}</h1>
                    {siteText.contact.intro.map((item) => (
                        <p key={item.paragraph} className={styles.body}>
                            {item.paragraph}
                        </p>
                    ))}
                    <ContactDetails/>
                    <div className="flex flex-col gap-3 pt-4">
                        <h2 className="m-0 font-semibold text-base">{siteText.common.contactAreasTitle}</h2>
                        <p className={cn(styles.muted, 'm-0')}>{siteText.common.contactAreasText}</p>
                        <AreaLinks/>
                    </div>
                </div>

                <div className={cn('rounded-lg p-[clamp(24px,4vw,40px)] shadow-[0_1px_0_rgba(23,32,26,.08),0_20px_50px_rgba(23,32,26,.08)]', brand.background.paper)}>
                    <ContactForm/>
                </div>
            </section>
        </PageShell>
    )
}
