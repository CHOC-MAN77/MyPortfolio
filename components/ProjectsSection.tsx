"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Painting Sales Website",
    description:
      "Application web pour la vente de peinture avec une interface simple et fluide.",
    image: "/painting website.png",
    tech: ["Next.js", "TypeScript","Tailwind CSS"],
    github: "https://github.com/CHOC-MAN77/Painting-sales-website.git",
    demo: "https://painting-sales-website-5rzz-mxle3tsb5-athanases-projects.vercel.app",
  },
  {
    title: "Contact Form",
    description:
      "Formulaire de contacte.",
    image: "/contactform.png",
    tech: ["React.js", "Tailwind CSS", "Sweetalert2", "Web3Forms", "Javascript"],
    github: "https://github.com/CHOC-MAN77/contact-form.git",
    demo: "https://contact-form-27b8ykwbn-athanases-projects.vercel.app",
  },
  {
    title: "User Interface Design",
    description:
      "Interface utilisateur",
    image: "/untitled-ui.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/CHOC-MAN77/Untitled-UI.git",
    demo: "https://untitled-ui-dun.vercel.app/",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
          Projets
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-violet-500/10 text-violet-600 dark:text-pink-500 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium hover:text-violet-600 dark:hover:text-pink-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-medium hover:text-violet-600 dark:hover:text-pink-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Démo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
