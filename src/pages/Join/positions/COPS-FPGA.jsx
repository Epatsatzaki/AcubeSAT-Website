import PositionTemplate from './PositionTemplate';

const FPGA = () => {
  const data = {
    title: "FPGA Engineer",
    subtitle: "Learn and apply digital hardware design for FPGAs, combined with digital signal processing.",
    overview: "The Communications (COMMS) subsystem is responsible to reliably transfer the largest possible volume of scientific and diagnostic data between the satellite and the Earth, by developing the necessary On-Board and Ground Station hardware and software. COMMS is also in charge of performing system-level electromagnetic analyses on AcubeSAT.",
    descriptionPoints: [
      "Learn and apply digital hardware design specifically for FPGA architectures",
      "Develop and implement Digital Signal Processing (DSP) algorithms in hardware",
      "Work on RF front-end design and antenna testing integration",
      "Study and implement communication protocols for satellite-to-ground links",
      "Contribute to electromagnetic compatibility (EMC) and system-level analyses",
      "Collaborate on antenna design, construction, and testing phases"
    ],
    skillsTitle: "We look for team members capable of analytical thinking and taking initiative. Training will be provided for specific technical tools.",
    skills: [
      "Ability to work in a group and independently",
      "Capable of analytical thinking and researching new fields",
      "Eagerness of taking initiative",
      "Good English written and oral skills",
      "Knowledge of HDL (Verilog and VHDL)",
      "Knowledge of programming languages (C/C++)",
      "Understanding of interfaces (SPI, AXI, USB)",
      "Basic knowledge of digital design and electronics",
      "Experience with Xilinx Design Tools (Optional)",
      "Experience with FPGA design verification (Optional)",
      "Experience with Digital Electronics (Optional)",
      "Experience with Digital Signal Processing (Optional)"
    ]
  };

  return <PositionTemplate {...data} />;
};

export default FPGA;