import Link from 'next/link'
import { companyData } from '@/config/company'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {companyData.name}
                        </h3>
                        <p className="text-sm">
                            {companyData.description}
                        </p>
                        <div className="text-sm">
                            <p>Org.nr: {companyData.organizationNumber}</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Hurtiglenker
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Forside
                            </Link>
                            <Link
                                href="/tjenester"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Tjenester
                            </Link>
                            <Link
                                href="/om-oss"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Om oss
                            </Link>
                            <Link
                                href="/kontakt-oss"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Kontakt oss
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Tjenester
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/tjenester#trefelling"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Trefelling
                            </Link>
                            <Link
                                href="/tjenester#stubbefresing"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Stubbefresing
                            </Link>
                            <Link
                                href="/tjenester#beskjaering"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Beskjæring
                            </Link>
                            <Link
                                href="/tjenester#tomterydding"
                                className="text-sm hover:text-green-400 transition-colors"
                            >
                                Tomterydding
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Kontakt
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                                <svg 
                                    className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" 
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
                                    href={companyData.phone.link} 
                                    className="hover:text-green-400 transition-colors"
                                >
                                    {companyData.phone.formatted}
                                </a>
                            </div>
                            <div className="flex items-start">
                                <svg 
                                    className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" 
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
                                    href={companyData.email.link} 
                                    className="hover:text-green-400 transition-colors"
                                >
                                    {companyData.email.address}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} {companyData.name}. Alle rettigheter reservert.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <span>Laget med ❤️ i Norge</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
