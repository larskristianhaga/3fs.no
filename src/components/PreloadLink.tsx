'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'
import React, {ComponentPropsWithoutRef, useCallback} from 'react'

type PreloadLinkProps = ComponentPropsWithoutRef<typeof Link>

export default function PreloadLink({href, onMouseEnter, ...props}: PreloadLinkProps) {
    const router = useRouter()

    const handleMouseEnter = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            onMouseEnter?.(e)
        },
        [href, onMouseEnter, router]
    )

    return <Link href={href} onMouseEnter={handleMouseEnter} prefetch={false} {...props} />
}
