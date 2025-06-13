import Image from "next/image"

export function SafeGambling() {
  const organizations = [
    {
      name: "GambleAware",
      logo: "/gamble.webp",
      url: "https://www.gambleaware.org",
    },
    { name: "GamCare", logo: "/gamecare.svg", url: "https://www.gamcare.org.uk" },
    {
      name: "GamblingTherapy",
      logo: "/gordon.png",
      url: "https://www.gamblingtherapy.org",
    },
    {
      name: "Gamblers Anonymous IE",
      logo: "/anonymos.avif",
      url: "https://www.gamblersanonymous.ie",
    },
    { name: "EGBA", logo: "/egba.png", url: "https://www.egba.eu" },
  ]

  return (
    <section className="py-16 bg-transparent">
      <div className="text-center mb-12 bg-black bg-opacity-70 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Committed to Responsible Gambling</h2>
        <p className="text-xl text-gray-200 mb-8">
          We partner with leading organizations to promote safe betting practices
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-12 bg-white bg-opacity-80 p-6 rounded-lg">
        {organizations.map((org, index) => (
          <div key={index} className="transition-all duration-300">
            <a href={org.url} target="_blank" rel="noopener noreferrer" title={`Visit ${org.name}`}>
              <Image
                src={org.logo || "/placeholder.svg"}
                alt={org.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </a>
          </div>
        ))}
      </div>

      <div className="text-center bg-black bg-opacity-70 p-6 rounded-lg">
        <div className="bg-[#003B2F] text-white px-6 py-3 rounded-lg inline-block mb-4">
          <p className="text-lg font-bold">18+ Only. Play responsibly.</p>
        </div>
        <p className="text-gray-200 max-w-2xl mx-auto">
          If you or someone you know has a gambling problem, help is available. Contact GambleAware, GamCare, or
          Gamblers Anonymous Ireland for confidential support and guidance.
        </p>
      </div>
    </section>
  )
}
