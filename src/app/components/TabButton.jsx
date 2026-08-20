import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, onClick, children }) => {
  const buttonClasses = active
    ? "text-white bg-primary-600/30"
    : "text-[#ADB7BE] hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${buttonClasses}`}
    >
      <span>{children}</span>
      <motion.div
        className="h-0.5 w-3 bg-primary-500 rounded-full mt-1.5 transition-all duration-300"
      ></motion.div>
    </button>
  );
};

export default TabButton;
