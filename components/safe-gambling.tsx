import Image from "next/image"

export function SafeGambling() {
  const organizations = [
    { name: "GambleAware", logo: "/placeholder.svg?height=60&width=120&text=GambleAware" },
    { name: "GamCare", logo: "/placeholder.svg?height=60&width=120&text=GamCare" },
    { name: "GamblingTherapy", logo: "/placeholder.svg?height=60&width=120&text=GamblingTherapy" },
    { name: "Gamblers Anonymous IE", logo: "/placeholder.svg?height=60&width=120&text=GA-IE" },
    { name: "EGBA", logo: "/placeholder.svg?height=60&width=120&text=EGBA" },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003B2F] mb-4">Committed to Responsible Gambling</h2>
          <p className="text-xl text-gray-600 mb-8">
            We partner with leading organizations to promote safe betting practices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          {organizations.map((org, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={org.logo || "/placeholder.svg"}
                alt={org.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-[#003B2F] text-white px-6 py-3 rounded-lg inline-block mb-4">
            <p className="text-lg font-bold">18+ Only. Play responsibly.</p>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you or someone you know has a gambling problem, help is available. Contact GambleAware, GamCare, or
            Gamblers Anonymous Ireland for confidential support and guidance.
          </p>
        </div>
      </div>
    </section>
  )
}
