'use client';

import React from 'react'
import Image from 'next/image'
import aboutMePic from '../../public/images/about-me.png'
import { motion } from 'framer-motion'
import Link from 'next/link';
import TransitionEffect from '../components/TransitionEffect';
import AboutMeCard from '../components/AboutMeCard';
import Skills from '../components/Skills';
import { title } from 'process';
import { FaReact } from "react-icons/fa";

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
    <div className='flex flex-col items-center min-h-[80vh] justify-between px-80 w-full'>
      <div className='pt-20'>
      <motion.h1 className='text-6xl text-center font-bold items-center dark:text-light' variants={quote} initial='initial' animate='animate'>
              So, who <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>am i? </span>
      </motion.h1>
      
      
      </div>

      <div className='grid grid-cols-2 gap-6 pt-16'>
      <AboutMeCard 
      title='Engineering Degree'
      describtion='orem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vita'
      />
      <AboutMeCard 
      title='Engineering Degree'
      describtion='orem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vita'
      />
      <AboutMeCard 
      title='Engineering Degree'
      describtion='orem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vita orem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vita'
      />
      <AboutMeCard 
      title='Engineering Degree'
      describtion='orem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vita'
      />
      </div>

      <div className='flex flex-col items-center mt-28'>
        <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text text-5xl font-bold '>Skills and Technologies</span>
        <div className='grid grid-cols-6 gap-10 w-full pt-8'>
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light'/>}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light'/>}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light' />}
            title='React'
            />
            <Skills 
            icon={<FaReact className='w-16 h-16 dark:text-light'/>}
            title='React'
            />

        </div>
      </div>

      <div className='flex flex-col mt-16 items-center'>

        <p className='text-lg font-medium mt-12 text-dark dark:text-light'>Do you want to transform your ideas into digital reality?</p>
        <p className='text-lg font-medium text-dark dark:text-light'>I am here to help.</p>
        <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className='items-center px-6 py-2 mt-3 bg-purple-950 text-light dark:bg-light dark:hover:text-light dark:text-purple-900 hover:bg-purple-800 hover:text-light rounded-xl text-lg font-semibold border'
              >
                Contact Me
        </Link>
      
        <Image 
        src={aboutMePic}
        alt='About Me Picture'
        className='w-80 h-auto pb-16'
        />
      </div>
      
      
    </div>
    </>
  )
}

export default About
