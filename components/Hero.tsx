import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import MyProfileImg from "../images/karan.jpg";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Karan Chandekar",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center"
    >
      <BackgroundCircles />
      <Image
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src={MyProfileImg}
        alt="Karan's Profile Picture"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm text-gray-500 uppercase tracking-[15px]">
          Frontend Developer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
