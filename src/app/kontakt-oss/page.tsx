import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'
import {container, pageHeading, subHeading, bodyText} from '@/config/styles'

const {brand} = colors

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
    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <Header/>

            <main>
                <section className={cn(container, 'pt-14 pb-10 flex flex-col gap-5')}>
                    <h1 className={pageHeading}>{siteText.contact.title}</h1>
                    {siteText.contact.intro.map((item) => (
                        <p key={item.paragraph} className={cn(bodyText, 'm-0 max-w-[60ch] text-lg text-pretty')}>
                            {item.paragraph}
                        </p>
                    ))}
                </section>

                <section className={cn(container, 'pb-24')}>
                    <div className={cn('max-w-[720px] rounded-lg p-[clamp(24px,4vw,40px)] shadow-[0_1px_0_rgba(23,32,26,.08),0_20px_50px_rgba(23,32,26,.08)]', brand.background.paper)}>
                        <ContactForm/>
                    </div>
                </section>

                <section className={brand.background.sand}>
                    <div className={cn(container, 'py-[72px] flex flex-col gap-5')}>
                        <h2 className={subHeading}>{siteText.contact.areasTitle}</h2>
                        <p className={cn(bodyText, 'm-0')}>{siteText.contact.areasText}</p>
                        <div className="flex flex-wrap gap-3">
                            {siteText.locations.areas.map((area) => (
                                <a
                                    key={area.slug}
                                    href={`/${area.slug}`}
                                    className={cn('inline-block px-4 py-2 rounded-md border font-semibold no-underline transition-colors', brand.background.cream, brand.border.inkSubtle, brand.hover.background.ink, brand.hover.text.cream, brand.focus.outline)}
                                >
                                    {area.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
