import Image from "next/image"
import { Star } from "lucide-react"

interface BettingSite {
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
}

interface BettingCardProps {
  site: BettingSite
  rank: number
}

export function BettingCard({ site, rank }: BettingCardProps) {
  const getBadge = (rank: number) => {
    if (rank === 1) return { text: "TOP BRAND", color: "bg-green-600" }
    if (rank === 2) return { text: "EXCLUSIVE OFFER", color: "bg-green-600" }
    if (rank === 3) return { text: "MOST POPULAR", color: "bg-green-600" }
    return { text: `#${rank}`, color: "bg-green-600" }
  }

  const badge = getBadge(rank)

  // Parse bonus text for better display
  const parseBonusText = (bonus: string) => {
    if (bonus.includes("→")) {
      const parts = bonus.split("→")
      return { main: parts[0].trim(), secondary: parts[1].trim() }
    } else if (bonus.includes("Get")) {
      const parts = bonus.split("Get")
      return { main: parts[0].trim(), secondary: "Get " + parts[1].trim() }
    }
    return { main: bonus, secondary: "" }
  }

  const bonusData = parseBonusText(site.bonus)

  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-black bg-opacity-80 rounded-lg shadow-lg overflow-hidden border border-gray-200 mb-4 hover:shadow-xl transition-shadow duration-300 text-white">
        {/* Header with table-like structure */}
        <div className="bg-gray-800 text-white py-3 px-6">
          <div className="grid grid-cols-5 gap-4 text-center text-sm font-semibold">
            <div>BOOKMAKER</div>
            <div>BONUS OFFER</div>
            <div>USER RATING</div>
            <div>SCORE</div>
            <div>VISIT SITE</div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-2 bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
            {/* Badge and Logo */}
            <div className="text-center">
              <div className={`${badge.color} text-white px-3 py-1 text-xs font-bold rounded-full inline-block mb-2`}>
                {badge.text}
              </div>
              <div className="flex justify-center mb-1">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.siteName}
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-sm font-bold text-white">{site.siteName}</div>
            </div>

            {/* Bonus Offer - Enhanced */}
            <div className="text-center">
              <div className="text-xs text-gray-300 mb-2 uppercase tracking-wide">Welcome Bonus</div>

              {/* Bonus Container with more conservative colors */}
              <div className="bg-gray-800 border border-gray-600 rounded-lg p-2 mb-2">
                <div className="text-base font-bold text-white mb-1">{bonusData.main}</div>
                {bonusData.secondary && (
                  <div className="text-sm font-semibold text-gray-300">{bonusData.secondary}</div>
                )}

                {/* Bonus highlight badge */}
                <div className="inline-block bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs font-bold mt-2">
                  🎁 FREE BONUS
                </div>
              </div>

              <div className="text-xs text-gray-300">New customers only</div>
            </div>

            {/* User Rating */}
            <div className="text-center">
              <div className="text-sm text-gray-300 mb-1">Rate it! ({site.claimed})</div>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(site.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              
            </div>

            {/* Score */}
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">{site.rating}</div>
            </div>

            {/* Visit Site */}
            <div className="text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full text-base transition-colors duration-300 mb-2">
                GET BONUS
              </button>
              <div className="text-sm text-gray-300 underline cursor-pointer">Visit {site.siteName}</div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-2 pt-2 border-t border-gray-600">
            <p className="text-xs text-gray-300">{site.disclaimer}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
