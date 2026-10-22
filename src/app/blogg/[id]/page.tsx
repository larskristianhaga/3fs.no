import type {Metadata} from 'next'
import { notFound } from 'next/navigation'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ArticleSchema from '@/components/ArticleSchema'
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import {CtaBand, PageShell, styles} from '@/components/Brand'
import PreloadLink from '@/components/PreloadLink'
import BlogCard from '@/components/BlogCard'
import {cn} from '@/lib/utils'

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

    const {brand} = colors
    const formattedDate = new Date(post.publishedDate).toLocaleDateString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const relatedPosts = siteText.blog.posts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 3)

    return (
        <PageShell>
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                url={`${companyInfo.website}/blogg/${post.id}`}
                datePublished={post.publishedDate}
                category={post.category}
            />
            <BreadcrumbSchema
                items={[
                    { name: 'Forside', url: companyInfo.website },
                    { name: 'Blogg', url: `${companyInfo.website}/blogg` },
                    { name: post.title, url: `${companyInfo.website}/blogg/${post.id}` }
                ]}
            />

            <article className={cn(styles.container, 'pt-10 pb-20')}>
                <div className="max-w-[820px] flex flex-col gap-6">
                    <nav className="flex items-center gap-2 text-sm" aria-label={siteText.common.breadcrumbLabel}>
                        <PreloadLink href="/blogg" className={styles.textLink}>
                            {siteText.blog.title}
                        </PreloadLink>
                        <span className={brand.text.inkMuted} aria-hidden="true">›</span>
                        <span className={cn(brand.text.inkMuted, 'line-clamp-1')}>{post.title}</span>
                    </nav>

                    <header className="flex flex-col gap-5">
                        <div className={cn('flex flex-wrap items-center gap-3', styles.muted)}>
                            <span className={styles.tag}>{post.category}</span>
                            <time dateTime={post.publishedDate}>{formattedDate}</time>
                            <span>• {post.readTime}</span>
                        </div>
                        <h1 className={cn(styles.displayHeading, 'text-[clamp(40px,5vw,72px)] leading-[.95]')}>
                            {post.title}
                        </h1>
                        <p className={styles.lead}>{post.excerpt}</p>
                    </header>

                    <div className={cn('pt-8 whitespace-pre-wrap text-[18px] leading-relaxed', styles.ruleTop, brand.text.inkSoft)}>
                        {post.content}
                    </div>
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <section className={brand.background.sand}>
                    <div className={cn(styles.container, 'py-20 flex flex-col gap-10')}>
                        <h2 className={styles.subHeading}>{siteText.common.relatedArticles}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {relatedPosts.map((related) => (
                                <BlogCard
                                    key={related.id}
                                    id={related.id}
                                    title={related.title}
                                    excerpt={related.excerpt}
                                    category={related.category}
                                    readTime={related.readTime}
                                    publishedDate={related.publishedDate}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBand title={siteText.common.articleCtaTitle} text={siteText.common.articleCtaText}/>
        </PageShell>
    )
}
