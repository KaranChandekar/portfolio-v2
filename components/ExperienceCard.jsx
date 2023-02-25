import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({
  title,
  company,
  logo,
  startDate,
  endDate,
  skills = [], // provide a default value for skills in case it's not an array
  summary = [], // provide a default value for summary in case it's not an array
}) => {
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
        className="object-cover object-center rounded-full h-28 w-28"
        src={logo}
        alt={`Logo for ${company}`} // provide a more descriptive alt text
      />

      <div className="px-0">
        <h4 className="text-2xl font-light md:text-3xl">{title}</h4>
        <p className="mt-1 text-xl font-bold">{company}</p>
        <div className="flex my-2 space-x-2">
          {skills.map(({ id, url, name }) => (
            <motion.img
              key={id}
              width={30}
              height={30}
              className="rounded-full"
              src={url}
              alt={name}
            />
          ))}
        </div>
        <p className="py-3 text-gray-300 uppercase">
          {startDate} - {endDate}
        </p>
        <ul className="ml-5 space-y-2 text-sm list-disc lg:text-base">
          {summary.map((item, index) => (
            <li key={index}>{item}</li> // add a key prop to prevent errors
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
