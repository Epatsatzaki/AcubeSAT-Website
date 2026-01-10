import AcuteSatViewer from '../../components/3D/AcubeSATViewer';
import VerticalTimeline from './VerticalTimeline';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <Helmet>
        <title>About | AcubeSAT</title>
      </Helmet>
      {/* 3D Viewer Section */}
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
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-30 blur-md group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-3xl border border-purple-400/40 bg-gradient-to-br from-orange-800 via-orange-700 to-amber-700 p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
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

        {/* Timeline Section */}
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

        {/* FYS Programme Section*/}
        <section id="fys-programme" className="mt-12">
          <div className="relative overflow-hidden rounded-3xl 
            bg-[#F0F7FF] dark:bg-[#0B1120] 
            border-2 border-[#A5C9FF] dark:border-blue-500/30 
            shadow-xl transition-all duration-300">
            
            {/* Dot Pattern Background using the custom blue */}
            <div className="absolute inset-0 opacity-[0.2] dark:opacity-10 pointer-events-none" 
                style={{ backgroundImage: `radial-gradient(#A5C9FF 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }}></div>
            
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-2 bg-[#A5C9FF] dark:bg-blue-500 rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tighter uppercase italic">
                  Fly Your Satellite!
                </h2>
              </div>

              <div className="max-w-4xl space-y-8">
                <p className="text-slate-700 dark:text-blue-100 text-xl leading-relaxed font-semibold">
                  Since early 2020, AcubeSAT has been part of the “Fly Your Satellite!” programme of the European Space Agency’s Education Office. Our members and mission benefit from:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Frequent interactions and advice by ESA experts",
                    "Access to a dedicated testing for AcubeSAT in Belgium",
                    "Exclusive workshops on space engineering",
                    "A launch opportunity funded by ESA",
                    "Milestone reviews by ESA experts"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl 
                      bg-white dark:bg-white/5 
                      border border-[#A5C9FF]/50 dark:border-white/10 
                      hover:shadow-md dark:hover:bg-white/10 dark:hover:border-blue-500/50 
                      group transition-all duration-300 cursor-default">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#A5C9FF] dark:bg-blue-400 shadow-[0_0_8px_#A5C9FF] group-hover:scale-125 transition-transform"></div>
                      <span className="text-slate-800 dark:text-blue-100/90 group-hover:text-slate-950 dark:group-hover:text-white font-medium transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mission Commitment Footer with subtle light-blue background */}
                <div className="mt-12 p-6 rounded-2xl bg-white/60 dark:bg-blue-900/20 border-l-4 border-[#A5C9FF] dark:border-blue-500 backdrop-blur-sm">
                  <h4 className="text-slate-500 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-3">
                    Mission Partnership & Commitment
                  </h4>
                  <p className="text-slate-700 dark:text-blue-200/80 text-base leading-relaxed italic">
                    In exchange, we provide ESA extensive documentation about AcubeSAT and we comply to ESA’s technical and programmatic rules. As “Fly Your Satellite!” is one of the cornerstone programmes of the Education office, our members have the unique opportunity to complement their academic knowledge with hands-on experience designing, testing and operating a spacecraft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;