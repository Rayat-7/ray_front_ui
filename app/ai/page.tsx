"use client"

import { useState } from "react"
import { PageContainer } from "@/components/site/page-container"
import { Button } from "@/components/ui/button"
import { Sparkles, Eye, FileImage, Loader2 } from "lucide-react"

export default function AIPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [extracting, setExtracting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result as string)
      reader.readAsDataURL(selected)
    }
  }

  const handleExtract = () => {
    setExtracting(true)
    // Simulated extraction — will be replaced with real AI processing
    setTimeout(() => setExtracting(false), 2000)
  }

  return (
    <>
      {/* Page Header */}
      <section className="border-b border-border">
        <PageContainer className="py-12 sm:py-16">
          <div className="flex items-center gap-2">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Experimental
            </p>
            <span className="mb-2 border border-border px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
              Beta
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            AI Design Extractor
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Upload a screenshot or design file. Our AI will extract the design
            system — colors, typography, spacing, and components.
          </p>
        </PageContainer>
      </section>

      {/* AI Tool Interface */}
      <section>
        <PageContainer className="py-8 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Upload Area */}
            <div className="flex flex-col">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                  01
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Upload Design
                </span>
              </div>

              <label
                htmlFor="design-upload"
                className="group flex min-h-[300px] cursor-pointer flex-col items-center justify-center border border-dashed border-border bg-card transition-colors hover:border-foreground/30"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Uploaded design"
                    className="h-full max-h-[300px] w-full object-contain p-4"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 px-4 text-center">
                    <div className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                      <FileImage className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        Drop your design here
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        PNG, JPG, WEBP or Figma screenshot
                      </p>
                    </div>
                  </div>
                )}
                <input
                  id="design-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {file && (
                <div className="mt-3 flex items-center justify-between border border-border px-3 py-2">
                  <span className="text-[10px] text-muted-foreground">
                    {file.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {(file.size / 1024).toFixed(1)}kb
                  </span>
                </div>
              )}
            </div>

            {/* Preview / Output Area */}
            <div className="flex flex-col">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                  02
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Extracted System
                </span>
              </div>

              <div className="flex min-h-[300px] flex-col border border-border bg-card">
                {/* Output Header */}
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <Eye className="h-3 w-3 text-muted-foreground" />
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Output Preview
                    </span>
                  </div>
                </div>

                {/* Output Content */}
                <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                  {extracting ? (
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Analyzing design...
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <Sparkles className="h-5 w-5 text-muted-foreground/50" />
                      <p className="text-xs text-muted-foreground">
                        Upload a design and click extract
                      </p>
                      <p className="text-[10px] text-muted-foreground/60">
                        Colors, typography, spacing tokens will appear here
                      </p>
                    </div>
                  )}
                </div>

                {/* Placeholder tokens */}
                <div className="border-t border-border px-4 py-3">
                  <div className="grid grid-cols-4 gap-2">
                    {["bg", "fg", "muted", "accent"].map((token) => (
                      <div
                        key={token}
                        className="border border-border px-2 py-1.5 text-center"
                      >
                        <div className="text-[9px] uppercase tracking-wider text-muted-foreground/50">
                          --{token}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extract Button */}
          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              disabled={!file || extracting}
              onClick={handleExtract}
              className="min-w-[200px]"
            >
              {extracting ? (
                <>
                  <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                  Extracting...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Extract Design System
                </>
              )}
            </Button>
          </div>

          {/* Info */}
          <div className="mt-8 border border-border bg-card px-6 py-4">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <div>
                <p className="text-xs font-medium text-foreground">
                  AI-Powered Extraction
                </p>
                <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                  This tool uses computer vision and AI to analyze design
                  screenshots and extract design tokens including color
                  palettes, font stacks, spacing scales, and component patterns.
                  Currently in beta — extraction accuracy will improve over
                  time.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  )
}
