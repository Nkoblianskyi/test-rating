"use client"

export function Hero() {
  return (
    <section className="relative py-2 mb-4">
      {/* Dark overlay with fixed height */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white  rounded-lg py-2">
        <h1 className="text-xl md:text-2xl font-bold mb-1">
          BEST <span className="text-green-500">IRELAND</span> BETTING SITES
        </h1>
        <h2 className="text-base md:text-lg font-bold mb-1 text-gray-200">UPDATED FOR JUNE 2025</h2>

        <p className="text-xs md:text-sm mb-1 max-w-4xl mx-auto">
          Finding betting sites can be hard if you don't know where to look. Starting with the most suitable new
          customer offers for June.
        </p>

        <p className="text-xs mb-1 text-gray-300 max-w-4xl mx-auto">*New Customers Only. Age 18+ | T&Cs Apply</p>

        {/* Trust badges - more compact */}
        <div className="flex justify-center gap-2 mb-1">
          <div className="flex items-center space-x-1">
            <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-white text-xs font-semibold">100% Legal</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">🇮🇪</span>
            <span className="text-white text-xs font-semibold">IE Regulated</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💰</span>
            </div>
            <span className="text-white text-xs font-semibold">Fast Withdrawals</span>
          </div>
        </div>

        <p className="text-xs text-gray-400">Play responsibly; Wagering and T&Cs apply.</p>
      </div>
    </section>
  )
}
