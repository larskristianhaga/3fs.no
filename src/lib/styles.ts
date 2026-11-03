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
