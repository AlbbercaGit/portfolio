import Image from "next/image";
import Hero from './components/hero';
import Proyectos from './components/Proyectos';
import Timeline from './components/Timeline';
import Tecnologias from './components/Tecnologias';


import './globals.css';
import '@fontsource/courier-prime';
import '@fontsource-variable/inter/opsz.css';
import "@fontsource-variable/lora";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-yellow-200">
      {/* Fondo */}
      {/* <div className="absolute top-0 -z-10 h-full w-full bg-white"> */}
        {/* <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div> */}

      {/* Contenido */}
      <div className="relative z-10">
        <Hero />
        <Timeline />
        <Proyectos />
        <Tecnologias />
      </div>
    </div>
  );
}