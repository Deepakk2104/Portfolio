"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const techGroups = {
  all: "All Projects",
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI & ML",
};

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "RankPilot — AI SEO Analyzer",
      description:
        "A full-stack AI-powered SEO analyzer with website audits, keyword tracking, scan history, and AI-generated optimization reports.",
      image: "/images/projects/1.png",
      gitUrl: "https://github.com/Deepakk2104/rankpilot",
      previewUrl: "https://rankpilot-coral.vercel.app/",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
      category: "ai",
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
      category: "frontend",
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
      category: "ai",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern animated developer portfolio built with Next.js",
      image: "/images/projects/4.png",
      gitUrl: "https://github.com/Deepakk2104/Portfolio",
      previewUrl: "https://portfolio-orcin-eight-14.vercel.app/",
      tech: ["Next.js", "Tailwind", "Framer Motion", "Resend"],
      category: "frontend",
    },
  ];

  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-10">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        My Projects
      </h2>

      {/* Filter tabs */}
      <div className="text-center mb-8">
        {Object.keys(techGroups).map((key) => (
          <TabButton
            key={key}
            active={filter === key}
            onClick={() => setFilter(key)}
          >
            {techGroups[key]}
          </TabButton>
        ))}
      </div>

      <ul ref={ref} className="grid md:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
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
