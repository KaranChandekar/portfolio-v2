/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-4 mx-auto text-center md:px-10 md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute uppercase top-16 md:top-24 tracking-[10px] md:tracking-[24px] text-gray-500 md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://i.postimg.cc/V682BDB7/karan1.jpg"
        className="flex-shrink-0 object-cover w-44 h-44 -mb-28 rounded-full md:rounded-lg md:w-62 md:h-96 md:mb-0 xl:w-[340px] xl:h-[600px]"
      />

      <div className="px-0 space-y-5 md:space-y-10 md:px-10">
        <h4 className="text-2xl font-semibold md:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm text-justify lg:text-base">
          {" "}
          Hi 👋 I'm Karan :) An indie front-end developer and designer building
          my version of the digital world one step at a time. All coding
          projects are built from the ground up, from planning and designing all
          the way to solving real-life problems with code. From ideation and
          planning, all the way to finalizing the project with artistic touches.
          I push my every projects source code on my Github profile{" "}
          <a
            className="underline decoration-[#f7ab0a]/50 md:no-underline md:hover:underline"
            href="https://github.com/KaranChandekar"
            target="_blank"
          >
            KaranChandekar
          </a>
          , also post my projects content and learnings on my Linkedin profile{" "}
          <a
            className="underline decoration-[#f7ab0a]/50 md:no-underline md:hover:underline"
            href="https://www.linkedin.com/in/karan-chandekar-a87263219/"
            target="_blank"
          >
            KaranChandekar
          </a>{" "}
          with more than 2k followers. I try to beat previous me and make myself
          better day by day, giving my best to learn and acquire top skills and
          become a great developer. 🎯
        </p>
      </div>
    </motion.div>
  );
};

export default About;
