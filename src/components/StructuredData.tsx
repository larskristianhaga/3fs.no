import { companyData } from '@/config/company'

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": companyData.name,
        "description": companyData.description,
        "url": companyData.website.url,
        "telephone": companyData.phone.link,
        "email": companyData.email.address,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": companyData.location.municipality,
            "addressRegion": companyData.location.county,
            "addressCountry": "NO"
        },
        "areaServed": companyData.serviceArea.regions.map(region => ({
            "@type": "City",
            "name": region
        })),
        "openingHours": "Mo-Fr 08:00-17:00",
        "priceRange": "$$"
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
