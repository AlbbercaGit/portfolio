import Image from "next/image";
import Hero from './components/hero';
import Proyectos from './components/Proyectos';
import Timeline from './components/Timeline';
import Tecnologias from './components/Tecnologias';
import DynamicNavBar from './components/DynamicNavBar';

import './globals.css';
import '@fontsource/courier-prime';
import '@fontsource-variable/inter/opsz.css';
import "@fontsource-variable/lora";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-yellow-200">
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="experiencia">
          <Timeline />
        </section>
        <section id="proyectos">
          <Proyectos />
        </section>
        <section id="tecnologias">
          <Tecnologias />
        </section>
      </div>
      <DynamicNavBar />
    </div>
  );
}