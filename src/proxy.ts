import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

export function proxy(request: NextRequest) {
    const response = NextResponse.next()

    // Filenames are not content-hashed, so keep the cache short enough that replaced images show up
    if (request.nextUrl.pathname.startsWith('/images/')) {
        response.headers.set(
            'Cache-Control',
            'public, max-age=86400, stale-while-revalidate=604800'
        )
    }

    return response
}

export const config = {
    matcher: ['/images/:path*'],
}
