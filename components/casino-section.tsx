import { CasinoCard } from "./casino-card"
import { casinoSites } from "@/data/casino-mock-data"

export function CasinoSection() {
  return (
    <section id="casino-rankings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Casino Section Header */}
      <div className="text-center mb-8 bg-black bg-opacity-70 p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-4">
          BEST <span className="text-red-500">CASINO</span> SITES
        </h2>
        <p className="text-lg text-gray-200 mb-2">Top Irish Casino Sites - Updated June 2025</p>
        <div className="flex justify-center gap-4 mb-2">
          <div className="flex items-center space-x-1">
            <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-white text-sm font-semibold">Licensed</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">🎰</span>
            <span className="text-white text-sm font-semibold">Live Casino</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💰</span>
            </div>
            <span className="text-white text-sm font-semibold">Big Bonuses</span>
          </div>
        </div>
        <p className="text-xs text-gray-400">18+ | Play responsibly | GambleAware.org</p>
      </div>

      {/* Casino Cards */}
      <div className="space-y-6">
        {casinoSites.map((site, index) => (
          <CasinoCard key={site.id} site={site} rank={index + 1} />
        ))}
      </div>
    </section>
  )
}
