import { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ToggleTheme from "../../components/dynamic/ToggleTheme";
import useCounter from "../../hooks/useCounter";
import { 
  SiGitlab, 
  SiReadthedocs, 
  SiOpensourceinitiative,
  SiDiscourse 
} from 'react-icons/si';
import { 
  FaSatellite,
  FaMicroscope,
  FaUserAstronaut,
  FaCube,
  FaGraduationCap,
  FaSpaceShuttle,
  FaExternalLinkAlt,
  FaUsers,
  FaRocket,
  FaSmile,
  FaMagic,
  FaUsers as FaCommunity,
  FaBookOpen
} from 'react-icons/fa';

const Home = () => {
  // Handle hash URLs when page loads
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashScroll();
    
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  // Interactive counters
  const { count: biologyMissionsCount, ref: biologyRef } = useCounter(0.3, 2000, 1);
  const { count: humansInSpaceCount, ref: humansRef } = useCounter(650, 2000, 1);

  const missionStatistics = [
    { 
      icon: <FaCube className="w-12 h-12" />,
      label: "CubeSat Format", 
      value: `3U`,
      description: "Ensuring low-cost large-scale biology-centered research"
    },

    { 
      icon: <FaUserAstronaut className="w-12 h-12" />,
      label: "Humans in Space", 
      value: `${humansInSpaceCount.toLocaleString()}+`, 
      description: "Providing physiological data",
      ref: humansRef
    },

    { 
      icon: <FaMicroscope className="w-12 h-12" />,
      label: "Biology-focused Missions", 
      value: `${biologyMissionsCount.toFixed(1)}%`, 
      description: "Out of more than 4,400 Nanosatellites flown to space",
      ref: biologyRef
    }
  ];

  // Fun animated resource cards
  const AnimatedResourceCard = ({ title, icon, description, link, linkText, features }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="transform transition-all duration-300 hover:scale-[1.02] h-full group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="h-full border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 relative overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="relative z-10">
            <div className="flex items-start mb-6">
              <div className={`p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0 transition-all duration-300 ${
                isHovered ? 'rotate-12 scale-110' : ''
              }`}>
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features:</h4>
              <div className="space-y-2">
                {features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center text-gray-700 dark:text-gray-300 group/item hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className={`w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 transition-all duration-300 ${
                      isHovered ? 'group-hover/item:scale-150' : ''
                    }`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              href={link} 
              color="primary"
              className="w-full group/btn relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                {linkText} <FaExternalLinkAlt className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  const openSourceResources = [
    {
      title: "GitLab Repository",
      icon: <SiGitlab className="w-8 h-8" />,
      description: "Access all our source code, hardware designs, and development history. Join our open-source community and contribute to the mission.",
      link: "https://gitlab.com/spacedot",
      linkText: "🚀 Explore Code",
      features: [
        "Complete mission source code",
        "Hardware design files",
        "Issue tracking and contributions",
        "Continuous integration pipelines"
      ]
    },
    {
      title: "Documentation",
      icon: <SiReadthedocs className="w-8 h-8" />,
      description: "Comprehensive documentation covering mission design, protocols, and research methodology. Everything you need to understand and replicate our work.",
      link: "/documentation",
      linkText: "📚 Read Docs",
      features: [
        "Mission design specifications",
        "Experimental protocols",
        "Technical manuals",
        "Research methodology"
      ]
    },
    {
      title: "Development Resources",
      icon: <SiOpensourceinitiative className="w-8 h-8" />,
      description: "Tools, libraries, and frameworks developed for AcubeSAT. Use them for your own space research projects.",
      link: "/development",
      linkText: "⚡ View Resources",
      features: [
        "Custom software libraries",
        "Hardware testing tools",
        "Simulation environments",
        "Data analysis pipelines"
      ]
    },
    {
      title: "Community",
      icon: <SiDiscourse className="w-8 h-8" />,
      description: "Join our growing community of space enthusiasts, researchers, and developers. Collaborate, share ideas, and contribute to open space science.",
      link: "/community",
      linkText: "👥 Join Community",
      features: [
        "Discussion forums",
        "Collaboration opportunities",
        "Events and workshops",
        "Knowledge sharing"
      ]
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/backgrounds/home.png")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* ToggleTheme */}
        <div className="absolute top-6 right-6 z-20">
          <ToggleTheme />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6">
            AcubeSAT Mission
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed px-2 mb-6">
            Pioneering open-source space biology research beyond the International Space Station
          </p>
          
          {/* Our Moto */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-semibold italic opacity-90">
              "because if it's not fun, why bother?"
            </p>
          </div>
          
          {/* Join Us Button with Pulsing Rocket */}
          <Link
            to="/join"
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 hover:shadow-lg shadow-md text-base lg:text-lg min-h-[50px] lg:min-h-[60px] whitespace-nowrap relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <FaSpaceShuttle className="mr-2 animate-pulse" />
              Join Our Mission
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission Statistics */}
        <section id="mission-statistics" className="mb-16 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mission Statistics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The landscape of space research that inspires our mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {missionStatistics.map((stat, index) => (
              <div 
                key={index} 
                ref={stat.ref} 
                className="transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full text-center p-1 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center mb-1">
                    <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mission Statistics Text Section */}
          <div className="mt-12 lg:mt-16">
            <div className="space-y-6 mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Our space mission was birthed from a question sparked in our hearts: 
                <span className="font-semibold text-gray-900 dark:text-white"> Is there any way to perform large-scale biology-centered research in outer space, outside of the International Space Station (ISS)? </span>
                And if so, can this be achieved in a low-cost, scalable and easily reproducible way, to tackle complex topics like the prolonged effects of space conditions on humans?
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    While more than <span className="font-semibold">650 humans</span> have been sent into space, we only possess systemic knowledge at a physiological level, lacking analytical insights at cellular or molecular levels.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    From the <span className="font-semibold">4,400+ nanosatellites</span> flown into space, only <span className="font-semibold">{biologyMissionsCount.toFixed(1)}%</span> were destined to study biological systems. None were European endeavors, and most experiments were low-scale with limited duration.
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
        </section>

        {/* Vision Section - Friendly and Approachable */}
        <section id="vision" className="mb-16 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Vision & Journey
            </h2>
            
          </div>

          {/* Main Vision Card */}
          <div className="max-w-4xl mx-auto mb-10">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 mb-6">
                  <FaGraduationCap className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Making Space Research Accessible ✨
                </h3>
                
                <div className="text-left space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    AcubeSAT is an <span className="font-semibold text-blue-600 dark:text-blue-400">educational project</span> meant to first and foremost pave the way for innovative research. To make space more inclusive and approachable, we design a <span className="font-semibold text-yellow-400 dark:text-yellow-400">low-cost, scalable and easily reusable laboratory platform</span>.
                  </p>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We believe in<span className="font-semibold text-blue-600 dark:text-blue-400"> sharing everything</span>: all experiment results, code, schematics and knowledge gained, as well as creating tons of educational content. We stay true to our ideals of openness and collaboration.
                  </p>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    With this project, our team aims to <span className="font-semibold text-yellow-400 dark:text-yellow-400">generate and share knowledge</span> within the academic and corporate community about the amazing opportunities in aerospace engineering, while also <span className="font-semibold text-blue-600 dark:text-blue-400">introducing everyone to the space capabilities</span> of Greek academic institutions. In doing so, we seek to address the limited expertise currently observed at the national level.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Team Impact & Growth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Growth */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                  <FaUsers className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Our Growing Community 👨‍🚀👩‍🚀
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Since 2018, more than <span className="font-bold text-2xl text-green-600 dark:text-green-400">200</span> members have participated in the project.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <div className="flex items-center">
                    <FaRocket className="w-8 h-8 text-orange-500 mr-2" />
                    Many have used the expertise gained from AcubeSAT to kickstart careers in space sector
                  </div>
                  <div className="flex items-center">
                    <FaMagic className="w-10 h-10 text-purple-500 mr-2" />
                    Others boosted careers in amazing new directions, showcasing the high level of technical excellence that our team thrives for
                  </div>
                </div>
              </div>
            </Card>

            {/* Expertise & Impact */}
            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-4">
                  <FaBookOpen className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Building Greece's Space Brainpower🧠
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We're addressing the <span className="font-semibold">limited space expertise</span> at the national level by developing:
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>High-level technical excellence</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Skills highly sought in academia & industry</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>A strong space research community</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span>Practical, hands-on experience</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Open Source Resources */}
        <section id="open-source" className="mb-16 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Source Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AcubeSAT is an open-source mission. Everything we build is available for you to use, study, and improve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openSourceResources.map((resource, index) => (
              <AnimatedResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <Card className="p-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden group">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Join Our Open Source Mission</h2>
              <p className="mb-6 opacity-90">
                Contribute to advancing space biology research and help build the future of accessible space science. 
                Whether you're a developer, researcher, or space enthusiast, there's a place for you in our community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  href="https://gitlab.com/spacedot" 
                  target="_blank"
                  color="light" 
                  size="lg"
                  className="group/btn relative overflow-hidden"
                >
                  <SiGitlab className="mr-2 h-5 w-5" />
                  <span className="relative z-10">Contribute on GitLab</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                </Button>
                <Button 
                  href="mailto:info@acubesat.com"
                  color="light" 
                  size="lg"
                  className="group/btn relative overflow-hidden"
                >
                  <span className="relative z-10">Get Involved</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Home;