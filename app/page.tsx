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
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full lg:px-40 min-h-[80vh] px-12 xl:py-12 text-neutral-600 dark:text-light mt-12'>
        <div className='lg:w-1/2 w-full '>
            <motion.h1 className='text-3xl md:text-4xl lg:text-6xl text-center font-bold items-center pb-2 lg:pb-4 pt-2 text-neutral-800 dark:text-light' variants={quote} initial="initial" animate="animate">
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
            <motion.p className='text-sm md:text-lg text-start font-medium' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
            I&apos;m a passionate and dedicated 24-year-old software engineer with a relentless drive to create innovative and efficient solutions in the digital realm. I thrive in the dynamic world of full-stack development, where my skills span across both front-end and back-end technologies.
            <br />
            <br />
            From a young age, my fascination with technology ignited a curiosity that evolved into a deep-seated passion for software engineering. I am constantly seeking new challenges and opportunities to push the boundaries of what is possible in the digital landscape.
            <br />
            <br />
            Thank you for stopping by!
            </motion.p>
            <div className='flex z-30 items-center justify-center md:justify-start mt-6 mb-6'>
              <Link 
              href='https://www.linkedin.com/in/esra-sevin%C3%A7-36436b224/' 
              target={'_blank'}
              className='flex items-center border bg-pink-300 text-light hover:bg-pink-400 transition-all duration-300 hover:text-light dark:bg-light dark:text-purple-900 rounded-xl text-sm md:text-lg font-semibold py-1.5 px-3 md:py-3 md:px-6'
              >
              Resume
               <BsBoxArrowUpRight className={'w-6 ml-1 font-extrabold'}/>
              </Link>
              <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className='text-pink-400 hover:text-pink-300 transition-all duration-300 dark:bg-dark dark:text-light text-sm md:text-lg font-semibold ml-4 md:ml-6'
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
