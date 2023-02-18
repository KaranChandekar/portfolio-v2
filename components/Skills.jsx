"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

import { skills } from "@/data";

const Skills = () => {
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
        <Skill skills={skills} />
      </div>
    </motion.div>
  );
};

export default Skills;
