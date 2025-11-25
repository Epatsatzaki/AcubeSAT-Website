// src/pages/About/About.jsx
const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About AcubeSAT
        </h1>
        
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