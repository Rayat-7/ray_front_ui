import { Button } from "@/components/ui/button"
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
            className={`relative flex flex-col border p-6 transition-colors ${
              plan.highlight ? "border-foreground bg-card" : "border-border bg-card hover:border-foreground/30"
            }`}
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
}
