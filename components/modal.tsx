"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { bettingSites } from "@/data/mock-data"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const topSites = bettingSites.slice(0, 3)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topSites.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topSites.length) % topSites.length)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50 p-6">
      <div className="relative max-w-4xl w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 right-2 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <X size={28} />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white">Best Betting Sites</h2>
        </div>

        {/* Desktop Layout - 3 cards side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {topSites.map((site, index) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`bg-white rounded-lg overflow-hidden shadow-xl ${index === 1 ? "ring-4 ring-green-500" : ""}`}
              >
                {/* Top section with logo */}
                <div className="bg-white p-8 text-center h-40 flex flex-col justify-center">
                  <div className="flex-1 flex items-center justify-center mb-3">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.siteName}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="font-bold text-gray-800 border-t border-gray-200 -mt-2 text-xl pt-0">
                    {site.siteName}
                  </div>
                </div>

                {/* Bottom section with dark background */}
                <div className="bg-black text-white p-6">
                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Bonus text */}
                  <div className="text-center mb-6">
                    <div className="text-lg font-bold">{site.bonus}</div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 mb-4">
                    GET BONUS
                  </button>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-400 leading-tight">{site.disclaimer}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Layout - Swiper */}
        <div className="md:hidden relative mb-8">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {topSites.map((site, index) => (
                <div key={site.id} className="w-full flex-shrink-0">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl mx-2">
                      {/* Top section with logo */}
                      <div className="bg-white p-8 text-center h-40 flex flex-col justify-center">
                        <div className="flex-1 flex items-center justify-center mb-3">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.siteName}
                            width={120}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div className="text-xl font-bold text-gray-800 border-t border-gray-200 pt-3 -mt-2">
                          {site.siteName}
                        </div>
                      </div>

                      {/* Bottom section with dark background */}
                      <div className="bg-black text-white p-6">
                        {/* Stars */}
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Bonus text */}
                        <div className="text-center mb-6">
                          <div className="text-lg font-bold">{site.bonus}</div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 mb-4">
                          GET BONUS
                        </button>

                        {/* Disclaimer */}
                        <p className="text-xs text-gray-400 leading-tight">{site.disclaimer}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows for mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {topSites.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-gray-500"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="text-center">
          <p className="text-white text-sm">18+. T&C's apply. Begambleaware.org. Play responsibly.</p>
        </div>
      </div>
    </div>
  )
}
