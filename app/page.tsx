'use client';

import Image from 'next/image'
import profilePic from '../public/images/profile-pic.png'
//import resume from '../public/dummy.pdf'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs"
import HireMe from './components/HireMe' 
import { motion } from 'framer-motion'
import TransitionEffect from './components/TransitionEffect';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {

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
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-[80vh] px-6 md:px-16 lg:px-28 xl:py-12 text-neutral-600 dark:text-light mt-12'>
        <div className='lg:w-1/2 w-full '>
            <motion.h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold items-center pb-2 lg:pb-4 pt-2 text-neutral-800 dark:text-light' variants={quote} initial="initial" animate="animate">
              Hi, I'm Esra 💗
              <br />
              I'm a <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text'>
                <Typewriter
            words={['software engineer', 'full-stack developer', 'code lover', 'problem solver', 'passionate engineer']}
            loop={0}
            cursor
            cursorBlinking
            
          /></span>
            </motion.h1>
            <motion.p className='text-sm md:text-lg text-justify leading-relaxed' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
            Hi, I&apos;m a 24-year-old software engineer who loves turning ideas into elegant, functional digital experiences.
            <br />
            <br />
            I specialize in full-stack development — building smooth, responsive interfaces on the front end and robust systems on the back end.
            <br />
            <br />
            What started as a childhood curiosity about how things work has grown into a lifelong passion for building things that matter. I&apos;m always exploring, learning, and pushing myself to do better with every line of code.
            <br />
            <br />
            Thank you for stopping by!
            </motion.p>
            <div className='flex z-30 items-center justify-around md:justify-start my-6'>
              <Link 
              href='https://www.linkedin.com/in/esra-sevin%C3%A7-36436b224/' 
              target={'_blank'}
              className='flex items-center bg-pink-300 text-light hover:bg-pink-400 transition-all duration-300 hover:text-light dark:bg-pink-100 dark:text-pink-400 dark:hover:bg-pink-200  dark:hover:text-pink-500 rounded-xl text-sm md:text-lg font-semibold py-1.5 px-3 md:py-3 md:px-6'
              >
              Resume
               <BsBoxArrowUpRight className={'w-6 ml-1 font-extrabold'}/>
              </Link>
              <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className='text-pink-400 hover:text-pink-300 transition-all duration-300 dark:text-pink-00 text-sm md:text-lg font-semibold ml-4 md:ml-6'
              >Contact Me</Link>
              
            </div>
        </div>
        <div className='lg:w-1/2 mt-2 w-[75%] order-first lg:order-last items-center justify-between'>
            <Image src={profilePic} alt='Profile Picture' className='w-full h-auto'/>
        </div>
        </div>
        <HireMe />
    </>
  )
}
