import type {APIRoute} from 'astro'
import {companyInfo} from '@/config/company'
import {siteText} from '@/content/text'

// Last-modified dates for statically-rendered pages, taken from each file's
// last real content edit (`git log -1 --format=%cI -- <file>`). Update the
// relevant entry when you edit a page's content so the sitemap keeps
// reflecting real change dates instead of every-build "now".
const PAGE_LAST_MODIFIED = {
    home: new Date('2026-07-29T20:17:17+02:00'),
    tjenester: new Date('2026-10-22T12:00:00+02:00'),
    service: new Date('2026-10-22T12:00:00+02:00'),
    omOss: new Date('2026-07-29T18:59:41+02:00'),
    faq: new Date('2026-06-25T14:39:50+02:00'),
    blogg: new Date('2026-06-25T14:54:34+02:00'),
    trefellingPris: new Date('2026-06-25T15:05:32+02:00'),
    kontaktOss: new Date('2026-06-25T14:54:34+02:00'),
    area: new Date('2026-06-25T15:05:32+02:00'),
    personvern: new Date('2026-10-15T12:00:00+02:00'),
} as const

interface SitemapEntry {
    url: string
    lastModified: Date
    changeFrequency: 'weekly' | 'monthly' | 'yearly'
    priority: number
}

function sitemap(): SitemapEntry[] {
    const baseUrl = companyInfo.website

    const blogPosts = siteText.blog.posts.map((post) => ({
        url: `${baseUrl}/blogg/${post.id}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))
    const servicePages = siteText.services.items.map((service) => ({
        url: `${baseUrl}/tjenester/${service.id}`,
        lastModified: PAGE_LAST_MODIFIED.service,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
    const areaPages = siteText.locations.areas.map((area) => ({
        url: `${baseUrl}/${area.slug}`,
        lastModified: PAGE_LAST_MODIFIED.area,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {url: baseUrl, lastModified: PAGE_LAST_MODIFIED.home, changeFrequency: 'monthly', priority: 1},
        {url: `${baseUrl}/tjenester`, lastModified: PAGE_LAST_MODIFIED.tjenester, changeFrequency: 'monthly', priority: 0.9},
        ...servicePages,
        {url: `${baseUrl}/om-oss`, lastModified: PAGE_LAST_MODIFIED.omOss, changeFrequency: 'monthly', priority: 0.6},
        {url: `${baseUrl}/faq`, lastModified: PAGE_LAST_MODIFIED.faq, changeFrequency: 'monthly', priority: 0.7},
        {url: `${baseUrl}/blogg`, lastModified: PAGE_LAST_MODIFIED.blogg, changeFrequency: 'weekly', priority: 0.8},
        {url: `${baseUrl}/trefelling-pris`, lastModified: PAGE_LAST_MODIFIED.trefellingPris, changeFrequency: 'monthly', priority: 0.9},
        ...blogPosts,
        ...areaPages,
        {url: `${baseUrl}/kontakt-oss`, lastModified: PAGE_LAST_MODIFIED.kontaktOss, changeFrequency: 'monthly', priority: 0.8},
        {url: `${baseUrl}/personvern`, lastModified: PAGE_LAST_MODIFIED.personvern, changeFrequency: 'yearly', priority: 0.2},
    ]
}

export const GET: APIRoute = () => {
    const urls = sitemap()
        .map((entry) => [
            '<url>',
            `<loc>${entry.url}</loc>`,
            `<lastmod>${entry.lastModified.toISOString()}</lastmod>`,
            `<changefreq>${entry.changeFrequency}</changefreq>`,
            `<priority>${entry.priority}</priority>`,
            '</url>',
        ].join(''))
        .join('')

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
        {headers: {'Content-Type': 'application/xml; charset=utf-8'}},
    )
}
