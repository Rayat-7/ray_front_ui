import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "RayFrontUI — Developer UI Platform",
    template: "%s — RayFrontUI",
  },
  description:
    "A developer platform for reusable React UI components, landing page blocks, and AI-powered design system tools.",
  keywords: [
    "React",
    "UI components",
    "landing page blocks",
    "design system",
    "shadcn",
    "Tailwind CSS",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} font-mono antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-3rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
