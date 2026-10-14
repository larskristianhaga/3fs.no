import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type {Metadata} from 'next'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {companyInfo} from '@/config/company'

export const metadata: Metadata = {
    title: 'Personvernerklæring',
    description: `Hvordan ${companyInfo.name} behandler personopplysninger på nettsiden.`,
    alternates: {
        canonical: '/personvern',
    },
}

export default function PrivacyPage() {
    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <Header/>

            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className={`text-4xl font-bold ${colors.text.gray[900]} sm:text-5xl mb-6`}>
                        {siteText.privacy.title}
                    </h1>
                    <p className={`text-lg ${colors.text.gray[600]} mb-10`}>
                        {siteText.privacy.intro}
                    </p>

                    {siteText.privacy.sections.map((section) => (
                        <div key={section.heading} className="mb-8">
                            <h2 className={`text-2xl font-semibold ${colors.text.gray[900]} mb-3`}>
                                {section.heading}
                            </h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className={`${colors.text.gray[600]} mb-3`}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}

                    <p className={`${colors.text.gray[600]}`}>
                        {companyInfo.name}, org.nr. {companyInfo.organization.number}, {companyInfo.address.locality}.
                        E-post: <a href={`mailto:${companyInfo.contact.email}`} className={`${colors.text.primary[700]} underline`}>{companyInfo.contact.email}</a>
                    </p>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
