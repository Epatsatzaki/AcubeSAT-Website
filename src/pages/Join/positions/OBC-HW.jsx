import PositionTemplate from './PositionTemplate';

const HW = () => {
  const data = {
    title: "Hardware Engineer",
    subtitle: "Design and implement the electronic systems and PCBs that control the core functions of AcubeSAT.",
    overview: "The Hardware Engineer is responsible for the electronic systems that control all basic functions of the satellite. This role focuses on developing hardware, creating electrical interfaces between subsystems, and ensuring reliable operation in the space environment. You will design PCBs and specialized hardware for the biological payload, including microfluidics and lab-on-a-chip technologies.",
    descriptionPoints: [
      "Design hardware and electrical interfaces between the satellite's core subsystems",
      "Develop high-reliability PCB designs and perform hands-on troubleshooting",
      "Interface and test various Integrated Circuits (ICs) and digital components",
      "Develop test procedures and execute subsystem and end-to-end tests with the spacecraft",
      "Conduct testing for digital electronics and microcontrollers to verify mission readiness",
      "Identify and troubleshoot hardware interface issues in collaboration with Systems Engineering",
      "Participate in technical code and design reviews to ensure space-grade quality"
    ],
    skillsTitle: "We value hands-on experience and a knack for creative problem-solving. Tell us about a DIY project or something you've hacked!",
    skills: [
      "Experience with electronics, hardware, and/or PCB design",
      "Ability to read and interpret electronic schematics",
      "Familiarity with digital design and electronic components",
      "Basic understanding of microcontrollers and embedded systems",
      "Hands-on familiarity with soldering",
      "Problem-solving skills for hardware troubleshooting",
      "Strong commitment to project deadlines",
      "C/C++ programming and communication protocols (Optional)",
      "Experience with ARM, AVR, PIC, or Arduino (Optional)",
      "Knowledge of power systems and battery management (Optional)",
      "Understanding of EMC principles and environmental testing (Optional)"
    ]
  };

  return <PositionTemplate {...data} />;
};

export default HW;