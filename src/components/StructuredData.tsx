import {companyInfo} from '@/config/company'

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${companyInfo.website}#organization`,
                "name": companyInfo.name,
                "url": companyInfo.website,
                "email": companyInfo.contact.email,
                "telephone": companyInfo.contact.phone.href,
                "identifier": {
                    "@type": "PropertyValue",
                    "propertyID": "Org.nr",
                    "value": companyInfo.organization.number
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": `${companyInfo.website}#localbusiness`,
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
                "parentOrganization": {
                    "@id": `${companyInfo.website}#organization`
                }
            },
            {
                "@type": "WebSite",
                "@id": `${companyInfo.website}#website`,
                "url": companyInfo.website,
                "name": companyInfo.name,
                "inLanguage": "nb-NO",
                "publisher": {
                    "@id": `${companyInfo.website}#organization`
                }
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    )
}
