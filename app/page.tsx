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
        <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full px-60 min-h-[80vh] xl:px-40 xl:py-12 lg:px-28 md:px-20 sm:px-12 text-slate-900 dark:text-light'>
        <div className='lg:w-1/2 w-full '>
            <motion.h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold items-center pb-2 lg:pb-4' variants={quote} initial="initial" animate="animate">
              Hi there, I'm Esra! 
              <br />
              I'm a <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>software engineer.</span>
            </motion.h1>
            <motion.p className='text-sm md:text-lg text-center md:text-start font-medium' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
                I am a junior software engineer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non nostrum minima ipsam quasi, aspernatur repellendus rem voluptatum, sapiente aliquam tempore? Alias quasi earum minima mollitia modi aliquid, expedita inventore.
            </motion.p>
            <div className='flex items-center justify-center md:justify-start mt-2 lg:mt-4'>
              <Link 
              href='/' 
              target={'_blank'}
              className='flex items-center mt-6 border bg-purple-950 text-light hover:bg-purple-800 hover:text-light dark:bg-light dark:text-purple-900 rounded-xl text-lg font-semibold  p-3 px-6'
              >Resume <BsBoxArrowUpRight className={'w-6 ml-1 font-extrabold'}/>
              </Link>
              <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className={`mt-4 bg-light text-purple-950 dark:bg-dark dark:text-light text-lg font-semibold ml-6 underline underline-offset-4`}
              >Contact Me</Link>
            </div>
        </div>
        <div className='lg:w-1/2 w-full order-first lg:order-last items-center justify-between'>
            <Image src={profilePic} alt='Profile Picture' className='w-full h-auto'/>
        </div>
        </div>
        <HireMe />
    </>
  )
}
