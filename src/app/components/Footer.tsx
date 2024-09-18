"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Component() {
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
    hover: (i: number) => ({
      y: -10,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }),
  };

  return (
    <motion.footer
      className="mt-12 relative z-10 w-full bg-blue-600 text-yellow-300 p-8 border-t-8 border-white"
      variants={itemVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <motion.h2
            className="text-4xl font-vcr uppercase font-extrabold mb-4 md:mb-0 flex"
            whileHover="hover"
            initial="initial"
          >
            {"Albberca".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                custom={index}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              variants={letterVariants}
              custom={8}
              style={{ display: "inline-block" }}
              className="text-blue-700"
            >
              .
            </motion.span>
          </motion.h2>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://www.linkedin.com/in/albberca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-red-500 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            href="mailto:albberca@example.com"
            className="text-yellow-300 hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={32} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/albberca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-pink-600 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={32} />
          </motion.a>
        </div>
        <motion.div
          className="text-center font-mono text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-2">¡Gracias por visitar mi portfolio!</p>
          <p className="text-yellow-300 font-bold">
            Hagamos algo increíble juntos.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}