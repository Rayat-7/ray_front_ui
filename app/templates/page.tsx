import { PageContainer } from "@/components/site/page-container"
import { LayoutTemplate } from "lucide-react"

export const metadata = {
  title: "Templates",
}

export default function TemplatesPage() {
  return (
    <>
      <section className="border-b border-border">
        <PageContainer className="py-12 sm:py-16">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Pages</p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Templates</h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Full landing page templates combining multiple blocks into complete, polished pages.
          </p>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="py-16 sm:py-24">
          <div className="flex flex-col items-center justify-center border border-dashed border-border py-20 text-center">
            <LayoutTemplate className="mb-4 h-8 w-8 text-muted-foreground/50" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">Coming Soon</h2>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
              We&apos;re crafting full-page templates that combine our blocks into production-ready landing pages.
            </p>
            <div className="mt-6 border border-border px-4 py-2">
              <code className="text-[10px] text-muted-foreground"> templates.length === 0 — for now</code>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  )
}
