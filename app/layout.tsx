import "@/app/ui/global.css"
import { Hanken_Grotesk } from "next/font/google"
import type React from "react"

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Tutor Monkey - Swing into Success",
  description:
    "Tutor Monkey offers personalized tutoring services to help K-9 students succeed in their academic journey.",
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
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  )
}

