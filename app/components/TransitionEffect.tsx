'use client';

import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-pink-200 dark:bg-purple-100'
      initial={{x:'100%', width:'100%'}}
      animate={{x:'0%', width:'0%'}}
      transition={{duration:0.5, ease:'easeInOut'}}
      />

    <motion.div className='fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-pink-100 dark:bg-purple-200' 
      initial={{x:'100%', width:'100%'}}
      animate={{x:'0%', width:'0%'}}
      transition={{delay:0.2, duration:0.5, ease:'easeInOut'}}
      />

    <motion.div className='fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-light dark:bg-dark'
      initial={{x:'100%', width:'100%'}}
      animate={{x:'0%', width:'0%'}}
      transition={{delay:0.2, duration:0.5, ease:'easeInOut'}}
      />
    </>
  )
}

export default TransitionEffect
