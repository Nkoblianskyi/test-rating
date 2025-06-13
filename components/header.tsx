"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black bg-opacity-80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          {/* Centered Logo and Name */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12  flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" width={32} height={32}  />
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
