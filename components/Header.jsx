'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between mx-auto md:p-4 max-w-7xl xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/karanchandekar1"
          fgColor="gray"
          bgColor="transparent"
          className="animate-pulse"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/karan-chandekar-a87263219/"
          fgColor="gray"
          bgColor="transparent"
          className="animate-pulse"
        />
        <SocialIcon
          url="https://github.com/KaranChandekar"
          fgColor="gray"
          bgColor="transparent"
          className="animate-pulse"
        />
        <SocialIcon
          url="https://www.instagram.com/karanchandekar21/"
          fgColor="gray"
          bgColor="transparent"
          className="animate-pulse"
        />
      </motion.div>

      <a href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer animate-pulse"
        >
          <SocialIcon
            className="cursor-pointer animate-pulse"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
            Get in Touch
          </p>
        </motion.div>
      </a>
    </header>
  );
};

export default Header;
