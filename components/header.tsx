"use client"

export function Header() {
  return (
    <header className="bg-black bg-opacity-80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          {/* Centered Logo and Name */}
          <a href="#" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-xl">🍀</div>
            </div>
            <div className="text-white">
              <div className="text-xl font-bold">BEST IRISH BETTING SITES</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}
