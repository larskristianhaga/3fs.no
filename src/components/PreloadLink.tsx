'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ComponentPropsWithoutRef, useCallback } from 'react'

type PreloadLinkProps = ComponentPropsWithoutRef<typeof Link>

export default function PreloadLink({ href, onMouseEnter, ...props }: PreloadLinkProps) {
    const router = useRouter()

    const handleMouseEnter = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            // Only prefetch internal links (strings starting with /)
            if (typeof href === 'string' && href.startsWith('/')) {
                router.prefetch(href)
            }
            
            // Call the original onMouseEnter if it exists
            onMouseEnter?.(e)
        },
        [href, onMouseEnter, router]
    )

    return <Link href={href} onMouseEnter={handleMouseEnter} prefetch={true} {...props} />
}
