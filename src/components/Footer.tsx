import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'

export default function Footer() {
    return (
        <footer className={`${colors.background.gray[900]} ${colors.text.gray[300]} border-t-4 ${colors.border.primary[600]}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {companyInfo.name}
                        </h3>
                        <p className="text-sm">
                            Profesjonelle trefellingstjenester i {companyInfo.serviceAreasText}.
                        </p>
                        <div className="text-sm">
                            <p>Org.nr: {companyInfo.organization.number}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {siteText.footer.services.title}
                        </h3>
                        <ul className="text-sm space-y-2">
                            {siteText.services.items.map((service) => (
                                <li key={service.id}>
                                    <a
                                        href={`/tjenester#${service.id}`}
                                        className={`${colors.hover.text.primary[400]} transition-colors`}
                                    >
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {siteText.footer.contactSection.title}
                        </h3>
                        <div className="space-y-3 text-sm">
                             <div className="flex items-start">
                                <svg
                                    className={`w-5 h-5 mr-2 mt-0.5 ${colors.text.primary[400]} flex-shrink-0`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a
                                    href={`tel:${companyInfo.contact.phone.href}`}
                                    className={`${colors.hover.text.primary[400]} transition-colors`}
                                >
                                    {companyInfo.contact.phone.display}
                                </a>
                            </div>
                            <div className="flex items-start">
                                <svg
                                    className={`w-5 h-5 mr-2 mt-0.5 ${colors.text.primary[400]} flex-shrink-0`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href={`mailto:${companyInfo.contact.email}`}
                                    className={`${colors.hover.text.primary[400]} transition-colors`}
                                >
                                    {companyInfo.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {siteText.footer.locations.title}
                        </h3>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="/oslo" className={`${colors.hover.text.primary[400]} transition-colors`}>
                                    {siteText.footer.locations.oslo}
                                </a>
                            </li>
                            <li>
                                <a href="/akershus" className={`${colors.hover.text.primary[400]} transition-colors`}>
                                    {siteText.footer.locations.akershus}
                                </a>
                            </li>
                            <li>
                                <a href="/ostfold" className={`${colors.hover.text.primary[400]} transition-colors`}>
                                    {siteText.footer.locations.ostfold}
                                </a>
                            </li>
                            <li>
                                <a href="/buskerud" className={`${colors.hover.text.primary[400]} transition-colors`}>
                                    {siteText.footer.locations.buskerud}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
