"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <motion.div
            className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Je suis <span className="text-violet-600 dark:text-pink-500 font-semibold">Athanase Ngaiporo</span>,
              un jeune développeur web passionné par les technologies modernes, la cybersécurité et la blockchain.
            </p>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Diplômé en informatique de gestion, je me perfectionne dans le développement front-end et back-end
              pour créer des solutions web performantes, esthétiques et sécurisées.
            </p>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              Mon objectif est de devenir un expert en développement web tout en explorant les domaines
              passionnants de la blockchain et de la cybersécurité pour contribuer à des projets innovants
              et sécurisés.
            </p>

            <div className="flex justify-center">
              <a
                href="/AT CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Voir mon CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
