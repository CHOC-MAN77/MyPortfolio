"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Wrench, Shield } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Back-end",
    items: ["SQLServer", "Express", "MySQL"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Outils",
    items: ["Git", "GitHub", "VSCode", "Linux"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Intérêts",
    items: ["Cybersécurité", "Blockchain", "UI/UX Design", "Database Design"],
    gradient: "from-violet-500 to-pink-500",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
