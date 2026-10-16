"use client"

import { useState, useRef } from "react"
import { Check, Sparkles } from "lucide-react"

interface CopyPromptButtonProps {
  code: string
  usage: string
  componentName: string
}

function Confetti() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffa500"]
  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 animate-confetti"
          style={{
            left: `${50 + (Math.random() - 0.5) * 200}%`,
            top: "50%",
            backgroundColor: colors[i % colors.length],
            animationDelay: `${Math.random() * 0.2}s`,
            animationDuration: `${0.4 + Math.random() * 0.4}s`,
          }}
        />
      ))}
    </div>
  )
}

export function CopyPromptButton({ code, usage, componentName }: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false)
  const confettiTrigger = useRef(0)

  const prompt = `I need you to create a React component called "${componentName}" that matches this design exactly.

## Component Source Code
\`\`\`tsx
${code}
\`\`\`

## Usage Example
\`\`\`tsx
${usage}
\`\`\`

## Instructions
- Recreate this component exactly as shown in the source code above
- Use the same Tailwind CSS classes, structure, and behavior
- Use TypeScript with proper types
- The component should be self-contained and reusable
- Match the visual design precisely - spacing, typography, colors, borders
- Output only the component code, no explanations needed`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    confettiTrigger.current++
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      key={confettiTrigger.current}
      onClick={handleCopy}
      className={`flex h-8 shrink-0 items-center gap-1.5 border px-3 text-[10px] font-bold uppercase tracking-wider transition-all ${
        copied
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
      aria-label="Copy AI prompt"
    >
      {copied ? <Check className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
      {copied ? "Prompt Copied" : "Copy Prompt"}
      {copied && <Confetti />}
    </button>
  )
}
