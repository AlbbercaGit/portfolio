"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Component() {
  const [activeLink, setActiveLink] = useState("Experiencia");
  const [text, setText] = useState("");
  const fullText = `  Creo páginas digitales inclusivas y accesibles, con experiencia en startups y productos empresariales. Soy programador especializado en Java, MySQL y microservicios,  utilizo React, Next.js y Tailwind para desarrollar interfaces modernas y eficientes. `;

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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(id);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen p-6 flex flex-col relative overflow-hidden md:justify-center md:items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="flex justify-between items-center mb-12 relative z-10 font-mono font-bold md:w-4/5" variants={itemVariants}>
        <div className="text-2xl text-black font-inter">A <span className="text-blue-700">.</span></div>
        <motion.button
          className="absolute left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-4 py-2 hover:bg-purple-800 transition-colors border-4 border-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.button>
        <motion.button
          className="text-black hover:text-gray-700 transition-colors flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Menu <Menu className="ml-1" />
        </motion.button>
      </motion.header>
      <motion.main className="flex-grow flex items-center w-full justify-center relative z-10" variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5">
          <motion.div variants={itemVariants}>
            <motion.p className="text-3xl mb-2 text-black font-mono font-semibold" variants={itemVariants}>
              Heyy soy Albberca.
            </motion.p>
            <motion.h1 className="text-5xl md:text-6xl mb-6 font-vcr uppercase font-extrabold text-blue-700" variants={itemVariants}>
              Full-Stack
              <br />
              Developer
            </motion.h1>
            <motion.p className="text-xl mb-2 text-black font-mono font-semibold" variants={itemVariants}>
             <span className="text-red-500">Guitarrista</span>, <span className="text-green-400">cocinero aficionado</span> y <span className="text-blue-600">amante de los gatos</span>.
            </motion.p>
          </motion.div>
          <motion.div className="self-center flex justify-center items-center" variants={itemVariants}>
            <motion.div
              className="bg-black border-8 border-blue-700 w-full md:w-4/5 md:h-[300px] transform"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-blue-700 px-4 py-2 flex items-center">
                <div className="flex space-x-4">
                  <motion.div className="w-6 h-6 bg-yellow-400 border-4 border-black" whileHover={{ scale: 1.1 }} />
                  <motion.div className="w-6 h-6 bg-green-400 border-4 border-black" whileHover={{ scale: 1.1 }} />
                  <motion.div className="w-6 h-6 bg-red-400 border-4 border-black" whileHover={{ scale: 1.1 }} />
                </div>
              </div>
              <div className="p-4 text-base text-green-400 font-courier h-[252px] md:h-[252px] overflow-y-auto">
                <span className="text-purple-400">$</span> {text}
                <span className="animate-pulse">█</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
      <motion.footer className="mt-12 relative z-10 w-full" variants={itemVariants}>
  <nav className="flex justify-center font-mono font-bold relative max-w-md mx-auto">
    {["Experiencia", "Proyectos", "Tecnologias"].map((link) => (
      <motion.div
        key={link}
        className="relative w-1/3 text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={`#${link.toLowerCase()}`}
          className="text-black hover:text-blue-700 w-full inline-block pb-1"
          onMouseEnter={() => setActiveLink(link)}
          onClick={(e) => handleScroll(e, link.toLowerCase())}
        >
          {link}
        </Link>
        {activeLink === link && (
          <motion.div
            layoutId="underline"
            className="h-2 bg-blue-700 w-full absolute bottom-0 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>
    ))}
  </nav>
</motion.footer>

      {/* Texto circular */}
      {/* <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-[0%] translate-y-1/4 font-mono font-bold">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="curve"
          fill="transparent"
          d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
        />
        <text fontSize="9">
          <textPath xlinkHref="#curve" startOffset="0%">
            GOD IS ALSO A DESIGNER
          </textPath>
        </text>
      </svg>
    </div> */}
</motion.div>
  );
}