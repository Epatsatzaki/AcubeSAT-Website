import PositionTemplate from './PositionTemplate';

const PR = () => {
  const data = {
    title: "Social Media & Public Relations",
    subtitle: "Be the voice of AcubeSAT. Share our mission with the world and build a community around space exploration.",
    overview: "Our Outreach team works to support AcubeSAT creatively and socially. Behind every post and presentation is a team member making our complex scientific goals accessible to everyone. If you love storytelling and want to amplify our project's impact, we have a place for you.",
    descriptionPoints: [
      "Create and manage engaging content for our social media platforms in both Greek and English",
      "Develop strategic campaigns to get the general public excited about space",
      "Represent the AcubeSAT project at outreach events and public presentations",
      "Transform complex satellite concepts into stories that everyone can understand",
      "Create space-related cultural and historical content to show the 'human' side of space",
      "Maintain our unique brand voice across all communication channels"
    ],
    skillsTitle: "No prior experience in space is needed! We are looking for clear communicators who love to engage with people:",
    skills: [
      "Strong writing and communication skills",
      "Fluency in both Greek and English",
      "Creativity and an eye for detail",
      "Ability to work well in a friendly, social team",
      "Basic experience with social media tools",
      "Persistence and a positive attitude",
      "Interest in space (even if you're just starting to learn!)",
      "Organized and reliable with time"
    ],
    applicationLink: `https://surveys.spacedot.gr/889757?newtest=Y&lang=en&position=Outreach`
  };

  return <PositionTemplate {...data} />;
};

export default PR;