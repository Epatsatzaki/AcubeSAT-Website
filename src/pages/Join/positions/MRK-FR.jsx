import PositionTemplate from './PositionTemplate';

const FR = () => {
  const data = {
    title: "Fundraising & Sponsorship Manager",
    subtitle: "Secure the future of AcubeSAT. Help us find the resources we need to reach the launchpad.",
    overview: "Every satellite needs fuel—ours is supported by the vital partnerships our Fundraising team builds. We work to identify potential sponsors and showcase the educational and innovative value of our mission to attract diverse funding from industry and academia.",
    descriptionPoints: [
      "Reach out to potential sponsors and collaborators through professional channels",
      "Identify organizations and enterprises that align with our mission's values",
      "Document the business and educational impact of our mission for partners",
      "Create compelling sponsorship proposals and pitch presentations",
      "Help execute fundraising campaigns that highlight our team's achievements",
      "Build and maintain long-term relationships with our project supporters"
    ],
    skillsTitle: "Ideal for students who are persistent, organized, and enjoy professional networking:",
    skills: [
      "Strong interpersonal and 'people' skills",
      "Persistence and patience for long-term goals",
      "Excellent oral and written communication",
      "Fluency in Greek and English",
      "Ability to transform technical goals into 'value propositions'",
      "Organized and capable of managing contacts/leads",
      "Prior experience in fundraising or sales (Optional)",
      "A passion for seeing a student project succeed"
    ]
  };

  return <PositionTemplate {...data} />;
};

export default FR;