import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export default function Draw2() {
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
        Draw v2
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-4 text-white/60"
      >
        Virtual drawing with real-time hand detection.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-6 flex gap-2"
      >
        <span className="px-3 py-1 text-sm rounded-md bg-indigo-500/20 border border-indigo-500/30">
          Python
        </span>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-8 flex gap-4"
      >
        <a
          href="/downloads/draw2.zip"
          download
          className="
            px-6 py-3
            rounded-xl
            bg-indigo-500
            hover:bg-indigo-600
            transition-all duration-300
            hover:scale-105
          "
        >
          Download
        </a>

        <a
          href="https://github.com/lhiroo/Draw2"
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
        </a>
      </motion.div>
    </motion.div>
  );
}