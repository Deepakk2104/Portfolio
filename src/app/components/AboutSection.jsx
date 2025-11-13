"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

// SKILL BADGES
const SKILLS = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Firebase",
  "Git & GitHub",
  "Redux / Zustand",
  "HTML",
  "CSS",
  "UI/UX",
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-wrap gap-3"
      >
        {SKILLS.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-[#1e1e1e] border border-[#333] rounded-full text-sm text-gray-300 hover:bg-[#2a2a2a] transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="list-disc pl-2 space-y-1"
      >
        <li>Responsive Web Design – freeCodeCamp</li>
        <li>JavaScript Algorithms – freeCodeCamp</li>
        <li>Front End Development Libraries – freeCodeCamp</li>
      </motion.ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-16 items-center py-16 px-4 xl:px-16">
        {/* IMAGE WITH PREMIUM ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, 1.5, 0],
              scale: [1, 1.03, 1],
              x: [0, 5, 0],
              y: [0, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[350px] h-[350px] md:w-[420px] md:h-[420px]"
          >
            {/* Soft gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 to-blue-500/20 blur-3xl rounded-3xl"></div>

            <Image
              alt="about"
              src="/images/about-image.png"
              className="rounded-2xl shadow-[0_0_45px_rgba(0,0,0,0.35)] relative z-10"
              width={450}
              height={450}
            />
          </motion.div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:mt-0 flex flex-col"
        >
          <h2 className="text-4xl font-bold mb-4 relative w-fit">
            About Me
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="block h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mt-1 rounded-full"
            />
          </h2>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#C8D0D8]">
            I’m a frontend developer who loves creating clean, modern, and
            interactive digital experiences. I specialize in React, Next.js, and
            Tailwind, and I enjoy building fast, beautiful UIs with great user
            experience. I’m continuously learning, improving, and building
            better things every day.
          </p>

          {/* Tabs */}
          <div className="flex flex-row justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-6 text-[#D1D5DB] text-lg">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
