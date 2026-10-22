import type {Metadata} from 'next'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {companyInfo} from '@/config/company'
import {PageHero, PageShell, styles} from '@/components/Brand'
import {cn} from '@/lib/utils'

export const metadata: Metadata = {
    title: 'Personvernerklæring',
    description: `Hvordan ${companyInfo.name} behandler personopplysninger på nettsiden.`,
    alternates: {
        canonical: '/personvern',
    },
}

export default function PrivacyPage() {
    const {brand} = colors
    return (
        <PageShell>
            <PageHero title={siteText.privacy.title} intro={siteText.privacy.intro}/>

            <section className={cn(styles.container, 'pb-24')}>
                <div className={cn('max-w-[760px] flex flex-col gap-10 pt-10', styles.ruleTop)}>
                    {siteText.privacy.sections.map((section) => (
                        <div key={section.heading} className="flex flex-col gap-3">
                            <h2 className={styles.cardHeading}>{section.heading}</h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className={styles.body}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}

                    <p className={styles.body}>
                        {companyInfo.name}, org.nr. {companyInfo.organization.number}, {companyInfo.address.street}, {companyInfo.address.postalCode} {companyInfo.address.locality}.
                        E-post: <a href={`mailto:${companyInfo.contact.email}`} className={cn('underline underline-offset-[3px]', brand.text.ink, brand.hover.text.emberDark)}>{companyInfo.contact.email}</a>
                    </p>
                </div>
            </section>
        </PageShell>
    )
}
