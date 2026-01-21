import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ofte stilte spørsmål - Svar på dine spørsmål om trefelling',
    description: 'Finn svar på ofte stilte spørsmål om trefelling, stubbefresing, beskjæring og andre tjenester. Vi har over 15 års erfaring med profesjonell trepleie i Oslo, Akershus, Østfold og Buskerud.',
    keywords: 'FAQ trefelling, spørsmål trefelling, pris trefelling, tillatelse trefelling, stubbefresing info, trefelling Oslo',
    alternates: {
        canonical: '/faq',
    },
    openGraph: {
        title: 'Ofte stilte spørsmål - Svar på dine spørsmål om trefelling | Trefellingsspesialisten AS',
        description: 'Finn svar på ofte stilte spørsmål om trefelling, stubbefresing, beskjæring og andre tjenester. Vi har over 15 års erfaring med profesjonell trepleie.',
        url: 'https://3fs.no/faq',
        type: 'website',
        locale: 'nb_NO',
    },
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
