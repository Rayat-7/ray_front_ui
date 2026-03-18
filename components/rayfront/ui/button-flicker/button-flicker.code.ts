export const buttonFlickerCode = `import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonFlickerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonFlicker = React.forwardRef<HTMLButtonElement, ButtonFlickerProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-8 items-center justify-center gap-1.5 whitespace-nowrap border border-border bg-background px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          "animate-[flicker_3s_linear_infinite] [text-shadow:0_0_8px_rgba(255,255,255,0.4)]",
          className
        )}
        {...props}
      />
    )
  }
)
ButtonFlicker.displayName = "ButtonFlicker"

// Make sure to add this into your global.css @theme block
// --animate-flicker: flicker 3s linear infinite;
// @keyframes flicker {
//   0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
//   20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.33; }
// }
`
