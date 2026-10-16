"use client"

import { useState } from "react"
import { Check, Copy, Code } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

interface ComponentSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  usage?: string
  code?: string
}

function CodeBlock({ code, title }: { code: string; title: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-border">
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
          aria-label={`Copy ${title}`}
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

export function ComponentSheet({ open, onOpenChange, usage, code }: ComponentSheetProps) {
  const [tab, setTab] = useState<"usage" | "source">("source")

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Component Code</SheetTitle>
          <SheetDescription>
            View and copy the usage example or full component source code.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 flex gap-1 border border-border p-1">
          <button
            onClick={() => setTab("source")}
            className={`flex-1 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
              tab === "source"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Source
          </button>
          <button
            onClick={() => setTab("usage")}
            className={`flex-1 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
              tab === "usage"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Usage
          </button>
        </div>

        <div className="mt-4">
          {tab === "usage" && usage && <CodeBlock code={usage} title="Usage Example" />}
          {tab === "source" && code && <CodeBlock code={code} title="Component Source" />}
          {tab === "usage" && !usage && (
            <p className="text-sm text-muted-foreground">No usage example available.</p>
          )}
          {tab === "source" && !code && (
            <p className="text-sm text-muted-foreground">No source code available.</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
