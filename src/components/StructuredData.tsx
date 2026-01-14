import { companyData } from '@/config/company'

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": companyData.name,
        "description": companyData.descriptionLong,
        "url": companyData.website.url,
        "telephone": companyData.phone.link,
        "email": companyData.email.address,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": companyData.location.municipality,
            "addressRegion": companyData.location.county,
            "addressCountry": "NO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": companyData.location.coordinates.latitude,
            "longitude": companyData.location.coordinates.longitude
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "priceRange": "$$",
        "areaServed": [
            {
                "@type": "City",
                "name": "Oslo"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Akershus"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Østfold"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Buskerud"
            }
        ],
        "identifier": {
            "@type": "PropertyValue",
            "propertyID": "Org.nr",
            "value": companyData.organizationNumber
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
