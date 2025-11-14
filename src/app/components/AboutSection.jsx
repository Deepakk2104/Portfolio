"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

// SKILLS WITH LOGOS
const SKILLS = [
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
  { name: "JavaScript", icon: "/skills/js.svg" },
  { name: "TypeScript", icon: "/skills/ts.svg" },
  { name: "Firebase", icon: "/skills/firebase.svg" },
  { name: "Redux", icon: "/skills/redux.svg" },
  { name: "Bootstrap", icon: "/skills/bootstrap.png" },
  { name: "Git", icon: "/skills/git.svg" },
  { name: "GitHub", icon: "/skills/github.svg" },
  { name: "Framer Motion", icon: "/skills/framer.svg" },
  { name: "UI/UX", icon: "/skills/uiux.svg" },
  { name: "REST APIs", icon: "/skills/api.svg" },
  { name: "Vercel", icon: "/skills/vercel.svg" },
  { name: "Figma", icon: "/skills/figma.svg" },
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "CSS", icon: "/skills/css.svg" },
  { name: "SCSS", icon: "/skills/scss.svg" },
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
        {/* IMAGE SECTION */}
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
              x: [0, 6, 0],
              y: [0, -6, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[350px] h-[350px] md:w-[420px] md:h-[420px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 to-blue-500/20 blur-3xl rounded-3xl"></div>

            <Image
              alt="about"
              src="/images/about-image.png"
              className="rounded-2xl shadow-[0_0_45px_rgba(0,0,0,0.35)] relative z-10 object-cover"
              width={450}
              height={450}
            />
          </motion.div>
        </motion.div>

        {/* TEXT SECTION */}
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
            I’m a frontend developer specializing in building fast, modern, and
            visually polished web experiences. I work with React, Next.js,
            Tailwind, and Firebase to create clean, responsive, and user-first
            interfaces with smooth animations and strong attention to detail.
          </p>

          {/* TABS */}
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

          {/* TAB CONTENT */}
          <div className="mt-6 text-[#D1D5DB] text-lg">
            {/* SKILLS SECTION */}
            {tab === "skills" && (
              <div className="space-y-8 mt-6 select-none">
                {/* ROW 1 */}
                <div className="overflow-hidden w-full">
                  <motion.div
                    className="flex gap-6 items-center"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 35,
                      ease: "linear",
                    }}
                  >
                    {[...SKILLS, ...SKILLS].map((skill, i) => (
                      <span
                        key={i}
                        className="flex items-center justify-center gap-2 
                        px-6 py-2 flex-shrink-0 bg-white/10 backdrop-blur-xl
                        border border-white/20 shadow-lg rounded-full 
                        text-sm text-gray-200 whitespace-nowrap
                        hover:bg-white/20 hover:scale-105 transition-all"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* ROW 2 (reverse) */}
                <div className="overflow-hidden w-full">
                  <motion.div
                    className="flex gap-6 items-center"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 40,
                      ease: "linear",
                    }}
                  >
                    {[...SKILLS, ...SKILLS].map((skill, i) => (
                      <span
                        key={i}
                        className="flex items-center justify-center gap-2 
                        px-6 py-2 flex-shrink-0 bg-white/10 backdrop-blur-xl
                        border border-white/20 shadow-lg rounded-full 
                        text-sm text-gray-200 whitespace-nowrap
                        hover:bg-white/20 hover:scale-105 transition-all"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}

            {/* CERTIFICATIONS */}
            {tab === "certifications" && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="list-disc pl-2 space-y-1"
              >
                <li>Responsive Web Design – freeCodeCamp</li>
                <li>JavaScript Algorithms – freeCodeCamp</li>
                <li>Front End Development Libraries – freeCodeCamp</li>
              </motion.ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
