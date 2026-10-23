'use client'

import type {ReactNode, RefObject} from 'react'
import {Sheet, SheetContent, SheetTitle} from '@/components/ui/sheet'

interface MobileMenuProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    // The button that opens the menu; focus returns to it on close, as Radix does for its own trigger
    triggerRef: RefObject<HTMLButtonElement | null>
    className?: string
    children: ReactNode
}

// Kept in its own module so the Header can load the dialog code on the first tap instead of on every page load
export default function MobileMenu({open, onOpenChange, title, triggerRef, className, children}: MobileMenuProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className={className}
                onCloseAutoFocus={(event) => {
                    event.preventDefault()
                    triggerRef.current?.focus()
                }}
            >
                <SheetTitle className="sr-only">{title}</SheetTitle>
                {children}
            </SheetContent>
        </Sheet>
    )
}
