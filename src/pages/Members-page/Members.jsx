import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FaLinkedin, FaGitlab } from "react-icons/fa";

const subsystemConfig = [
  { key: "ADCS", title: "ADCS", description: "Attitude Determination and Control Subsystem." },
  { key: "COMMS", title: "COMMS", description: "Communication system for data transmission." },
  { key: "IT", title: "IT", description: "Information Technology and infrastructure." },
  { key: "MRK", title: "MRK", description: "Marketing and outreach team." },
  { key: "OBC", title: "OBC", description: "On-Board Computer hardware." },
  { key: "OBSW", title: "OBSW", description: "On-Board Software development." },
  { key: "SU", title: "SU", description: "Scientific Unit / Payload." },
  { key: "STR", title: "STR", description: "Structures and mechanical design." },
  { key: "SYE", title: "SYE", description: "Systems Engineering." },
  { key: "THE", title: "THE", description: "Thermal control subsystem." },
];

const modules = import.meta.glob("/src/pages/Members-page/members/**/*.js");

const Members = () => {
  const [members, setMembers] = useState({});
  const [activeSubsystem, setActiveSubsystem] = useState(null);

  useEffect(() => {
    const loadMembers = async () => {
      const organizedMembers = {};
      for (const path in modules) {
        const mod = await modules[path]();
        const data = mod.default;
        const sub = data.member_category;
        if (!organizedMembers[sub]) organizedMembers[sub] = [];
        organizedMembers[sub].push(data);
      }
      setMembers(organizedMembers);
    };
    loadMembers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSubsystem(entry.target.id);
          }
        });
      },
      { 
        threshold: 0, 
        rootMargin: "-20% 0px -75% 0px" 
      }
    );

    subsystemConfig.forEach((sub) => {
      const el = document.getElementById(sub.key);
      if (el) observer.observe(el);
    });

    const introEl = document.getElementById("intro-section");
    const clearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSubsystem(null);
      },
      { threshold: 0.5 }
    );
    if (introEl) clearObserver.observe(introEl);

    return () => {
      observer.disconnect();
      clearObserver.disconnect();
    };
  }, [members]);

  const scrollToSubsystem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const activeNavItems = subsystemConfig.filter(sub => members[sub.key] && members[sub.key].length > 0);

  const renderSubsystem = (config) => {
    const list = members[config.key] || [];
    if (!list.length) return null;

    return (
      <section key={config.key} id={config.key} className="mb-32 scroll-mt-44">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tighter">
            {config.title}
          </h2>
          {/* Underline: Pastel Blue in Light mode, Solid Blue in Dark mode */}
          <div className="w-24 h-1.5 bg-[#a6c9ff] dark:bg-blue-600 mx-auto mb-4 rounded-full transition-colors duration-200"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 italic font-medium px-4">
            {config.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {list.map((member, index) => (
            <div 
              key={index} 
              className="w-72 bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] p-4 flex flex-col items-center"
            >
              <div className="w-full aspect-[4/5] bg-gray-100 border-2 border-black mb-4 overflow-hidden">
                <img
                  src={member.featured_image}
                  alt={member.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center leading-tight">
                {member.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4 uppercase tracking-widest font-bold">
                {member.subTitle}
              </p>

              <div className="flex gap-6 mt-auto pt-2">
                {member.Github && (
                  <a href={member.Github} target="_blank" rel="noreferrer" 
                     className="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110">
                    <FaGitlab size={24} />
                  </a>
                )}
                {member.LinkedIN && (
                  <a href={member.LinkedIN} target="_blank" rel="noreferrer" 
                     className="text-gray-400 dark:text-gray-500 hover:text-[#a6c9ff] dark:hover:text-blue-500 transition-all transform hover:scale-110">
                    <FaLinkedin size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div 
        className="relative h-[65vh] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: "url('/images/backgrounds/members.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-light text-white uppercase tracking-[0.5em]">
            Members
          </h1>
          <div className="w-16 h-0.5 bg-white/60 mt-4"></div>
        </div>
      </div>

      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b-2 border-black dark:border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-center flex-wrap gap-3">
          {activeNavItems.map((sub) => (
            <button
              key={sub.key}
              onClick={() => scrollToSubsystem(sub.key)}
              className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 border-2 transition-all duration-300 ${
                activeSubsystem === sub.key 
                ? "bg-[#a6c9ff] dark:bg-blue-600 text-black dark:text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1" 
                : "border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
              }`}
            >
              {sub.key}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <section id="intro-section" className="mb-32 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-widest">
            Who We Are
          </h2>
          <div className="space-y-6 text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            <p>
              The SpaceDot team is made out of students excited to work on a large project with many 
              disciplines, and eager to bring a space mission to life!
            </p>
            <p>
              You can also apply to become a member of our team and participate in building and 
              testing our nanosatellite, help organise an innovative space project, and experience 
              aerospace in Greece first-hand.
            </p>
          </div>
          
          <Link to="/join">
            <button className="mt-12 px-10 py-4 bg-[#a6c9ff] dark:bg-blue-600 text-black dark:text-white font-black uppercase tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              Become a Member
            </button>
          </Link>
        </section>

        <div className="pb-24">
          {subsystemConfig.map(renderSubsystem)}
        </div>
      </div>
    </div>
  );
};

export default Members;