"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { PanelLeft, X } from "lucide-react"
import { componentRegistry } from "@/data/component-registry"
import { cn } from "@/lib/utils"

function groupByCategory(items: typeof componentRegistry) {
  const groups: Record<string, typeof componentRegistry> = {}
  for (const item of items) {
    if (!groups[item.category]) groups[item.category] = []
    groups[item.category].push(item)
  }
  return groups
}

function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname()
  const groups = groupByCategory(componentRegistry)

  return (
    <nav className="space-y-6 px-4 py-6">
      <Link
        href="/components"
        className={cn(
          "block text-[10px] font-bold uppercase tracking-[0.3em] transition-colors",
          pathname === "/components" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        onClick={onLinkClick}
      >
        All Components
      </Link>

      {Object.entries(groups).map(([category, items]) => (
        <div key={category}>
          <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">
            {category}
          </div>
          <div className="space-y-0.5">
            {items.map((item) => {
              const href = `/components/${item.name}`
              const isActive = pathname === href
              return (
                <Link
                  key={item.name}
                  href={href}
                  className={cn(
                    "block px-3 py-1.5 text-xs transition-colors",
                    isActive
                      ? "bg-foreground text-background font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={onLinkClick}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </nav>
  )
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-12 hidden h-[calc(100vh-3rem)] w-56 shrink-0 overflow-y-auto border-r border-border md:block">
        <SidebarContent />
      </aside>

      {/* Mobile trigger */}
      <button
        className="fixed bottom-4 left-4 z-50 flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground transition-colors hover:bg-muted md:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <PanelLeft size={16} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r border-border bg-background md:hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Navigation
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-7 w-7 items-center justify-center border border-border text-muted-foreground hover:text-foreground"
              >
                <X size={12} />
              </button>
            </div>
            <SidebarContent onLinkClick={() => setMobileOpen(false)} />
          </aside>
        </>
      )}
    </>
  )
}
