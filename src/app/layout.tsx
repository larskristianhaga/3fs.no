import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'
import StructuredData from '@/components/StructuredData'
import './globals.css'
import { companyData } from '@/config/company'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: `%s | ${companyData.name}`,
        default: `Profesjonell Trefelling og Trepleie | ${companyData.name}`
    },
    description: `${companyData.description} Over 15 års erfaring med trefelling, beskjæring, stubbefresing og tomterydding. Forsikret og sertifisert.`,
    keywords: `trefelling, trepleie, arborist, beskjæring, stubbefresing, tomterydding, trefeller, ${companyData.serviceArea.regions.map(r => r.name).join(', ')}`,
    authors: [{name: companyData.name}],
    creator: companyData.name,
    publisher: companyData.name,
    metadataBase: new URL(companyData.website.url),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'nb_NO',
        url: companyData.website.url,
        siteName: companyData.name,
        title: `Profesjonell Trefelling og Trepleie | ${companyData.name}`,
        description: `${companyData.description} Over 15 års erfaring med trefelling, beskjæring, stubbefresing og tomterydding.`,
        images: [{
            url: '/images/beskjaert-tre.jpg',
            width: 1200,
            height: 630,
            alt: `${companyData.name} - Profesjonell trefelling`,
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Profesjonell Trefelling og Trepleie | ${companyData.name}`,
        description: `${companyData.description} Over 15 års erfaring.`,
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
        <StructuredData/>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    )
}
