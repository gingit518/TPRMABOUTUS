import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "About - RiskQ TPRM Exchange",
  description: "Built by Industry Leaders, Trusted by Enterprises. RiskQ TPRM Exchange was founded by Ariel Evans, an Amazon best-selling author and serial entrepreneur with over 20 years of cybersecurity experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
