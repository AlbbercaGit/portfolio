"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Component() {
  const [activeLink, setActiveLink] = useState("Estudios");
  const [text, setText] = useState("");
  const fullText = `  Creo páginas digitales inclusivas y accesibles, con experiencia en trabajar tanto con startups como con productos empresariales.  Además, soy programador especializado en Java, MySQL y microservicios. He trabajado extensamente con tecnologías como React, Next.js y Tailwind para crear interfaces modernas y eficientes. `;

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 35);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-screen p-6 flex flex-col relative overflow-hidden md:justify-center md:items-center ">
      {/* Líneas de fondo */}{" "}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {" "}
        <div className="w-full h-px bg-black opacity-10 transform -rotate-45"></div>{" "}
        <div className="w-full h-px bg-black opacity-10 transform rotate-45"></div>{" "}
      </div>
      <header className="flex justify-between items-center mb-12 relative z-10 font-mono font-bold md:w-4/5">
        <div className="text-2xl text-black font-inter">A <span className="text-purple-600">.</span></div>
        <button className="absolute left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 hover:bg-purple-800 transition-colors border-4 border-black">
          Download CV
        </button>
        <button className="text-black hover:text-gray-700 transition-colors flex items-center">
          Menu <Menu className="ml-1" />
        </button>
      </header>
      <main className="flex-grow flex items-center w-full justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5">
          <div>
            <p className="text-xl mb-2 text-black font-mono font-semibold">
              Heyy soy Albberca
            </p>
            <h1 className="text-5xl md:text-6xl mb-6 font-inter uppercase font-extrabold text-purple-600 ">
              Full-Stack
              <br />
              Developer
            </h1>
            <p className="text-lg mb-2 text-black font-mono font-semibold">
             <span className="text-red-500">Guitarrista</span> , <span className="text-yellow-400">cocinero aficionado</span> y <span className="text-blue-600">amante de los gatos</span>.
            </p>
          </div>
          <div className="self-center flex justify-center items-center">
            {/* Neo-brutalist Terminal */}
            <div className="bg-black border-8 border-purple-600 w-full md:w-4/5 md:h-[300px] transform ">
              {/* Terminal top bar */}
              <div className="bg-purple-600 px-4 py-2 flex items-center">
                <div className="flex space-x-4">
                  <div className="w-6 h-6 bg-yellow-400 border-4 border-black"></div>
                  <div className="w-6 h-6 bg-green-400 border-4 border-black"></div>
                  <div className="w-6 h-6 bg-red-400 border-4 border-black"></div>
                </div>
              </div>
              {/* Terminal content */}
              <div className="p-4 text-base text-green-400 font-courier h-[252px] md:h-[252px] overflow-y-auto">
                <span className="text-purple-400">$</span> {text}
                <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-12 relative z-10 w-full">
        <nav className="flex justify-center font-mono font-bold relative max-w-md mx-auto">
          <div
            className="absolute bottom-0 h-2 bg-purple-600 transition-all duration-300 ease-in-out"
            style={{
              left:
                activeLink === "Estudios"
                  ? "6.67%"
                  : activeLink === "Proyectos"
                  ? "40%"
                  : "73.33%",
              width: "20%",
            }}
          />
          {["Estudios", "Proyectos", "Trabajos"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-black hover:text-purple-600 w-1/3 text-center transition-colors pb-1 relative"
              onMouseEnter={() => setActiveLink(link)}
            >
              <span className="relative inline-block w-4/5">{link}</span>
            </a>
          ))}
        </nav>
      </footer>
      {/* Texto circular */}
      <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/4 translate-y-1/4 font-mono font-bold">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="curve"
            fill="transparent"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
          <text fontSize="7.5">
            <textPath xlinkHref="#curve" startOffset="0%">
              GOD IS ALSO A DESIGNER
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
