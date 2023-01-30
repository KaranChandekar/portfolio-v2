import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    "https://skillicons.dev/icons?i=javascript",
    "https://skillicons.dev/icons?i=react",
    "https://skillicons.dev/icons?i=next",
    "https://skillicons.dev/icons?i=tailwind",
    "https://skillicons.dev/icons?i=fastapi",
    "https://skillicons.dev/icons?i=materialui",
    "https://skillicons.dev/icons?i=figma",
    "https://skillicons.dev/icons?i=bootstrap",
    "https://skillicons.dev/icons?i=html",
    "https://skillicons.dev/icons?i=css",
    "https://skillicons.dev/icons?i=sass",
    "https://skillicons.dev/icons?i=nodejs",
    "https://skillicons.dev/icons?i=expressjs",
    "https://skillicons.dev/icons?i=cpp",
    "https://skillicons.dev/icons?i=git",
    "https://skillicons.dev/icons?i=github",
    "https://skillicons.dev/icons?i=bash",
    "https://skillicons.dev/icons?i=vercel",
    "https://skillicons.dev/icons?i=netlify",
    "https://skillicons.dev/icons?i=vscode",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Skills
      </h3>

      <h3 className="absolute uppercase top-36 tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill link={skills[0]} level="80%" />
        <Skill link={skills[1]} level="80%" />
        <Skill link={skills[2]} level="80%" />
        <Skill link={skills[3]} level="90%" />
        <Skill link={skills[4]} level="80%" />
        <Skill link={skills[5]} level="80%" />
        <Skill link={skills[6]} level="80%" />
        <Skill link={skills[7]} level="80%" />
        <Skill link={skills[8]} level="90%" />
        <Skill link={skills[9]} level="90%" />
        <Skill link={skills[10]} level="90%" />
        <Skill link={skills[11]} level="70%" />
        <Skill link={skills[12]} level="70%" />
        <Skill link={skills[13]} level="70%" />
        <Skill link={skills[14]} level="90%" />
        <Skill link={skills[15]} level="90%" />
        <Skill link={skills[16]} level="90%" />
        <Skill link={skills[17]} level="90%" />
        <Skill link={skills[18]} level="90%" />
        <Skill link={skills[19]} level="90%" />
      </div>
    </motion.div>
  );
};

export default Skills;
