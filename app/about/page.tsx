'use client';

import React from 'react'
import Image from 'next/image'
import aboutMePic from '../../public/images/about-me.png'
import { motion } from 'framer-motion'
import Link from 'next/link';
import TransitionEffect from '../components/TransitionEffect';
import AboutMeCard from '../components/AboutMeCard';
import Skills from '../components/Skills';
import { FaReact } from "react-icons/fa";
import { SiDotnet, SiPostgresql, SiPostman } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {

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
    <div className='flex flex-col items-center min-h-[80vh] justify-between px-6 md:px-16 lg:px-28 w-full'>
      <div className='pt-8 md:pt-16'>
      <motion.h1 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold items-center dark:text-light text-neutral-800' variants={quote} initial='initial' animate='animate'>
              So, who <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text'>am i? </span>
      </motion.h1>
      <p className='mt-4 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-sm md:text-base'>
      Passionate about code, curious about everything 🌸
      </p>
      </div>

      <div className='grid lg:grid-cols-2 gap-3 md:gap-6 pt-2 md:pt-6'>
      <AboutMeCard 
      title='Problem Solver'
      describtion='I see each project as an opportunity to solve real-world problems through code. My analytical mindset and attention to detail enable me to identify challenges and devise elegant solutions. I am not just a coder; I am a problem solver who relishes in the process of turning complex issues into streamlined, user-friendly experiences.'
      />
      <AboutMeCard 
      title='Continuous Learner'
      describtion='The tech landscape is ever-evolving, and I am committed to staying at the forefront of emerging trends and technologies. My insatiable appetite for learning drives me to explore new frameworks, tools, and methodologies, ensuring that my skill set remains sharp and relevant.'
      />
      <AboutMeCard 
      title='Collaborative Spirit'
      describtion='I thrive in collaborative environments where diverse perspectives converge to create something greater than the sum of its parts. I actively seek feedback, value open communication, and enjoy working alongside fellow enthusiasts who share my passion for innovation.'
      />
      <AboutMeCard 
      title='Beyond Code'
      describtion='While my heart lies in coding, I am not just confined to the screen. I understand the importance of balancing technical expertise with effective communication and project management skills. This holistic approach allows me to contribute to projects from conception to delivery seamlessly.'
      />
      </div>

      <div className='flex flex-col items-center mt-6 md:mt-14'>
        <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text text-3xl md:text-4xl lg:text-6xl text-center font-bold '>Skills and Technologies</span>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-10 w-full pt-4 md:pt-8'>
            <Skills 
            icon={<FaReact className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<SiDotnet className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='Microsoft .Net'
            />
            <Skills 
            icon={<SiNextdotjs className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='Next.js'
            />
            <Skills 
            icon={<SiPython className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='Python'
            />
            <Skills 
            icon={<SiJavascript className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='JavaScript'
            />
            <Skills 
            icon={<SiTypescript className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='TypeScript'
            />
            <Skills 
            icon={<FaHtml5 className='w-14 h-14 md:w-16 md:h-16 dark:text-light'/>}
            title='HTML'
            />
            <Skills 
            icon={<SiTailwindcss className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='Tailwind CSS'
            />
            <Skills 
            icon={<SiPostman className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='Postman'
            />
            <Skills 
            icon={<SiMicrosoftsqlserver className='w-14 h-14 md:w-16 md:h-16 dark:text-light'/>}
            title='MSSQL'
            />
            <Skills 
            icon={<TbBrandReactNative className='w-14 h-14 md:w-16 md:h-16 dark:text-light' />}
            title='React Native'
            />
            <Skills 
            icon={<SiPostgresql className='w-14 h-14 md:w-16 md:h-16 dark:text-light'/>}
            title='PostgreSQL'
            />

        </div>
      </div>

      <div className='flex flex-col mt-6 md:mt-14 items-center text-center'>
        <p className='text-lg md:text-lg font-medium  text-neutral-600 dark:text-light'>Do you want to transform your ideas into digital <span className='text-pink-400 dark:text-pink-300'>reality?</span></p>
        <p className='text-lg md:text-lg font-medium text-neutral-600 dark:text-light'>I am here to help!</p>

        <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className='items-center px-3 py-1 md:px-6 md:py-2 mt-3 dark:bg-pink-100 dark:text-pink-400 dark:hover:bg-pink-200  dark:hover:text-pink-500 bg-pink-300 hover:scale-105 transition-all duration-300 text-light hover:text-light rounded-xl text-base md:text-lg font-semibold'
              >
                Contact Me
        </Link>
      
        <Image 
        src={aboutMePic}
        alt='About Me Picture'
        className='w-42 h-auto pb-8'
        priority
        />
      </div>
      
      
    </div>
    </>
  )
}

export default About
