export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            &copy; 2026 RayFrontUI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
