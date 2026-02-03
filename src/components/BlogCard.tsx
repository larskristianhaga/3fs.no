import PreloadLink from '@/components/PreloadLink'
import { colors } from '@/config/colors'

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
        <article className={`${colors.background.white} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}>
            <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.background.primary[100]} ${colors.text.primary[700]}`}>
                        {category}
                    </span>
                    <span className={`text-sm ${colors.text.gray[500]}`}>
                        {readTime}
                    </span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold ${colors.text.gray[900]} mb-3 leading-tight`}>
                    <PreloadLink href={`/blogg/${id}`} className={`${colors.hover.text.primary[700]} transition-colors`}>
                        {title}
                    </PreloadLink>
                </h3>

                <p className={`${colors.text.gray[600]} mb-4 leading-relaxed`}>
                    {excerpt}
                </p>

                <div className="flex items-center justify-between">
                    <span className={`text-sm ${colors.text.gray[500]}`}>
                        {formattedDate}
                    </span>
                    <PreloadLink
                        href={`/blogg/${id}`}
                        className={`inline-flex items-center gap-2 ${colors.text.primary[600]} hover:underline font-medium`}
                    >
                        Les mer →
                    </PreloadLink>
                </div>
            </div>
        </article>
    )
}
