'use client'

import posthog from 'posthog-js'
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'

const {brand} = colors
const heading = cn('font-semibold', brand.text.cream)
const link = cn('transition-colors', brand.text.mist, brand.hover.text.cream)

export default function Footer() {
    return (
        <footer className={cn(brand.background.ink, brand.text.mist)}>
            <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-8 flex flex-col gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-[15px] leading-relaxed">
                    <div className="flex flex-col gap-1.5 lg:col-span-1">
                        <span className={cn('font-heading stretch-semi-condensed font-extrabold text-[22px] uppercase leading-tight', brand.text.cream)}>
                            {companyInfo.name}
                        </span>
                        <span>{companyInfo.address.locality}, {companyInfo.address.region}</span>
                        <span>{siteText.footer.orgNumber} {companyInfo.organization.number}</span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className={heading}>{siteText.footer.contactSection.title}</span>
                        <a
                            href={`tel:${companyInfo.contact.phone.href}`}
                            onClick={() => posthog.capture('contact_phone_clicked')}
                            className={link}
                        >
                            {companyInfo.contact.phone.display}
                        </a>
                        <a
                            href={`mailto:${companyInfo.contact.email}`}
                            onClick={() => posthog.capture('contact_email_clicked')}
                            className={link}
                        >
                            {companyInfo.contact.email}
                        </a>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className={heading}>{siteText.footer.services.title}</span>
                        <ul className="flex flex-col gap-1.5">
                            {siteText.services.items.map((service) => (
                                <li key={service.id}>
                                    <a href={`/tjenester#${service.id}`} className={link}>
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className={heading}>{siteText.footer.locations.title}</span>
                        <ul className="flex flex-col gap-1.5">
                            {siteText.locations.areas.map((area) => (
                                <li key={area.slug}>
                                    <a href={`/${area.slug}`} className={link}>
                                        {area.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className={heading}>{siteText.footer.safety.title}</span>
                        <a href={companyInfo.insurance.certificate} target="_blank" rel="noopener noreferrer" className={link}>
                            {siteText.footer.safety.certificate}
                        </a>
                        <span>{siteText.footer.safety.insuredThrough} {companyInfo.insurance.provider}</span>
                    </div>
                </div>

                <div className={cn('pt-5 border-t flex flex-wrap justify-between gap-4 text-sm', brand.border.creamSubtle, brand.text.inkFaint)}>
                    <span>© {new Date().getFullYear()} {companyInfo.name}</span>
                    <a href="/personvern" className={cn('transition-colors', brand.hover.text.cream)}>
                        {siteText.privacy.navLabel}
                    </a>
                </div>
            </div>
        </footer>
    )
}
