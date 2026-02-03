import type {Metadata} from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreloadLink from '@/components/PreloadLink'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'

interface PageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    return siteText.blog.posts.map((post) => ({
        id: post.id,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = siteText.blog.posts.find(p => p.id === params.id)

    if (!post) {
        return {
            title: 'Artikkel ikke funnet',
        }
    }

    return {
        title: `${post.title} | Trefellingsspesialisten Blogg`,
        description: post.excerpt,
        keywords: `trefelling, trepleie, ${post.category.toLowerCase()}, ${post.title.toLowerCase()}`,
        alternates: {
            canonical: `/blogg/${post.id}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://3fs.no/blogg/${post.id}`,
            type: 'article',
            locale: 'nb_NO',
        },
    }
}

export default function BlogPostPage({ params }: PageProps) {
    const post = siteText.blog.posts.find(p => p.id === params.id)

    if (!post) {
        notFound()
    }

    const formattedDate = new Date(post.publishedDate).toLocaleDateString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const relatedPosts = siteText.blog.posts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 3)

    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <Header />

            {/* Breadcrumb */}
            <div className={`${colors.background.gray[50]} py-4`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm">
                        <PreloadLink href="/blogg" className={`${colors.text.primary[600]} hover:underline`}>
                            Blogg
                        </PreloadLink>
                        <span className={colors.text.gray[500]}>›</span>
                        <span className={colors.text.gray[600]}>{post.title}</span>
                    </div>
                </div>
            </div>

            {/* Article Header */}
            <article className="py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.background.primary[100]} ${colors.text.primary[700]}`}>
                                {post.category}
                            </span>
                            <time className={`text-sm ${colors.text.gray[500]}`}>
                                {formattedDate}
                            </time>
                            <span className={`text-sm ${colors.text.gray[500]}`}>
                                • {post.readTime}
                            </span>
                        </div>

                        <h1 className={`text-4xl sm:text-5xl font-extrabold ${colors.text.gray[900]} mb-4 leading-tight`}>
                            {post.title}
                        </h1>

                        <p className={`text-xl ${colors.text.gray[600]} leading-relaxed`}>
                            {post.excerpt}
                        </p>
                    </header>

                    {/* Article Content */}
                    <div className={`prose prose-lg max-w-none mb-12`}>
                        <div className={`${colors.text.gray[700]} whitespace-pre-wrap leading-relaxed text-lg`}>
                            {post.content}
                        </div>
                    </div>

                    {/* Related Articles */}
                    {relatedPosts.length > 0 && (
                        <section className={`mt-16 pt-12 border-t ${colors.border.gray[200]}`}>
                            <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-8`}>
                                Relaterte artikler
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((related) => (
                                    <article key={related.id} className={`${colors.background.gray[50]} p-6 rounded-lg hover:shadow-md transition-shadow`}>
                                        <h3 className={`text-lg font-semibold ${colors.text.gray[900]} mb-2`}>
                                            <PreloadLink href={`/blogg/${related.id}`} className={`${colors.hover.text.primary[700]} transition-colors`}>
                                                {related.title}
                                            </PreloadLink>
                                        </h3>
                                        <p className={`text-sm ${colors.text.gray[600]} mb-4`}>
                                            {related.excerpt}
                                        </p>
                                        <PreloadLink href={`/blogg/${related.id}`} className={`text-sm ${colors.text.primary[600]} hover:underline font-medium`}>
                                            Les mer →
                                        </PreloadLink>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <section className={`mt-16 pt-12 ${colors.background.primary[50]} px-8 py-12 rounded-lg text-center`}>
                        <h2 className={`text-2xl font-bold ${colors.text.gray[900]} mb-4`}>
                            Trenger du profesjonell hjelp?
                        </h2>
                        <p className={`${colors.text.gray[600]} mb-6 text-lg`}>
                            Kontakt oss i dag for gratis befaring og pristilbud
                        </p>
                        <a
                            href="/kontakt-oss"
                            className={`inline-block ${colors.background.primary[600]} ${colors.text.white} px-8 py-3 rounded-lg ${colors.hover.background.primary[700]} transition-colors font-semibold`}
                        >
                            Be om befaring
                        </a>
                    </section>
                </div>
            </article>

            <Footer />
        </div>
    )
}
