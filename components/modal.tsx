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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-transparent max-w-6xl w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white">Top Bonusser</h2>
        </div>

        {/* Desktop Layout - 3 cards side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {topSites.map((site, index) => (
            <div key={site.id} className="bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Top section with logo */}
              <div className="bg-white p-8 text-center">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={150}
                  height={75}
                  className="mx-auto object-contain"
                />
              </div>

              {/* Bottom section with dark background */}
              <div className="bg-gray-900 text-white p-6">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Bonus text */}
                <div className="text-center mb-6">
                  <p className="text-lg font-bold">{site.bonus}</p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 mb-4">
                  FÅ BONUS! *
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-gray-400 leading-tight">{site.disclaimer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Swiper */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {topSites.map((site, index) => (
                <div key={site.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl mx-2">
                    {/* Top section with logo */}
                    <div className="bg-white p-8 text-center">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={150}
                        height={75}
                        className="mx-auto object-contain"
                      />
                    </div>

                    {/* Bottom section with dark background */}
                    <div className="bg-gray-900 text-white p-6">
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Bonus text */}
                      <div className="text-center mb-6">
                        <p className="text-lg font-bold">{site.bonus}</p>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 mb-4">
                        FÅ BONUS! *
                      </button>

                      {/* Disclaimer */}
                      <p className="text-xs text-gray-400 leading-tight">{site.disclaimer}</p>
                    </div>
                  </div>
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
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
