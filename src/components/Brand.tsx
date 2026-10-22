import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreloadLink from '@/components/PreloadLink'
import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'
import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'

const {brand} = colors

// Shared class strings for the brand design, so every page builds from the same pieces
const pillButton = cn('inline-flex items-center justify-center px-[26px] py-4 rounded-full font-semibold text-[17px] no-underline transition-colors', brand.focus.outline)
const displayHeading = 'm-0 font-heading stretch-condensed font-black uppercase text-balance'

export const styles = {
    container: 'max-w-[1280px] mx-auto px-6',
    narrow: 'max-w-[880px] mx-auto px-6',
    displayHeading,
    pageTitle: cn(displayHeading, 'text-[clamp(48px,6.5vw,96px)] leading-[.9] tracking-[-.01em]'),
    sectionHeading: cn(displayHeading, 'text-[clamp(44px,5.5vw,80px)] leading-[.92]'),
    subHeading: cn(displayHeading, 'text-[clamp(32px,3.6vw,52px)] leading-[.95]'),
    cardHeading: 'm-0 font-heading stretch-semi-condensed font-extrabold uppercase text-[26px] sm:text-[30px] leading-tight',
    lead: cn('m-0 max-w-[60ch] text-[19px] leading-relaxed text-pretty', brand.text.inkSoft),
    body: cn('m-0 text-[17px] leading-relaxed text-pretty', brand.text.inkSoft),
    muted: cn('text-sm', brand.text.inkMuted),
    pillButton,
    primaryButton: cn(pillButton, brand.background.ember, brand.text.ink, brand.hover.background.emberLight),
    outlineButton: cn(pillButton, 'border-[1.5px]', brand.border.ink, brand.text.ink, brand.hover.background.ink, brand.hover.text.cream),
    textLink: cn('font-semibold underline underline-offset-4 transition-colors', brand.hover.text.emberDark),
    chip: cn('inline-flex items-center px-4 py-2.5 rounded-full border-[1.5px] text-[15px] font-medium no-underline transition-colors', brand.background.white, brand.border.field, brand.text.ink, brand.hover.background.ink, brand.hover.text.cream, brand.focus.outline),
    tag: cn('inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold', brand.background.forest, brand.text.cream),
    ruleTop: cn('border-t-[1.5px]', brand.border.ink),
    card: cn('rounded-md', brand.background.paper),
} as const

export function Eyebrow({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={cn('flex items-center gap-2.5 text-sm font-semibold tracking-[.08em] uppercase', brand.text.forest, className)}>
            <span className={cn('w-7 h-0.5 flex-none', brand.background.ember)} aria-hidden="true"/>
            {children}
        </div>
    )
}

// Cream page with the shared header and footer
export function PageShell({children}: {children: React.ReactNode}) {
    return (
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

interface PageHeroProps {
    title: React.ReactNode
    eyebrow?: React.ReactNode
    intro?: React.ReactNode
    children?: React.ReactNode
}

export function PageHero({title, eyebrow = siteText.home.hero.areas, intro, children}: PageHeroProps) {
    return (
        <section className={cn(styles.container, 'pt-14 pb-12 flex flex-col gap-6')}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className={styles.pageTitle}>{title}</h1>
            {intro && <p className={styles.lead}>{intro}</p>}
            {children}
        </section>
    )
}

interface CtaBandProps {
    title: string
    text: string
    href?: string
    label?: string
}

// Dark closing band that points visitors to a free site visit (befaring)
export function CtaBand({title, text, href = '/kontakt-oss', label = siteText.common.bookVisit}: CtaBandProps) {
    return (
        <section className={cn(brand.background.ink, brand.text.cream)}>
            <div className={cn(styles.container, 'py-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8')}>
                <div className="flex flex-col gap-5">
                    <Eyebrow className={brand.text.ember}>{siteText.home.booking.eyebrow}</Eyebrow>
                    <h2 className={styles.sectionHeading}>{title}</h2>
                    <p className={cn('m-0 max-w-[50ch] text-lg leading-relaxed', brand.text.mist)}>{text}</p>
                </div>
                <PreloadLink href={href} className={cn(styles.primaryButton, 'self-start lg:self-auto')}>
                    {label}
                </PreloadLink>
            </div>
        </section>
    )
}

export function AreaLinks() {
    return (
        <div className="flex flex-wrap gap-2">
            {siteText.locations.areas.map((area) => (
                <PreloadLink key={area.slug} href={`/${area.slug}`} className={styles.chip}>
                    {area.name}
                </PreloadLink>
            ))}
        </div>
    )
}

export function ContactDetails() {
    const {booking} = siteText.home
    return (
        <div className={cn('flex flex-col gap-3.5 pt-6 text-base', styles.ruleTop)}>
            <div className="flex flex-col gap-0.5">
                <span className={styles.muted}>{booking.phoneLabel}</span>
                <a href={`tel:${companyInfo.contact.phone.href}`} className={cn('font-heading stretch-semi-condensed font-extrabold text-[30px] no-underline', brand.text.ink, brand.hover.text.emberDark)}>
                    {companyInfo.contact.phone.display}
                </a>
            </div>
            <div className="flex flex-col gap-0.5">
                <span className={styles.muted}>{booking.emailLabel}</span>
                <a href={`mailto:${companyInfo.contact.email}`} className={cn('underline underline-offset-[3px]', brand.hover.text.emberDark)}>
                    {companyInfo.contact.email}
                </a>
            </div>
            <div className="flex flex-col gap-0.5">
                <span className={styles.muted}>{booking.locationLabel}</span>
                <span>{companyInfo.address.street}, {companyInfo.address.postalCode} {companyInfo.address.locality}</span>
            </div>
        </div>
    )
}
