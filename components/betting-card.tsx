import Image from "next/image"
import { Star } from "lucide-react"

interface BettingSite {
  id: number
  name: string
  logo: string
  rating: number
  claimed: number
  bonus: string
  features: string[]
  cta: string
  disclaimer: string
}

interface BettingCardProps {
  site: BettingSite
  rank: number
}

export function BettingCard({ site, rank }: BettingCardProps) {
  const getBadge = (rank: number) => {
    if (rank === 1) return { text: "PLAYER'S CHOICE", color: "bg-[#FFD700]" }
    if (rank === 2) return { text: "EXCLUSIVE OFFER", color: "bg-red-600" }
    if (rank === 3) return { text: "MOST POPULAR", color: "bg-orange-600" }
    return { text: `#${rank}`, color: "bg-gray-600" }
  }

  const badge = getBadge(rank)

  return (
    <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] rounded-lg overflow-hidden shadow-lg border border-gray-600">
      {/* Badge */}
      <div className="relative">
        <div className={`${badge.color} text-white px-3 py-1 text-sm font-bold inline-block rounded-br-lg`}>
          {badge.text}
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Logo Section */}
          <div className="col-span-12 md:col-span-3">
            <div className="bg-white p-4 rounded-lg">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={120}
                height={60}
                className="object-contain mx-auto"
              />
            </div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-green-500 mx-0.5"></div>
              ))}
            </div>
          </div>

          {/* Bonus Section */}
          <div className="col-span-12 md:col-span-4 text-center">
            <div className="text-white">
              <div className="text-lg font-bold mb-1">{site.bonus.split("→")[0]}</div>
              <div className="text-2xl font-bold text-[#FFD700]">
                {site.bonus.split("→")[1] || site.bonus.split("Get")[1] || "€30"}
              </div>
            </div>
          </div>

          {/* Rating Section */}
          <div className="col-span-12 md:col-span-2 text-center">
            <div className="text-4xl font-bold text-white mb-1">{site.rating}</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(site.rating) ? "text-[#FFD700] fill-current" : "text-gray-400"}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="col-span-12 md:col-span-3 text-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg mb-2 w-full transition-all duration-300">
              GET BONUS
            </button>
            <div className="text-sm text-white">Visit Site</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 pt-4 border-t border-gray-600">
          <p className="text-xs text-gray-300">{site.disclaimer}</p>
        </div>
      </div>
    </div>
  )
}
