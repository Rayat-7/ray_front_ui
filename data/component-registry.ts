export type ComponentRegistryEntry = {
  name: string
  title: string
  category: string
  description: string
}

export const componentRegistry: ComponentRegistryEntry[] = [
  {
    name: "button",
    title: "Button",
    category: "UI",
    description: "A versatile button component with multiple variants and sizes.",
  },
  {
    name: "button-gradient",
    title: "Gradient Button",
    category: "UI",
    description: "A sleek button featuring a glowing animated gradient border.",
  },
  {
    name: "button-flicker",
    title: "Flicker Button",
    category: "UI",
    description: "A cyber-styled button with a flickering neon transparency effect.",
  },
  {
    name: "button-shine",
    title: "Shine Button",
    category: "UI",
    description: "A clean button featuring a continuous diagonal shine animation.",
  },
  {
    name: "card",
    title: "Card",
    category: "UI",
    description: "A container component for grouping related content.",
  },
  {
    name: "badge",
    title: "Badge",
    category: "UI",
    description: "Small status descriptors for UI elements.",
  },
  {
    name: "hero-basic",
    title: "Hero Basic",
    category: "Blocks",
    description: "A clean hero section with title, subtitle, and CTA buttons.",
  },
  {
    name: "pricing-basic",
    title: "Pricing Basic",
    category: "Blocks",
    description: "Three-tier pricing cards with features and CTAs.",
  },
  {
    name: "testimonial-basic",
    title: "Testimonial Basic",
    category: "Blocks",
    description: "Grid of testimonial cards with quotes and attribution.",
  },
]
