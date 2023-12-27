'use client';

import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile-pic.png'
import { motion } from 'framer-motion'

const About = () => {

  const quote = {
    initial: {
      opacity: 0.05
    },
    animate: {
      opacity:1,
      transition: {
        delay: 0.1
      }
    }
  }

  return (
    <>
    <div className='flex flex-col items-center min-h-[80vh] justify-center w-full'>
      <div className='h-1/2 pt-16'>
      <motion.h1 className='text-6xl font-bold items-center' variants={quote} initial='initial' animate='animate'>
              So, who am i? 
              <br />
              I'm a <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>software engineer.</span>
      </motion.h1>
      </div>
      <div className='h-1/2'>
        <Image 
        src={profilePic}
        alt='About Me Picture'
        className='w-full h-auto'
        />
      </div>
      
    </div>
    </>
  )
}

export default About
