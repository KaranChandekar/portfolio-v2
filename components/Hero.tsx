import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
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
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <div className="relative w-32 h-32 mx-auto">
        <Image
          className="object-contain rounded-full "
          src={MyProfileImg}
          alt="Karan's Profile Picture"
        />
      </div>
      <div className="z-20">
        <h2 className="pb-4 text-xs md:text-sm text-gray-500 uppercase md:tracking-[15px] tracking-[10px]">
          Frontend Developer
        </h2>
        <h1 className="text-xl font-semibold md:px-10 md:text-5xl lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-20">
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
    </div>
  );
};

export default Hero;
