import { Button } from "@/components/ui/button"

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
}
