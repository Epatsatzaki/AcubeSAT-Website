import { useEffect, useState } from "react"

const categoryConfig = [
  { key: "Diamond", title: "Diamond Sponsors", showDescription: true },
  { key: "Platinum", title: "Platinum Sponsors", showDescription: true },
  { key: "Gold", title: "Gold Sponsors", showDescription: true },
  { key: "Silver", title: "Silver Sponsors", showDescription: true },
  { key: "Bronze", title: "Bronze Sponsors", showDescription: false },
  { key: "Supporters", title: "Supporters", showDescription: false },
  { key: "AcademicSupporters", title: "Academic Supporters", showDescription: false },
]

// ✅ Static glob imports (required by Vite)
const diamondModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Diamond/*.js")
const platinumModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Platinum/*.js")
const goldModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Gold/*.js")
const silverModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Silver/*.js")
const bronzeModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Bronze/*.js")
const supportersModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Supporters/*.js")
const academicModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/AcademicSupporters/*.js")

const Sponsors = () => {
  const [sponsors, setSponsors] = useState({})

  useEffect(() => {
    const loadSponsors = async () => {
      const load = async (modules) => {
        const result = []
        for (const path in modules) {
          const mod = await modules[path]()
          result.push(mod.default)
        }
        return result
      }

      const allSponsors = {
        Diamond: await load(diamondModules),
        Platinum: await load(platinumModules),
        Gold: await load(goldModules),
        Silver: await load(silverModules),
        Bronze: await load(bronzeModules),
        Supporters: await load(supportersModules),
        AcademicSupporters: await load(academicModules),
      }

      setSponsors(allSponsors)
    }

    loadSponsors()
  }, [])

  const renderCategory = (config) => {
    const list = sponsors[config.key] || []
    if (!list.length) return null

    return (
      <section key={config.key} className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          {config.title}
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.sponsor_site}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-200"
            >
              <img
                src={sponsor.featured_image}
                alt={sponsor.title}
                className="h-24 object-contain mb-6"
              />

              {config.showDescription && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {sponsor.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {sponsor.description}
                  </p>
                </>
              )}
            </a>
          ))}
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* ===== TOP PART – UNCHANGED ===== */}
      <div className="relative h-64 bg-gray-300 dark:bg-gray-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-4xl font-bold text-white">
            Support Our Mission
          </h1>
        </div>
      </div>

      {/* Why Sponsor Us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Why Sponsor Us?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          By sponsoring our team, you support hands-on innovation, real-world engineering,
          and the next generation of scientists and technology leaders.
        </p>
      </section>

      {/* Sponsors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {categoryConfig.map(renderCategory)}
      </div>
    </div>
  )
}

export default Sponsors
