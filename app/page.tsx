"use client"

import { useState, useEffect, type ReactNode } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Sidebar } from "@/components/sidebar"
import { BettingCard } from "@/components/betting-card"
import { TopRecommendationBlock } from "@/components/top-recommendation-block"
import { TextSections } from "@/components/text-sections"
import { SafeGambling } from "@/components/safe-gambling"
import { Footer } from "@/components/footer"
import { Modal } from "@/components/modal"
import { bettingSites } from "@/data/mock-data"
import { CasinoSection } from "@/components/casino-section"

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const renderRankingsList = () => {
    const items: ReactNode[] = []

    bettingSites.forEach((site, index) => {
      // Add normal card
      items.push(<BettingCard key={site.id} site={site} rank={index + 1} />)

      // Add special block every 3rd position using first site data
      if ((index + 1) % 3 === 0) {
        items.push(<TopRecommendationBlock key={`special-${index}`} />)
      }
    })

    return items
  }

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <Header />
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Mobile Sidebar - appears after hero on mobile */}
          <div className="lg:hidden mb-8">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div id="betting-rankings" className="space-y-6">
              {renderRankingsList()}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <CasinoSection />
      <TextSections />
      <SafeGambling />
      <Footer />

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
