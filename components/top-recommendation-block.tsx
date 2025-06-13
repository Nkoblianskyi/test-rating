import Image from "next/image"
import { bettingSites } from "@/data/mock-data"

export function TopRecommendationBlock() {
  const firstSite = bettingSites[0]

  return (
    <a href={firstSite.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative my-4 hover:scale-105 transition-transform duration-300">
        {/* Background Image with overlay */}
        <div
          className="relative bg-cover bg-center rounded-lg overflow-hidden border-2 border-dashed border-white"
          style={{
            backgroundImage: "url('/bg-2.jpg')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Content wrapper */}
          <div className="relative z-10 p-3 sm:p-4 md:p-5 lg:p-6">
            {/* Extra Small Screens (mobile) */}
            <div className="block sm:hidden">
              {/* Logo at top */}
              <div className="flex justify-center mb-3">
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src={firstSite.logo || "/placeholder.svg"}
                    alt={firstSite.siteName}
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Site name */}
              <div className="text-center mb-3">
                <div className="text-white text-lg font-bold">{firstSite.siteName}</div>
              </div>

              {/* Bonus */}
              <div className="bg-blue-600 text-white p-2 rounded-lg mb-3 text-center">
                <div className="text-base font-bold">{firstSite.bonus}</div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mb-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
                  <span>➤</span>
                  <span>Claim Bonus</span>
                </button>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-white text-center">{firstSite.disclaimer}</div>
            </div>

            {/* Small Screens (large mobile/small tablet) */}
            <div className="hidden sm:block md:hidden">
              <div className="flex flex-col sm:flex-row items-center">
                {/* Logo */}
                <div className="mb-3 sm:mb-0 sm:mr-4">
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src={firstSite.logo || "/placeholder.svg"}
                      alt={firstSite.siteName}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  {/* Site name */}
                  <div className="text-white text-lg font-bold mb-2 text-center sm:text-left">{firstSite.siteName}</div>

                  {/* Bonus */}
                  <div className="bg-blue-600 text-white p-2 rounded-lg mb-2 text-center sm:text-left">
                    <div className="text-base font-bold">{firstSite.bonus}</div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center sm:justify-start">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1.5 px-4 rounded-lg flex items-center space-x-1 text-sm">
                      <span>➤</span>
                      <span>Claim Bonus</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-white text-center sm:text-left mt-2">{firstSite.disclaimer}</div>
            </div>

            {/* Medium Screens (tablets) */}
            <div className="hidden md:block lg:hidden">
              {/* Special Offer Badge */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="bg-blue-600 text-white px-2 py-6 text-xs font-bold writing-mode-vertical">
                  Special Offer
                </div>
              </div>

              {/* Site name at top */}
              <div className="text-center mb-3 ml-6">
                <div className="inline-block bg-white px-4 py-1 rounded-lg">
                  <div className="text-black text-lg font-bold">{firstSite.siteName}</div>
                </div>
              </div>

              <div className="flex justify-between items-center ml-6">
                <div className="flex-1">
                  {/* Bonus with blue background */}
                  <div className="bg-blue-600 text-white p-2 rounded-lg mb-3 text-center">
                    <div className="text-base font-bold">{firstSite.bonus}</div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1.5 px-4 rounded-lg flex items-center space-x-1 text-sm">
                      <span>➤</span>
                      <span>Claim Bonus</span>
                    </button>
                  </div>
                </div>

                {/* Right side branding */}
                <div className="ml-4">
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src={firstSite.logo || "/placeholder.svg"}
                      alt={firstSite.siteName}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-white text-center ml-6 mt-2">{firstSite.disclaimer}</div>
            </div>

            {/* Large Screens and above (desktop) */}
            <div className="hidden lg:block">
              {/* Special Offer Badge */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="bg-blue-600 text-white px-3 py-8 text-sm font-bold writing-mode-vertical">
                  Special Offer
                </div>
              </div>

              {/* Site name at top */}
              <div className="text-center mb-4 ml-8">
                <div className="inline-block bg-white px-6 py-2 rounded-lg">
                  <div className="text-black text-xl font-bold">{firstSite.siteName}</div>
                </div>
              </div>

              <div className="flex justify-between items-center ml-8">
                <div className="flex-1">
                  {/* Bonus with blue background */}
                  <div className="bg-blue-600 text-white p-3 rounded-lg mb-4 text-center">
                    <div className="text-xl font-bold">{firstSite.bonus}</div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg flex items-center space-x-2">
                      <span>➤</span>
                      <span>Claim Bonus</span>
                    </button>
                  </div>
                </div>

                {/* Right side branding */}
                <div className="ml-6">
                  <div className="bg-white p-4 rounded-lg mb-2">
                    <Image
                      src={firstSite.logo || "/placeholder.svg"}
                      alt={firstSite.siteName}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-white text-center ml-8 mt-4">{firstSite.disclaimer}</div>
            </div>

            {/* Indicator dots - visible on all screen sizes */}
            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-green-500 mx-0.5"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
