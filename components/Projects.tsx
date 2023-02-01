/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

const Projects = ({ props: Props }: any) => {
  const projects = [
    {
      title: "Metaverse",
      description:
        "A modern Next 13 website with Framer Motion & Tailwind CSS.",
      image:
        "https://user-images.githubusercontent.com/93200960/216083237-b4fdefab-dfd3-4b3a-8bd5-c6755950a45c.png",
      link: "https://metaversusmadness.vercel.app/",
    },
    {
      title: "My Fitness",
      description:
        "My Fitness is a gym website created using HTML, CSS and JavaScript",
      image:
        "https://user-images.githubusercontent.com/93200960/216081497-ca93155d-f927-44ff-9b7f-0f51da923590.png",
      link: "https://my-fitness-phi.vercel.app/",
    },
    {
      title: "Blog App",
      description:
        "A basic application where user can add, edit and delete a blog as well as view other blogs and make changes in them.",
      image:
        "https://user-images.githubusercontent.com/93200960/211460092-29588e43-c124-4b8d-b7d8-6286d3058d2b.png",
      link: "https://blog-app-karanchandekar.vercel.app/",
    },
    {
      title: "Netflix",
      description:
        "Netflix homepage clone. Created this UI clone using simple HTML, CSS and JavaScript",
      image:
        "https://user-images.githubusercontent.com/93200960/215095288-91c46b4c-69bd-4afc-aad8-694dfe41fbc1.png",
      link: "https://netflix-karanchandekar.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "Simple Weather app created with HTML, CSS, and JavaScript using the APIs for fetching weather and geolocation information.",
      image:
        "https://user-images.githubusercontent.com/93200960/216075953-1f2e8162-e028-4ba1-9523-e66e2782dde4.png",
      link: "https://weather-app-karanchandekar.vercel.app/",
    },
    {
      title: "Apple E-Commerce",
      description:
        "It is an Apple eCommerce website containing couple of different sections with cool animations. It has nice hover effect on nav links. An iPhone cube with rotation controls.",
      image:
        "https://user-images.githubusercontent.com/93200960/215094737-297ed4d8-78c7-4014-b3d9-ef93a1d603c0.png",
      link: "https://apple-ecom.netlify.app/",
    },
    {
      title: "Wine House",
      description:
        "Fully responsive wine shop website named wine house. Created using html, css and javascript.",
      image:
        "https://user-images.githubusercontent.com/93200960/196762004-4ebb0a3c-6420-41f5-951e-2de95d5b5bce.png",
      link: "https://wine-house-upsv.vercel.app/",
    },
    {
      title: "Paypal Clone",
      description:
        "This is a fully responsive PayPal UI clone website created using html, css and javascript. It has an individual sign up page.",
      image:
        "https://user-images.githubusercontent.com/93200960/215094189-9edcddf5-d423-4edd-8b5a-1b5c3ad720b4.png",
      link: "https://pay-pal-clone-karanchandekar.vercel.app/",
    },
    {
      title: "Portfolio Design",
      description:
        "This is a fully responsive Portfolio design website created using html, css and javascript.",
      image:
        "https://user-images.githubusercontent.com/93200960/215091923-870c5ed9-a1ca-4179-9e87-a0bc0310ad4d.png",
      link: "https://portfolio-design-karan.vercel.app/",
    },
    {
      title: "The Road",
      description:
        "This project is something like tour website template named The Road. The project contains couple of different sections with nice and cool animations. It's a fully responsive website created with html, css and javascript.",
      image:
        "https://user-images.githubusercontent.com/93200960/215092673-c2a720f7-0108-4f76-900a-98d7964b961a.png",
      link: "https://the-road-ecru.vercel.app/",
    },
    {
      title: "Business Agency",
      description:
        "A Business Agency website. Includes landing page with several animations. A navbar with nice toggle and hover effect. About us section with a video controls. Pricing cards section with cool design.",
      image:
        "https://user-images.githubusercontent.com/93200960/215091397-2ff1ee52-7bfe-4f38-8144-d6e0b5669ed8.png",
      link: "https://business-web-agency.netlify.app/",
    },
    {
      title: "Creative Design",
      description:
        "A website with cool design called Creative Design. It has cool animations, a floating background created with css keyframes. The up scroll button to directly navigate to home page.",
      image:
        "https://user-images.githubusercontent.com/93200960/215092307-43abe5ed-c9d3-4599-8164-7b51a1c56e00.png",
      link: "https://web-creative.netlify.app/",
    },
    {
      title: "Classic Cars",
      description:
        "It's a website related to Cars named Classic Cars. Popular Cars section which includes three different cars. Nice video gallery and image gallery sections with nice hover effects.",
      image:
        "https://user-images.githubusercontent.com/93200960/215094503-d3d6e50b-c6c1-4b50-b001-5546e400c0d6.png",
      link: "https://cars-classic.netlify.app/",
    },
    {
      title: "Architect Website",
      description:
        "An Architect Website with animation to it's landing page. Nice havbar with hamburger menu. About us section with some information and house image. Team section with cards and hover effect.",
      image:
        "https://user-images.githubusercontent.com/93200960/215093326-13249bd8-2956-48cc-b310-dd24bff344f4.png",
      link: "https://site-architect.netlify.app/",
    },
    {
      title: "Foods Website",
      description:
        "This website is something like selling foods. Slideshow with defferent font awesome icons. Nice cards section with 3D shapes and nice hover effect. Gallery with multilevel shadow effect.",
      image:
        "https://user-images.githubusercontent.com/93200960/215089851-ef51301d-0bb8-420b-96a6-6671a918e3b4.png",
      link: "https://amazedwithtastes.netlify.app/",
    },
    {
      title: "Movie Star",
      description:
        "It's a movie app called movie star. A web application which fetch API and showcase movies with user friendly UI. It's a fully responsive website complatible for different screen sizes.",
      image:
        "https://user-images.githubusercontent.com/93200960/157717477-9088feea-8c0d-4152-a1e7-4257101c5adb.png",
      link: "https://movie-start.netlify.app/",
    },
    {
      title: "Shoe Site",
      description:
        "Mobile first shoe site design using html, css and javascript",
      image:
        "https://user-images.githubusercontent.com/93200960/216073135-8c09f630-0f97-4940-9603-704414173edd.png",
      link: "https://shoe-site.vercel.app/",
    },
    {
      title: "Fauxica",
      description:
        "Simple cloth shop UI design with some animations using html and css.",
      image:
        "https://user-images.githubusercontent.com/93200960/211344137-5b6621ac-bbe0-4d40-b770-c2447fe0d063.png",
      link: "https://fauxica.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute uppercase top-16 md:top-24 tracking-[10px] md:tracking-[24px] text-gray-500 md:text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        <Project
          title={projects[0].title}
          description={projects[0].description}
          image={projects[0].image}
          url={projects[0].link}
        />
        <Project
          title={projects[1].title}
          description={projects[1].description}
          image={projects[1].image}
          url={projects[1].link}
        />
        <Project
          title={projects[2].title}
          description={projects[2].description}
          image={projects[2].image}
          url={projects[2].link}
        />
        <Project
          title={projects[3].title}
          description={projects[3].description}
          image={projects[3].image}
          url={projects[3].link}
        />
        <Project
          title={projects[4].title}
          description={projects[4].description}
          image={projects[4].image}
          url={projects[4].link}
        />
        <Project
          title={projects[5].title}
          description={projects[5].description}
          image={projects[5].image}
          url={projects[5].link}
        />
        <Project
          title={projects[6].title}
          description={projects[6].description}
          image={projects[6].image}
          url={projects[6].link}
        />
        <Project
          title={projects[7].title}
          description={projects[7].description}
          image={projects[7].image}
          url={projects[7].link}
        />
        <Project
          title={projects[8].title}
          description={projects[8].description}
          image={projects[8].image}
          url={projects[8].link}
        />
        <Project
          title={projects[9].title}
          description={projects[9].description}
          image={projects[9].image}
          url={projects[9].link}
        />
        <Project
          title={projects[10].title}
          description={projects[10].description}
          image={projects[10].image}
          url={projects[10].link}
        />
        <Project
          title={projects[11].title}
          description={projects[11].description}
          image={projects[11].image}
          url={projects[11].link}
        />
        <Project
          title={projects[12].title}
          description={projects[12].description}
          image={projects[12].image}
          url={projects[12].link}
        />
        <Project
          title={projects[13].title}
          description={projects[13].description}
          image={projects[13].image}
          url={projects[13].link}
        />
        <Project
          title={projects[14].title}
          description={projects[14].description}
          image={projects[14].image}
          url={projects[14].link}
        />
        <Project
          title={projects[15].title}
          description={projects[15].description}
          image={projects[15].image}
          url={projects[15].link}
        />
        <Project
          title={projects[16].title}
          description={projects[16].description}
          image={projects[16].image}
          url={projects[16].link}
        />
        <Project
          title={projects[17].title}
          description={projects[17].description}
          image={projects[17].image}
          url={projects[17].link}
        />
      </div>

      <div className="absolute w-full -skew-y-12 top-[25%] bg-[#f7ab0a]/10 left-0 h-[400px]" />
    </motion.div>
  );
};

export default Projects;
