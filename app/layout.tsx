import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sci-Fi Portfolio | Front-End Developer",
  description: "Portfolio d'un devellopeur Front-End  avec un Sci-Fi UI design",
  keywords: ["portfolio", "front-end developer", "react", "next.js", "sci-fi"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-scifi-bg antialiased overflow-x-hidden">
        <div className="scanlines" />
        <div className="grid-bg fixed inset-0 z-0" />
        {children}
      </body>
    </html>
  )
}

