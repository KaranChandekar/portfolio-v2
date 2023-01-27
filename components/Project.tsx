/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Project = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-4 space-y-5 snap-center md:p-10">
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
          src={props.image}
          alt=""
          className="w-full"
        />
      </div>

      <div className="max-w-6xl px-0 space-y-5 md:px-10">
        <h4 className="text-2xl font-semibold text-center md:text-4xl">
          {props.title}
        </h4>
        <p className="text-justify md:text-left md:text-lg">
          {props.description}{" "}
          <Link className="underline decoration-[#f7ab0a]/50" href={props.url}>
            Take a look
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Project;
