import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "[--button-bg:var(--primary)] [--button-text:var(--textLight)] [--button-hover:var(--primaryDark)] bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover)] shadow-sm hover:shadow-md",
        destructive: "[--button-bg:var(--error)] [--button-text:var(--textLight)] [--button-hover:var(--errorDark)] bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover)] shadow-sm hover:shadow-md",
        outline: "border-[var(--borderLight)] bg-[var(--bgLight)] text-[var(--textDark)] hover:bg-[var(--bgHover)] shadow-sm hover:shadow-md border",
        secondary: "[--button-bg:var(--secondary)] [--button-text:var(--textDark)] [--button-hover:var(--secondaryDark)] bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover)] shadow-sm hover:shadow-md",
        ghost: "text-[var(--textDark)] hover:bg-[var(--bgHover)]",
        link: "text-[var(--textLink)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
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
