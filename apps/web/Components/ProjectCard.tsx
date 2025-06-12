"use client";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  level: string;
  title: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean; // ✅ Optional reverse prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  level,
  title,
  description,
  image,
  href,
  reverse = false,
}) => {
  return (
    <div className="rounded-xl p-2 pb-4 transition ease-in-out duration-200  relative overflow-hidden group">
      <a href={href}>
        <div
          className={`flex flex-col md:flex-row items-center gap-6 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="md:w-6/12">
            <Image
              src={image}
              width={800}
              height={450}
              alt={`${title} Preview`}
              className="w-full object-cover overflow-hidden rounded-lg aspect-[16/9]"
            />
          </div>

          {/* Text */}
          <div className="md:w-6/12 mt-3 p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs">{level}</span>
            </div>
            <h3 className="font-semibold text-xl text-black mt-4">{title}</h3>
            <p className="text-black mt-2 text-sm">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
