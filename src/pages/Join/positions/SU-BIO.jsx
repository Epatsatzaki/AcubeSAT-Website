import React from 'react';
import PositionTemplate from './PositionTemplate';

const BIO = () => {
  const data = {
    title: "Biological Engineer",
    subtitle: "Design and implement the mission experiment to study yeast proteome response in Low Earth Orbit.",
    overview: "AcubeSAT’s Payload is a novel autonomous and miniaturized biological laboratory, designed to perform multiple high-throughput biological/biochemical experiments in-orbit. Biological engineers are responsible for studying the dynamic response of S. cerevisiae's proteome in the conditions of Low Earth Orbit, working with state-of-the-art equipment and novel methods.",
    descriptionPoints: [
      "Engineer yeast strains, including genomic tag selection for in-orbit proteome interrogation",
      "Develop pre-flight preservation methods, such as sporulation and desiccation protocols",
      "Perform microfluidics-based growth assays with time-lapse microscopy",
      "Execute strain radiation sensitivity experiments to ensure mission success",
      "Work within a wide range of laboratory facilities using state-of-the-art equipment",
      "Contribute to the design of an autonomous miniaturized biological lab"
    ],
    skillsTitle: "We are looking for students passionate about applying quantitative engineering concepts to biology. Training on specialized equipment will be provided.",
    skills: [
      "Experience in handling laboratory equipment",
      "Ability to adhere to lab safety conditions",
      "Knowledge of basic statistics",
      "Passionate about applying engineering concepts to biology",
      "Ability to work in a fast-paced environment",
      "Strong sense of commitment and responsibility",
      "Familiarity with molecular biology (cloning, PCR) (Optional)",
      "Experience with microscopy (Optional)",
      "Familiarity with cloning software like Benchling (Optional)",
      "Experience with microfluidics (Optional)",
      "Prototyping skills (3D printing) or programming (Optional)",
    ],
    applicationLink: `https://surveys.spacedot.gr/889757?newtest=Y&lang=en&position=Biological+Engineer`
  };

  return <PositionTemplate {...data} />;
};

export default BIO;