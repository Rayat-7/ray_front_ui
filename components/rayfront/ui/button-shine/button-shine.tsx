import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonShineProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonShine = React.forwardRef<HTMLButtonElement, ButtonShineProps>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes shine-button {
              from { background-position: 200% center; }
              to { background-position: -200% center; }
            }
          `
        }} />
        <button
          ref={ref}
          className={cn(
            "relative inline-flex h-8 items-center justify-center gap-1.5 whitespace-nowrap overflow-hidden border border-border bg-background px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            "bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.15),55%,transparent)] bg-[length:200%_100%] animate-[shine-button_2s_infinite]",
            className
          )}
          {...props}
        />
      </>
    )
  }
)
ButtonShine.displayName = "ButtonShine"
