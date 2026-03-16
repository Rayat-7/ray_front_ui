"use client"

import { Eye } from "lucide-react"

interface ComponentPreviewProps {
  title?: string
  children: React.ReactNode
}

export function ComponentPreview({ title = "Preview", children }: ComponentPreviewProps) {
  return (
    <div className="border border-border transition-colors hover:border-foreground/20">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Eye className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
            {title}
          </span>
        </div>
      </div>
      <div className="flex min-h-[160px] items-center justify-center bg-card p-8">
        {children}
      </div>
    </div>
  )
}
