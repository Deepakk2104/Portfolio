"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "EliteCart (E-commerce App)",
      description:
        "A modern e-commerce web app with cart, admin dashboard , and integrated payment gateway",
      image: "/images/projects/1.png",
      gitUrl: "https://github.com/Deepakk2104/EliteCart--E-commerce-Web",
      previewUrl: "https://elite-cart-e-commerce-web.vercel.app/",
      tech: ["React", "Tailwind", "Redux", "Payment API", "Firebase"],
    },
    {
      id: 2,
      title: "Zyncc (Real-time Chat App)",
      description:
        "A fast real-time chat app with private chats, typing indicators, and online status.",
      image: "/images/projects/2.png",
      gitUrl: "https://github.com/Deepakk2104/Zync",
      previewUrl: "https://zync-chi.vercel.app/login",
      tech: ["React", "Tailwind", "Firebase", "Firestore Auth"],
    },
    {
      id: 3,
      title: "Learnify (AI Course Generator)",
      description:
        "An AI tool that generates complete courses and lessons instantly",
      image: "/images/projects/3.png",
      gitUrl: "https://github.com/Deepakk2104/learnify",
      previewUrl: "https://learnify-sigma-two.vercel.app/",
      tech: ["React", "Firebase", "Tailwind", "Grok API"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern animated developer portfolio built with Next.js",
      image: "/images/projects/4.png",
      gitUrl: "https://github.com/Deepakk2104/Portfolio",
      previewUrl: "https://portfolio-orcin-eight-14.vercel.app/",
      tech: ["Next.js", "Tailwind", "Framer Motion", "Resend"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-10">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.25 }}
            whileHover={{ scale: 1.04 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
