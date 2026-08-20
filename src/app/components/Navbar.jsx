"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-colors ${scrolled ? "bg-background/70 border-b border-border backdrop-blur-md" : "bg-transparent"}`}
      onScroll={() => setScrolled(window.scrollY > 100)}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center gap-2 text-foreground font-semibold tracking-wider"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Deepak Kumar
        </Link>

        {/* Centered Links (Desktop) */}
        <div className="hidden md:flex justify-center flex-1">
          <ul className="flex space-x-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border border-border rounded text-muted hover:text-foreground hover:border-foreground"
              aria-label="Open menu"
              aria-expanded={navbarOpen}
              aria-controls="mobile-menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-rounded text-muted hover:text-foreground hover:border-foreground"
              aria-label="Close menu"
              aria-expanded={navbarOpen}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
