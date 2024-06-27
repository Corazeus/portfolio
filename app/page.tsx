import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import TechStack from "@/components/TechStack";
import { FlipWords } from "@/components/ui/flip-words";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {

  const skills = ["SKILLS"];

  return (
    <main className="flex flex-col items-center justify-center mx-auto sm:px-10 px-5 overflow-hidden overflow-y-hidden w-[calc(100%-4rem)] rounded-md min-h-screen">
      <section id="profile" className="min-h-screen pt-10">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <Navigation/>
          <Hero/>
        </Vortex>
      </section>
      <section id="skills" className="min-h-screen pt-10">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
        <FlipWords words={skills} className="text-5xl"/>
        <TechStack/>
        </Vortex>
      </section>
      <section id="experience" className="min-h-screen pt-10">
        <Vortex rangeY={3000} className="flex items-center flex-col justify-center">
          <p>EXPERIENCE</p>
        </Vortex>
      </section>
      <section id="about" className="min-h-screen pt-10">
        <Vortex rangeY={7000} className="flex items-center flex-col justify-center">
          <p>ABOUT</p>
        </Vortex>
      </section>
    </main>
  );
}
