'use client';

import Image from 'next/image'
import profilePic from '../public/images/profile-pic.png'
//import resume from '../public/dummy.pdf'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs"
import HireMe from './components/HireMe' 
import { motion } from 'framer-motion'

export default function Home() {

  const quote = {
    initial: {
      opacity: 0.05
    },
    animate: {
      opacity:1,
      transition: {
        delay: 0.5
      }
    }
  }

  return (
    <>
        <div className='flex items-center w-full justify-between px-60 h-[80vh] xl:px-40 lg:px-28 md:px-20 sm:px-12 text-slate-900 dark:text-light'>
        <div className='w-1/2 lg:w-full lg:flex-col lg:text-center'>
            <motion.h1 className='text-6xl xl:text-5xl lg:text-4xl lg:text-center md:text-3xl sm:text-2xl font-bold items-center' variants={quote} initial="initial" animate="animate">
              Hi there, I'm Esra! 
              <br />
              I'm a <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>software engineer.</span>
            </motion.h1>
            <motion.p className='text-lg font-medium mt-4 md:mt-2 lg:text-sm sm:text-xs' initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
                I am a junior software engineer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non nostrum minima ipsam quasi, aspernatur repellendus rem voluptatum, sapiente aliquam tempore? Alias quasi earum minima mollitia modi aliquid, expedita inventore.
            </motion.p>
            <div className='flex items-center lg:self-center md:self-center'>
              <Link 
              href='/' 
              target={'_blank'}
              className='flex items-center mt-6 border bg-purple-950 text-light hover:bg-purple-800 hover:text-light dark:bg-light dark:text-purple-900 rounded-xl text-lg font-semibold  p-3 px-6'
              >Resume <BsBoxArrowUpRight className={'w-6 ml-1 font-extrabold'}/>
              </Link>
              <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className='mt-4 bg-light text-purple-950 dark:bg-dark dark:text-light text-lg font-semibold ml-6 underline underline-offset-4'
              >Contact Me</Link>
            </div>
        </div>
        <div className='w-1/2 lg:hidden md:inline-block md:w-full items-center justify-between'>
            <Image src={profilePic} alt='Profile Picture' className='w-[100%] h-auto'/>
        </div>
        </div>
        <HireMe />
    
    </>
  )
}
