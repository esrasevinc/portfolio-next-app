import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TransitionEffect from '../components/TransitionEffect';

const projects = [
  {
    title: 'Personal Portfolio',
    image: '/images/profile-pic.png',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects.',
    link: 'https://github.com/esrasevinc/portfolio-next-app',
  },
  {
    title: 'Weather App',
    image: '/images/experience-pic.png',
    description: 'A weather forecast app using React and OpenWeatherMap API, featuring real-time weather updates and a clean UI.',
    link: 'https://github.com/esrasevinc/weather-app',
  },
  {
    title: 'Education Platform',
    image: '/images/education-pic.png',
    description: 'A full-stack education platform for online courses, built with Node.js, Express, and MongoDB.',
    link: 'https://github.com/esrasevinc/education-platform',
  },
  {
    title: 'About Me Card',
    image: '/images/about-me.png',
    description: 'A reusable React component to display personal information in a card format with animation.',
    link: 'https://github.com/esrasevinc/about-me-card',
  },
];

const ProjectsPage = () => {
  return (
    <>
    <TransitionEffect />
    <div className="min-h-[80vh] w-full px-6 md:px-20 py-12 bg-transparent">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-light">My Projects</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProjectsPage;