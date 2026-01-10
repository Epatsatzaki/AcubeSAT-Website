import React from 'react';
import PositionTemplate from './PositionTemplate';

const STR = () => {
  const data = {
    title: "Structural Engineer",
    subtitle: "Lead the hands-on development of the satellite's physical architecture with an emphasis on manufacturing and practical assembly.",
    overview: "The Structural Engineer for the AcubeSAT project leads the development of the nanosatellite’s physical architecture. Beyond design, you will actively transform concepts into reality through prototype development, mockup creation, and extensive manufacturing oversight, working directly with fabrication specialists to ensure all components meet the challenging constraints of space missions.",
    descriptionPoints: [
      "Design manufacturable structural components using 3D CAD software with direct consideration for machining limitations",
      "Create detailed technical drawings and manufacturing specifications to communicate intent to machinists",
      "Develop and physically build structural mockups and prototypes to validate integration concepts",
      "Oversee the practical assembly of components, resolving real-world integration challenges",
      "Perform hands-on testing of structural prototypes to identify and implement practical improvements",
      "Translate theoretical FEA results into actionable manufacturing modifications",
      "Design specialized tooling, assembly fixtures, and comprehensive step-by-step assembly procedures",
      "Prepare vibration testing setups and execute environmental tests of the satellite"
    ],
    skillsTitle: "We value a knack for creative problem-solving and hands-on experience. Tell us about a DIY project or something you've hacked!",
    skills: [
      "Understanding of manufacturing processes (machining, sheet metal, additive manufacturing)",
      "Experience translating CAD designs into practical manufacturing instructions",
      "Proven ability to communicate effectively with machinists and technicians",
      "Hands-on experience building and testing structural prototypes and mockups",
      "Practical understanding of material selection and machinability",
      "Experience with Design for Assembly (DFA) and Design for Manufacturing (DFM)",
      "Ability to interpret and apply FEA results to improve physical designs",
      "Available to work with a strong sense of commitment and responsibility",
      "Experience with precision assembly of sensitive hardware (Optional)",
      "Experience with vibration testing setup and execution (Optional)",
      "Background in prototype development for proof-of-concept validation (Optional)"
    ],
    applicationLink: `https://surveys.spacedot.gr/889757?newtest=Y&lang=en&position=Structural+Engineer`
  
    ,
    notes: "If you don’t have a traditional background, don’t worry—some of our ideal candidates don’t either. What matters is your knack for creative problem-solving, hands-on experience in design and manufacturing, and an understanding of the constraints and possibilities of unconventional setups. Tell us about something you’ve hacked! Whether it’s building a DIY centrifuge, making ice cream with liquid nitrogen, or repurposing everyday materials for a clever fix, we want to see how you think outside the box and make things work."
  };

  return <PositionTemplate {...data} />;
};

export default STR;