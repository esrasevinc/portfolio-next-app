import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, description, link }) => {
  return (
    <div className="group bg-white/90 dark:bg-black/40 dark:backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative">
      <div className="relative w-full h-48 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 brightness-75"
          quality={90}
          priority={false}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      </div>
      <div className="flex-1 flex flex-col p-3 md:p-6 gap-1 md:gap-3">
        <h3 className="text-lg md:text-xl font-extrabold text-neutral-700 dark:text-white mb-1 leading-tight">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-200 text-sm md:text-base flex-1">{description}</p>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="mt-2 inline-block px-5 py-2 rounded-xl bg-pink-400 text-white font-semibold shadow hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition-all duration-200 text-center"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 