import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Image from "next/image";
import FooterLogo from "../images/karan.jpg";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <a href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-20 sm:bottom-10 md:bottom-5">
          <div className="flex items-center justify-center">
            <Image
              className="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0 animate-bounce"
              src={FooterLogo}
              alt="footer logo"
            />
          </div>
        </footer>
      </a>
    </main>
  );
}
