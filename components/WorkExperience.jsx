"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { jobs } from "@/data";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-4 mx-auto overflow-hidden max-w-7xl md:px-10 md:flex-row justify-evenly"
    >
      <h3 className="absolute uppercase top-16 tracking-[12px] md:tracking-[24px] text-gray-500 md:text-2xl">
        Experience
      </h3>

      <div className="flex w-full md:px-10 py-32 space-x-10 overflow-x-scroll snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin h-screen">
        <ExperienceCard jobs={jobs} />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
