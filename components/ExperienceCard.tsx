import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg space-y-5 w-full sm:w-[500px] snap-center bg-[#292929] p-4 md:p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="object-cover object-center w-32 h-32 rounded-full"
        src="https://i.postimg.cc/qRxKFr4D/ucpi.jpg"
        alt="YoungNomads"
      />

      <div className="px-0">
        <h4 className="text-2xl font-light md:text-3xl">Frontend Developer</h4>
        <p className="mt-1 text-xl font-bold">UCPI</p>
        <div className="flex my-2 space-x-2">
          <img
            className="w-8 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
          <img
            className="w-8 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
          <img
            className="w-8 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
          <img
            className="w-8 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
        </div>
        <p className="py-3 text-gray-300 uppercase">
          Started work.... - Ended...
        </p>
        <ul className="ml-5 space-y-2 text-sm list-disc lg:text-base">
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
