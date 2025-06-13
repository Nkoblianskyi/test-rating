import Image from "next/image"

export function Footer() {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Betting Guide", href: "#" },
    { name: "Responsible Gambling", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ]

  const organizations = [
    { name: "GambleAware", logo: "/gamble.webp" },
    { name: "GamCare", logo: "/gamecare.svg" },
    { name: "EGBA", logo: "/egba.png" },
  ]

  return (
    <footer className="bg-black bg-opacity-80 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold text-[#FFD700] mb-4">IrishBets</div>
            <p className="text-gray-400 mb-4">
              Ireland's trusted source for comparing licensed betting sites and finding the best bonuses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trusted Partners</h3>
            <div className="flex space-x-4">
              {organizations.map((org, index) => (
                <Image
                  key={index}
                  src={org.logo || "/placeholder.svg"}
                  alt={org.name}
                  width={80}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity bg-white p-2 rounded"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 IrishBets. All rights reserved. Licensed and regulated in Ireland.
            </p>
            <p className="text-gray-400 text-sm">18+ | Play Responsibly | GambleAware.org</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
