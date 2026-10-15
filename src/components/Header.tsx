'use client'

import {usePathname} from 'next/navigation'
import {useState} from 'react'
import Image from "next/image"
import posthog from 'posthog-js'
import PreloadLink from './PreloadLink'
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import {Menu} from 'lucide-react'
import {siteText} from '@/content/text'
import {colors} from '@/config/colors'
import {companyInfo} from '@/config/company'
import {cn} from '@/lib/utils'

interface NavLink {
    href: string
    label: string
}

const {brand} = colors

export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const isActive = (path: string) => {
        return pathname === path
    }

    const navLinks: NavLink[] = [
        {href: '/tjenester', label: siteText.header.nav.services},
        {href: '/trefelling-pris', label: siteText.header.nav.pricing},
        {href: '/om-oss', label: siteText.header.nav.about},
        {href: '/faq', label: siteText.header.nav.faq},
        {href: '/kontakt-oss', label: siteText.header.nav.contact},
    ]

    const phoneLink = (placement: string, className?: string) => (
        <a
            href={`tel:${companyInfo.contact.phone.href}`}
            onClick={() => posthog.capture('contact_phone_clicked', {placement})}
            className={cn('flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-[15px] no-underline transition-colors', brand.background.ink, brand.text.cream, brand.focus.outline, className)}
        >
            {siteText.header.callUs} {companyInfo.contact.phone.display}
        </a>
    )

    return (
        <header className={cn('sticky top-0 z-50 backdrop-blur-md border-b', brand.background.creamTranslucent, brand.border.inkSubtle, brand.text.ink)}>
            <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-6">
                <PreloadLink href="/" className={cn('flex items-center gap-2.5 mr-auto no-underline', brand.text.ink)}
                             aria-label={siteText.header.aria.logo}>
                    <Image
                        src="/images/logo.png"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                        priority
                        quality={75}
                    />
                    <span className="font-heading stretch-semi-condensed font-extrabold text-lg sm:text-xl tracking-[.01em] uppercase">
                        {companyInfo.name.replace(/ AS$/, '')}
                    </span>
                </PreloadLink>

                <nav className="hidden lg:flex gap-[22px] text-[15px] font-medium" aria-label={siteText.header.aria.nav}>
                    {navLinks.map((link) => (
                        <PreloadLink
                            key={link.href}
                            href={link.href}
                            aria-current={isActive(link.href) ? 'page' : undefined}
                            onClick={link.href === '/kontakt-oss' ? () => posthog.capture('contact_page_cta_clicked', {placement: 'header_desktop'}) : undefined}
                            className={cn(
                                'no-underline underline-offset-[6px] decoration-2 transition-colors',
                                brand.hover.text.emberDark,
                                isActive(link.href) && 'underline decoration-ember',
                            )}
                        >
                            {link.label}
                        </PreloadLink>
                    ))}
                </nav>

                {phoneLink('header_desktop', 'hidden sm:flex')}

                <div className="lg:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <button
                                type="button"
                                aria-label={siteText.header.aria.menuOpen}
                                className={cn('grid place-items-center w-11 h-11 rounded-full border-[1.5px]', brand.border.ink, brand.focus.outline)}
                            >
                                <Menu className="h-5 w-5"/>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className={cn('w-[300px] sm:w-[400px]', brand.background.cream, brand.text.ink)}>
                            <SheetTitle className="sr-only">{siteText.header.aria.nav}</SheetTitle>
                            <nav className="flex flex-col gap-1 mt-8 px-4" aria-label={siteText.header.aria.nav}>
                                {navLinks.map((link) => (
                                    <PreloadLink
                                        key={link.href}
                                        href={link.href}
                                        aria-current={isActive(link.href) ? 'page' : undefined}
                                        className={cn(
                                            'py-3 border-b font-heading stretch-semi-condensed font-extrabold text-2xl uppercase no-underline',
                                            brand.border.inkSubtle,
                                            isActive(link.href) ? brand.text.emberDark : brand.text.ink,
                                        )}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false)
                                            if (link.href === '/kontakt-oss') {
                                                posthog.capture('contact_page_cta_clicked', {placement: 'header_mobile'})
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </PreloadLink>
                                ))}
                                {phoneLink('header_mobile', 'mt-6 justify-center')}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
