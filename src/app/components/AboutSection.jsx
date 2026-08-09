"use client";
import React, { useState, useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const SKILLS = [
  { name: "JavaScript", group: "lang" },
  { name: "TypeScript", group: "lang" },
  { name: "SQL", group: "lang" },
  { name: "React.js", group: "frontend" },
  { name: "Next.js", group: "frontend" },
  { name: "Redux Toolkit", group: "frontend" },
  { name: "Tailwind CSS", group: "frontend" },
  { name: "HTML5", group: "frontend" },
  { name: "CSS3", group: "frontend" },
  { name: "Node.js", group: "backend" },
  { name: "Express.js", group: "backend" },
  { name: "RESTful APIs", group: "backend" },
  { name: "PHP", group: "backend" },
  { name: "JWT Authentication", group: "backend" },
  { name: "PostgreSQL", group: "data" },
  { name: "MongoDB", group: "data" },
  { name: "MySQL", group: "data" },
  { name: "Firestore", group: "data" },
  { name: "Prisma ORM", group: "data" },
  { name: "Firebase", group: "cloud" },
  { name: "Vercel", group: "cloud" },
  { name: "Render", group: "cloud" },
  { name: "Neon", group: "cloud" },
  { name: "Stripe", group: "cloud" },
  { name: "Git", group: "tools" },
  { name: "GitHub", group: "tools" },
  { name: "Postman", group: "tools" },
  { name: "Vite", group: "tools" },
  { name: "Figma", group: "tools" },
  { name: "WordPress", group: "tools" },
  { name: "Divi", group: "tools" },
];

const GROUP_COLOR = {
  lang: "#818cf8",
  frontend: "#22d3ee",
  backend: "#34d399",
  data: "#fbbf24",
  cloud: "#f472b6",
  tools: "#a78bfa",
};

const GOLDEN_ANGLE = 137.50776405003785;

const seededRandom = (seed) => {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
};

// radius pulled in (rx/ry 40 instead of 46-48) so every node stays
// safely inside its 0-100% box — nothing clips at the container edge.
function buildLayout(skills) {
  const shuffled = [...skills]
    .map((s, i) => ({ ...s, sortKey: seededRandom(i + 7) }))
    .sort((a, b) => a.sortKey - b.sortKey);

  const total = shuffled.length;
  const nodes = shuffled.map((skill, i) => {
    const angle = i * GOLDEN_ANGLE * (Math.PI / 180);
    const radius = Math.sqrt(i / total);
    const rx = 42;
    const ry = 42;
    return {
      ...skill,
      x: 50 + radius * rx * Math.cos(angle),
      y: 50 + radius * ry * Math.sin(angle),
      radius,
    };
  });

  const edges = [];
  const seen = new Set();
  nodes.forEach((n, i) => {
    const dists = nodes
      .map((m, j) => ({
        j,
        d: i === j ? Infinity : Math.hypot(n.x - m.x, n.y - m.y),
      }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    dists.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    });
  });

  return { nodes, edges };
}

const SkillNode = ({ node, index, mouseX, mouseY, hovered, setHovered }) => {
  const depth = 0.5 + node.radius;
  const px = useTransform(mouseX, (v) => v * depth * 10);
  const py = useTransform(mouseY, (v) => v * depth * 10);

  const isDimmed = hovered !== null && hovered !== index;
  const scale = 1 - node.radius * 0.18;
  const color = GROUP_COLOR[node.group];

  return (
    <div
      className="absolute"
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
    >
      <motion.div style={{ x: px, y: py }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: isDimmed ? 0.3 : 1, scale }}
          viewport={{ once: true }}
          animate={{ y: [0, -6, 0, 5, 0] }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.5, delay: index * 0.012 },
            y: { duration: 5 + node.radius * 4, repeat: Infinity, ease: "easeInOut" },
          }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{ "--glow": color }}
          className="group relative flex items-center gap-1.5 whitespace-nowrap
          rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5
          text-[10px] sm:text-[11px] md:text-xs text-gray-200 backdrop-blur-sm cursor-default select-none
          transition-[border-color,background-color,box-shadow] duration-300
          hover:border-white/30 hover:bg-white/10 hover:text-white
          hover:shadow-[0_0_18px_var(--glow)]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
          />
          {node.name}
        </motion.div>
      </motion.div>
    </div>
  );
};

const SkillConstellation = () => {
  const { nodes, edges } = useMemo(() => buildLayout(SKILLS), []);
  const [hovered, setHovered] = useState(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(rawY, { stiffness: 60, damping: 20 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(nx);
    rawY.set(ny);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(null);
  };

  return (
    // overflow-hidden + relative box: constellation is fully contained,
    // nothing can spill into the text column next to it
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full aspect-square max-w-[880px] mx-auto overflow-hidden rounded-2xl"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(closest-side, rgba(129,140,248,0.10), rgba(244,114,182,0.05) 55%, transparent 75%)",
        }}
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        {edges.map(([i, j], k) => {
          const a = nodes[i];
          const b = nodes[j];
          const active = hovered === i || hovered === j;
          return (
            <line
              key={k}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke={active ? GROUP_COLOR[nodes[hovered].group] : "#ffffff"}
              strokeWidth={active ? 1.1 : 0.5}
              opacity={active ? 0.5 : 0.07}
              style={{ transition: "opacity 0.3s ease, stroke 0.3s ease" }}
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => (
        <SkillNode
          key={node.name}
          node={node}
          index={i}
          mouseX={mouseX}
          mouseY={mouseY}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="max-w-7xl mx-auto py-16 px-4 xl:px-0 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
        {/* LEFT — SKILL CONSTELLATION, fully contained */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <SkillConstellation />
        </motion.div>

        {/* RIGHT — ABOUT + EXPERIENCE, fully contained, own column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex flex-col"
        >
          <h2 className="text-4xl font-bold mb-4 relative w-fit">
            About Me
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="block h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mt-1 rounded-full"
            />
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-[#C8D0D8]">
            I'm Deepak, a Full Stack Developer with hands-on industry experience
            building production web applications. Skilled in React, Next.js,
            Node.js, Express.js, and Firebase, I focus on writing clean, scalable
            code that performs as well as it looks. From RESTful APIs to
            pixel-perfect, responsive interfaces, I care about the details that
            make a product feel fast, reliable, and genuinely enjoyable to use —
            and I'm always exploring new tools to sharpen that craft further.
          </p>

          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-widest text-primary-400 font-semibold mb-4">
              Experience
            </h3>

            <div className="relative pl-5 border-l border-white/10">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary-500 shadow-[0_0_10px_theme(colors.primary.500)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h4 className="text-white font-semibold">Frontend Developer Intern</h4>
                <span className="text-xs text-gray-400 whitespace-nowrap">Apr 2026 – Jul 2026</span>
              </div>
              <p className="text-sm text-primary-300 mb-3">Spearmint Technologies, Noida</p>

              <ul className="list-disc pl-5 space-y-1.5 text-[#D1D5DB] text-[15px] leading-relaxed">
                <li>Developed and maintained 8+ production client websites using React, Next.js, WordPress, and Divi.</li>
                <li>Optimized website performance through lazy loading, image optimization, and frontend improvements.</li>
                <li>Built responsive, reusable UI components and integrated REST APIs.</li>
                <li>Collaborated with cross-functional teams to deliver production-ready features and resolve issues.</li>
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["React", "Next.js", "JavaScript", "Tailwind CSS", "WordPress", "Divi", "Git"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;