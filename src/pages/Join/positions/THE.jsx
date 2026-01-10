import React from 'react';
import PositionTemplate from './PositionTemplate';

const THE = () => {
  const data = {
    title: "Thermal Engineer",
    subtitle: "Perform detailed thermal analyses and tests to ensure all satellite components remain within designated temperature limits.",
    overview: "The Thermal Subsystem ensures that all satellite components remain within their designated operating and non-operating temperature limits. To determine these temperature ranges and verify material tolerances, we perform detailed thermal analyses using specialized software and conduct physical tests by subjecting the satellite to controlled thermal stresses to simulate on-orbit conditions.",
    descriptionPoints: [
      "Research active and passive thermal control methods for crucial components, such as the satellite payload",
      "Construct high-fidelity mathematical models of the satellite for complex thermal analyses",
      "Conduct and evaluate essential thermal tests to optimize design and ensure compliance with experiment requirements",
      "Utilize professional software such as ESATAN-TMS and Simcenter to evaluate orbital thermal performance",
      "Design and implement thermal control subsystems to safeguard sensitive electronics and biological samples",
      "Collaborate with the AIV team to execute thermal stress testing in specialized facilities"
    ],
    skillsTitle: "We are looking for students with a strong foundation in physics and heat transfer. Training on specialized space-industry software is provided.",
    skills: [
      "Heat Transfer Theory and Materials Science",
      "Control Theory",
      "Finite Elements Method (FEM) or numerical discretization methods",
      "Experience in systems’ simulation and modeling",
      "Experience with laboratory equipment (e.g., PSU, multimeter)",
      "Ability to work in a fast-paced environment under pressure",
      "Capable of working well in multidisciplinary groups of peers",
      "Capable of navigating previously unknown fields",
      "A strong sense of commitment and responsibility"
    ],
    applicationLink: `https://surveys.spacedot.gr/889757?newtest=Y&lang=en&position=Thermal+Engineer`
  };

  return <PositionTemplate {...data} />;
};

export default THE;