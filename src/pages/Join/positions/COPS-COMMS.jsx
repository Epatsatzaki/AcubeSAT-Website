import React from 'react';
import PositionTemplate from './PositionTemplate';

const COMMS = () => {
  const data = {
    title: "Telecommunications Engineer",
    subtitle: "Design and implement the radio frequency links and signal processing schemes that allow AcubeSAT to talk to Earth.",
    overview: "The Communications & Operations subsystem is responsible to reliably transfer the largest possible volume of scientific and diagnostic data between the AcubeSAT satellite and the Ground Station. This role serves as the critical link between the orbiting nanosatellite and mission control on Earth.",
    descriptionPoints: [
      "Design, test, and troubleshoot RF hardware components for both satellite and ground segments",
      "Develop and implement DSP software for signal processing and modulation schemes",
      "Build, maintain, and operate the ground station infrastructure, including antenna systems and digital RF interfaces",
      "Create and optimize GNURadio flowgraphs to establish and maintain reliable communication",
      "Perform system-level electromagnetic compatibility analyses",
      "Develop and execute end-to-end communication tests with the spacecraft",
      "Identify and troubleshoot issues in the satellite-ground station communication link"
    ],
    skillsTitle: "This position is entry level; extensive training will be provided. Ideal candidates should possess:",
    skills: [
      "Good English written and oral skills",
      "Knowledge of programming languages (primarily Python, C/C++)",
      "Understanding of digital signal processing fundamentals",
      "Familiarity with GNURadio or similar SDR platforms",
      "Git workflow knowledge",
      "Basic Linux knowledge",
      "Experience with RF electronics / PCB design (Optional)",
      "Ham radio operator license or experience (Optional)",
      "Basic RF circuits knowledge (Optional)"
    ]
  };

  return <PositionTemplate {...data} />;
};

export default COMMS;