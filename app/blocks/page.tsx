"use client"

import { PageContainer } from "@/components/site/page-container"
import { blockRegistry } from "@/data/block-registry"
import { ComponentPreview } from "@/features/component-viewer/component-preview"
import { ComponentCode } from "@/features/component-viewer/component-code"

import { HeroBasic } from "@/components/rayfront/blocks/hero/hero-basic"
import { PricingBasic } from "@/components/rayfront/blocks/pricing/pricing-basic"
import { TestimonialBasic } from "@/components/rayfront/blocks/testimonials/testimonial-basic"

import { heroBasicCode } from "@/components/rayfront/blocks/hero/hero-basic.code"
import { pricingBasicCode } from "@/components/rayfront/blocks/pricing/pricing-basic.code"
import { testimonialBasicCode } from "@/components/rayfront/blocks/testimonials/testimonial-basic.code"

const blockDemos: Record<string, { demo: React.ReactNode; code: string }> = {
  "hero-basic": { demo: <HeroBasic />, code: heroBasicCode },
  "pricing-basic": { demo: <PricingBasic />, code: pricingBasicCode },
  "testimonial-basic": { demo: <TestimonialBasic />, code: testimonialBasicCode },
}

export default function BlocksPage() {
  return (
    <>
      <section className="border-b border-border">
        <PageContainer className="py-12 sm:py-16">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Sections
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Blocks
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Pre-built landing page sections. Drop them into your project and customize to match your brand.
          </p>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="py-8 sm:py-12">
          <div className="space-y-8">
            {blockRegistry.map((block) => {
              const data = blockDemos[block.name]
              if (!data) return null
              return (
                <div key={block.name} className="space-y-4">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                      {block.title}
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">{block.description}</p>
                  </div>
                  <ComponentPreview title={block.title}>{data.demo}</ComponentPreview>
                  <ComponentCode code={data.code} />
                </div>
              )
            })}
          </div>
        </PageContainer>
      </section>
    </>
  )
}
