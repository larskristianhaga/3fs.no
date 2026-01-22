import PreloadLink from '@/components/PreloadLink'
import type {Metadata} from 'next'
import { colors } from '@/config/colors'

export const metadata: Metadata = {
    title: 'Siden ble ikke funnet - 404',
    description: 'Siden du leter etter finnes ikke. Gå tilbake til forsiden for å finne informasjon om våre trefellingstjenester i Oslo, Akershus, Østfold og Buskerud.',
    robots: {
        index: false,
        follow: true,
    },
}

export default function NotFound() {
    return (
        <div className={`min-h-screen flex items-center justify-center ${colors.background.gray[50]}`}>
            <div className="text-center">
                <h2 className={`text-2xl font-semibold ${colors.text.gray[700]} mt-4`}>Du er kommet til en side som ikke finnes</h2>
                <PreloadLink
                    href="/"
                    className={`mt-6 inline-block ${colors.background.primary[600]} ${colors.text.white} px-6 py-3 rounded-lg ${colors.hover.background.primary[700]} transition-colors`}
                >
                    Gå tilbake
                </PreloadLink>
            </div>
        </div>
    )
}
