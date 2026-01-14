'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import Image from "next/image"

interface NavLink {
    href: string
    label: string
}

export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const isActive = (path: string) => {
        return pathname === path
    }

    const navLinks: NavLink[] = [
        {href: '/', label: 'Forside'},
        {href: '/tjenester', label: 'Tjenester'},
        {href: '/om-oss', label: 'Om oss'},
    ]

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-green-800" aria-label="Trefellingsspesialisten AS hjem">
                            <Image
                                src="/images/logo.png"
                                alt="Trefellingsspesialisten AS logo"
                                width={100}
                                height={100}
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive(link.href)
                                            ? 'text-green-800'
                                            : 'text-gray-700 hover:text-green-600'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/kontakt-oss"
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive('/kontakt-oss')
                                        ? 'bg-green-700 text-white'
                                        : 'bg-green-600 text-white hover:bg-green-700'
                                }`}
                            >
                                Kontakt oss
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Åpne hovedmeny"
                        >
                            <span className="sr-only">{isMobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}</span>
                            {!isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                                        isActive(link.href)
                                            ? 'text-green-800 bg-green-50'
                                            : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/kontakt-oss"
                                className={`block px-3 py-2 text-base font-medium transition-colors ${
                                    isActive('/kontakt-oss')
                                        ? 'text-green-800 bg-green-50'
                                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Kontakt oss
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
