export type BlockRegistryEntry = {
  name: string
  title: string
  category: string
  description: string
}

export const blockRegistry: BlockRegistryEntry[] = [
  {
    name: "hero-basic",
    title: "Hero Basic",
    category: "Hero",
    description: "A clean hero section with title, subtitle, and CTA buttons.",
  },
  {
    name: "pricing-basic",
    title: "Pricing Basic",
    category: "Pricing",
    description: "Three-tier pricing cards with features and CTAs.",
  },
  {
    name: "testimonial-basic",
    title: "Testimonial Basic",
    category: "Testimonial",
    description: "Grid of testimonial cards with quotes and attribution.",
  },
]
