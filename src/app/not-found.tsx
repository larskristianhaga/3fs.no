import type {Metadata} from 'next'
import {PageHero, PageShell, styles} from '@/components/Brand'
import PreloadLink from '@/components/PreloadLink'
import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'
import {cn} from '@/lib/utils'

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
        <PageShell>
            <PageHero eyebrow="404" title={siteText.common.notFoundTitle} intro={siteText.common.notFoundText}>
                <div className="flex gap-3 flex-wrap pb-12">
                    <PreloadLink href="/" className={styles.primaryButton}>
                        {siteText.common.notFoundButton}
                    </PreloadLink>
                    <a href={`tel:${companyInfo.contact.phone.href}`} className={cn(styles.outlineButton)}>
                        {siteText.header.callUs} {companyInfo.contact.phone.display}
                    </a>
                </div>
            </PageHero>
        </PageShell>
    )
}
