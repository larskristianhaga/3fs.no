import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'
import { container, pageHeading, subHeading, bodyText, primaryButton } from '@/config/styles'
import { cn } from '@/lib/utils'
import Eyebrow from '@/components/Eyebrow'

const { brand } = colors

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
        <div className={cn('min-h-screen', brand.background.cream, brand.text.ink)}>
            <BreadcrumbSchema
                items={[
                    { name: siteText.common.breadcrumbHome, url: companyInfo.website },
                    { name: siteText.blog.title, url: `${companyInfo.website}/blogg` }
                ]}
            />
            <Header />

            {/* Hero Section */}
            <section className="py-16 sm:py-24">
                <div className={container}>
                    <Eyebrow className={cn('mb-5', brand.text.emberDark)}>{siteText.blog.eyebrow}</Eyebrow>
                    <h1 className={cn(pageHeading, 'mb-6')}>
                        {siteText.blog.title}
                    </h1>
                    <p className={cn(bodyText, 'text-lg sm:text-xl max-w-2xl')}>
                        {siteText.blog.subtitle}
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className={cn('py-16 sm:py-20', brand.background.sand)}>
                <div className={container}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </div>
            </section>

            {/* CTA Section */}
            <section className={cn('py-16 sm:py-20', brand.background.ink, brand.text.cream)}>
                <div className={cn(container, 'max-w-4xl text-center')}>
                    <h2 className={cn(subHeading, 'mb-4')}>
                        {siteText.blog.ctaTitle}
                    </h2>
                    <p className={cn('mb-8 text-lg', brand.text.mist)}>
                        {siteText.blog.ctaText}
                    </p>
                    <a href="/kontakt-oss" className={primaryButton}>
                        {siteText.common.contactCta}
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    )
}
