"use client"
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import TechStack from "@/components/TechStack";
import { Vortex } from "@/components/ui/vortex";
import Link from 'next/link';
import { easeOut, motion } from "framer-motion";

export default function Home() {

  const item = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        ease: easeOut,
        bounce: 0.2,
        duration: 0.5
      }
    }

  }

  return (
    <main className="flex flex-col items-center justify-center mx-auto sm:px-16 px-10 overflow-hidden w-screen rounded-md min-h-screen">

      <motion.section 
      id="profile" 
      className="h-screen pt-10"
      variants={item}
      initial="initial"
      whileInView="animate">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <Hero/>
        </Vortex>
      </motion.section>

      <motion.section 
      id="skills" 
      className="h-screen pt-10 mt-32 xl:mt-2"
      variants={item}
      initial="initial"
      whileInView="animate">

        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
        <p className="text-5xl mb-32">SKILLS</p>
        <p className="font-thin text-center my-16 xl:mx-96 lg:mx-40">I am eager to embark on a dynamic career where I
        can leverage my foundational knowledge in back-end and front-end technologies. With a genuine
        passion for continuous learning and improvement, I
        am committed to staying abreast of industry trends,
        acquiring new skills, and embracing challenges that
        contribute to my professional growth.</p>
        <TechStack/>
        <p className="font-extralight text-xs text-center">Hover on icons to view more details...</p>
        </Vortex>

      </motion.section>

      <motion.section 
      id="experience" 
      className="h-screen pt-10"
      variants={item}
      initial="initial"
      whileInView="animate">

        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <p className="text-5xl mb-20">EXPERIENCE</p>
          <Experiences/>
        </Vortex>

      </motion.section>

      <motion.section 
      id="about" 
      className="h-screen pt-10 xl:mt-20 lg:mt-32 mt-96"
      variants={item}
      initial="initial"
      whileInView="animate">

        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <p className="text-5xl mb-10">ABOUT</p>
          <p className="font-thin text-center my-16 xl:mx-96 lg:mx-40 mb-10">
            I created this website to showcase my journey as a software engineer, share my projects, and connect with like-minded professionals and potential collaborators.
            It serves as a digital portfolio where I can present my skills, experiences, and the passion I have for technology and innovation. 
            By sharing my work and insights, I aim to inspire others and contribute to the tech community. 
            Additionally, this platform provides a way for me to continuously learn, grow, and stay up-to-date with the latest trends in the industry. 

          <Link href="/more">
           <span> Click here to know more about me...</span>
          </Link>
          </p>
          <Contact/>
        </Vortex>
        
      </motion.section>

    </main>
  );
}
