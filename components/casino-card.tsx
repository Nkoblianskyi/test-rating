import Image from "next/image"
import { Star } from "lucide-react"

interface CasinoSite {
  id: number
  name: string
  siteName: string
  logo: string
  rating: number
  claimed: number
  bonus: string
  features: string[]
  cta: string
  disclaimer: string
  url: string
  badge: string
}

interface CasinoCardProps {
  site: CasinoSite
  rank: number
}

export function CasinoCard({ site, rank }: CasinoCardProps) {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "HIGHLY RATED":
        return "bg-red-500"
      case "GREAT SLOTS":
        return "bg-green-500"
      case "NO WAGERING":
        return "bg-purple-500"
      case "MOBILE FIRST":
        return "bg-blue-500"
      case "ADVENTURE":
        return "bg-orange-500"
      case "GREEN GAMING":
        return "bg-emerald-500"
      default:
        return "bg-red-500"
    }
  }

  const badgeColor = getBadgeColor(site.badge)

  // Parse bonus text for better display
  const parseBonusText = (bonus: string) => {
    if (bonus.includes("Up To")) {
      const parts = bonus.split("Up To")
      return { main: parts[0].trim(), secondary: "Up To " + parts[1].trim() }
    } else if (bonus.includes("+")) {
      const parts = bonus.split("+")
      return { main: parts[0].trim(), secondary: "+ " + parts[1].trim() }
    }
    return { main: bonus, secondary: "" }
  }

  const bonusData = parseBonusText(site.bonus)

  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="mb-3">
        {/* Header with table-like structure - Hidden on mobile */}
        <div className="hidden md:block bg-red-600 text-white py-1 px-4 rounded-t-lg">
          <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold">
            <div>CASINO</div>
            <div>WELCOME BONUS</div>
            <div>USER RATING</div>
            <div>SCORE</div>
            <div>VISIT SITE</div>
          </div>
        </div>

        {/* Main content */}
        <div
          className={`bg-white ${!rank ? "rounded-lg" : "rounded-b-lg"} shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="p-3 relative">
            {/* Badge */}
            <div className="absolute top-0 left-0 -mt-1 -ml-1">
              <div className={`${badgeColor} text-white px-2 py-0.5 text-xs font-bold rounded-full`}>{site.badge}</div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex justify-center mb-2">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.siteName}
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>

              <div className="text-center mb-2">
                <div className="text-xs text-gray-500 uppercase tracking-wide">WELCOME BONUS</div>
                <div className="text-base font-bold text-black">{bonusData.main}</div>
                {bonusData.secondary && <div className="text-sm font-semibold text-black">{bonusData.secondary}</div>}
              </div>

              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-xs text-gray-500">Rate it! ({site.claimed})</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(site.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-2xl font-bold text-red-500">{site.rating}</div>
              </div>

              <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded-full text-sm transition-colors duration-300 w-full">
                  GET BONUS
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-5 gap-2 items-center pt-2">
              {/* Logo */}
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.siteName}
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-xs font-semibold text-gray-700">{site.siteName}</div>
              </div>

              {/* Bonus Offer */}
              <div className="text-center md:col-span-2">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">WELCOME BONUS</div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-2 mb-1">
                  <div className="text-base font-bold text-red-800">{bonusData.main}</div>
                  {bonusData.secondary && (
                    <div className="text-sm font-semibold text-orange-700">{bonusData.secondary}</div>
                  )}
                </div>
                <div className="inline-block bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-bold">
                  🎰 FREE BONUS
                </div>
              </div>

              {/* User Rating */}
              <div className="text-center">
                <div className="text-xs text-gray-500">Rate it! ({site.claimed})</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(site.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Score */}
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{site.rating}</div>
              </div>
            </div>

            {/* Visit Site - Desktop only */}
            <div className="hidden md:flex md:justify-center mt-2">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded-full text-sm transition-colors duration-300">
                GET BONUS
              </button>
            </div>

            {/* Disclaimer - Smaller and more compact */}
            <div className="mt-2 pt-1 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center truncate">{site.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
