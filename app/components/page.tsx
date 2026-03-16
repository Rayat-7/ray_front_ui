import Link from "next/link"
import { componentRegistry } from "@/data/component-registry"
import { ArrowRight } from "lucide-react"

function groupByCategory(items: typeof componentRegistry) {
  const groups: Record<string, typeof componentRegistry> = {}
  for (const item of items) {
    if (!groups[item.category]) groups[item.category] = []
    groups[item.category].push(item)
  }
  return groups
}

export const metadata = {
  title: "Components",
}

export default function ComponentsIndexPage() {
  const groups = groupByCategory(componentRegistry)

  return (
    <div className="px-6 py-8 sm:px-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Library
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Components
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Browse all available components. Click any component to see a live
          preview and code example.
        </p>
      </div>

      <div className="space-y-10">
        {Object.entries(groups).map(([category, items]) => (
          <div key={category}>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
              {category}
              <span className="ml-2 text-muted-foreground font-normal">
                ({items.length})
              </span>
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={`/components/${item.name}`}
                  className="group flex flex-col border border-border bg-card p-5 transition-colors hover:border-foreground/30"
                >
                  <h3 className="text-sm font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
                    View
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
