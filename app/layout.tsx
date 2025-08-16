import "@/app/globals.css"
import "@/styles/theme.css"
import type React from "react"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata = {
  title: "Tutor Monkey - Personalized Education",
  description:
    "Expert tutoring services for K-9 students. Personalized education with proven results from top DFW area high school students.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-kavRz6dadvIxQe6zuU97GMCzvi9KOI.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

