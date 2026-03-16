"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-foreground transition-opacity hover:opacity-70"
        >
          <span className="flex h-6 w-6 items-center justify-center border border-foreground text-[10px]">
            R
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-all",
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name === "AI Tools" && <Sparkles className="mr-1 inline-block h-3 w-3" />}
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="flex h-8 w-8 items-center justify-center border border-border text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2 text-[11px] font-medium uppercase tracking-wider transition-colors",
                  pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.name === "AI Tools" && <Sparkles className="mr-1 inline-block h-3 w-3" />}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
