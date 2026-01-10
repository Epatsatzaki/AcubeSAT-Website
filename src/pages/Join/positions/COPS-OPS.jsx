import PositionTemplate from './PositionTemplate';

const OPS = () => {
  const data = {
    title: "Mission Operations Engineer",
    subtitle: "Automate and manage the bridge between space and ground using advanced mission control software.",
    overview: "The Mission Operations Engineer ensures that AcubeSAT remains a functional, data-collecting laboratory. You will be responsible for the ground mission control software (YAMCS), automating satellite 'passes', and ensuring that every bit of scientific data is safely received and processed on Earth.",
    descriptionPoints: [
      "Work with YAMCS mission control software to implement Telecommand and Telemetry services",
      "Develop automated pass procedures and operational sequences for ground station contact",
      "Expand YAMCS functionality through its API to enhance mission operations capabilities",
      "Build and maintain ground station software infrastructure and digital interfaces",
      "Develop and execute end-to-end communication tests with the spacecraft",
      "Identify and troubleshoot issues in the satellite-ground station communication link",
      "Collaborate with subsystem teams to ensure proper monitoring of individual components"
    ],
    skillsTitle: "This is an entry-level position. We provide extensive training for the following skills:",
    skills: [
      "Knowledge of programming (Python is highly preferred)",
      "Git workflow and version control",
      "Basic Linux/Unix command line knowledge",
      "Familiarity with network programming (UDP/TCP)",
      "Logical mindset for automation and procedure design",
      "Strong documentation skills in English",
      "Experience with YAMCS or mission control software (Optional)",
      "Willingness to learn complex operations concepts"
    ]
  };

  return <PositionTemplate {...data} />;
};

export default OPS;