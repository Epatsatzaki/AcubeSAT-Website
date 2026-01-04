import React from 'react';
import AcuteSatViewer from '../../components/3D/AcubeSATViewer';
import VerticalTimeline from '../../components/dynamic/VerticalTimeline'; // Add this import

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* 3D Viewer Section - Can be at the top or integrated somewhere else */}
      <div className="pt-16">
        <AcuteSatViewer />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About AcubeSAT
        </h1>

        {/* Our Experiment Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="relative group">
            {/* Purple outline / glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-30 blur-md group-hover:opacity-50 transition duration-500"></div>

            {/* Card body */}
            <div className="relative rounded-3xl border border-purple-400/40 bg-gradient-to-br from-orange-800 via-orange-700 to-amber-700 p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                {/* Text */}
                <div className="md:w-2/3 flex items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      Our Experiment
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      AcubeSAT features an{" "}
                      <span className="font-semibold text-orange-200">
                        in-house built pressurized vessel
                      </span>{" "}
                      containing a microscopic assay and a lab-on-a-chip, designed to
                      sustain{" "}
                      <span className="font-semibold italic">
                        Saccharomyces cerevisiae
                      </span>{" "}
                      (yeast) growth in Low Earth Orbit. This enables us to probe the
                      effects of{" "}
                      <span className="font-semibold text-orange-200">
                        radiation and microgravity
                      </span>{" "}
                      conditions at a cellular level.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="md:w-1/3">
                  <div className="relative overflow-hidden rounded-2xl border border-purple-300/40">
                    <img
                      src="/images/backgrounds/ourExperiment_Home.png"
                      alt="AcubeSAT Laboratory Platform"
                      className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">
                        Lab-on-a-chip technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section - Updated with Vertical Timeline */}
        <section id="timeline" className="mt-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Development Timeline
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our journey from concept to launch preparation...
            </p>
            <VerticalTimeline />
          </div>
        </section>

        {/* FYS Programme Section */}
        <section id="fys-programme" className="mt-12">
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
        <section id="team-labs" className="mt-12">
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