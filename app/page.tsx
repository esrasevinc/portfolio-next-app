'use client';

import Image from 'next/image'
import profilePic from '../public/images/profile-pic.png'
//import resume from '../public/dummy.pdf'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs"
import HireMe from './components/HireMe' 
import { motion } from 'framer-motion'
import TransitionEffect from './components/TransitionEffect';

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
        <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full lg:px-40 min-h-[80vh] px-12 xl:py-12 text-slate-900 dark:text-light mt-12'>
        <div className='lg:w-1/2 w-full '>
            <motion.h1 className='text-3xl md:text-4xl lg:text-6xl text-center font-bold items-center pb-2 lg:pb-4 pt-2' variants={quote} initial="initial" animate="animate">
              Hi there, I'm Esra! 
              <br />
              I'm a <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>software engineer.</span>
            </motion.h1>
            <motion.p className='text-sm md:text-lg text-start font-medium' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
            I'm a passionate and dedicated 22-year-old junior software engineer with a relentless drive to create innovative and efficient solutions in the digital realm. I thrive in the dynamic world of full-stack development, where my skills span across both front-end and back-end technologies.
            <br />
            <br />
            From a young age, my fascination with technology ignited a curiosity that evolved into a deep-seated passion for software engineering. I am constantly seeking new challenges and opportunities to push the boundaries of what is possible in the digital landscape.
            <br />
            <br />
            Thank you for stopping by!
            </motion.p>
            <div className='flex items-center justify-center md:justify-start mt-2 lg:mt-4 mb-6'>
              <Link 
              href='/' 
              target={'_blank'}
              className='flex items-center mt-6 border bg-purple-950 text-light hover:bg-purple-800 hover:text-light dark:bg-light dark:text-purple-900 rounded-xl text-sm md:text-lg font-semibold py-1.5 px-3 md:p-3 md:px-6'
              >Resume <BsBoxArrowUpRight className={'w-6 ml-1 font-extrabold'}/>
              </Link>
              <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className={`mt-6 bg-light text-purple-950 dark:bg-dark dark:text-light text-sm md:text-lg font-semibold ml-4 md:ml-6 underline underline-offset-4`}
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
