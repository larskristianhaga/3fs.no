import PreloadLink from '@/components/PreloadLink'
import type {Metadata} from 'next'
import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'
import {siteText} from '@/content/text'
import {container, subHeading, primaryButton} from '@/config/styles'

export const metadata: Metadata = {
    title: 'Siden ble ikke funnet - 404',
    description: 'Siden du leter etter finnes ikke. Gå tilbake til forsiden for å finne informasjon om våre trefellingstjenester i Oslo, Akershus, Østfold og Buskerud.',
    robots: {
        index: false,
        follow: true,
    },
}

const {brand} = colors

export default function NotFound() {
    return (
        <div className={cn('min-h-screen flex items-center justify-center', brand.background.cream, brand.text.ink)}>
            <div className={cn(container, 'flex flex-col items-center text-center gap-6')}>
                <h2 className={subHeading}>{siteText.notFound.title}</h2>
                <PreloadLink href="/" className={primaryButton}>
                    Gå tilbake
                </PreloadLink>
            </div>
        </div>
    )
}
