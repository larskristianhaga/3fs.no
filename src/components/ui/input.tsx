import * as React from "react"

import { cn } from "@/lib/utils"
import { colors } from "@/config/colors"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md border ${colors.border.gray[300]} ${colors.background.white} px-3 py-2 text-sm ${colors.text.gray[900]} file:border-0 ${colors.background.transparent} file:text-sm file:font-medium ${colors.text.gray[500]} focus-visible:outline-none focus-visible:ring-2 ${colors.focus.ring.primary[600]} focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
