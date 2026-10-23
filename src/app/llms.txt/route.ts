import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'

// Follows the llms.txt format (https://llmstxt.org): H1, blockquote summary, plain detail
// text, then H2 sections of `- [name](url): notes` links, with skippable links under "Optional".
// Google Search doesn't use this file (AI Overviews rely on normal indexing), so every fact
// here comes from copy that is visible on the site, and the file stays out of the search index.
export async function GET() {
    const baseUrl = companyInfo.website
    const link = (name: string, path: string, notes?: string) =>
        `- [${name}](${baseUrl}${path})${notes ? `: ${notes}` : ''}`

    const content = [
        `# ${companyInfo.name}`,
        '',
        `> ${companyInfo.description}`,
        '',
        `${siteText.about.intro[0].paragraph}`,
        '',
        `- Telefon: ${companyInfo.contact.phone.display}`,
        `- E-post: ${companyInfo.contact.email}`,
        `- Adresse: ${companyInfo.address.street}, ${companyInfo.address.postalCode} ${companyInfo.address.locality}`,
        `- Org.nr.: ${companyInfo.organization.number}`,
        `- Forsikring: ${companyInfo.insurance.provider}, inntil ${companyInfo.insurance.coverage}`,
        `- Serviceområder: ${companyInfo.serviceAreasText}`,
        '',
        '## Tjenester',
        link(siteText.services.title, '/tjenester', 'Oversikt over alle tjenestene'),
        ...siteText.services.items.map((service) => link(service.title, `/tjenester/${service.id}`, service.intro)),
        '',
        '## Pris og kontakt',
        link(siteText.pricing.title, '/trefelling-pris', siteText.pricing.subtitle),
        link(siteText.contact.title, '/kontakt-oss', 'Kontaktskjema for gratis befaring og pristilbud'),
        link(siteText.faq.title, '/faq', siteText.faq.subtitle),
        link(siteText.about.title, '/om-oss', 'Om firmaet, erfaring og forsikring'),
        '',
        '## Områder',
        ...siteText.locations.areas.map((area) => link(`Trefelling i ${area.name}`, `/${area.slug}`, area.description)),
        '',
        '## Blogg',
        ...siteText.blog.posts.map((post) => link(post.title, `/blogg/${post.id}`, post.excerpt)),
        '',
        '## Optional',
        link(siteText.blog.title, '/blogg', siteText.blog.subtitle),
        link(siteText.privacy.title, '/personvern'),
        link('Sitemap', '/sitemap.xml'),
        '',
    ].join('\n')

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            'X-Robots-Tag': 'noindex',
        },
    })
}
