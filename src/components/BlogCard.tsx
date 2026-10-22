import { colors } from '@/config/colors'
import {styles} from '@/components/Brand'
import PreloadLink from '@/components/PreloadLink'
import {siteText} from '@/content/text'
import {cn} from '@/lib/utils'

interface BlogCardProps {
    id: string
    title: string
    excerpt: string
    category: string
    readTime: string
    publishedDate: string
}

export default function BlogCard({
    id,
    title,
    excerpt,
    category,
    readTime,
    publishedDate
}: BlogCardProps) {
    const {brand} = colors
    const formattedDate = new Date(publishedDate).toLocaleDateString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <article className={cn(styles.card, 'p-7 flex flex-col gap-4 transition-transform hover:-translate-y-0.5')}>
            <div className={cn('flex items-center gap-3', styles.muted)}>
                <span className={styles.tag}>{category}</span>
                <span>{readTime}</span>
            </div>

            <h3 className={styles.cardHeading}>
                <PreloadLink href={`/blogg/${id}`} className={cn('no-underline', brand.text.ink, brand.hover.text.emberDark)}>
                    {title}
                </PreloadLink>
            </h3>

            <p className={styles.body}>{excerpt}</p>

            <div className="mt-auto flex items-center justify-between gap-3">
                <time dateTime={publishedDate} className={styles.muted}>{formattedDate}</time>
                <PreloadLink href={`/blogg/${id}`} className={styles.textLink} aria-label={`${siteText.common.readMore} ${title}`}>
                    {siteText.common.readMore}
                </PreloadLink>
            </div>
        </article>
    )
}
