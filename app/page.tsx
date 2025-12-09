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
import GitHubCalendar from 'react-github-calendar';

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
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-[80vh] px-6 md:px-16 lg:px-28 text-neutral-600 dark:text-light mt-12'>
        <div className='lg:w-1/2 w-full '>
            <motion.h1 className='text-xl md:text-2xl lg:text-6xl text-center font-bold items-center pb-2 lg:pb-4 pt-2 text-neutral-800 dark:text-light' variants={quote} initial="initial" animate="animate">
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
            Hi, I&apos;m a 25-year-old software engineer who loves turning ideas into elegant, functional digital experiences.
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
        <div className='relative lg:w-1/2 mt-2 w-[75%] h-[350px] lg:h-[600px] order-first lg:order-last items-center justify-between'>
            <Image 
            src={profilePic} 
            alt='Profile Picture' 
            fill
            priority
            quality={100}
            className='object-contain'/>
        </div>
        
        </div>
        <HireMe />

        <div className="w-full flex flex-col items-center justify-center mb-12 px-4 text-neutral-600 dark:text-light">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-neutral-400 to-neutral-800 text-transparent bg-clip-text dark:text-light mb-4">
          Days I Code
        </h2>
        <GitHubCalendar
          username="esrasevinc"
          blockSize={16}
          blockMargin={5}
          fontSize={16}
          colorScheme="light"
          theme={{
            light: ['#fce7f3', '#f9a8d4', '#f472b6', '#ec4899', '#be185d'],
            dark: ['#4c1d95', '#7e22ce', '#db2777', '#f472b6', '#fce7f3'],
          }}
        />
      </div>
    </>
  )
}
