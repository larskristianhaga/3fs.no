import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'

const {brand} = colors

/** Shared layout and typography building blocks for the brand design. */
export const container = 'max-w-[1280px] mx-auto px-6'
export const displayHeading = 'm-0 font-heading stretch-condensed font-black uppercase text-balance'
export const pageHeading = cn(displayHeading, 'text-[clamp(44px,6vw,88px)] leading-[.92]')
export const sectionHeading = cn(displayHeading, 'text-[clamp(44px,5.5vw,80px)] leading-[.92]')
export const subHeading = cn(displayHeading, 'text-[clamp(28px,3vw,40px)] leading-[.95]')
export const bodyText = cn('text-[17px] leading-relaxed', brand.text.inkSoft)
export const pillButton = cn('inline-flex items-center px-[26px] py-4 rounded-full font-semibold text-[17px] no-underline transition-colors', brand.focus.outline)
export const primaryButton = cn(pillButton, brand.background.ember, brand.text.ink, brand.hover.background.emberLight)
export const outlineButton = cn(pillButton, 'border-[1.5px]', brand.border.ink, brand.hover.background.ink, brand.hover.text.cream)
