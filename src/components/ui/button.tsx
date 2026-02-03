import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { colors } from "@/config/colors"

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 ${colors.focus.ring.primary[600]} focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md`,
  {
    variants: {
      variant: {
        default: `${colors.background.primary[600]} ${colors.text.white} ${colors.hover.background.primary[700]} hover:scale-105`,
        destructive:
          `${colors.background.red[600]} ${colors.text.white} ${colors.hover.background.red[700]} hover:scale-105`,
        outline:
          `border-2 ${colors.border.primary[600]} ${colors.text.primary[600]} ${colors.background.transparent} ${colors.hover.background.primary[50]} ${colors.hover.border.primary[600]} hover:scale-105`,
        secondary:
          `${colors.background.white} ${colors.text.primary[600]} ${colors.hover.background.gray[100]} border ${colors.border.gray[300]}`,
        ghost: `${colors.hover.background.gray[100]} ${colors.hover.text.gray[900]}`,
        link: `${colors.text.primary[600]} underline-offset-4 hover:underline`,
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-sm",
        lg: "h-12 rounded-lg px-8 text-base font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
