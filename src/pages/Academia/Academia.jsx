import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Academia = () => {
  const [visibleSections, setVisibleSections] = useState({
    0: false, 
    1: false, 
    2: false  
  });

  const [activeTab, setActiveTab] = useState(null);

  const toggleSection = (index) => {
    setVisibleSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { 
        threshold: 0, 
        rootMargin: "-20% 0px -75% 0px" 
      }
    );

    const sections = ['team-labs', 'publications'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const heroEl = document.getElementById("academia-hero");
    const clearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveTab(null);
      },
      { threshold: 0.5 }
    );
    if (heroEl) clearObserver.observe(heroEl);

    return () => {
      observer.disconnect();
      clearObserver.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const publications = [
    {
      category: "Bachelor's and Master's Theses",
      entries: [
        {
          citation: "A. F. Retselis and A. Anthopoulos, \"Orbital analysis and the spin-orbit coupling problem for the AcubeSAT mission\", Aristotle University of Thessaloniki, Greece, 2020.",
          link: "https://doi.org/10.13140/RG.2.2.17360.02566",
          linkText: "DOI: 10.13140/RG.2.2.17360.02566"
        },
        {
          citation: "K. Kanavouras, \"Design of Fault Detection, Isolation and Recovery in the AcubeSAT NanoSatellite\", Aristotle University of Thessaloniki, Greece, 2021.",
          link: "https://doi.org/10.13140/RG.2.2.33537.58723",
          linkText: "DOI: 10.13140/RG.2.2.33537.58723"
        },
        {
          citation: "M. Chadolias, \"Monte Carlo Simulation Radiation Transport - Radiation Analysis for the nano-satellite AcubeSAT\", Aristotle University of Thessaloniki, Greece, 2022.",
          link: "https://ikee.lib.auth.gr/record/338695/files/chadolias.pdf",
          linkText: "View PDF"
        }
      ]
    },
    {
      category: "Conference Papers",
      entries: [
        {
          citation: "A. F. Retselis, T. Papafotiou and K. Kanavouras, \"Adaptation of the AcubeSAT nanosatellite project into remote working during the COVID-19 era\", 4th Symposium on Space Educational Activities, Barcelona, Spain, 2022.",
          link: "https://doi.org/10.5821/conference-9788419184405.093",
          linkText: "DOI: 10.5821/conference-9788419184405.093"
        },
        {
          citation: "I. Kozaris, F. Gioulekas and P. Katsaros, \"Resource-Constrained Image Processing for Scientific CubeSats\", 6th International Conference on Algorithms, Computing and Systems, Larissa, Greece, 2023.",
          link: "https://doi.org/10.1145/3564982.3564998",
          linkText: "DOI: 10.1145/3564982.3564998"
        },
        {
          citation: "P. Bountzioukas, G. Kikas, C. Tsiolakis, D. Stoupis, E. Chatziargyriou, A. Hatzopoulos, V. Kourampa-Gottfroh, I. Karakosta-Amarantidou, A. Mavropoulos, I. N. Komis, A. Kita, D. Palma and L. Franchi, \"The Evolution from Design to Verification of the Antenna System and Mechanisms in the AcubeSAT mission\", 74th International Astronautical Congress, Baku, Azerbaijan, 2023.",
          link: "https://doi.org/10.48550/arXiv.2310.16134",
          linkText: "DOI: 10.48550/arXiv.2310.16134"
        },
        {
          citation: "A. Keremidis, S. Tzelepis and A. Hatzopoulos, \"The Integration and Testing Procedures for the AcubeSAT Nanosatellite's Software\", 2024 20th International Conference (SMACD), Volos, Greece, 2024.",
          link: "https://doi.org/10.1109/SMACD61181.2024.10745423",
          linkText: "DOI: 10.1109/SMACD61181.2024.10745423"
        },
        {
          citation: "K. Tsoupos, S. Tzelepis, G. Sklavenitis, D. Stoupis, G. Pavlakis, P. Bountzioukas, C. Athanasiadou, L. Ha, D. Palma, L. Franchi and A. Hatzopoulos, \"The On-Board Computer of the AcubeSAT mission\", 75th International Astronautical Congress, Milan, Italy, 2025.",
          link: "https://doi.org/10.48550/arXiv.2503.18473",
          linkText: "DOI: 10.48550/arXiv.2503.18473"
        }
      ]
    },
    {
      category: "(In Greek) Bachelor's and Master's Theses",
      entries: [
        {
          citation: "I. G. Velentzas and I. Kotsakiachidis, \"Design of the Attitude Control System of the AcubeSAT Nanosatellite\", Aristotle University of Thessaloniki, 2021.",
          link: "https://ikee.lib.auth.gr/record/329273",
          linkText: "IKEE Record"
        },
        {
          citation: "A. Theocharis, \"Design and development of critical embedded system software for a space mission\", Aristotle University of Thessaloniki, 2021.",
          link: "https://ikee.lib.auth.gr/record/335055",
          linkText: "IKEE Record"
        },
        {
          citation: "I. Nikitas, \"Study and Design of the Electrical Power System (EPS) of the AcubeSAT Nanosatellite\", Aristotle University of Thessaloniki, 2021.",
          link: "https://ikee.lib.auth.gr/record/334971",
          linkText: "IKEE Record"
        },
        {
          citation: "I. Kozaris, \"Analysis and implementation of space grade image compression algorithms...\", Aristotle University of Thessaloniki, 2022.",
          link: "https://doi.org/10.26262/heal.auth.ir.341572",
          linkText: "DOI Record"
        },
        {
          citation: "C. Malogiannis, \"Design and construction of an electrical power system (EPS) on a nanosatellite\", Aristotle University of Thessaloniki, 2023.",
          link: "https://ikee.lib.auth.gr/record/346848",
          linkText: "IKEE Record"
        },
        {
          citation: "F. Markopoulos, \"Design software driver for embedded camera on nanosatellite\", Aristotle University of Thessaloniki, 2023.",
          link: "https://doi.org/10.26262/heal.auth.ir.352081",
          linkText: "DOI Record"
        },
        {
          citation: "A. Keremidis, \"The communication of subsystems aboard the AcubeSAT nanosatellite\", Aristotle University of Thessaloniki, 2024.",
          link: "https://ikee.lib.auth.gr/record/354365",
          linkText: "IKEE Record"
        },
        {
          citation: "C. Sidiras, \"A low power FPGA implementation of LDPC encoder for space applications\", Aristotle University of Thessaloniki, 2024.",
          link: "https://ikee.lib.auth.gr/record/359537",
          linkText: "IKEE Record"
        },
        {
          citation: "T. K. Pravinos, \"Analysis and Implementation of Fault Detection, Isolation and Recovery Architecture for the AcubeSAT nanosatellite\", Aristotle University of Thessaloniki, 2024.",
          link: "https://ikee.lib.auth.gr/record/356385",
          linkText: "IKEE Record"
        }
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen transition-colors duration-200">
      <Helmet>
        <title>Academia | AcubeSAT</title>
      </Helmet>
      
      <div id="academia-hero"
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/backgrounds/academia.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            Academia
          </h1>
        </div>
      </div>

      <div className="sticky top-16 z-40 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-md border-b-2 border-black dark:border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-center flex-wrap gap-3">
          <button
            onClick={() => scrollToSection('team-labs')}
            className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 border-2 transition-all duration-300 ${
              activeTab === 'team-labs' 
              ? "bg-[#a6c9ff] dark:bg-blue-600 text-black dark:text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1" 
              : "border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
            }`}
          >
            Our Facilities
          </button>
          <button
            onClick={() => scrollToSection('publications')}
            className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 border-2 transition-all duration-300 ${
              activeTab === 'publications' 
              ? "bg-[#a6c9ff] dark:bg-blue-600 text-black dark:text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1" 
              : "border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
            }`}
          >
            Publications
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        <section id="team-labs" className="py-12 scroll-mt-44">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
              Our Facilities
            </h2>
            <div className="h-1.5 w-24 bg-[#A5C9FF] dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#A5C9FF]/40 dark:border-blue-500/20 bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
  <div className="aspect-video w-full bg-[#F0F7FF] dark:bg-slate-800/50 relative overflow-hidden border-b border-[#A5C9FF]/20 dark:border-blue-500/10">
    
    <img 
      src="public/images/LabPhotos/electronicsLab.png" 
      alt="Electronics Laboratory Workspace" 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-lg bg-[#A5C9FF] dark:bg-blue-600 text-blue-900 dark:text-white text-[10px] font-black uppercase tracking-widest shadow-sm">
        Main Hub
      </span>
    </div>
  </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  Electronics Laboratory
                </h3>
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Faculty of Engineering
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-6">
                    Electronics Dept. | Building D, 4th Floor
                  </p>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest ml-6 pt-1">
                    Lab Director: A.Chatzopoulos
                  </p>
                </div>
                <p className="text-slate-600 dark:text-blue-100/70 leading-relaxed italic border-l-4 border-[#A5C9FF] dark:border-blue-500/40 pl-4">
                  The heart of our daily operations—this is where the magic begins.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#A5C9FF]/40 dark:border-blue-500/20 bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-video w-full bg-[#F0F7FF] dark:bg-slate-800/50 relative overflow-hidden border-b border-[#A5C9FF]/20 dark:border-blue-500/10">
                <img 
                  src="public/images/LabPhotos/cleanroom.jpg" 
                  alt="Clean Room Facility" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-emerald-400 dark:bg-emerald-600 text-emerald-900 dark:text-white text-[10px] font-black uppercase tracking-widest shadow-sm">
                    Clean Room
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  Electrotechnical Materials Laboratory
                </h3>
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Faculty of Engineering
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-6">
                    Building D, Basement
                  </p>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest ml-6 pt-1">
                    Lab Director: G.Litsardakis
                  </p>
                </div>
                <p className="text-slate-600 dark:text-blue-100/70 leading-relaxed italic border-l-4 border-[#A5C9FF] dark:border-blue-500/40 pl-4">
                  Home to our specialized Clean Room facility, ensuring high standards of assembly and contamination control for our spacecraft.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="mt-24 py-12 scroll-mt-44">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
              Publications
            </h2>
            <div className="h-1.5 w-24 bg-[#A5C9FF] dark:bg-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Are you interested in our research output? AcubeSAT strives to share any interesting findings with the research community.
            </p>
          </div>

          <div className="space-y-12">
            {publications.map((group, idx) => (
              <div key={idx} className="border-b border-slate-100 dark:border-slate-800 pb-8 last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-xl font-bold text-blue-500 dark:text-blue-400 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-blue-500/30"></span>
                    {group.category}
                  </h3>
                  <button 
                    onClick={() => toggleSection(idx)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-xs font-black uppercase tracking-widest hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all border border-slate-200 dark:border-slate-700"
                  >
                    {visibleSections[idx] ? (
                      <>
                        <span>Hide List</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
                      </>
                    ) : (
                      <>
                        <span>Show {group.entries.length} Papers</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </>
                    )}
                  </button>
                </div>

                {visibleSections[idx] && (
                  <div className="grid gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
                    {group.entries.map((pub, pIdx) => (
                      <div key={pIdx} className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border-l-4 border-l-transparent hover:border-l-blue-500">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 font-medium">
                          {pub.citation}
                        </p>
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          {pub.linkText}
                          <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academia;