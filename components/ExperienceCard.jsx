'use client';

import React from 'react';
import { motion } from 'framer-motion';

function ExperienceCard({ jobs }) {
  return (
    <>
      {jobs.map((job) => {
        const {
          id,
          title,
          company,
          logo,
          startDate,
          endDate,
          skills,
          summary,
        } = job;

        return (
          <article
            key={id}
            className="flex flex-col flex-shrink-0 rounded-lg space-y-5 w-full sm:w-[500px] snap-center bg-[#292929] p-4 md:p-10 md:opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin"
          >
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
              alt="Company logo"
            />

            <div className="px-0">
              <h4 className="text-2xl font-light md:text-3xl">{title}</h4>
              <p className="mt-1 text-xl font-bold">{company}</p>
              <div className="flex my-2 space-x-2">
                {skills.map((skill) => (
                  <motion.img
                    width={30}
                    height={30}
                    className="rounded-full"
                    src={skill}
                    alt="skill"
                  />
                ))}
              </div>
              <p className="py-3 text-gray-300 uppercase">
                {startDate} - {endDate}
              </p>
              <ul className="ml-5 space-y-2 text-sm list-disc lg:text-base">
                {summary.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default ExperienceCard;
