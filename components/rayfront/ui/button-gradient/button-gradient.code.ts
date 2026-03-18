export const buttonGradientCode = `import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonGradientProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonGradientProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-8 items-center justify-center gap-1.5 whitespace-nowrap border border-border bg-background px-2.5 text-sm font-medium text-foreground overflow-hidden transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-foreground before:to-transparent before:opacity-50 hover:before:opacity-100",
          className
        )}
        {...props}
      />
    )
  }
)
ButtonGradient.displayName = "ButtonGradient"
`
