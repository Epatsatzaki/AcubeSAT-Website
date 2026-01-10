import React from 'react';
import PositionTemplate from './PositionTemplate';

const MECH = () => {
  const data = {
    title: "Mechatronics Engineer",
    subtitle: "Bridge mechanical, electronic, fluidic, and optical systems to develop solutions for the complex AcubeSAT Payload.",
    overview: "A Mechatronics Engineer for the AcubeSAT project is responsible for integrating mechanical, electronic, fluidic and optical systems across multiple subsystems. This role focuses on bridging disciplines together to develop solutions for the complex in-house Payload (including imaging, fluidics and lab-on-a-chip technologies) as well as for the rest of the satellite system.",
    descriptionPoints: [
      "Design and integrate mechanical and electrical interfaces between structural parts and electronic systems",
      "Develop assembly procedures and tooling for complex biological payload integration and testing",
      "Create test setups such as microarraying robots and specialized imaging configurations",
      "Troubleshoot issues at the interfaces between mechanical, electrical, and software systems",
      "Optimize the integration of sensors, actuators, and control systems throughout the satellite",
      "Perform structural analysis for system-level testing configurations",
      "Support the development and testing of deployment mechanisms"
    ],
    skillsTitle: "We value creative problem-solving and a hands-on mindset. Tell us about something you've hacked or a DIY project you've built!",
    skills: [
      "Familiarity with CAD software for mechanical design",
      "Foundation in mechanical engineering and electronics",
      "Understanding of basic electronic circuit design and PCB layout",
      "Basic experience with microcontroller programming",
      "Understanding of structural mechanics and analysis",
      "Experience with embedded systems and control algorithms",
      "Ability to work in a fast-paced, multidisciplinary environment",
      "Prototyping, 3D printing, or CNC manufacturing (Optional)",
      "Experience with complex system integration (Optional)",
      "Familiarity with optical engineering and design (Optional)",
      "Strong sense of commitment and responsibility",
      "Capability to navigate previously unknown fields"
    ],
    
    notes: "If you don’t have a traditional background, don’t worry—some of our ideal candidates don’t either. What matters is your knack for creative problem-solving, hands-on experience in design and manufacturing, and an understanding of the constraints and possibilities of unconventional setups. Tell us about something you’ve hacked! Whether it’s building a DIY centrifuge, making ice cream with liquid nitrogen, or repurposing everyday materials for a clever fix, we want to see how you think outside the box and make things work."
  };

  return <PositionTemplate {...data} />;
};

export default MECH;