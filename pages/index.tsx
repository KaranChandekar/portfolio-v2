import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import { NextPage } from "next";
import Head from "next/head";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../images/karan.jpg";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Karan Chandekar - a web designer & developer</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-20 sm:bottom-10 md:bottom-5">
          <div className="flex items-center justify-center">
            <Image
              className="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0 animate-bounce"
              src={FooterLogo}
              alt="footer logo"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
