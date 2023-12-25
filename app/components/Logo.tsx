'use client';

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


const MotionLink = motion(Link);

const Logo = () => {

  return (
    <div className='flex items-center justify-center mt-4'>
        <MotionLink 
        href='/' 
        className='w-16 h-16 bg-purple-900 text-light items-center flex justify-center rounded-full text-2xl font-bold'
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