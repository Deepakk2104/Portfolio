import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech,
}) => {
  return (
    <div className="group bg-[#181818] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div
        className="h-52 md:h-72 relative"
        style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-all duration-300"
          >
            <CodeBracketIcon className="h-7 w-7 text-[#ADB7BE] group-hover:text-white" />
          </Link>

          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-all duration-300"
          >
            <EyeIcon className="h-7 w-7 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="text-white p-5">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-[#222] text-[#ADB7BE] rounded-full border border-[#333]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
