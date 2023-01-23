import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.postimg.cc/qRxKFr4D/ucpi.jpg"
        alt="YoungNomads"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="mt-1 text-2xl font-bold">UCPI</p>
        <div className="flex my-2 space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png?w=128&f=avif"
            alt="js"
          />
        </div>
        <p className="py-5 text-gray-300 uppercase">
          Started work.... - Ended...
        </p>
        <ul className="ml-5 space-y-4 text-lg list-disc">
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
