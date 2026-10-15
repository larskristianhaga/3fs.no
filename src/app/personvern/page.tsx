import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Eyebrow from '@/components/Eyebrow'
import type {Metadata} from 'next'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {companyInfo} from '@/config/company'
import {cn} from '@/lib/utils'
import {container, pageHeading, subHeading, bodyText} from '@/config/styles'

export const metadata: Metadata = {
    title: 'Personvernerklæring',
    description: `Hvordan ${companyInfo.name} behandler personopplysninger på nettsiden.`,
    alternates: {
        canonical: '/personvern',
    },
}

const {brand} = colors

export default function PrivacyPage() {
    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <Header/>

            <main>
                <section className={cn(container, 'pt-14 pb-[88px] max-w-[860px]')}>
                    <div className="flex flex-col gap-6 mb-12">
                        <Eyebrow className={brand.text.forest}>{companyInfo.name}</Eyebrow>
                        <h1 className={pageHeading}>{siteText.privacy.title}</h1>
                        <p className={cn(bodyText, 'text-[19px] text-pretty')}>{siteText.privacy.intro}</p>
                    </div>

                    {siteText.privacy.sections.map((section) => (
                        <div key={section.heading} className={cn('py-8 border-t flex flex-col gap-3', brand.border.inkSubtle)}>
                            <h2 className={cn(subHeading, 'text-[clamp(24px,2.6vw,32px)]')}>
                                {section.heading}
                            </h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className={cn(bodyText, 'm-0')}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}

                    <p className={cn(bodyText, 'm-0 pt-8 border-t', brand.border.inkSubtle)}>
                        {companyInfo.name}, {siteText.privacy.orgLabel} {companyInfo.organization.number}, {companyInfo.address.locality}.
                        {siteText.privacy.emailLabel}: <a href={`mailto:${companyInfo.contact.email}`} className={cn('underline underline-offset-[3px]', brand.hover.text.emberDark)}>{companyInfo.contact.email}</a>
                    </p>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
