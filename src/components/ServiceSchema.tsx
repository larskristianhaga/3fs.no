import { companyInfo } from '@/config/company'

interface ServiceSchemaProps {
    serviceName: string
    serviceDescription: string
    areaServed?: string[]
}

export default function ServiceSchema({
    serviceName,
    serviceDescription,
    areaServed = ['Oslo', 'Akershus', 'Østfold', 'Buskerud']
}: ServiceSchemaProps) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
            "@type": "LocalBusiness",
            "name": companyInfo.name,
            "url": companyInfo.website,
            "telephone": companyInfo.contact.phone.href,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": companyInfo.address.locality,
                "addressRegion": companyInfo.address.region,
                "addressCountry": companyInfo.address.country
            }
        },
        "areaServed": areaServed.map(area => ({
            "@type": "City",
            "name": area
        })),
        "priceRange": "$$"
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
    )
}
