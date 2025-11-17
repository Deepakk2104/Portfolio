"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Deepak Kumar",
                1000,
                "Web Developer",
                1000,
                "Frontend Dev",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Transforming ideas into smooth, interactive web experiences
          </p>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 
              bg-gradient-to-br from-primary-500 to-secondary-500 
              hover:bg-slate-200 text-white transition"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/1dey1C408v2LHCjyQx_hK_xQY-_sTtzpt/view?usp=drive_link"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full 
              bg-gradient-to-br from-primary-500 to-secondary-500 
              hover:bg-slate-800 text-white mt-3 transition"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FLOATING IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
          >
            {/* Glow Behind Image */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600 opacity-20"></div>

            {/* Hero Image */}
            <Image
              src="/images/hero-image.svg"
              alt="hero image"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]"
              width={450}
              height={450}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
