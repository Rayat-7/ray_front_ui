"use client"



import { PageContainer } from "@/components/site/page-container"
import { blockRegistry } from "@/data/block-registry"
import { componentSourceMap } from "@/data/component-source"
import { ComponentPreview } from "@/features/component-viewer/component-preview"
import { ComponentActions } from "@/features/component-viewer/component-actions"

import { HeroBasic } from "@/components/rayfront/blocks/hero/hero-basic"
import { PricingBasic } from "@/components/rayfront/blocks/pricing/pricing-basic"
import { TestimonialBasic } from "@/components/rayfront/blocks/testimonials/testimonial-basic"

const blockDemos: Record<string, { demo: React.ReactNode }> = {
  "hero-basic": { demo: <HeroBasic /> },
  "pricing-basic": { demo: <PricingBasic /> },
  "testimonial-basic": { demo: <TestimonialBasic /> },
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
              const source = componentSourceMap[block.name]
              return (
                <div key={block.name} className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                        {block.title}
                      </h2>
                      <p className="mt-1 text-xs text-muted-foreground">{block.description}</p>
                    </div>
                    {source && (
                      <ComponentActions
                        usage={source.usage}
                        code={source.code}
                        componentName={source.componentName}
                      />
                    )}
                  </div>
                  <ComponentPreview title={block.title}>{data.demo}</ComponentPreview>
                </div>
              )
            })}
          </div>
        </PageContainer>
      </section>
    </>
  )
}
