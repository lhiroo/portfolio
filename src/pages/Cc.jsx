import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Magnetic from "../components/Magnetic"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Floppy() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen text-white p-10 max-w-3xl mx-auto"
    >
      <motion.div variants={item}>
        <Link
          to="/"
          className="text-indigo-400 hover:text-indigo-300 transition"
        >
          ← Back
        </Link>
      </motion.div>

      <motion.h1
        variants={item}
        className="text-4xl font-bold mt-6"
      >
        C.C
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-4 text-white/60"
      >
        Multi-function Discord bot.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-6 flex gap-2"
      >
        <span className="px-3 py-1 text-sm rounded-md bg-indigo-500/20 border border-indigo-500/30">
          React
        </span>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-8 flex gap-4"
      >
        <Magnetic><a
          href="https://discord.com/oauth2/authorize?client_id=1499819011943436288"
          target="_blank"
          className="
            px-6 py-3
            rounded-xl
            bg-indigo-500
            hover:bg-indigo-600
            transition-all duration-300
            hover:scale-105
          "
        >
          Add C.C to your server
        </a></Magnetic>

        <Magnetic><a
          href="https://github.com/lhiroo/C.C"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3
            rounded-xl
            border border-white/20
            hover:border-white/40
            transition-all duration-300
            hover:scale-105
          "
        >
          Source Code
        </a></Magnetic>
      </motion.div>
    </motion.div>
  );
}