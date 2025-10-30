"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

const techIcons = [
  { name: "HTML5", position: { top: "20%", left: "10%" } },
  { name: "CSS3", position: { top: "60%", left: "15%" } },
  { name: "JavaScript", position: { top: "40%", right: "10%" } },
  { name: "React", position: { top: "15%", right: "20%" } },
  { name: "Next.js", position: { top: "70%", right: "15%" } },
  { name: "Node.js", position: { top: "80%", left: "20%" } },
  { name: "TailwindCSS", position: { top: "85%", left: "45%" } }
];

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-pink-500/10 to-blue-500/10 dark:from-violet-900/20 dark:via-pink-900/20 dark:to-blue-900/20" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m Athanase <span className="wave">👋</span>
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Développeur Web en apprentissage
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionné par la création de sites modernes et interactifs, je me forme au
            développement web pour dévenir développeur full stack. 
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="/CV AT.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-600/50 shadow-2xl shadow-violet-500/50">
              <Image
                src="/dev web.webp"
                alt="Athanase Ngaiporo"
                fill
                className="object-cover"
                priority
              />
            </div>

            {techIcons.map((icon, index) => (
              <motion.div
                key={icon.name}
                className="absolute w-12 h-12 bg-background border-2 border-violet-500/50 rounded-lg shadow-lg flex items-center justify-center text-xs font-semibold"
                style={icon.position}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                {icon.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .wave {
          animation: wave 2s infinite;
          display: inline-block;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
    </section>
  );
}
