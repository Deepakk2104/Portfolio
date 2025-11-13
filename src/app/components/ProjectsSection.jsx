"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description:
        "A modern portfolio built with React, Tailwind & Framer Motion. Fully responsive and animated.",
      image: "/images/projects/1.png",
      gitUrl: "/",
      previewUrl: "/",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 2,
      title: "Photography Portfolio Website",
      description:
        "A clean, minimal photographer portfolio featuring galleries, animations & responsive layouts.",
      image: "/images/projects/2.png",
      gitUrl: "/",
      previewUrl: "/",
      tech: ["React", "CSS", "GSAP"],
    },
    {
      id: 3,
      title: "E-commerce Application (EliteCart)",
      description:
        "Full-featured React e-commerce app with cart system, product pages, filtering & Firebase backend.",
      image: "/images/projects/3.png",
      gitUrl: "/",
      previewUrl: "/",
      tech: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description:
        "Restaurant-style food ordering UI with categories, filters, cart interactions and animations.",
      image: "/images/projects/4.png",
      gitUrl: "/",
      previewUrl: "/",
      tech: ["React", "CSS", "Framer Motion"],
    },
    {
      id: 5,
      title: "React + Firebase Template",
      description:
        "Boilerplate with Auth, Firestore CRUD, protected routes & clean folder structure.",
      image: "/images/projects/5.png",
      gitUrl: "/",
      previewUrl: "/",
      tech: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 6,
      title: "Full-Stack Roadmap Guide",
      description:
        "A structured roadmap showing frontend, backend, devops & database paths for beginners.",
      image: "/images/projects/6.png",
      gitUrl: "/",
      previewUrl: "/",
      tech: ["Next.js", "Markdown", "Tailwind"],
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

      <ul ref={ref} className="grid md:grid-cols-3 gap-10">
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
