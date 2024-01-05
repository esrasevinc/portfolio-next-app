'use client';

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


const MotionLink = motion(Link);

const Logo = () => {

  return (
    <div className='flex items-center justify-center my-4'>
        <MotionLink 
        href='/' 
        className='md:w-14 md:h-14 w-12 h-12 bg-purple-900 text-light border-2 dark:bg-purple-900 dark:text-light border-purple-900 dark:border-light items-center flex justify-center rounded-full md:text-2xl text-lg font-bold'
        whileHover={{
            backgroundColor: ['rgb(88 28 135)', 'rgb(59 7 100)', 'rgb(216 180 254)', 'rgb(168 85 247)', 'rgb(126 34 206)', 'rgb(88 28 135)', 'rgb(15 23 42)', 'rgb(59 7 100)', 'rgb(88 28 135)'],
            transition:{duration: 2, repeat: Infinity}
        }} 
        > 
        ES
        </MotionLink>
    </div>
  )
}

export default Logo