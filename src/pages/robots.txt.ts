import type {APIRoute} from 'astro'
import {companyInfo} from '@/config/company'

// Search/answer crawlers (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, Perplexity-User)
// are what surface the site in AI answers; the training crawlers are allowed too.
const userAgents = [
    '*',
    'OAI-SearchBot',
    'ChatGPT-User',
    'GPTBot',
    'Claude-SearchBot',
    'Claude-User',
    'ClaudeBot',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
]

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
