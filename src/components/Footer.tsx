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
        <footer className={cn('pb-20 sm:pb-0', brand.background.ink, brand.text.mist)}>
            <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-8 flex flex-col gap-10">
                {/* The company name is one long word, so on wide screens its column sizes to fit it instead of overflowing into the next */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[auto_repeat(4,minmax(0,1fr))] gap-8 text-[15px] leading-relaxed">
                    <div className="flex flex-col gap-1.5">
                        <span className={cn('font-heading stretch-semi-condensed font-extrabold text-[22px] uppercase leading-tight', brand.text.cream)}>
                            {companyInfo.name}
                        </span>
                        <span>{companyInfo.address.street}, {companyInfo.address.postalCode} {companyInfo.address.locality}</span>
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
                                    <a href={`/tjenester/${service.id}`} className={link}>
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

            {/* Phones hide the header's call button, so keep call and contact one tap away */}
            <div className={cn('sm:hidden fixed inset-x-0 bottom-0 z-40 flex gap-2 p-3 border-t backdrop-blur-md', brand.background.creamTranslucent, brand.border.inkSubtle)}>
                <a
                    href={`tel:${companyInfo.contact.phone.href}`}
                    onClick={() => posthog.capture('contact_phone_clicked', {placement: 'mobile_call_bar'})}
                    className={cn('flex-1 flex items-center justify-center py-3 rounded-full font-semibold text-[15px]', brand.background.ink, brand.text.cream, brand.focus.outline)}
                >
                    {siteText.header.callUs} {companyInfo.contact.phone.display}
                </a>
                <a
                    href="/kontakt-oss"
                    onClick={() => posthog.capture('contact_page_cta_clicked', {placement: 'mobile_call_bar'})}
                    className={cn('flex-1 flex items-center justify-center py-3 rounded-full font-semibold text-[15px]', brand.background.ember, brand.text.ink, brand.focus.outline)}
                >
                    {siteText.footer.mobileBar.contact}
                </a>
            </div>
        </footer>
    )
}
