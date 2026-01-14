import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: '%s | Trefellingsspesialisten AS',
        default: 'Profesjonell Trefelling og Trepleie | Trefellingsspesialisten AS'
    },
    description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over 15 års erfaring med trefelling, beskjæring, stubbefresing og tomterydding. Forsikret og sertifisert.',
    keywords: 'trefelling, trepleie, arborist, beskjæring, stubbefresing, tomterydding, trefeller, Oslo, Akershus, Østfold, Buskerud',
    authors: [{name: 'Trefellingsspesialisten AS'}],
    creator: 'Trefellingsspesialisten AS',
    publisher: 'Trefellingsspesialisten AS',
    metadataBase: new URL('https://3fs.no'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'nb_NO',
        url: 'https://3fs.no',
        siteName: 'Trefellingsspesialisten AS',
        title: 'Profesjonell Trefelling og Trepleie | Trefellingsspesialisten AS',
        description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over 15 års erfaring med trefelling, beskjæring, stubbefresing og tomterydding.',
        images: [{
            url: '/images/beskjaert-tre.jpg',
            width: 1200,
            height: 630,
            alt: 'Trefellingsspesialisten AS - Profesjonell trefelling',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Profesjonell Trefelling og Trepleie | Trefellingsspesialisten AS',
        description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over 15 års erfaring.',
        images: ['/images/beskjaert-tre.jpg'],
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="no">
        <body className={inter.className}>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    )
}
