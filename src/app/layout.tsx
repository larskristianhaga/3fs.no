import type {Metadata, Viewport} from 'next'
import {companyInfo, yearsOfExperience} from '@/config/company'
import {SpeedInsights} from '@vercel/speed-insights/next'
import {Instrument_Sans} from 'next/font/google'
import localFont from 'next/font/local'
import StructuredData from '@/components/StructuredData'
import './globals.css'

// Archivo's Google Fonts latin file, cut down with fontTools to the axis ranges the site uses
// (weight 700–900, width 68–100%). That halves it to ~43 KB, and it renders the LCP heading.
// Using a lighter weight or wider stretch with font-heading needs a new cut of the file.
const archivo = localFont({
    src: './fonts/archivo-latin-bold-condensed.woff2',
    weight: '700 900',
    style: 'normal',
    declarations: [{prop: 'font-stretch', value: '68% 100%'}],
    variable: '--font-archivo',
    display: 'swap',
})

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    variable: '--font-instrument-sans',
    display: 'swap',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata: Metadata = {
    title: {
        template: '%s | Trefellingsspesialisten AS',
        default: 'Profesjonell Trefelling og Trepleie | Trefellingsspesialisten AS'
    },
    description: `Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over ${yearsOfExperience} års erfaring med trefelling, beskjæring, stubbefresing og tomterydding. Forsikret og sertifisert.`,
    keywords: 'trefelling, trepleie, arborist, beskjæring, stubbefresing, tomterydding, trefeller, Oslo, Akershus, Østfold, Buskerud',
    authors: [{name: 'Trefellingsspesialisten AS'}],
    creator: 'Trefellingsspesialisten AS',
    publisher: 'Trefellingsspesialisten AS',
    metadataBase: new URL(companyInfo.website),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'nb_NO',
        url: companyInfo.website,
        siteName: 'Trefellingsspesialisten AS',
        title: 'Profesjonell Trefelling og Trepleie | Trefellingsspesialisten AS',
        description: `Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over ${yearsOfExperience} års erfaring med trefelling, beskjæring, stubbefresing og tomterydding.`,
        images: [{
            url: '/images/tjenester/trefelling.jpg',
            width: 1280,
            height: 576,
            alt: 'Trefellingsspesialisten AS - Profesjonell trefelling',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Profesjonell Trefelling og Trepleie | Trefellingsspesialisten AS',
        description: `Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over ${yearsOfExperience} års erfaring med trefelling, beskjæring, stubbefresing og tomterydding.`,
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="nb" className={`${archivo.variable} ${instrumentSans.variable}`}>
        <body>
        <StructuredData/>
        {children}
        <SpeedInsights/>
        </body>
        </html>
    )
}
