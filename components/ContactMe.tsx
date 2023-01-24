/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:karanchandekar431@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="relative z-0 flex flex-col items-center h-screen px-4 mx-auto overflow-hidden text-center md:px-10 max-w-7xl md:text-left md:flex-row justify-evenly">
      <h3 className="absolute uppercase md:top-24 top-16 tracking-[24px] text-gray-500 text-lg md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl font-semibold md:text-4xl md:w-auto w-[250px] mx-auto">
          I have got just what you need,{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Let's Talk</span>
        </h4>

        <div className="space-y-3">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2 w-fit"
        >
          <div className="space-y-2 md:space-x-2 md:space-y-0 md:flex">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
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
