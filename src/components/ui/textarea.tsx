import * as React from "react"

import { cn } from "@/lib/utils"
import { colors } from "@/config/colors"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[80px] w-full rounded-md border ${colors.border.gray[300]} ${colors.background.white} px-3 py-2 text-sm ${colors.text.gray[900]} ${colors.text.gray[500]} focus-visible:outline-none focus-visible:ring-2 ${colors.focus.ring.primary[600]} focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
