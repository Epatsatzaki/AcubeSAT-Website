// src/pages/About/About.jsx
const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About AcubeSAT
        </h1>

        {/* Our Experiment Section with Image */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
              {/* Text Content - Left on medium+, top on small */}
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Experiment
                </h3>
                
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/10 dark:to-blue-900/10 rounded-2xl p-6 md:p-8 border border-primary-100 dark:border-primary-800/30">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    AcubeSAT features an <span className="font-semibold text-primary-600 dark:text-primary-400">in-house built pressurized vessel</span> containing a microscopic assay and a lab-on-a-chip, designed to sustain <span className="font-semibold">Saccharomyces cerevisiae</span> (yeast) growth in Low Earth Orbit. This enables us to probe the effects of <span className="font-semibold">radiation and microgravity</span> conditions at a cellular level.
                  </p>
                </div>
              </div>
              
              {/* Image Container - Right on medium+, below on small */}
              <div className="md:w-1/3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <img 
                      src="/images/backgrounds/ourExperiment_Home.png" 
                      alt="AcubeSAT Laboratory Platform"
                      className="w-full h-48 md:h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm font-medium">
                        AcubeSAT's Laboratory Platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        {/* Project Overview Section */}
        <section id="project-overview" className="mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              AcubeSAT is a pioneering student-led CubeSat mission focused on advancing 
              space biology research through innovative technology and international collaboration.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Development Timeline
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our journey from concept to launch preparation...
            </p>
          </div>
        </section>

        {/* FYS Programme Section */}
        <section id="fys-programme" className="mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Fly Your Satellite! Programme
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Collaboration with ESA Education Office...
            </p>
          </div>
        </section>

        {/* Team Laboratories Section */}
        <section id="team-labs">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Team Laboratories
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our research facilities and infrastructure...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;