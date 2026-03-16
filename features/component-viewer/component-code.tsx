"use client"

import { useState } from "react"
import { Check, Copy, Code } from "lucide-react"

interface ComponentCodeProps {
  code: string
  title?: string
}

export function ComponentCode({ code, title = "Code" }: ComponentCodeProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-border transition-colors hover:border-foreground/20">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Code className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex h-6 w-6 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </button>
      </div>
      <pre className="overflow-x-auto bg-card p-4 text-xs leading-relaxed text-muted-foreground">
        <code>{code}</code>
      </pre>
    </div>
  )
}
