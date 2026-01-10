import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; 

const categories = [
  {
    name: "Electronics, Flight Software & Control (ADCS + OBC + OBSW)",
    positions: [
      {
        title: "Attitude Determination and Control Engineer",
        description: "Develop the navigational core of AcubeSAT. Responsible for stabilizing the spacecraft and handling attitude determination to establish a reliable downlink with the Ground Station.",
        link: "/positions/adcs-engineer" 
      },
      {
        title: "Embedded Software Engineer",
        description: "Develop the low-level software infrastructure and resource-efficient firmware that controls the nanosatellite's core functionality.",
        link: "/positions/embedded-software-engineer" 
      },
      {
        title: "Hardware Engineer",
        description: "Design and implement electronic systems, PCBs, and digital communication protocols while ensuring reliability in the space environment.",
        link: "/positions/hardware-engineer" 
      }
    ]
  },
  {
    name: "Science Unit & Mechatronics (SU + MECH)",
    positions: [
      {
        title: "Biological Engineer",
        description: "Design and perform high-throughput biological experiments in-orbit using a novel autonomous and miniaturized biological laboratory.",
        link: "/positions/biological-engineer" 
      },
      {
        title: "Mechatronics Engineer",
        description: "Bridge engineering disciplines to develop solutions for the Payload, including imaging, fluidics, and lab-on-a-chip technologies.",
        link: "/positions/mechatronics-engineer" 
      }
    ]
  },
  {
    name: "Systems, Structures & Thermal Design (SYE + STR + THE)",
    positions: [
      {
        title: "Structural Engineer",
        description: "Lead the development of the satellite's physical architecture, transforming concepts into reality through prototype development and mockups.",
        link: "/positions/structural-engineer" 
      },
      {
        title: "Thermal Engineer",
        description: "Perform detailed thermal analyses and physical tests to ensure all components remain within designated temperature limits.",
        link: "/positions/thermal-engineer" 
      },
      {
        title: "Systems Engineering — AIV Engineer",
        description: "Coordinate all subsystems and lead the Manufacturing, Assembly, Integration, and Verification (MAIV) phase of the mission.",
        link: "/positions/systems-aiv-engineer" 
      }
    ]
  },
  {
    name: "Communications & Mission Operations (COPS)",
    positions: [
      {
        title: "FPGA Engineer",
        description: "Design hardware logic for the COMMS subsystem to transfer large volumes of scientific and diagnostic data between the satellite and Earth.",
        link: "/positions/fpga-engineer" 
      },
      {
        title: "Telecommunications Engineer",
        description: "Design, test, and troubleshoot RF hardware and signal processing schemes to establish reliable satellite-to-ground links.",
        link: "/positions/telecommunications-engineer" 
      },
      {
        title: "Mission Operations Engineer",
        description: "Maintain ground mission control software (YAMCS) and automate mission procedures to ensure smooth operations in orbit.",
        link: "/positions/operations-engineer" 
      }
    ]
  },
  {
    name: "Marketing, Outreach & Fundraising (MRK)",
    positions: [
      {
        title: "Fundraising & Sponsorship Manager",
        description: "Secure the future of AcubeSAT by managing sponsor partnerships, drafting grant proposals, and identifying new funding opportunities to keep our mission on the launchpad.",
        link: "/positions/fundraising"
      },
      {
        title: "Social Media & Public Relations",
        description: "Craft the mission's voice across digital platforms. Manage our community presence, write press releases, and engage with the global space community and media outlets.",
        link: "/positions/pr-outreach" 
      },
      {
        title: "Creative Content Creator",
        description: "The visual heartbeat of SpaceDot. We are looking for graphic designers, videographers, and photographers and editors to document our progress and create high-impact mission visuals.",
        link: "/positions/creative-content" 
      }
    ]
  }
];

const Join = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <Helmet>
        <title>Join Us | AcubeSAT</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/backgrounds/joinUs.jpg" 
          alt="AcubeSAT Mission" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            We are looking for passionate students and professionals to help us 
            advance space biology and CubeSat technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our recruitment calls are open all-year long. Explore our subsystems 
            below and find where you can make your impact.
          </p>
        </div>

        {/* --- POSITIONS GRID --- */}
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20 last:mb-0">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-8 border-l-4 border-primary-600 pl-4 uppercase tracking-wider">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.positions.map((pos, posIdx) => (
                /* Changed <a> to <Link> and href to to */
                <Link 
                  key={posIdx}
                  to={pos.link} 
                  className="flex flex-col h-full bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl border border-transparent hover:border-primary-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {pos.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow leading-relaxed">
                    {pos.description}
                  </p>
                  <div className="mt-8 flex items-center text-primary-600 dark:text-primary-400 font-bold text-xs tracking-widest uppercase">
                    View Details
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="relative mt-12 py-32 overflow-hidden">
        <img 
          src="/images/backgrounds/joinUsBottom.jpg" 
          alt="Life at SpaceDot" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6 italic">
            "Driven by science, powered by people."
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            AcubeSAT is where academic theory meets the reality of a countdown. 
            It’s stressful, it’s demanding, and it’s rewarding as hell. We don't 
            just build a satellite; we build the bonds that come from solving 
            impossible problems together—usually followed by a long night out 
            to forget the code ever existed.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Ready to launch?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;