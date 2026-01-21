'use client'

import {usePathname} from 'next/navigation'
import {useState} from 'react'
import Image from "next/image"
import PreloadLink from './PreloadLink'
import {Button} from '@/components/ui/button'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {Menu} from 'lucide-react'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'

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
        {href: '/tjenester', label: siteText.header.nav.services},
        {href: '/om-oss', label: siteText.header.nav.about},
    ]

    return (
        <nav className={`${colors.background.white} shadow-sm border-b`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <PreloadLink href="/" className={`text-2xl font-bold ${colors.text.primary[800]}`}
                                     aria-label={siteText.header.aria.logo}>
                            <Image
                                src="/images/logo.png"
                                alt="Trefellingsspesialisten AS logo"
                                width={100}
                                height={100}
                                className="w-auto h-12 sm:h-14 lg:h-16 max-w-full"
                                priority
                                quality={90}
                                sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                            />
                        </PreloadLink>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <PreloadLink
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive(link.href)
                                            ? colors.text.primary[800]
                                            : `${colors.text.gray[700]} ${colors.hover.text.primary[600]}`
                                    }`}
                                >
                                    {link.label}
                                </PreloadLink>
                            ))}
                            <Button asChild>
                                <PreloadLink href="/kontakt-oss">
                                    {siteText.header.nav.contact}
                                </PreloadLink>
                            </Button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label={siteText.header.aria.menuOpen}>
                                    <Menu className="h-6 w-6"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {navLinks.map((link) => (
                                        <PreloadLink
                                            key={link.href}
                                            href={link.href}
                                            className={`px-3 py-2 text-base font-medium transition-colors rounded-md ${
                                                isActive(link.href)
                                                    ? `${colors.text.primary[800]} ${colors.background.primary[50]}`
                                                    : `${colors.text.gray[700]} ${colors.hover.text.primary[600]} ${colors.hover.background.gray[50]}`
                                            }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </PreloadLink>
                                    ))}
                                    <Button asChild className="w-full">
                                        <PreloadLink
                                            href="/kontakt-oss"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {siteText.header.nav.contact}
                                        </PreloadLink>
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}
