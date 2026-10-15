import type {Metadata} from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreloadLink from '@/components/PreloadLink'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ArticleSchema from '@/components/ArticleSchema'
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import { container, pageHeading, subHeading, primaryButton } from '@/config/styles'
import { cn } from '@/lib/utils'

const { brand } = colors

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export async function generateStaticParams() {
    return siteText.blog.posts.map((post) => ({
        id: post.id,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params
    const post = siteText.blog.posts.find(p => p.id === id)

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
            url: `${companyInfo.website}/blogg/${post.id}`,
            type: 'article',
            locale: 'nb_NO',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: ['/images/tjenester/trefelling.jpg'],
        },
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { id } = await params
    const post = siteText.blog.posts.find(p => p.id === id)

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
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                url={`${companyInfo.website}/blogg/${post.id}`}
                datePublished={post.publishedDate}
                category={post.category}
            />
            <BreadcrumbSchema
                items={[
                    { name: siteText.common.breadcrumbHome, url: companyInfo.website },
                    { name: siteText.blog.title, url: `${companyInfo.website}/blogg` },
                    { name: post.title, url: `${companyInfo.website}/blogg/${post.id}` }
                ]}
            />
            <Header />

            {/* Breadcrumb */}
            <div className={cn('border-b py-4', brand.border.inkSubtle)}>
                <div className={cn(container, 'max-w-4xl')}>
                    <div className="flex items-center gap-2 text-sm">
                        <PreloadLink href="/blogg" className={cn('underline underline-offset-4', brand.text.ink, brand.hover.text.emberDark)}>
                            {siteText.blog.title}
                        </PreloadLink>
                        <span className={brand.text.inkMuted}>›</span>
                        <span className={brand.text.inkSoft}>{post.title}</span>
                    </div>
                </div>
            </div>

            <article className="py-16 sm:py-24">
                <div className={cn(container, 'max-w-4xl')}>
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-3 mb-5 text-sm">
                            <span className={cn('font-semibold tracking-[.08em] uppercase', brand.text.emberDark)}>
                                {post.category}
                            </span>
                            <time className={brand.text.inkMuted}>
                                {formattedDate}
                            </time>
                            <span className={brand.text.inkMuted}>
                                • {post.readTime}
                            </span>
                        </div>

                        <h1 className={cn(pageHeading, 'mb-6')}>
                            {post.title}
                        </h1>

                        <p className={cn('text-xl leading-relaxed max-w-[70ch]', brand.text.inkSoft)}>
                            {post.excerpt}
                        </p>
                    </header>

                    {/* Article Content */}
                    <div className={cn('mb-12 pt-10 border-t', brand.border.inkSubtle)}>
                        <div className={cn('max-w-[70ch] whitespace-pre-wrap leading-relaxed text-lg', brand.text.inkSoft)}>
                            {post.content}
                        </div>
                    </div>

                    {/* Related Articles */}
                    {relatedPosts.length > 0 && (
                        <section className={cn('mt-16 pt-12 border-t', brand.border.inkSubtle)}>
                            <h2 className={cn(subHeading, 'mb-8')}>
                                {siteText.blog.relatedTitle}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((related) => (
                                    <article key={related.id} className={cn('rounded-md border p-6', brand.background.paper, brand.border.inkSubtle)}>
                                        <h3 className="text-lg font-semibold mb-2">
                                            <PreloadLink href={`/blogg/${related.id}`} className={cn('no-underline transition-colors', brand.hover.text.emberDark)}>
                                                {related.title}
                                            </PreloadLink>
                                        </h3>
                                        <p className={cn('text-sm mb-4', brand.text.inkSoft)}>
                                            {related.excerpt}
                                        </p>
                                        <PreloadLink href={`/blogg/${related.id}`} className={cn('text-sm font-semibold underline underline-offset-4 transition-colors', brand.text.ink, brand.hover.text.emberDark)}>
                                            {siteText.common.readMore}
                                        </PreloadLink>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <section className={cn('mt-16 px-8 py-12 rounded-md text-center', brand.background.ink, brand.text.cream)}>
                        <h2 className={cn(subHeading, 'mb-4')}>
                            {siteText.blog.articleCtaTitle}
                        </h2>
                        <p className={cn('mb-8 text-lg', brand.text.mist)}>
                            {siteText.blog.articleCtaText}
                        </p>
                        <a href="/kontakt-oss" className={primaryButton}>
                            {siteText.common.requestQuoteCta}
                        </a>
                    </section>
                </div>
            </article>

            <Footer />
        </div>
    )
}
