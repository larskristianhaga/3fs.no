import type {APIRoute} from 'astro'
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'

// Rendered per request so the response can carry its own headers (noindex, cache)
export const prerender = false

// Companion to llms.txt: the same site as one Markdown document, so an LLM can read
// everything without following links. Only copy that is visible on the site is used.
export const GET: APIRoute = () => {
    const baseUrl = companyInfo.website

    const faq = (items: {question: string; answer: string}[]) =>
        items.flatMap((item) => [`### ${item.question}`, item.answer, ''])

    const content = [
        `# ${companyInfo.name}`,
        '',
        `> ${companyInfo.description}`,
        '',
        ...siteText.about.intro.map((intro) => intro.paragraph + '\n'),
        `- Nettside: ${baseUrl}`,
        `- Telefon: ${companyInfo.contact.phone.display}`,
        `- E-post: ${companyInfo.contact.email}`,
        `- Adresse: ${companyInfo.address.street}, ${companyInfo.address.postalCode} ${companyInfo.address.locality}`,
        `- Org.nr.: ${companyInfo.organization.number}`,
        `- Forsikring: ${companyInfo.insurance.provider}, inntil ${companyInfo.insurance.coverage}`,
        `- Serviceområder: ${companyInfo.serviceAreasText}`,
        '',
        '## Tjenester',
        '',
        ...siteText.services.items.flatMap((service) => [
            `### ${service.title}`,
            `URL: ${baseUrl}/tjenester/${service.id}`,
            '',
            service.description,
            '',
            service.intro,
            '',
            ...service.details.flatMap((detail) => [detail, '']),
            ...faq(service.faq),
        ]),
        `## ${siteText.pricing.title}`,
        `URL: ${baseUrl}/trefelling-pris`,
        '',
        siteText.pricing.subtitle,
        '',
        `## ${siteText.faq.title}`,
        `URL: ${baseUrl}/faq`,
        '',
        ...faq(siteText.faq.questions),
        '## Områder',
        '',
        ...siteText.locations.areas.flatMap((area) => [
            `### Trefelling i ${area.name}`,
            `URL: ${baseUrl}/${area.slug}`,
            '',
            area.description,
            '',
            area.intro,
            '',
            ...area.highlights.map((highlight) => `- ${highlight}`),
            '',
        ]),
        '## Blogg',
        '',
        ...siteText.blog.posts.flatMap((post) => [
            `### ${post.title}`,
            `URL: ${baseUrl}/blogg/${post.id}`,
            '',
            post.content,
            '',
        ]),
    ].join('\n')

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            'X-Robots-Tag': 'noindex',
        },
    })
}
