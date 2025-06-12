"use client"

import { useState, useEffect } from "react"
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

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const renderRankingsList = () => {
    const items = []
    const firstSite = bettingSites[0]

    bettingSites.forEach((site, index) => {
      // Add normal card
      items.push(<BettingCard key={site.id} site={site} rank={index + 1} />)

      // Add special block every 4th position using first site data
      if ((index + 1) % 4 === 0) {
        items.push(<TopRecommendationBlock key={`special-${index}`} />)
      }
    })

    return items
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Main Content with Background Image */}
      <div
        className="py-6 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1200&width=1920&text=Stadium+Background')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-opacity-95 py-8 rounded-lg shadow-lg bg-transparent">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Mobile Sidebar - appears after hero on mobile */}
            <div className="lg:hidden mb-8">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div id="rankings" className="space-y-6">
                <h2 className="text-3xl font-bold text-[#003B2F] mb-8">Top Irish Betting Sites Rankings 2025</h2>
                {renderRankingsList()}
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <TextSections />
      <SafeGambling />
      <Footer />

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
