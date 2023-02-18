'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Project = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        const { id, title, description, image, link } = project;

        return (
          <div
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-4 space-y-5 snap-center md:p-10"
            key={id}
          >
            <div className="max-w-2xl px-0 space-y-5 md:px-10">
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
                src={image}
                alt={title}
                className="w-full"
              />
            </div>

            <div className="max-w-6xl px-0 space-y-5 md:px-10">
              <h4 className="text-2xl font-semibold text-center md:text-4xl">
                {title}
              </h4>
              <p className="text-justify md:text-left md:text-lg">
                {description}{' '}
                <Link className="underline decoration-[#f7ab0a]/50" href={link}>
                  Take a look
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project;
