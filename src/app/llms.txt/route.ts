import {siteText} from '@/content/text'
import {companyInfo} from '@/config/company'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || companyInfo.website

    const serviceList = siteText.services.items.map((service) => `- ${service.title}`).join('\n')

    const content = [
        `# ${companyInfo.name}`,
        '',
        `> ${companyInfo.description}`,
        '',
        '## Company facts',
        `- Website: ${companyInfo.website}`,
        `- Email: ${companyInfo.contact.email}`,
        `- Phone: ${companyInfo.contact.phone.display}`,
        `- Organization number: ${companyInfo.organization.number}`,
        `- Service areas: ${companyInfo.serviceAreasText}`,
        '',
        '## Services',
        serviceList,
        '',
        '## Primary URLs',
        `- Home: ${baseUrl}/`,
        `- Services: ${baseUrl}/tjenester`,
        `- About: ${baseUrl}/om-oss`,
        `- FAQ: ${baseUrl}/faq`,
        `- Blog: ${baseUrl}/blogg`,
        `- Contact: ${baseUrl}/kontakt-oss`,
    ].join('\n')

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600'
        },
    })
}
