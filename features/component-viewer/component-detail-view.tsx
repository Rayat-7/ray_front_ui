"use client"

import { useState } from "react"
import { Code } from "lucide-react"

import { ComponentPreview } from "./component-preview"
import { ComponentSheet } from "./component-sheet"
import { CopyPromptButton } from "./copy-prompt-button"
import { componentSourceMap } from "@/data/component-source"

import { ButtonDemo } from "@/components/rayfront/ui/button/button.demo"
import { CardDemo } from "@/components/rayfront/ui/card/card.demo"
import { BadgeDemo } from "@/components/rayfront/ui/badge/badge.demo"
import { ButtonGradientDemo } from "@/components/rayfront/ui/button-gradient/button-gradient.demo"
import { ButtonShineDemo } from "@/components/rayfront/ui/button-shine/button-shine.demo"
import { HeroBasicDemo } from "@/components/rayfront/blocks/hero/hero-basic.demo"
import { PricingBasicDemo } from "@/components/rayfront/blocks/pricing/pricing-basic.demo"
import { TestimonialBasicDemo } from "@/components/rayfront/blocks/testimonials/testimonial-basic.demo"

const demoMap: Record<string, { demo: React.ReactNode }> = {
  button: { demo: <ButtonDemo /> },
  card: { demo: <CardDemo /> },
  badge: { demo: <BadgeDemo /> },
  "button-gradient": { demo: <ButtonGradientDemo /> },
  "button-shine": { demo: <ButtonShineDemo /> },
  "hero-basic": { demo: <HeroBasicDemo /> },
  "pricing-basic": { demo: <PricingBasicDemo /> },
  "testimonial-basic": { demo: <TestimonialBasicDemo /> },
}

export function ComponentDetailView({ name }: { name: string }) {
  const entry = demoMap[name]
  const source = componentSourceMap[name]
  const [sheetOpen, setSheetOpen] = useState(false)

  if (!entry) {
    return (
      <div className="flex min-h-[200px] items-center justify-center border border-dashed border-border text-sm text-muted-foreground">
        Component demo not found.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <ComponentPreview>{entry.demo}</ComponentPreview>

      <ComponentSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        usage={source?.usage}
        code={source?.code}
      />
    </div>
  )
}
