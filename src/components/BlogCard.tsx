import PreloadLink from '@/components/PreloadLink'
import { colors } from '@/config/colors'
import { subHeading } from '@/config/styles'
import { cn } from '@/lib/utils'
import {siteText} from '@/content/text'

const { brand } = colors

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
    const formattedDate = new Date(publishedDate).toLocaleDateString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <article className={cn('flex flex-col rounded-md border p-6 sm:p-8', brand.background.paper, brand.border.inkSubtle)}>
            <div className="flex items-center gap-3 mb-4 text-sm">
                <span className={cn('font-semibold tracking-[.08em] uppercase', brand.text.emberDark)}>
                    {category}
                </span>
                <span className={brand.text.inkMuted}>{readTime}</span>
            </div>

            <h3 className={cn(subHeading, 'text-[clamp(24px,2.2vw,30px)] mb-3', brand.text.ink)}>
                <PreloadLink href={`/blogg/${id}`} className={cn('no-underline transition-colors', brand.hover.text.emberDark)}>
                    {title}
                </PreloadLink>
            </h3>

            <p className={cn('mb-6 leading-relaxed', brand.text.inkSoft)}>
                {excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4">
                <span className={cn('text-sm', brand.text.inkMuted)}>
                    {formattedDate}
                </span>
                <PreloadLink
                    href={`/blogg/${id}`}
                    className={cn('inline-flex items-center gap-2 font-semibold underline underline-offset-4 transition-colors', brand.text.ink, brand.hover.text.emberDark)}
                >
                    {siteText.common.readMore}
                </PreloadLink>
            </div>
        </article>
    )
}
