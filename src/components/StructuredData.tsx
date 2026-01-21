import {companyInfo} from '@/config/company'

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": companyInfo.name,
        "description": companyInfo.description,
        "url": companyInfo.website,
        "telephone": companyInfo.contact.phone.href,
        "email": companyInfo.contact.email,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": companyInfo.address.locality,
            "addressRegion": companyInfo.address.region,
            "addressCountry": companyInfo.address.country
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": companyInfo.geo.latitude,
            "longitude": companyInfo.geo.longitude
        },
        "openingHours": companyInfo.openingHours,
        "areaServed": companyInfo.serviceAreas.map(area => ({
            "@type": area.type,
            "name": area.name
        })),
        "identifier": {
            "@type": "PropertyValue",
            "propertyID": "Org.nr",
            "value": companyInfo.organization.number
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    )
}
