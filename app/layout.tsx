import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Irish Betting Sites | Top Bookmakers Comparison 2025",
  description:
    "Compare the best Irish betting sites with our expert reviews. Find top bonuses, competitive odds, and trusted bookmakers for sports betting in Ireland.",
  keywords: "irish betting sites, sports betting ireland, bookmakers, betting comparison, betting bonuses",
  authors: [{ name: "IrishBets Team" }],
  creator: "IrishBets",
  publisher: "IrishBets",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.irishbets.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.irishbets.com",
    siteName: "IrishBets",
    title: "Best Irish Betting Sites | Top Bookmakers Comparison 2025",
    description:
      "Compare the best Irish betting sites with our expert reviews. Find top bonuses, competitive odds, and trusted bookmakers for sports betting in Ireland.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IrishBets - Best Betting Sites Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Irish Betting Sites | Top Bookmakers Comparison 2025",
    description:
      "Compare the best Irish betting sites with our expert reviews. Find top bonuses, competitive odds, and trusted bookmakers for sports betting in Ireland.",
    creator: "@irishbets",
    images: ["/images/twitter-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Sports Betting",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
