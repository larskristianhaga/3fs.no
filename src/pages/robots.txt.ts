import type {APIRoute} from 'astro'
import {companyInfo} from '@/config/company'

const userAgents = ['*', 'GPTBot', 'Google-Extended', 'PerplexityBot', 'Bingbot']

export const GET: APIRoute = () => {
    const baseUrl = companyInfo.website

    const content = [
        ...userAgents.map((userAgent) => `User-Agent: ${userAgent}\nAllow: /\n`),
        `Host: ${baseUrl}`,
        `Sitemap: ${baseUrl}/sitemap.xml`,
        '',
    ].join('\n')

    return new Response(content, {headers: {'Content-Type': 'text/plain; charset=utf-8'}})
}
