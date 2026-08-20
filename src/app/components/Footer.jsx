import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer border-t border-gray-700 border-l-transparent border-r-transparent bg-gray-900">
      <div className="container flex flex-col md:flex-row justify-between items-center py-8">
        <span className="text-xl font-semibold text-white">
          Deepak Kumar
        </span>

        <nav className="flex gap-6 md:gap-8">
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition-colors text-sm"
            aria-label="About"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition-colors text-sm"
            aria-label="Projects"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition-colors text-sm"
            aria-label="Contact"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center py-4 border-t border-gray-800/30">
        <a
          href="https://github.com/Deepakk2104"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepakk2104/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a
          href="https://x.com/intent/post?text=Check out Deepak Kumar's portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter className="h-5 w-5" />
        </a>
      </div>

      <div className="py-2 text-center text-gray-500 text-xs">
        © {year} Deepak Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
