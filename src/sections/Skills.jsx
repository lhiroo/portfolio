import Reveal from "../components/Reveal";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 75 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 85 },
  { name: "C++ / ESP32", level: 50 },
  { name: "Cybersecurity", level: 40 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 max-w-4xl mx-auto px-6 text-white">

      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span className="text-white/50">{skill.level}%</span>
            </div>

            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-indigo-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}