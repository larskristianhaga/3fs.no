import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: '%s | Trefellingsspesialisten AS',
        default: 'Professional Tree Services & Woodcutting | Trefellingsspesialisten AS'
    },
    description: 'Professional tree cutting, removal, and arborist services. Licensed, insured, and experienced.',
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
