import Image from "next/image"
import { bettingSites } from "@/data/mock-data"

export function TopRecommendationBlock() {
  const firstSite = bettingSites[0]

  return (
    <div className="relative my-8">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/placeholder.svg?height=300&width=800&text=Gaming+Background')",
          minHeight: "200px",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Dashed border */}
        <div className="absolute inset-4 border-2 border-dashed border-white rounded-lg"></div>

        {/* Special Offer Badge */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="bg-blue-600 text-white px-3 py-8 text-sm font-bold writing-mode-vertical">Special Offer</div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between h-full p-8">
          <div className="flex-1 text-center">
            <div className="text-white text-2xl font-bold mb-4">{firstSite.bonus}</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              {firstSite.cta}
            </button>
            <div className="text-xs text-gray-300 mt-4 max-w-md mx-auto">{firstSite.disclaimer}</div>
          </div>

          {/* Right side branding */}
          <div className="text-right">
            <div className="bg-white p-4 rounded-lg mb-2">
              <Image
                src={firstSite.logo || "/placeholder.svg"}
                alt={firstSite.name}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-green-500 mx-0.5"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
