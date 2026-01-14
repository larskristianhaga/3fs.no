export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trefellingsspesialisten AS",
        "description": "Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over 15 års erfaring med trefelling, beskjæring, stubbefresing og tomterydding. Forsikret og sertifisert.",
        "url": "https://3fs.no",
        "telephone": "+4747642970",
        "email": "rs3felling@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ås",
            "addressRegion": "Akershus",
            "addressCountry": "NO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "59.6606",
            "longitude": "10.7819"
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
            "value": "819 545 782"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
