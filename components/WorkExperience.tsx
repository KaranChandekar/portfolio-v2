import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  const jobs = [
    {
      id: "3",
      title: "Frontend Developer",
      company: "YOUNG NOMADS",
      logo: "https://i.postimg.cc/CMNd1bX1/youngnomads.jpg",
      skills: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      ],
      startDate: "January 2023",
      endDate: "Running",
      summary: [
        "Young Nomads is a Digital Marketing company led by Ayush Gupta.",
        "Work & Responsibilities - To design and create websites for company products.",
        "Build websites with latest web technologies.",
        "Designed and created official website for company.",
        "Handled the frontend side for various products in company.",
      ],
    },

    {
      id: "2",
      title: "Frontend Developer",
      company: "UCPI",
      logo: "https://i.postimg.cc/qRxKFr4D/ucpi.jpg",
      skills: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      ],
      startDate: "October 2022",
      endDate: "January 2023",
      summary: [
        "UCPI is a blockchain based Web3 start-up company.",
        "Work & Responsibilities - To design and create websites for company products in React.",
        "Designed and created official website for company.",
        "Designed and created website for product DAuth.",
        "Designed and created UI for product ucpimapping.",
        "Got experience about how to work in a team and collaborate with other developers.",
      ],
    },
    {
      id: 1,
      title: "Web Devloper",
      company: "100DAYSOFCODE",
      logo: "https://i.postimg.cc/N06BncwM/100daysofcode.jpg",
      skills: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      ],
      startDate: "December 2021",
      endDate: "April 2022",
      summary: [
        "Did coding daily for 100 days straight.",
        "Learnt the building blocks of the web like HTML, CSS and JavaScript.",
        "Created more than 50 projects and pushed it on GitHub.",
        "It made me a very consistent coder.",
        "Started coding from 0 and now at 500 + days of consistency.",
      ],
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-4 mx-auto overflow-hidden max-w-7xl md:px-10 md:flex-row justify-evenly"
    >
      <h3 className="absolute uppercase top-16 tracking-[12px] md:tracking-[24px] text-gray-500 md:text-2xl">
        Experience
      </h3>

      <div className="flex w-full md:px-10 py-32 space-x-10 overflow-x-scroll snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin h-screen">
        <ExperienceCard
          title={jobs[0].title}
          company={jobs[0].company}
          logo={jobs[0].logo}
          skills={jobs[0].skills}
          startDate={jobs[0].startDate}
          endDate={jobs[0].endDate}
          summary={jobs[0].summary}
        />
        <ExperienceCard
          title={jobs[1].title}
          company={jobs[1].company}
          logo={jobs[1].logo}
          skills={jobs[1].skills}
          startDate={jobs[1].startDate}
          endDate={jobs[1].endDate}
          summary={jobs[1].summary}
        />
        <ExperienceCard
          title={jobs[2].title}
          company={jobs[2].company}
          logo={jobs[2].logo}
          skills={jobs[2].skills}
          startDate={jobs[2].startDate}
          endDate={jobs[2].endDate}
          summary={jobs[2].summary}
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
