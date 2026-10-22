import type {Metadata} from 'next'
import BlogCard from '@/components/BlogCard'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import {CtaBand, PageHero, PageShell, styles} from '@/components/Brand'
import {cn} from '@/lib/utils'

export const metadata: Metadata = {
    title: 'Blogg - Tips og råd om trefelling',
    description: 'Lesestoffet på Trefellingsspesialisten sin blogg om trefelling, trepleie, sikkerhet og best practices. Artikler skrevet av erfarne trefellere.',
    keywords: 'trefelling blogg, trepleie tips, trefelling sikkerhet, tomterydding guide, træer sykdommer, trefellingstips',
    alternates: {
        canonical: '/blogg',
    },
    openGraph: {
        title: 'Blogg - Tips og råd om trefelling | Trefellingsspesialisten AS',
        description: 'Artikler og guide om trefelling, trepleie og sikkerhet fra erfarne fagfolk.',
        url: `${companyInfo.website}/blogg`,
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blogg - Tips og råd om trefelling | Trefellingsspesialisten AS',
        description: 'Artikler og guide om trefelling, trepleie og sikkerhet fra erfarne fagfolk.',
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

export default function BlogPage() {
    return (
        <PageShell>
            <BreadcrumbSchema
                items={[
                    { name: 'Forside', url: companyInfo.website },
                    { name: 'Blogg', url: `${companyInfo.website}/blogg` }
                ]}
            />

            <PageHero title={siteText.blog.title} intro={siteText.blog.subtitle}/>

            <section className={cn(styles.container, 'pb-24')}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {siteText.blog.posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            category={post.category}
                            readTime={post.readTime}
                            publishedDate={post.publishedDate}
                        />
                    ))}
                </div>
            </section>

            <CtaBand title={siteText.common.blogCtaTitle} text={siteText.common.blogCtaText} label={siteText.common.contactUs}/>
        </PageShell>
    )
}
