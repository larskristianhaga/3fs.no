import {defineConfig} from 'astro/config'
import node from '@astrojs/node'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'

// The site's own address, also read by src/config/company.ts as PUBLIC_BASE_URL.
// It stays on the temporary domain until 3fs.no moves off Wix.
const site = process.env.PUBLIC_BASE_URL || 'https://3fs.vercel.app'

// Vercel sets VERCEL during its builds; everywhere else the site runs as a plain Node server
const adapter = process.env.VERCEL ? vercel() : node({mode: 'standalone'})

export default defineConfig({
    site,
    // Pages are prerendered at build time; only the contact API and llms.txt run on the server
    output: 'static',
    adapter,
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
    server: {port: 3000},
})
