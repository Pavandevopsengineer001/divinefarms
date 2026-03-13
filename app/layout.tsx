import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
})
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "THE DIVINE FARMS | A New Lifestyle Close to Nature - SRLN Infra Developers",
  description:
    "Experience THE DIVINE FARMS by SRLN Infra Developers near Kolanupaka, Aler. Premium farm plots with clubhouse, farm cottage, glam pod, swimming pool, and world-class amenities. EMI options available. FREE resort membership for plot buyers.",
  keywords: "THE DIVINE FARMS, SRLN Infra Developers, farm plots, Kolanupaka, Aler, Yadadri, weekend getaway, nature living, Telangana real estate, farm cottage, glam pod, clubhouse",
  openGraph: {
    title: "THE DIVINE FARMS | SRLN Infra Developers",
    description: "A New Lifestyle Close to Nature - Premium Farm Plots Near Kolanupaka, Aler with World-Class Amenities",
    type: "website",
  },
  robots: "index, follow",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1f4d35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
