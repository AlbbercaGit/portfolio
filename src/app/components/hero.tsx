"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

export default function Component() {
  const [activeLink, setActiveLink] = useState("Experiencia");
  const [text, setText] = useState("");
  const fullText = `  Creo páginas digitales inclusivas y accesibles, con experiencia en startups y productos empresariales. Soy programador especializado en Java, MySQL y microservicios. Utilizo React, Next.js y Tailwind para desarrollar interfaces modernas y eficientes `;

  const controls = useAnimation();

  const animateText = useCallback(async () => {
    await controls.start("animate");
    await controls.start("reset");
    await controls.start("final");
  }, [controls]);

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

    const animationInterval = setInterval(animateText, 5500);

    return () => {
      clearInterval(typingEffect);
      clearInterval(animationInterval);
    };
  }, [fullText, animateText]);

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

  const letterVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: -10,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    }),
    reset: (i: number) => ({
      y: 5,
      transition: {
        delay: i * 0.05,
        duration: 0.1,
        type: "spring",
        stiffness: 600,
        damping: 10,
      },
    }),
    final: {
      y: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
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
        <a 
      href="https://github.com/AlbbercaGit/videos/raw/60a5e66e4a181f3b1e5636b51d5065f0506e69c3/CV_Alejandro_Alberca.pdf
" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block"
    >
      <motion.button
        className="flex justify-center items-center bg-blue-700 text-white px-4 py-2 hover:bg-blue-600 transition-colors border-4 border-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.button>
    </a>
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
            <motion.p className="text-xl md:text-3xl mb-2 text-black font-mono font-semibold" variants={itemVariants}>
              Heyy soy Albberca.
            </motion.p>
            <motion.h1 
              className="text-5xl md:text-6xl mb-3 md:mb-6 font-vcr uppercase font-extrabold text-blue-700" 
              variants={itemVariants}
              animate={controls}
              initial="initial"
            >
              {"Full-Stack".split("").map((letter, index) => (
                <motion.span
                  key={`full-stack-${index}`}
                  variants={letterVariants}
                  custom={index}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.span>
              ))}
              <br />
              {"Developer".split("").map((letter, index) => (
                <motion.span
                  key={`developer-${index}`}
                  variants={letterVariants}
                  custom={index + "Full-Stack".length}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className="text-lg md:text-xl mb-2 text-black font-mono font-semibold" variants={itemVariants}>
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
        <nav className="flex justify-center gap-10 font-mono font-bold relative max-w-md mx-auto">
          <motion.a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          {["Experiencia", "Proyectos", "Tecnologias"].map((link) => (
            <motion.div
              key={link}
              className="relative w-1/3 text-center text-base"
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
                  className="h-1.5 bg-blue-700 w-full absolute bottom-0 left-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
          <motion.a
            href="https://github.com/AlbbercaGit"
            target="Github"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub  size={24} />
          </motion.a>
        </nav>
      </motion.footer>
    </motion.div>
  );
}