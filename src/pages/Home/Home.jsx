import { useEffect } from 'react';
import { Card, Button, Timeline, Progress, Alert } from 'flowbite-react';
import DynamicList from "../../components/dynamic/DynamicList";
import ToggleTheme from "../../components/dynamic/ToggleTheme";
import useCounter from "../../hooks/useCounter";

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

  const { count: nanosatellitesCount, ref: nanosatRef } = useCounter(4400, 2500, 1);
  const { count: biologyMissionsCount, ref: biologyRef } = useCounter(0.3, 2000, 0);
  const { count: humansInSpaceCount, ref: humansRef } = useCounter(700, 2000, 1);

  const missionStatistics = [
    { 
      label: "Nanosatellites in Database", 
      value: `${nanosatellitesCount.toLocaleString()}+`, 
      description: "Total nanosatellites listed",
      ref: nanosatRef
    },
    { 
      label: "Biology-focused Missions", 
      value: `${biologyMissionsCount.toFixed(1)}%`, 
      description: "Conducting biological research",
      ref: biologyRef
    },
    { 
      label: "Humans in Space", 
      value: `${humansInSpaceCount.toLocaleString()}+`, 
      description: "Providing physiological data",
      ref: humansRef
    },
    { 
      label: "CubeSat Format", 
      value: "3U+", 
      description: "Extended capabilities design" 
    }
  ];

  const acubesatCategories = [
    {
      id: "project-overview",
      title: "AcubeSAT: SpaceDot's First Project",
      description: "The development of AcubeSAT started even before SpaceDot was born! AcubeSAT is a 3U+ CubeSat (340.5x100x100 mm + tuna can) designed and developed by students primarily based at the Aristotle University of Thessaloniki in Greece.",
      icon: "🚀",
      details: [
        "Satellite Type: 3U+ CubeSat",
        "Dimensions: 340.5x100x100 mm + tuna can",
        "Development: Student-led project",
        "Location: Aristotle University of Thessaloniki, Greece",
        "Support: ESA Education Office 'Fly Your Satellite!' programme"
      ],
      features: [
        "Pioneering project that predated SpaceDot formation",
        "International student collaboration",
        "ESA-supported educational initiative",
        "Innovative CubeSat design with extended capabilities"
      ]
    },
    {
      id: "timeline",
      title: "Timeline of AcubeSAT",
      description: "The comprehensive development journey of AcubeSAT from concept to launch preparation, marking significant milestones in student-led space research and technology development.",
      icon: "📅",
      phases: [
        {
          period: "Initial Concept (Pre-SpaceDot)",
          events: ["Project ideation and team formation", "Preliminary design studies", "ESA programme application"]
        },
        {
          period: "Development Phase", 
          events: ["Detailed design and engineering", "Prototype development and testing", "System integration and validation"]
        },
        {
          period: "ESA 'Fly Your Satellite!' Programme",
          events: ["Selection into ESA educational programme", "Mentorship and technical support", "Rigorous testing and reviews"]
        },
        {
          period: "Launch Preparation",
          events: ["Final integration and testing", "Launch vehicle integration", "Mission readiness reviews"]
        }
      ]
    },
    {
      id: "mission",
      title: "AcubeSAT's Mission",
      description: "Our mission was inspired by a fundamental question: Can we perform large-scale, biology-focused research in outer space, beyond the boundaries of crewed spacecraft, such as the International Space Station (ISS)?",
      icon: "🔬",
      researchGoals: [
        "Study effects of microgravity and cosmic radiation on human-like cells",
        "Enable large-scale biology research in space",
        "Develop low-cost, scalable, and reproducible space biology platforms",
        "Investigate long-term effects of space conditions on human health"
      ],
      scientificContext: [
        "700+ humans have traveled to space providing physiological insights",
        "Systemic-level changes in human health are well-documented", 
        "Cellular and molecular level understanding remains fragmented",
        "Only 0.3% of nanosatellites conduct biological research",
        "Previous experiments were low-scale with limited resolution"
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
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* ToggleTheme */}
        <div className="absolute top-6 right-6 z-20">
          <ToggleTheme />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6">
            AcubeSAT Mission
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed px-2">
            SpaceDot's pioneering CubeSat mission advancing space biology research through innovative student-led technology development.
          </p>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission Statistics with Flowbite Cards */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {missionStatistics.map((stat, index) => (
              <div key={index} ref={stat.ref} className="h-full">
                <Card className="p-4 text-center h-full">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>
        {/* Main AcubeSAT Categories */}
        <section className="mb-16">
          <div className="space-y-8">
            {acubesatCategories.map((category, index) => (
              <div key={index} id={category.id}>
                <Card className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-6">{category.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {category.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Project Details */}
                  {category.details && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Project Specifications:</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {category.features && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flowbite Timeline for Development Phases */}
                  {category.phases && (
                    <div className="space-y-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Development Timeline:</h3>
                      <Timeline>
                        {category.phases.map((phase, phaseIndex) => (
                          <Timeline.Item key={phaseIndex}>
                            <Timeline.Point />
                            <Timeline.Content>
                              <Timeline.Title>{phase.period}</Timeline.Title>
                              <Timeline.Body>
                                <ul className="space-y-1">
                                  {phase.events.map((event, eventIndex) => (
                                    <li key={eventIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                                      • {event}
                                    </li>
                                  ))}
                                </ul>
                              </Timeline.Body>
                            </Timeline.Content>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </div>
                  )}

                  {/* Research Goals */}
                  {category.researchGoals && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Research Objectives:</h3>
                      <div className="space-y-2">
                        {category.researchGoals.map((goal, goalIndex) => (
                          <div key={goalIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {goal}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Scientific Context */}
                  {category.scientificContext && (
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Scientific Background:</h3>
                      <div className="space-y-2">
                        {category.scientificContext.map((context, contextIndex) => (
                          <div key={contextIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {context}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section with Flowbite Buttons */}
        <section className="mb-16">
          <Card className="p-8 text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Support Student Space Research</h2>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Join us in advancing space biology research and supporting the next generation of space scientists and engineers through innovative educational programmes.
            </p>
            <div className="flex justify-center space-x-4">
              <Button color="light" size="lg">
                Learn About ESA Programmes
              </Button>
              <Button color="light" size="lg">
                Follow Our Progress
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Home;