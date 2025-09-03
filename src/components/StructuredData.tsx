export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "[Business Name]",
        "description": "Professional tree cutting and removal services",
        "url": "https://yourdomain.com",
        "telephone": "+1-XXX-XXX-XXXX",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "[Street Address]",
            "addressLocality": "[City]",
            "addressRegion": "[State]",
            "postalCode": "[ZIP]"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "XX.XXXXX",
            "longitude": "-XX.XXXXX"
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "priceRange": "$$",
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "XX.XXXXX",
                "longitude": "-XX.XXXXX"
            },
            "geoRadius": "50000"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
