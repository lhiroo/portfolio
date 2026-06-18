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

export default function Esp32() {
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
        ESP32 Dashboard
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-4 text-white/60"
      >
        Real-time monitoring system using JS and ESP32.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-6 flex gap-2"
      >
        <span className="px-3 py-1 text-sm rounded-md bg-indigo-500/20 border border-indigo-500/30">
          C++
        </span><span className="px-3 py-1 text-sm rounded-md bg-indigo-500/20 border border-indigo-500/30">
          JS
        </span>
      </motion.div>
    </motion.div>
  );
}