"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-[#003B2F]">IrishBets</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#003B2F] font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#003B2F] font-medium">
              Betting Guide
            </a>
            <a href="#" className="text-gray-700 hover:text-[#003B2F] font-medium">
              Responsible Gambling
            </a>
          </nav>

          {/* Right corner badges */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold bg-[#003B2F] text-white px-2 py-1 rounded">18+</span>
              <span className="text-sm font-medium text-gray-600">🇮🇪 Irish Licensed</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#003B2F]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-[#003B2F] font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-[#003B2F] font-medium">
                Betting Guide
              </a>
              <a href="#" className="text-gray-700 hover:text-[#003B2F] font-medium">
                Responsible Gambling
              </a>
              <div className="flex items-center space-x-2 pt-2">
                <span className="text-sm font-semibold bg-[#003B2F] text-white px-2 py-1 rounded">18+</span>
                <span className="text-sm font-medium text-gray-600">🇮🇪 Irish Licensed</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
