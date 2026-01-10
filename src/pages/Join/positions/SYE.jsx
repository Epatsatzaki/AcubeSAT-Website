import React from 'react';
import PositionTemplate from './PositionTemplate';

const SYE = () => {
  const data = {
    title: "Systems Engineer — MAIV",
    subtitle: "Coordinate technical integrity and lead the Manufacturing, Assembly, Integration and Verification (MAIV) of the spacecraft.",
    overview: "The Systems Engineering subteam ensures the correct and reliable functionality of the spacecraft through system-level design coordination. As AcubeSAT is in the MAIV phase, you will be responsible for assembling and testing the satellite to verify it meets strict requirements while working with state-of-the-art equipment in a wide range of facilities (including cleanrooms).",
    descriptionPoints: [
      "Ensure the continuity of MAIV processes to certify no damage is done to protoflight or flight models",
      "Assist in verification activities across Greece and abroad, maintaining logbooks and following test procedures",
      "Verify mechanical assembly through mockups of 3D printed parts, machined components, and PCBs",
      "Integrate subsystems into the FlatSat module to verify electrical compatibility and system functionality",
      "Process system anomalies using official Non-Conformance Reporting (NCR) procedures",
      "Define test specifications and procedures for all subsystem and system-level verification activities",
      "Communicate with machineries, manufacturers, and component providers to manage hardware logistics"
    ],
    skillsTitle: "This is an entry-level position; no prior experience is required as extensive training is provided. Ideal candidates should possess:",
    skills: [
      "Proficient user of the English language",
      "Strong analytical and problem-solving skills",
      "Ability to work under pressure and within a team",
      "Experience with electrical or mechanical measuring instruments",
      "Previous experience with basic hardware projects",
      "Must be a student residing in Thessaloniki",
      "Prototyping skills (3D printing & soldering) (Optional)",
      "LaTeX and technical report composition (Optional)",
      "Familiarity with CAD Software or Git (Optional)"
    ],
  };

  return <PositionTemplate {...data} />;
};

export default SYE;