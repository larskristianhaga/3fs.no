import {colors} from '@/config/colors'
import {cn} from '@/lib/utils'

export default function Eyebrow({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={cn('flex items-center gap-2.5 text-sm font-semibold tracking-[.08em] uppercase', className)}>
            <span className={cn('w-7 h-0.5', colors.brand.background.ember)} aria-hidden="true"/>
            {children}
        </div>
    )
}
