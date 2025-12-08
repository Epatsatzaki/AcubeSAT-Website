import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const categoryConfig = [
  { key: "Diamond", title: "Diamond Sponsors", showDescription: true },
  { key: "Platinum", title: "Platinum Sponsors", showDescription: true },
  { key: "Gold", title: "Gold Sponsors", showDescription: true },
  { key: "Silver", title: "Silver Sponsors", showDescription: true },
  { key: "Bronze", title: "Bronze Sponsors", showDescription: false },
  { key: "Supporters", title: "Supporters", showDescription: false },
  { key: "AcademicSupporters", title: "Academic Supporters", showDescription: false },
];

// Static glob imports
const diamondModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Diamond/*.js");
const platinumModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Platinum/*.js");
const goldModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Gold/*.js");
const silverModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Silver/*.js");
const bronzeModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Bronze/*.js");
const supportersModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/Supporters/*.js");
const academicModules = import.meta.glob("/src/pages/Sponsors-page/sponsors/AcademicSupporters/*.js");

const Sponsors = () => {
  const [sponsors, setSponsors] = useState({});
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const loadSponsors = async () => {
      const load = async (modules) => {
        const result = [];
        for (const path in modules) {
          const mod = await modules[path]();
          result.push(mod.default);
        }
        return result;
      };
      const allSponsors = {
        Diamond: await load(diamondModules),
        Platinum: await load(platinumModules),
        Gold: await load(goldModules),
        Silver: await load(silverModules),
        Bronze: await load(bronzeModules),
        Supporters: await load(supportersModules),
        AcademicSupporters: await load(academicModules),
      };
      setSponsors(allSponsors);
    };
    loadSponsors();
  }, []);

  const toggleFlip = (categoryKey, index) => {
    const cardId = `${categoryKey}-${index}`;
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const renderCategory = (config) => {
    const list = sponsors[config.key] || [];
    if (!list.length) return null;

    return (
      <section key={config.key} className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          {config.title}
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((sponsor, index) => {
            const cardId = `${config.key}-${index}`;
            const flipped = flippedCards[cardId] || false;

            return (
              <div
                key={index}
                className="w-full aspect-square perspective cursor-pointer"
                onMouseEnter={() => toggleFlip(config.key, index)}
                onMouseLeave={() => toggleFlip(config.key, index)}
                onClick={() => toggleFlip(config.key, index)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500 transform-style-3d"
                  style={{
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-2xl p-2">
                    <div
                      className={`flex items-center justify-center w-full h-full rounded-2xl p-2 ${
                         "bg-white"  
                      }`}
                    >
                      <img
                        src={sponsor.featured_image}
                        alt={sponsor.title}
                        className="h-5/6 object-contain"
                      />
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 text-center overflow-y-auto">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {sponsor.title}
                    </h3>
                    {sponsor.description.trim() && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <ReactMarkdown>{sponsor.description}</ReactMarkdown>
                      </p>
                    )}
                    <a
                      href={sponsor.sponsor_site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 underline"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* ===== TOP PART – UNCHANGED ===== */}
      <div className="relative h-64 bg-gray-300 dark:bg-gray-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-4xl font-bold text-white">Support Our Mission</h1>
        </div>
      </div>

      {/* Why Sponsor Us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Why Sponsor Us?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          By sponsoring our team, you support hands-on innovation, real-world engineering, and
          the next generation of scientists and technology leaders.
        </p>
      </section>

      {/* Sponsors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {categoryConfig.map(renderCategory)}
      </div>
    </div>
  );
};

export default Sponsors;
