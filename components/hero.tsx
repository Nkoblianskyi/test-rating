"use client"

export function Hero() {
  const scrollToRankings = () => {
    document.getElementById("rankings")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-gradient-to-r from-[#003B2F] to-[#004d3d] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Best Irish Betting Sites — 2025 Edition</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl mx-auto">
          Compare trusted, fully licensed Irish bookmakers and claim top bonuses today!
        </p>

        {/* Stats and badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="bg-black bg-opacity-30 px-4 py-2 rounded-lg">
            <div className="text-[#FFD700] font-bold">Last Updated</div>
            <div className="text-white">June 12, 2025</div>
          </div>

          <div className="bg-black bg-opacity-30 px-4 py-2 rounded-lg">
            <div className="text-[#FFD700] font-bold">Monthly Reviews</div>
            <div className="text-white">42 Sites Analyzed</div>
          </div>

          <div className="bg-black bg-opacity-30 px-4 py-2 rounded-lg">
            <div className="text-[#FFD700] font-bold">Exclusive Offers</div>
            <div className="text-white">8 New Bonuses</div>
          </div>
        </div>
      </div>
    </section>
  )
}
