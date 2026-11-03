import type {ImageMetadata} from 'astro'

// Every photo lives in src/assets/images so Astro can resize and convert it at build time.
// Content and pages still refer to them by their old public path (/images/tjenester/trefelling.jpg).
const images = import.meta.glob<{default: ImageMetadata}>('/src/assets/images/**/*.{jpg,jpeg,png}', {eager: true})

export function imageFor(path: string): ImageMetadata {
    const image = images[`/src/assets${path}`]
    if (!image) {
        throw new Error(`Image not found: ${path} (expected in src/assets${path})`)
    }
    return image.default
}
