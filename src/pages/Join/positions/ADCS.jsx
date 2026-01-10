import PositionTemplate from './PositionTemplate';

const ADCS = () => {
  const data = {
    title: "Attitude Determination and Control Engineer",
    subtitle: "Developing the navigational core of AcubeSAT to ensure stability and high-speed communication.",
    overview: "The Attitude Determination and Control subsystem (ADCS) is the navigational core of AcubeSAT. Not only is it responsible for stabilizing AcubeSAT for the safety of the spacecraft, but it also handles determining and controlling its attitude in orbit for establishing a reliable downlink with the Ground Station.",
    descriptionPoints: [
      "Development of test procedures and test execution at subsystem level, end-to-end tests with the spacecraft",
      "Creation of testing configurations (HIL/SIL) for actuators and sensors",
      "Satellite software development in C/C++",
      "Firmware development for microcontrollers using FreeRTOS",
      "Design of PCB prototypes"
    ],
    skillsTitle: "Any of the following skills will be useful to a Testing Engineer for Embedded Systems:",
    skills: [
      "Ability to work in a multi-disciplinary team",
      "Control systems design and modeling",
      "Programming in C and C++",
      "ARM, AVR, PIC, or Arduino microcontrollers",
      "UART, I2C, SPI, CAN protocols",
      "Digital design and interface ICs",
      "PCB design techniques (KiCad)"
    ],
    applicationLink: `https://surveys.spacedot.gr/889757?newtest=Y&lang=en&position=ADCS+Engineer`
  };

  return <PositionTemplate {...data} />;
};

export default ADCS;