import { defineConfig, devices } from '@playwright/test'

// Smoke tests run against a deployed site: BASE_URL is the Vercel preview URL in CI
export default defineConfig({
    testDir: './e2e',
    timeout: 5 * 60_000,
    retries: process.env.CI ? 1 : 0,
    reporter: process.env.CI ? [['github'], ['list']] : 'list',
    use: {
        baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
    },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
})
