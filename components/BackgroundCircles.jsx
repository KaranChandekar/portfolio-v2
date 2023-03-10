'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-[#333333] rounded-full md:h-[200px] md:w-[200px] h-[150px] w-[150px] mt-[185px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full md:h-[250px] md:w-[250px] h-[200px] w-[200px] mt-[185px]" />
      <div className="absolute border border-[#333333] rounded-full md:h-[450px] md:w-[450px] h-[300px] w-[300px] mt-[185px]" />
      <div className="absolute border rounded-full border-[#f7ab0a] opacity-20 md:h-[600px] md:w-[600px] h-[400px] w-[400px] mt-[185px] animate-pulse" />
      <div className="border rounded-full border-[#333333] md:h-[750px] md:w-[750px] h-[500px] w-[500px] mt-[185px] absolute" />
    </motion.div>
  );
};

export default BackgroundCircles;
