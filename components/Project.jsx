'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'react-feather';
import { ChevronRight } from 'react-feather';

const Project = ({ projects }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1));
  };

  const [autoSlide, setAutoSlide] = useState(false);
  const [autoSlideInterval, setAutoSlideInterval] = useState(3000);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      {projects.map((project) => {
        const { id, title, description, image, link } = project;

        return (
          <div
            className="relative flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-4 space-y-5 transition-transform duration-500 ease-out snap-center md:p-10"
            key={id}
            style={{ transform: `translateX(-${curr * 100}%)` }}
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

            <div className="absolute inset-0 flex items-center justify-between p-4 md:p-10 lg:p-40">
              <button
                onClick={prev}
                className="p-1 text-gray-800 rounded-full shadow bg-white/10 hover:bg-[#f7ab0a]/50 transition duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-1 text-gray-800 rounded-full shadow bg-white/10 hover:bg-[#f7ab0a]/50 transition duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project;
