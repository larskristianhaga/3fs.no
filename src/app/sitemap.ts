import {MetadataRoute} from 'next'
import { siteText } from '@/content/text'

// Last-modified dates for statically-rendered pages, taken from each file's
// last real content edit (`git log -1 --format=%cI -- <file>`). Update the
// relevant entry when you edit a page's content so the sitemap keeps
// reflecting real change dates instead of every-build "now".
const PAGE_LAST_MODIFIED = {
    home: new Date('2026-07-29T20:17:17+02:00'),
    tjenester: new Date('2026-06-25T15:05:32+02:00'),
    omOss: new Date('2026-07-29T18:59:41+02:00'),
    faq: new Date('2026-06-25T14:39:50+02:00'),
    blogg: new Date('2026-06-25T14:54:34+02:00'),
    trefellingPris: new Date('2026-06-25T15:05:32+02:00'),
    kontaktOss: new Date('2026-06-25T14:54:34+02:00'),
    area: new Date('2026-06-25T15:05:32+02:00'),
    llmsTxt: new Date('2026-06-25T15:05:32+02:00'),
} as const

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://3fs.no"

    const blogPosts = siteText.blog.posts.map(post => ({
        url: `${baseUrl}/blogg/${post.id}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))
    const areaPages = siteText.locations.areas.map((area) => ({
        url: `${baseUrl}/${area.slug}`,
        lastModified: PAGE_LAST_MODIFIED.area,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: PAGE_LAST_MODIFIED.home,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/tjenester`,
            lastModified: PAGE_LAST_MODIFIED.tjenester,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/om-oss`,
            lastModified: PAGE_LAST_MODIFIED.omOss,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: PAGE_LAST_MODIFIED.faq,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blogg`,
            lastModified: PAGE_LAST_MODIFIED.blogg,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/trefelling-pris`,
            lastModified: PAGE_LAST_MODIFIED.trefellingPris,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...blogPosts,
        ...areaPages,
        {
            url: `${baseUrl}/kontakt-oss`,
            lastModified: PAGE_LAST_MODIFIED.kontaktOss,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/llms.txt`,
            lastModified: PAGE_LAST_MODIFIED.llmsTxt,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
    ]
}
