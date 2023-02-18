'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Project from './Project';
import { projects } from '@/data';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute uppercase top-16 md:top-24 tracking-[10px] md:tracking-[24px] text-gray-500 md:text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        <Project projects={projects} />
      </div>

      <div className="absolute w-full -skew-y-12 top-[25%] bg-[#f7ab0a]/10 left-0 h-[400px]" />
    </motion.div>
  );
};

export default Projects;
