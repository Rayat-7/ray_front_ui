const testimonials = [
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
}
