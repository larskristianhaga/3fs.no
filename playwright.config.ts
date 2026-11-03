import { defineConfig, devices } from '@playwright/test'

// Smoke tests run against a running site: BASE_URL is the deployment under test (defaults to the local server)
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
