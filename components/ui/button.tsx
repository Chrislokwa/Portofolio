import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-scifi-cyan text-black hover:bg-scifi-cyan/80 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105",
        destructive:
          "bg-scifi-magenta text-white hover:bg-scifi-magenta/80 shadow-[0_0_20px_rgba(255,0,170,0.4)] hover:shadow-[0_0_30px_rgba(255,0,170,0.6)]",
        outline:
          "border-2 border-scifi-cyan bg-transparent text-scifi-cyan hover:bg-scifi-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
        secondary:
          "bg-scifi-purple text-white hover:bg-scifi-purple/80 shadow-[0_0_20px_rgba(124,58,237,0.4)]",
        ghost: "hover:bg-scifi-bg-tertiary hover:text-scifi-cyan",
        link: "text-scifi-cyan underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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

