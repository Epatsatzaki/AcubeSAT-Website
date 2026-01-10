import React from 'react';
import PositionTemplate from './PositionTemplate';

const ContentCreator = () => {
  const data = {
    title: "Creative Content Creator",
    subtitle: "The visual heartbeat of SpaceDot. We value your talent! If you have the skills, we have the mission.",
    overview: "At SpaceDot, we believe that great engineering deserves great storytelling. We are looking for creative minds—graphic designers, videographers, photographers, and editors—who want to help us document our progress and create high-impact mission visuals. If you're passionate about creating, we want to help you showcase your talent on a global stage.",
    descriptionPoints: [
      "Bring your unique creative vision to help document the AcubeSAT journey",
      "Design graphics, posters, and digital assets that represent our mission",
      "Capture and edit high-quality photo or video content of our engineering progress",
      "Collaborate on web design and digital interfaces to improve our online presence",
      "Translate complex satellite milestones into engaging visual stories for a global audience",
      "Help maintain and evolve our brand identity with fresh, modern ideas",
      "Experiment with new media formats to keep our outreach exciting and fresh"
    ],
    skillsTitle: "We are looking for creative spirits with any of the following skills (you don't need all of them!):",
    skills: [
      "Graphic Design (Photoshop, Illustrator, Canva)",
      "Photography & Visual Composition",
      "Video Production & Cinematography",
      "Video Editing (Premiere, Resolve, etc.)",
      "Web Design & UI/UX interest",
      "A creative eye for detail",
      "Ability to work independently on artistic projects",
      "Eagerness to experiment and try new styles"
    ]
  };

  return <PositionTemplate {...data} />;
};

export default ContentCreator;