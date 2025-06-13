import Image from "next/image"
import { bettingSites } from "@/data/mock-data"

export function TopRecommendationBlock() {
  const firstSite = bettingSites[0]

  return (
    <a href={firstSite.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative my-4 hover:scale-105 transition-transform duration-300">
        {/* Background */}
        <div className="relative bg-gray-600 rounded-lg overflow-hidden border-2 border-dashed border-white">
          <div className="p-4">
            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* Logo at top */}
              <div className="flex justify-center mb-3">
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src={firstSite.logo || "/placeholder.svg"}
                    alt={firstSite.siteName}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Site name */}
              <div className="text-center mb-3">
                <div className="text-white text-xl font-bold">{firstSite.siteName}</div>
              </div>

              {/* Bonus */}
              <div className="bg-blue-600 text-white p-3 rounded-lg mb-3 text-center">
                <div className="text-lg font-bold">{firstSite.bonus}</div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mb-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
                  <span>➤</span>
                  <span>Claim Bonus</span>
                </button>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-white text-center">{firstSite.disclaimer}</div>

              {/* Indicator dots */}
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-green-500 mx-0.5"></div>
                ))}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* Special Offer Badge */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="bg-blue-600 text-white px-3 py-8 text-sm font-bold writing-mode-vertical">
                  Special Offer
                </div>
              </div>

              {/* Site name at top */}
              <div className="text-center mb-4">
                <div className="inline-block bg-white px-6 py-2 rounded-lg">
                  <div className="text-black text-xl font-bold">{firstSite.siteName}</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex-1">
                  {/* Bonus with blue background */}
                  <div className="bg-blue-600 text-white p-3 rounded-lg mb-4 text-center">
                    <div className="text-xl font-bold">{firstSite.bonus}</div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg flex items-center space-x-2">
                      <span>➤</span>
                      <span>Claim Bonus</span>
                    </button>
                  </div>
                </div>

                {/* Right side branding */}
                <div className="ml-6">
                  <div className="bg-white p-4 rounded-lg mb-2">
                    <Image
                      src={firstSite.logo || "/placeholder.svg"}
                      alt={firstSite.siteName}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-white text-center mt-4">{firstSite.disclaimer}</div>

              {/* Indicator dots */}
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-green-500 mx-0.5"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
