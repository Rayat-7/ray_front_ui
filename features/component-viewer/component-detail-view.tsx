"use client"

import { ComponentPreview } from "./component-preview"
import { ComponentCode } from "./component-code"

// UI demos
import { ButtonDemo } from "@/components/rayfront/ui/button/button.demo"
import { CardDemo } from "@/components/rayfront/ui/card/card.demo"
import { BadgeDemo } from "@/components/rayfront/ui/badge/badge.demo"

// Block demos
import { HeroBasicDemo } from "@/components/rayfront/blocks/hero/hero-basic.demo"
import { PricingBasicDemo } from "@/components/rayfront/blocks/pricing/pricing-basic.demo"
import { TestimonialBasicDemo } from "@/components/rayfront/blocks/testimonials/testimonial-basic.demo"

// UI code
import { buttonCode } from "@/components/rayfront/ui/button/button.code"
import { cardCode } from "@/components/rayfront/ui/card/card.code"
import { badgeCode } from "@/components/rayfront/ui/badge/badge.code"

// Block code
import { heroBasicCode } from "@/components/rayfront/blocks/hero/hero-basic.code"
import { pricingBasicCode } from "@/components/rayfront/blocks/pricing/pricing-basic.code"
import { testimonialBasicCode } from "@/components/rayfront/blocks/testimonials/testimonial-basic.code"

const demoMap: Record<string, { demo: React.ReactNode; code: string }> = {
  button: { demo: <ButtonDemo />, code: buttonCode },
  card: { demo: <CardDemo />, code: cardCode },
  badge: { demo: <BadgeDemo />, code: badgeCode },
  "hero-basic": { demo: <HeroBasicDemo />, code: heroBasicCode },
  "pricing-basic": { demo: <PricingBasicDemo />, code: pricingBasicCode },
  "testimonial-basic": { demo: <TestimonialBasicDemo />, code: testimonialBasicCode },
}

export function ComponentDetailView({ name }: { name: string }) {
  const entry = demoMap[name]

  if (!entry) {
    return (
      <div className="flex min-h-[200px] items-center justify-center border border-dashed border-border text-sm text-muted-foreground">
        Component demo not found.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <ComponentPreview>{entry.demo}</ComponentPreview>
      <ComponentCode code={entry.code} />
    </div>
  )
}
