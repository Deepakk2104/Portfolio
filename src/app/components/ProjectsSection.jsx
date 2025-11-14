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
