import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
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
        <Skill link={skills[0]} level="90%" />
        <Skill link={skills[1]} level="90%" />
        <Skill link={skills[2]} level="80%" />
        <Skill link={skills[3]} level="60%" />
        <Skill link={skills[4]} level="70%" />
        <Skill link={skills[5]} level="70%" />
        <Skill link={skills[6]} level="90%" />
        <Skill link={skills[7]} level="90%" />
        <Skill link={skills[8]} level="60%" />
        <Skill link={skills[9]} level="60%" />
        <Skill link={skills[10]} level="60%" />
        <Skill link={skills[11]} level="70%" />
        <Skill link={skills[12]} level="90%" />
        <Skill link={skills[13]} level="90%" />
        <Skill link={skills[14]} level="90%" />
        <Skill link={skills[15]} level="90%" />
      </div>
    </motion.div>
  );
};

export default Skills;
