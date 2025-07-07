'use client';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TransitionEffect from '../components/TransitionEffect';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Beylikdüzü Hazır',
    image: '/images/project1.png',
    description: 'A modern web application built with Next.js to raise awareness and provide essential resources for disaster preparedness. Designed to inform, educate, and empower communities before emergencies strike.',
    link: 'https://hazir.beylikduzu.istanbul/',
  },
  {
    title: 'Beylikdüzü Belediyesi e-Bilet',
    image: '/images/project2.png',
    description: 'A seamless ticketing system for municipal events, allowing residents to browse, reserve, and attend local activities. Built to enhance public engagement through an intuitive, mobile-friendly interface.',
    link: 'https://bilet.beylikduzu.istanbul/',
  },
  {
    title: 'Yuvam Olur Musun',
    image: '/images/project3.png',
    description: 'A pet adoption platform developed with Next.js to connect loving homes with animals in need. Browse, apply, and bring home your new best friend — all in one place.',
    link: 'https://yuvamolurmusun.beylikduzu.istanbul/'
  },
  {
    title: 'Çevre Portalı',
    image: '/images/project4.png',
    description: 'A Next.js-powered platform showcasing eco-friendly projects, environmental news, and educational content. Promoting awareness and action for a more sustainable future.',
    link: 'https://beylikduzu-cevre-portali.vercel.app/',
  },
];

const ProjectsPage = () => {

  const quote = {
    initial: {
      opacity: 0.05
    },
    animate: {
      opacity:1,
      transition: {
        delay: 1
      }
    }
  }

  return (
    <>
    <TransitionEffect />
    <div className="flex flex-col items-center min-h-[80vh] px-6 md:px-16 lg:px-28 w-full">
    <div className='pt-8 lg:pt-16'>
      <motion.h1 className='text-4xl lg:text-5xl text-center font-bold items-center dark:text-light' variants={quote} initial='initial' animate='animate'>
           My <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text'>Projects</span>
      </motion.h1>
      <p className='mt-4 mb-6 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-sm md:text-base'>
        Here you can find a selection of my favorite projects, each crafted with care and a passion for building great digital experiences. Click on any project to learn more!
      </p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-6 lg:pb-12">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProjectsPage;