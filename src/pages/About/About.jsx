import React from 'react';
import AcuteSatViewer from '../../components/3D/AcubeSATViewer';
import VerticalTimeline from '../../components/dynamic/VerticalTimeline';
import InteractiveDiagram from '../../components/dynamic/InteractiveDiagram';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#030712]">
      <Helmet>
        <title>About | AcubeSAT</title>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP ROW: TITLE + RENDER */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* LEFT: TITLE */}
            <div className="w-full lg:w-1/2 z-10">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                AcubeSAT: <br />
                {/* Fixed: Matched blue precisely to the 'Join Us' button brand blue */}
                <span className="text-[#2563EB] dark:text-blue-500">SpaceDot’s</span> <br />
                first project
              </h1>
            </div>

            {/* RIGHT: 3D RENDER */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
              <div
                className="
                  w-full
                  aspect-square
                  min-w-[240px]
                  max-w-[720px]
                  rounded-full
                  bg-slate-50/50 dark:bg-transparent
                "
              >
                <AcuteSatViewer />
              </div>
            </div>

          </div>

          {/* DESCRIPTION BELOW BOTH */}
          <div className="mt-12 max-w-4xl mx-auto text-center space-y-6 text-lg md:text-xl text-slate-700 dark:text-gray-300">
            <p className="font-bold text-slate-900 dark:text-white">
              The development of AcubeSAT started even before SpaceDot was born!
            </p>

            <p className="leading-relaxed">
              AcubeSAT is a{' '}
              <span className="font-semibold text-[#2563EB] dark:text-blue-400">
                3U+ CubeSat
              </span>{' '}
              (340.5x100x100 mm + tuna can) designed and developed by students
              primarily based at the Aristotle University of Thessaloniki in Greece.
            </p>

            <p className="leading-relaxed border-t border-slate-100 dark:border-transparent pt-6">
              The satellite will study the effects of microgravity and cosmic
              radiation on human-like cells and is supported by the Education
              Office of the European Space Agency through the “Fly Your Satellite!”
              programme.
            </p>
          </div>

        </div>
      </section>

      {/* --- CONTENT CONTINUES --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Our Mission Section */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-800">
          <div className="relative group">
            {/* Improved: Glow is now warmer in light mode to match the orange card better */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-orange-400 via-amber-500 to-blue-600 opacity-10 dark:opacity-20 blur-xl group-hover:opacity-30 transition duration-500"></div>
            <div className="relative rounded-[2.5rem] border border-orange-400/20 bg-gradient-to-br from-orange-950 via-orange-900 to-amber-900 p-6 md:p-10 shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-stretch">
                <div className="md:w-1/2 flex items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      Our Mission
                    </h3>
                    <p className="text-orange-50/90 text-lg leading-relaxed">
                      AcubeSAT features a{' '}
                      <span className="font-semibold text-orange-200">
                        miniaturized biology lab
                      </span>{' '}
                      powered by parallel microfluidics and automated imaging.
                      This modular platform enables us to study gene expression in{' '}
                      <span className="font-semibold italic text-orange-200">
                        S. cerevisiae
                      </span>{' '}
                      on a scale{' '}
                      <span className="font-semibold">100–200 times greater</span>{' '}
                      than previous missions. By observing these molecular effects
                      in Low Earth Orbit, we aim to bridge the gap between
                      biotechnology and the future of{' '}
                      <span className="font-semibold text-orange-200">
                        deep space exploration
                      </span>.
                    </p>
                    <p className="mt-4 text-orange-100/70 text-sm italic">
                      Click the pulsing blue points on the payload to see the internal sub-systems.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <InteractiveDiagram />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section id="timeline" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Development Timeline
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Our journey from the first concept to launch preparation.
            </p>
          </div>
          {/* Added a subtle wrapper for better light-mode integration */}
          <div className="rounded-3xl overflow-hidden shadow-inner bg-slate-50/50 dark:bg-transparent p-1">
            <VerticalTimeline />
          </div>
        </section>

        {/* FYS Programme Section */}
        <section id="fys-programme" className="mt-20 pb-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-50/80 dark:bg-[#0B1120]/80 border border-slate-200 dark:border-blue-500/20 backdrop-blur-md shadow-xl transition-colors duration-300">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-[#2563EB] dark:bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
                      ESA Education Office
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase italic leading-none mb-6">
                    The “Fly Your <br />
                    <span className="text-[#2563EB] dark:text-blue-500">
                      Satellite!”
                    </span>{' '}
                    <br />
                    Programme
                  </h2>
                  <div className="space-y-4 text-slate-700 dark:text-blue-100/80">
                    <p className="text-base leading-relaxed italic border-l-4 border-slate-300 dark:border-blue-500/30 pl-4">
                      "Complementing academic knowledge with hands-on experience designing,
                      testing, and operating a spacecraft."
                    </p>
                    <p className="text-sm leading-relaxed">
                      In exchange, we provide ESA extensive documentation and comply with
                      their technical and programmatic rules.
                    </p>
                  </div>
                </div>

                <div className="lg:w-3/5">
                  <p className="text-slate-900 dark:text-white text-xl font-bold mb-6">
                    Since 2020, our mission and members benefit from:
                  </p>

                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      'Frequent interactions and advice by ESA experts',
                      'Access to dedicated testing facilities in Belgium',
                      'Exclusive workshops on space engineering',
                      'Milestone reviews by ESA experts',
                      'A launch opportunity funded by ESA',
                      'Environmental test campaign support'
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:border-[#2563EB] dark:hover:border-blue-500/50"
                      >
                        <div className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-[#2563EB] dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
                        <span className="text-slate-800 dark:text-blue-100/90 text-sm font-semibold leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-200/50 dark:bg-blue-900/20 border border-slate-200 dark:border-blue-500/20">
                    <p className="text-xs md:text-sm text-slate-600 dark:text-blue-200/60 leading-relaxed font-medium">
                      As a cornerstone programme, it enables our team to operate under
                      professional aerospace standards, bridging the gap between academic
                      theory and real-world orbital operations.
                    </p>
                  </div>
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