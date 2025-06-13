"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { bettingSites } from "@/data/mock-data"

export function Sidebar() {
  const [randomSite, setRandomSite] = useState(bettingSites[0])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bettingSites.length)
    setRandomSite(bettingSites[randomIndex])
  }, [])

  return (
    <div className="lg:sticky lg:top-24">
      <a href={randomSite.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="bg-black bg-opacity-80 border-2 border-[#FFD700] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-[#FFD700] mb-2">🏆 Featured Site</h3>
          </div>

          <div className="text-center mb-4">
            <Image
              src={randomSite.logo || "/placeholder.svg"}
              alt={randomSite.siteName}
              width={120}
              height={60}
              className="mx-auto mb-3"
            />
            <h4 className="text-xl font-bold text-white mb-2">{randomSite.siteName}</h4>

            <div className="flex items-center justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(randomSite.rating) ? "text-[#FFD700] fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 font-semibold text-white">{randomSite.rating}</span>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-4 rounded-lg mb-4">
            <p className="text-center font-bold text-lg mb-2">{randomSite.bonus}</p>
          </div>

          <button className="w-full bg-[#FFD700] text-[#003B2F] py-3 px-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 mb-4">
            {randomSite.cta}
          </button>

          <p className="text-xs text-gray-300 text-center">{randomSite.disclaimer}</p>
        </div>
      </a>
    </div>
  )
}
