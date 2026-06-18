import { motion } from "framer-motion";
import Magnetic from "../components/Magnetic";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl"
      >

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          I'm <span className="text-indigo-400">Lhiro</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-gray-400 text-lg md:text-xl"
        >
          Developer • Embedded systems • Cybersecurity • Video editing
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex gap-4 justify-center"
        >

          <Magnetic>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition transform hover:scale-105"
            >
              View Projects
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-md transition transform hover:scale-105"
            >
              Contact
            </a>
          </Magnetic>

        </motion.div>

      </motion.div>
    </section>
  );
}