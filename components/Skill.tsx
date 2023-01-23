import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = (directionLeft: Props) => {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://skillicons.dev/icons?i=react"
        className="object-cover w-12 h-12 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-16 md:h-16 filter group-hover:grayscale"
      />
      <div className="absolute z-0 w-12 h-12 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80 xl:w-16 xl:h-16">
        <div className="flex items-center justify-center h-full">
          <p className="text-xs font-bold text-black opacity-100 xl:text-base">
            100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
