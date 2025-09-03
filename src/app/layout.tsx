// src/app/layout.tsx
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: '%s | GreenCut Tree Services',
        default: 'Professional Tree Services & Woodcutting | GreenCut Tree Services'
    },
    description: 'Professional tree cutting, removal, and arborist services. Licensed, insured, and experienced.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
