import {companyInfo} from '@/config/company'

interface ArticleSchemaProps {
    title: string
    description: string
    url: string
    datePublished: string
    category: string
}

export default function ArticleSchema({
    title,
    description,
    url,
    datePublished,
    category
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "datePublished": datePublished,
        "dateModified": datePublished,
        "mainEntityOfPage": url,
        "articleSection": category,
        "inLanguage": "nb-NO",
        "author": {
            "@type": "Organization",
            "name": companyInfo.name
        },
        "publisher": {
            "@type": "Organization",
            "name": companyInfo.name,
            "url": companyInfo.website
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
        />
    )
}
