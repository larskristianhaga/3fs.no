import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { companyInfo } from '@/config/company'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'

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
        url: 'https://3fs.no/blogg',
        type: 'website',
        locale: 'nb_NO',
    },
}

export default function BlogPage() {
    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <BreadcrumbSchema
                items={[
                    { name: 'Forside', url: companyInfo.website },
                    { name: 'Blogg', url: `${companyInfo.website}/blogg` }
                ]}
            />
            <Header />

            {/* Hero Section */}
            <section className={`${colors.background.primary[50]} py-16 sm:py-24`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className={`text-4xl sm:text-5xl font-extrabold ${colors.text.gray[900]} tracking-tight mb-4`}>
                            {siteText.blog.title}
                        </h1>
                        <p className={`text-lg sm:text-xl ${colors.text.gray[600]} max-w-2xl mx-auto`}>
                            {siteText.blog.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <section className={`${colors.background.primary[50]} py-16`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className={`text-2xl sm:text-3xl font-bold ${colors.text.gray[900]} mb-4`}>
                        Har du spørsmål? Vi er her for å hjelpe
                    </h2>
                    <p className={`${colors.text.gray[600]} mb-6 text-lg`}>
                        Kontakt oss direkte eller sjekk ut FAQ-siden vår for mer informasjon.
                    </p>
                    <a
                        href="/kontakt-oss"
                        className={`inline-block ${colors.background.primary[600]} ${colors.text.white} px-8 py-3 rounded-lg ${colors.hover.background.primary[700]} transition-colors font-semibold`}
                    >
                        Kontakt oss
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    )
}
