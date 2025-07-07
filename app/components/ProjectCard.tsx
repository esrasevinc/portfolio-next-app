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
    <div className="bg-white dark:bg-dark rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col">
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-light">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{description}</p>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-block mt-auto px-4 py-2 bg-purple-700 text-light rounded-lg font-semibold hover:bg-purple-900 transition-colors duration-200 text-center"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 