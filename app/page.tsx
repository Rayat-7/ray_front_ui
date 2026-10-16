import Link from "next/link"
import { PageContainer } from "@/components/site/page-container"
import { ArrowRight, Blocks, Box, LayoutTemplate, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Grainient from "@/components/site/gradient"
const features = [
  {
    icon: Box,
    title: "Components",
    description: "Production-ready UI primitives. Buttons, cards, badges — all sharp-edged and mono-styled.",
    href: "/components",
    count: "3",
  },
  {
    icon: Blocks,
    title: "Blocks",
    description: "Landing page sections ready to drop in. Hero, pricing, testimonials — built for conversion.",
    href: "/blocks",
    count: "3",
  },
  {
    icon: LayoutTemplate,
    title: "Templates",
    description: "Full page templates combining blocks into complete, polished landing pages.",
    href: "/templates",
    count: "Soon",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    description: "Extract design tokens from any screenshot. AI-powered design system generation.",
    href: "/ai",
    count: "Beta",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0" style={{ width: '100%', height: '600px' }}>
          <Grainient
    colors={["#03045e","#0077b6","#001233","#0077b6","#03045e"]}
    angle={55}
    flow={0.8}
    silk={0.35}
    grainAmount={0.08}
    type="linear"
    bands={1}
    softness={1}
    scale={1}
    speed={1}
    grainSize={1.2}
    grainAnimated
    contrast={1}
    saturation={1}
    variation={0}
    interactive
    stir={1}
    clickSwirl
    intro
    lightMode={false}
/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <PageContainer className="relative py-20 sm:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center border border-border px-3 py-1.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                v0.2.0 — Developer Preview
              </span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Build interfaces
              <br />
              <span className="text-foreground">not from scratch</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
              A curated collection of React components, landing page blocks, and
              AI-powered design tools. Sharp edges. Mono typography. Zero bloat.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/components">
                  Browse Components
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blocks">View Blocks</Link>
              </Button>
            </div>
            <div className="mt-12 border border-border bg-card px-6 py-3">
              <code className="text-xs text-muted-foreground">
                <span className="text-foreground/50">$</span> npx rayfrontui@latest init
              </code>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Features Grid */}
      <section className="border-b border-border">
        <PageContainer className="py-16 sm:py-24">
          <div className="mb-12">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Platform</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Everything you need</h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative flex flex-col bg-background p-6 transition-colors hover:bg-card sm:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <feature.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {feature.count}
                  </span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{feature.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
                  Explore
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Stats */}
      <section>
        <PageContainer className="py-16 sm:py-24">
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {[
              { label: "Components", value: "3+" },
              { label: "Blocks", value: "3+" },
              { label: "TypeScript", value: "100%" },
              { label: "Bundle Size", value: "0kb" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background p-6 text-center sm:p-8">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  )
}
