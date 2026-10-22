import Image from 'next/image'
import type {Metadata} from 'next'
import ContactForm from "@/components/ContactForm";
import ServicesShowcase from "@/components/ServicesShowcase";
import PreloadLink from "@/components/PreloadLink";
import {companyInfo} from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import { cn } from '@/lib/utils'
import {ContactDetails, Eyebrow, PageShell, styles} from '@/components/Brand'

export const metadata: Metadata = {
    title: 'Trefelling i Oslo og Akershus | Erfarne trefellere | Trefellingsspesialisten AS',
    description: 'Erfarne trefellere for trygg trefelling, beskjæring og stubbefresing i Oslo, Akershus, Østfold og Buskerud. Gratis befaring, rask respons og tydelig pris.',
    keywords: 'trefelling, trefellere, trefeller, trepleie, arborist, beskjæring, stubbefresing, tomterydding, Oslo, Akershus, Østfold, Buskerud, Ås',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Trefelling i Oslo og Akershus | Erfarne trefellere',
        description: 'Trygg trefelling, beskjæring og stubbefresing med erfarne trefellere. Gratis befaring og tydelig pristilbud.',
        images: [{
            url: '/images/tjenester/trefelling.jpg',
            width: 1280,
            height: 576,
            alt: 'Trefellingsspesialisten AS - Profesjonell trefelling og beskjæring',
        }],
        url: companyInfo.website,
        type: 'website',
        locale: 'nb_NO',
        siteName: 'Trefellingsspesialisten AS',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trefelling i Oslo og Akershus | Erfarne trefellere',
        description: 'Trygg trefelling, beskjæring og stubbefresing med erfarne trefellere. Gratis befaring og tydelig pristilbud.',
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

const {brand} = colors
const home = siteText.home
const {container, sectionHeading, primaryButton, outlineButton, displayHeading} = styles

export default function HomePage() {
    return (
        <PageShell>
                <section className={cn(container, 'pt-14 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center')}>
                    <div className="flex flex-col gap-7">
                        <Eyebrow className={brand.text.forest}>{home.hero.areas}</Eyebrow>
                        <h1 className={cn(displayHeading, 'text-[clamp(52px,7.2vw,108px)] leading-[.9] tracking-[-.01em]')}>
                            {home.hero.title} <span className={brand.text.forest}>{home.hero.titleAccent}</span>
                        </h1>
                        <p className={cn('m-0 max-w-[52ch] text-[19px] leading-relaxed text-pretty', brand.text.inkSoft)}>
                            {home.hero.description}
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <a href="#befaring" className={primaryButton}>{home.hero.cta}</a>
                            <a href="#tjenester" className={outlineButton}>
                                {home.hero.secondaryCta}
                            </a>
                        </div>
                    </div>
                    <div className="relative min-h-[420px] lg:min-h-[520px]">
                        <Image
                            src="/images/beskjaert-tre.jpg"
                            alt={home.hero.imageAlt}
                            fill
                            priority
                            quality={75}
                            sizes="(max-width: 1024px) 100vw, 620px"
                            className="object-cover rounded-md"
                        />
                        <a
                            href="#forsikring"
                            className={cn('absolute left-3 lg:-left-3 bottom-7 flex items-center gap-3.5 py-4 pl-4 pr-5 rounded-md shadow-[0_18px_40px_rgba(23,32,26,.25)] no-underline max-w-[320px] transition-transform hover:-translate-y-0.5', brand.background.cream, brand.text.ink, brand.focus.outline)}
                        >
                            <span className={cn('flex-none w-11 h-11 rounded-full grid place-items-center text-xl font-bold', brand.background.forest, brand.text.cream)} aria-hidden="true">✓</span>
                            <span className="flex flex-col gap-0.5">
                                <span className="font-semibold">{home.hero.insuranceBadge.title} {companyInfo.insurance.provider}</span>
                                <span className={cn('text-sm', brand.text.inkSoft)}>
                                    {home.insurance.card.coveragePrefix} {companyInfo.insurance.coverageShort} · {home.hero.insuranceBadge.linkText}
                                </span>
                            </span>
                        </a>
                    </div>
                </section>

                <section className={cn(container, 'pb-[72px]')}>
                    <ul className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-[1.5px] border-b', brand.border.ink)}>
                        {home.trustStrip.map((item) => (
                            <li key={item.title} className="py-5 pr-5 flex flex-col gap-1">
                                <span className="font-semibold">{item.title}</span>
                                <span className={cn('text-[15px]', brand.text.inkMuted)}>{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="tjenester" className={cn('scroll-mt-[70px]', brand.background.sand)}>
                    <div className={cn(container, 'py-[88px] flex flex-col gap-12')}>
                        <div className="flex justify-between items-end gap-6 flex-wrap">
                            <h2 className={sectionHeading}>{home.servicesSection.title}</h2>
                            <p className={cn('m-0 max-w-[44ch] text-[17px] leading-relaxed', brand.text.inkSoft)}>
                                {home.servicesSection.subtitle}
                            </p>
                        </div>
                        <ServicesShowcase/>
                        <div className="flex gap-6 flex-wrap font-semibold">
                            <PreloadLink href="/tjenester" className={cn('underline underline-offset-4', brand.hover.text.emberDark)}>
                                {home.servicesSection.allServicesLink}
                            </PreloadLink>
                            <PreloadLink href="/trefelling-pris" className={cn('underline underline-offset-4', brand.hover.text.emberDark)}>
                                {home.servicesSection.pricingLink}
                            </PreloadLink>
                        </div>
                    </div>
                </section>

                <section id="forsikring" className={cn('scroll-mt-[70px]', brand.background.ink, brand.text.cream)}>
                    <div className={cn(container, 'py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center')}>
                        <div className="flex flex-col gap-6">
                            <Eyebrow className={brand.text.ember}>{home.insurance.eyebrow}</Eyebrow>
                            <h2 className={sectionHeading}>{home.insurance.title}</h2>
                            <p className={cn('m-0 max-w-[50ch] text-lg leading-relaxed', brand.text.mist)}>
                                {home.insurance.description}
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                <a href={companyInfo.insurance.certificate} target="_blank" rel="noopener noreferrer" className={cn(primaryButton, 'text-base')}>
                                    {home.insurance.openButton}
                                </a>
                            </div>
                        </div>
                        <a
                            href={companyInfo.insurance.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={home.insurance.openButton}
                            className={cn('justify-self-center w-full max-w-[400px] no-underline -rotate-[2.5deg] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1', brand.text.ink, brand.focus.outline)}
                        >
                            <div className={cn('rounded px-8 py-9 shadow-[0_30px_60px_rgba(0,0,0,.45)] flex flex-col gap-[18px] aspect-[1/1.3]', brand.background.paper)}>
                                <div className="flex justify-between items-start">
                                    <span className="font-heading stretch-semi-condensed font-extrabold text-[22px] uppercase tracking-[.02em]">
                                        {home.insurance.card.title}
                                    </span>
                                    <span className={cn("font-bold text-[22px]", brand.text.insurer)}>{companyInfo.insurance.provider}</span>
                                </div>
                                <div className={cn('h-px', brand.background.sandDark)}/>
                                <div className="flex flex-col gap-1 text-sm">
                                    <span className={brand.text.inkMuted}>{home.insurance.card.holderLabel}</span>
                                    <span className="font-semibold">{companyInfo.name}</span>
                                    <span>{siteText.footer.orgNumber} {companyInfo.organization.number}</span>
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <span className={brand.text.inkMuted}>{home.insurance.card.coverageLabel}</span>
                                    <span className="font-semibold">{home.insurance.card.coverage}</span>
                                    <span>{home.insurance.card.coveragePrefix} {companyInfo.insurance.coverage}</span>
                                </div>
                                <div className="flex flex-col gap-2 mt-1.5" aria-hidden="true">
                                    <span className={cn('h-1.5 rounded-sm', brand.background.sand)}/>
                                    <span className={cn('h-1.5 w-[86%] rounded-sm', brand.background.sand)}/>
                                    <span className={cn('h-1.5 w-[70%] rounded-sm', brand.background.sand)}/>
                                </div>
                                <span className={cn('mt-auto text-sm font-semibold', brand.text.emberDark)}>{home.insurance.card.cta}</span>
                            </div>
                        </a>
                    </div>
                </section>

                <section id="om-oss" className="scroll-mt-[70px]">
                    <div className={cn(container, 'py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center')}>
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                                alt={home.about.imageAlt}
                                fill
                                quality={75}
                                sizes="(max-width: 1024px) 100vw, 620px"
                                loading="lazy"
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="flex flex-col gap-[22px]">
                            <h2 className={cn(displayHeading, 'text-[clamp(40px,4.6vw,68px)] leading-[.94]')}>{home.about.title}</h2>
                            <p className={cn('m-0 text-[17px] leading-relaxed text-pretty', brand.text.inkSoft)}>{home.about.description}</p>
                            <p className={cn('m-0 font-heading font-bold text-[22px] [font-stretch:80%]', brand.text.forest)}>{home.about.tagline}</p>
                            <PreloadLink href="/om-oss" className={cn('self-start font-semibold underline underline-offset-4', brand.hover.text.emberDark)}>
                                {home.about.link}
                            </PreloadLink>
                            <dl className={cn('grid grid-cols-3 gap-5 pt-5 border-t-[1.5px] m-0', brand.border.ink)}>
                                {home.about.stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col-reverse gap-0.5">
                                        <dt className={cn('text-sm', brand.text.inkMuted)}>{stat.label}</dt>
                                        <dd className="m-0 font-heading font-black text-[clamp(32px,4vw,44px)] leading-none [font-stretch:70%]">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                <section className={brand.background.sand}>
                    <div className={cn(container, 'py-[88px] flex flex-col gap-10')}>
                        <h2 className={cn(displayHeading, 'text-[clamp(40px,4.6vw,68px)] leading-[.94]')}>{home.testimonials.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {home.testimonials.items.map((text) => (
                                <figure key={text} className={cn('m-0 p-7 rounded-md flex flex-col gap-5', brand.background.cream)}>
                                    <blockquote className="m-0 text-[17px] leading-relaxed text-pretty">«{text}»</blockquote>
                                    <figcaption className={cn('mt-auto text-sm font-semibold', brand.text.inkMuted)}>
                                        {home.testimonials.attribution}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="befaring" className="scroll-mt-[70px]">
                    <div className={cn(container, 'py-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-14 items-start')}>
                        <div className="flex flex-col gap-6">
                            <Eyebrow className={brand.text.emberDark}>{home.booking.eyebrow}</Eyebrow>
                            <h2 className={sectionHeading}>{home.booking.title}</h2>
                            <p className={cn('m-0 max-w-[44ch] text-[17px] leading-relaxed', brand.text.inkSoft)}>{home.booking.description}</p>
                            <ContactDetails/>
                        </div>

                        <div className={cn('rounded-lg p-[clamp(24px,4vw,40px)] shadow-[0_1px_0_rgba(23,32,26,.08),0_20px_50px_rgba(23,32,26,.08)]', brand.background.paper)}>
                            <ContactForm/>
                        </div>
                    </div>
                </section>
        </PageShell>
    )
}
