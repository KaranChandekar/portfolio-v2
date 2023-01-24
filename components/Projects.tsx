/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute uppercase top-24 tracking-[24px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              src="https://portfolio-design-karan.vercel.app/images/project-1.jpg"
              alt=""
            />

            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-2xl font-semibold text-center md:text-4xl">
                <span className="underline decoration-[#f7ab0a]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Architect Website
              </h4>
              <p className="text-center md:text-left md:text-lg">
                An Architect Website with animation to it's landing page. It has
                nice navbar with hamburger menu. An about us section with some
                information and house image and the Team section with cards and
                hover effect.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full -skew-y-12 top-[25%] bg-[#f7ab0a]/10 left-0 h-[400px]" />
    </motion.div>
  );
};

export default Projects;
