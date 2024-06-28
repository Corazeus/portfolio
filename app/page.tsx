import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import TechStack from "@/components/TechStack";
import { FlipWords } from "@/components/ui/flip-words";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {

  const skills = ["SKILLS"];

  return (
    <main className="flex flex-col items-center justify-center mx-auto sm:px-16 px-10 overflow-hidden w-screen rounded-md min-h-screen">
      <section id="profile" className="min-h-screen pt-10">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <Navigation/>
          <Hero/>
        </Vortex>
      </section>
      <section id="skills" className="min-h-screen pt-10">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
        <p className="text-5xl mb-10">SKILLS</p>
        <p className="font-thin text-center my-16 xl:mx-96 lg:mx-40">I am eager to embark on a dynamic career where I
        can leverage my foundational knowledge in back-end and front-end technologies. With a genuine
        passion for continuous learning and improvement, I
        am committed to staying abreast of industry trends,
        acquiring new skills, and embracing challenges that
        contribute to my professional growth.</p>
        <TechStack/>
        <p className="font-extralight text-xs text-center">Hover on icons to view more details...</p>
        </Vortex>
      </section>
      <section id="experience" className="min-h-screen pt-10 mb-60">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <p className="text-5xl mb-20">EXPERIENCE</p>
          <Experiences/>
        </Vortex>
      </section>
      <section id="about" className="min-h-screen pt-10">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <p className="text-5xl mb-10">ABOUT</p>
          <p className="font-light text-center mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore consequatur dicta nostrum maiores pariatur eius, architecto harum in saepe dolorem quia cupiditate rem deleniti nulla autem! Voluptate, iusto ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore consequatur dicta nostrum maiores pariatur eius, architecto harum in saepe dolorem quia cupiditate rem deleniti nulla autem! Voluptate, iusto ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore consequatur dicta nostrum maiores pariatur eius, architecto harum in saepe dolorem quia cupiditate rem deleniti nulla autem! Voluptate, iusto ex!</p>
          <Contact/>
        </Vortex>
      </section>
    </main>
  );
}
