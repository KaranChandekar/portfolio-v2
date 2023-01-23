/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="relative z-0 flex flex-col items-center h-screen px-10 mx-auto overflow-hidden text-center max-w-7xl md:text-left md:flex-row justify-evenly">
      <h3 className="absolute uppercase top-24 tracking-[24px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold md:text-4xl">
          I have got just what you need,{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Let's Talk</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#f7ab0a] h-5 w-5 animate-pulse" />
            <p className="md:text-lg">+1234567890</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab0a] h-5 w-5 animate-pulse" />
            <p className="md:text-lg">karanchandekar431@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#f7ab0a] h-5 w-5 animate-pulse" />
            <p className="md:text-lg">123 Developer Lane</p>
          </div>
        </div>

        <form className="flex flex-col mx-auto space-y-2 w-fit">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>

          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Message" className="contactInput" />
          <button
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold md:text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
