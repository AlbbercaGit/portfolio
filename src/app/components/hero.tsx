"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
// import "@fontsource/courier-prime/400.css";
// import "@fontsource/courier-prime/700.css";
// import "@fontsource-variable/inter/opsz.css";
// import "@fontsource-variable/lora";

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
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-screen  p-6 flex flex-col relative overflow-hidden md:justify-center md:flex md:items-center">
      {/* Líneas de fondo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-full h-px bg-black opacity-10 transform -rotate-45"></div>
        <div className="w-full h-px bg-black opacity-10 transform rotate-45"></div>
      </div>

      <header className="flex justify-between items-center mb-12 relative z-10 font-inter font-medium md:w-4/5 md:items-center">
        <div className="text-2xl font-bold text-black font-lora">A.</div>
        <button className="absolute left-1/2 transform -translate-x-1/2 text-purple-600 hover:text-purple-800 transition-colors">
          Download CV
        </button>
        <button className="text-black hover:text-gray-700 transition-colors">
          Menu <Menu className="inline-block ml-1" />
        </button>
      </header>

      <main className="flex-grow flex items-center w-full justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5">
          <div>
            <p className="text-base mb-2 text-black font-inter font-medium">
              Heyy Soy Albberca
            </p>
            <h1 className="text-6xl mb-6 font-lora text-black">
              Diseñador
              <br />
              Frontend
            </h1>
            <p className="text-sm mb-2 text-black font-inter font-medium">
              Guitarrista, cocinero aficionado y amante de los gatos.
            </p>
          </div>
          <div className="self-center flex justify-center items-center">
            {/* Terminal */}
            <div className="bg-gray-900 bg-opacity-65 rounded-lg overflow-hidden shadow-lg w-full md:w-4/5 md:h-[300px]">
              {/* Terminal top bar */}
              <div className="bg-gray-800 bg-opacity-80 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              {/* Terminal content */}
              <div className="p-4 text-sm text-green-400 font-courier h-[252px] md:h-[252px] overflow-y-auto">
                <span className="text-purple-400">$</span> {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 relative z-10 w-full">
        <nav className="flex justify-center font-inter font-medium relative max-w-md mx-auto">
          <div 
            className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
            style={{
              left: activeLink === 'Estudios' ? '6.67%' : activeLink === 'Proyectos' ? '40%' : '73.33%',
              width: '20%'
            }}
          />
          <a 
            href="#" 
            className="text-black hover:text-gray-700 w-1/3 text-center transition-colors pb-1 relative"
            onMouseEnter={() => setActiveLink('Estudios')}
          >
            <span className="relative inline-block w-4/5">Estudios</span>
          </a>
          <a 
            href="#" 
            className="text-black hover:text-gray-700 w-1/3 text-center transition-colors pb-1 relative"
            onMouseEnter={() => setActiveLink('Proyectos')}
          >
            <span className="relative inline-block w-4/5">Proyectos</span>
          </a>
          <a 
            href="#" 
            className="text-black hover:text-gray-700 w-1/3 text-center transition-colors pb-1 relative"
            onMouseEnter={() => setActiveLink('Trabajos')}
          >
            <span className="relative inline-block w-4/5">Trabajos</span>
          </a>
        </nav>
      </footer>
      {/* Texto circular */}
      <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/4 translate-y-1/4 font-inter font-medium">
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
