"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 min-h-[70vh] flex items-center bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold text-foreground mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-foreground">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Deepak Kumar",
                1000,
                "Full Stack Dev",
                1000,
                "Software Engineer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg mb-6 lg:text-xl">
            Transforming ideas into smooth, interactive web experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground hover:bg-opacity-90 transition"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/1YO9CbqRyPAWd3qk-T0Oe8FCfKs6btnz4/view?usp=drive_link"
              className="px-6 py-3 rounded-full bg-card border border-border hover:bg-opacity-80 transition"
            >
              <span className="block bg-background rounded-full px-5 py-2">Download CV</span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FEATURED IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative self-center"
        >
          {/* Glow Orbs */}
          <div className="absolute -inset-2 rounded-2xl opacity-5 rotate-175 blur-3xl bg-accent/20 animation-pulse-slow" />
          <div className="absolute -inset-2 rounded-2xl opacity-5 rotate--175 blur-3xl bg-accent-foreground/20 animation-pulse-slow" />

          {/* Hero Image */}
          <Image
            src="/images/hero-image.svg"
            alt="Deepak Kumar - Full Stack Developer"
            className="w-full max-w-lg mx-auto rounded-3xl drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
