import { buttonCode } from "@/components/rayfront/ui/button/button.code"
import { cardCode } from "@/components/rayfront/ui/card/card.code"
import { badgeCode } from "@/components/rayfront/ui/badge/badge.code"
import { buttonGradientCode } from "@/components/rayfront/ui/button-gradient/button-gradient.code"
import { buttonShineCode } from "@/components/rayfront/ui/button-shine/button-shine.code"
import { heroBasicCode } from "@/components/rayfront/blocks/hero/hero-basic.code"
import { pricingBasicCode } from "@/components/rayfront/blocks/pricing/pricing-basic.code"
import { testimonialBasicCode } from "@/components/rayfront/blocks/testimonials/testimonial-basic.code"

const buttonSourceCode = `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon:inline-end]:pr-2 has-data-[icon:inline-start]:pl-2",
        xs: "h-6 gap-1 px-2 text-xs has-data-[icon:inline-end]:pr-1.5 has-data-[icon:inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 px-2.5 text-[0.8rem] has-data-[icon:inline-end]:pr-1.5 has-data-[icon:inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon:inline-end]:pr-3 has-data-[icon:inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }`

const cardSourceCode = `import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}`

const badgeSourceCode = `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon:inline-end]:pr-1.5 has-data-[icon:inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }`

const buttonGradientUsage = `import { ButtonGradient } from "@/components/rayfront/ui/button-gradient/button-gradient"

export function Example() {
  return (
    <ButtonGradient>Gradient Button</ButtonGradient>
  )
}`

const buttonShineUsage = `import { ButtonShine } from "@/components/rayfront/ui/button-shine/button-shine"

export function Example() {
  return (
    <ButtonShine>Shining Button</ButtonShine>
  )
}`

const heroSourceCode = `import { Button } from "@/components/ui/button"

export function HeroBasic() {
  return (
    <section className="relative w-full border border-border bg-card px-6 py-20 text-center sm:px-12 sm:py-28">
      <div className="absolute left-0 top-0 h-4 w-4 border-b border-r border-foreground/20" />
      <div className="absolute right-0 top-0 h-4 w-4 border-b border-l border-foreground/20" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-t border-r border-foreground/20" />
      <div className="absolute bottom-0 right-0 h-4 w-4 border-t border-l border-foreground/20" />

      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Build faster. Ship cleaner.
      </p>
      <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        Modern components for modern teams
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Production-ready UI components built with React, TypeScript, and
        Tailwind CSS. Copy, paste, and customize.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Button variant="default" size="lg">Browse Components</Button>
        <Button variant="outline" size="lg">View on GitHub</Button>
      </div>
    </section>
  )
}`

const pricingSourceCode = `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For personal projects and experimentation.",
    features: ["5 UI components", "2 landing blocks", "Community support", "MIT License"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For teams shipping production applications.",
    features: ["All UI components", "All landing blocks", "Priority support", "Figma source files", "Lifetime updates"],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations needing custom solutions.",
    features: ["Everything in Pro", "Custom components", "Dedicated support", "SLA guarantee", "Private Slack channel"],
    cta: "Contact Sales",
    highlight: false,
  },
]

export function PricingBasic() {
  return (
    <section className="w-full py-16">
      <div className="mb-12 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Pricing</p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Simple, transparent pricing</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={\`relative flex flex-col border p-6 transition-colors \${
              plan.highlight ? "border-foreground bg-card" : "border-border bg-card hover:border-foreground/30"
            }\`}
          >
            {plan.highlight && (
              <Badge variant="default" className="absolute -top-2.5 left-4 text-[10px] uppercase tracking-wider">
                Popular
              </Badge>
            )}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{plan.name}</h3>
              <div className="mt-2 text-3xl font-bold text-foreground">{plan.price}</div>
              <p className="mt-1 text-xs text-muted-foreground">{plan.description}</p>
            </div>
            <ul className="mb-8 flex-1 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-foreground" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant={plan.highlight ? "default" : "outline"} className="w-full">{plan.cta}</Button>
          </div>
        ))}
      </div>
    </section>
  )
}`

const testimonialSourceCode = `const testimonials = [
  {
    quote: "RayFrontUI completely changed how we build landing pages. The component quality is outstanding.",
    author: "Sarah Chen",
    role: "Lead Engineer, Vercel",
  },
  {
    quote: "The monospaced design system is exactly what our developer platform needed. Clean and sharp.",
    author: "Marcus Reid",
    role: "CTO, DevTools Inc",
  },
  {
    quote: "Copy-paste components that actually look good. No more fighting with design inconsistencies.",
    author: "Anika Patel",
    role: "Frontend Lead, Stripe",
  },
]

export function TestimonialBasic() {
  return (
    <section className="w-full py-16">
      <div className="mb-12 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Testimonials</p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Loved by developers</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.author} className="flex flex-col border border-border bg-card p-6 transition-colors hover:border-foreground/30">
            <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-6 border-t border-border pt-4">
              <div className="text-xs font-bold text-foreground">{t.author}</div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}`

export const componentSourceMap: Record<
  string,
  { code: string; usage: string; componentName: string }
> = {
  button: { code: buttonSourceCode, usage: buttonCode, componentName: "Button" },
  card: { code: cardSourceCode, usage: cardCode, componentName: "Card" },
  badge: { code: badgeSourceCode, usage: badgeCode, componentName: "Badge" },
  "button-gradient": { code: buttonGradientCode, usage: buttonGradientUsage, componentName: "ButtonGradient" },
  "button-shine": { code: buttonShineCode, usage: buttonShineUsage, componentName: "ButtonShine" },
  "hero-basic": { code: heroSourceCode, usage: heroBasicCode, componentName: "HeroBasic" },
  "pricing-basic": { code: pricingSourceCode, usage: pricingBasicCode, componentName: "PricingBasic" },
  "testimonial-basic": { code: testimonialSourceCode, usage: testimonialBasicCode, componentName: "TestimonialBasic" },
}
