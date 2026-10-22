import { expect, test } from '@playwright/test'

// Loads every page in the sitemap and fails on a non-200 response, an uncaught
// error or a console error. Catches dependency updates that build fine but break at runtime.
test('every sitemap page loads without errors', async ({ page, request, baseURL }) => {
    const sitemap = await request.get('/sitemap.xml')
    expect(sitemap.status(), 'sitemap.xml').toBe(200)

    // The sitemap lists canonical URLs; swap in baseURL so we check the deployment under test
    const paths = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)]
        .map(([, loc]) => new URL(loc).pathname)
    expect(paths.length, 'URLs in sitemap.xml').toBeGreaterThan(0)

    let errors: string[] = []
    page.on('pageerror', (error) => errors.push(`Uncaught: ${error.message}`))
    page.on('console', (message) => {
        if (message.type() === 'error') errors.push(`Console: ${message.text()}`)
    })

    for (const path of paths) {
        await test.step(path, async () => {
            errors = []
            const response = await page.goto(new URL(path, baseURL).href, { waitUntil: 'load' })
            expect.soft(response?.status(), `${path} status`).toBe(200)
            expect.soft(errors, `${path} errors`).toEqual([])
        })
    }
})
