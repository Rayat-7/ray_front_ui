"use client"

import { useState } from "react"
import { Code } from "lucide-react"

import { ComponentSheet } from "./component-sheet"
import { CopyPromptButton } from "./copy-prompt-button"

interface ComponentActionsProps {
  usage?: string
  code?: string
  componentName: string
}

export function ComponentActions({ usage, code, componentName }: ComponentActionsProps) {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setSheetOpen(true)}
        className="flex h-8 items-center gap-1.5 border border-border px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Code className="h-3 w-3" />
        View Code
      </button>
      <CopyPromptButton code={code ?? ""} usage={usage ?? ""} componentName={componentName} />
      <ComponentSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        usage={usage}
        code={code}
      />
    </>
  )
}
