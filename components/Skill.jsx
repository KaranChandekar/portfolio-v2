"use client";

import React from "react";
import { motion } from "framer-motion";

function Skill({ skills }) {
  return (
    <>
      {skills.map((skill) => {
        const { id, name, link, level } = skill;
        
        return (
          <div className="relative flex cursor-pointer" key={id}>
            <motion.img
              initial={{
                x: -100,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={link}
              alt={name}
              className="object-cover w-12 h-12 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-16 md:h-16 filter hover:grayscale"
            />
            <div className="absolute z-0 w-12 h-12 transition duration-300 ease-in-out rounded-full opacity-0 hover:bg-white hover:opacity-80 md:w-16 md:h-16">
              <div className="flex items-center justify-center h-full">
                <p className="text-xs font-bold text-black opacity-100 xl:text-base">
                  {level}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Skill;
