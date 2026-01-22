import * as React from "react"

import { cn } from "@/lib/utils"
import { colors } from "@/config/colors"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      `text-sm font-medium leading-none ${colors.text.gray[900]} peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
