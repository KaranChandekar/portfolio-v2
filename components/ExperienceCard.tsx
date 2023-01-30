import React from "react";
import { motion } from "framer-motion";

function ExperienceCard(props: any) {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg space-y-5 w-full sm:w-[500px] snap-center bg-[#292929] p-4 md:p-10 md:opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
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
        src={props.logo}
        alt="Company logo"
      />

      <div className="px-0">
        <h4 className="text-2xl font-light md:text-3xl">{props.title}</h4>
        <p className="mt-1 text-xl font-bold">{props.company}</p>
        <div className="flex my-2 space-x-2">
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[0]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[1]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[2]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[3]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[4]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[5]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[6]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[7]}
          />
          <motion.img
            width={30}
            height={30}
            className="rounded-full"
            src={props.skills[8]}
          />
        </div>
        <p className="py-3 text-gray-300 uppercase">
          {props.startDate} - {props.endDate}
        </p>
        <ul className="ml-5 space-y-2 text-sm list-disc lg:text-base">
          <li>{props.summary[0]}</li>
          <li>{props.summary[1]}</li>
          <li>{props.summary[2]}</li>
          <li>{props.summary[3]}</li>
          <li>{props.summary[4]}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
