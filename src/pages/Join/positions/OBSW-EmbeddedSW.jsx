import PositionTemplate from './PositionTemplate';

const EmbeddedSW = () => {
  const data = {
    title: "Embedded Software Engineer",
    subtitle: "Develop the low-level software infrastructure and firmware that enables the nanosatellite’s core functionality.",
    overview: "The Embedded Engineer for the AcubeSAT project plays a critical role in developing the resource-efficient firmware that controls the satellite’s various subsystems. Working at the intersection of hardware and software, this role is crucial for integrating diverse components into one functional, reliable satellite system.",
    descriptionPoints: [
      "Develop satellite software using C and modern C++",
      "Create and optimize firmware for microcontrollers using FreeRTOS",
      "Participate in technical code and design reviews to ensure high-reliability software",
      "Develop test procedures and execute subsystem-level and end-to-end tests with the spacecraft",
      "Identify and troubleshoot complex issues within satellite subsystems in collaboration with Systems Engineering",
      "Implement low-level drivers and software infrastructure for hardware communication"
    ],
    skillsTitle: "We are looking for engineers who enjoy working at the hardware-software interface. Training is provided for specific space-grade tools:",
    skills: [
      "Experience with programming in C",
      "Experience with programming in modern C++",
      "Experience with microcontrollers (ARM, AVR, PIC, or Arduino)",
      "Knowledge of communication protocols (UART, I2C, SPI, CAN)",
      "Git workflow knowledge",
      "Familiarity with Linux environments",
      "Understanding of Real Time Operating Systems (RTOS)",
      "Ability to work collaboratively in a multi-disciplinary team",
      "Strong sense of commitment and responsibility",
      "Capable of navigating previously unknown technical fields",
      "Good English written and oral skills",
      "Familiarity with digital design or FPGAs (Optional)"
    ]
  };

  return <PositionTemplate {...data} />;
};

export default EmbeddedSW;