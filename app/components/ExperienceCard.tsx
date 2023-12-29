'use client';

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import experiencePic from '../../public/images/experience-pic.png'
import Image from 'next/image';

type DetailsProp = {
  position: string,
  company: string,
  companyLink: string,
  time: string,
  address: string,
  work: string
}

const Details = ( props : DetailsProp ) => {
  return <li className='flex flex-col first:mt-0 last:mb-0 w-[75%] items-start justify-between py-12'>
    <motion.div className='mt-1' initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
      <h3 className='capitalize font-bold text-2xl dark:text-light'>{props.position}&nbsp;<a href={props.companyLink} target='_blank' className='text-purple-800 dark:text-purple-300 capitalize'>@{props.company}</a></h3>
      <span className='capitalize font-medium text-gray-700 dark:text-light mt-1'> {props.time} | {props.address} </span>
      <p className='font-medium w-full mt-1 dark:text-light'> {props.work} </p>
    </motion.div>
  </li>
}

const ExperienceCard = () => {

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
    <div className='flex flex-col items-center min-h-[80vh] px-60 md:40 sm:20 w-full'>
      <div className='pt-20'>
      <motion.h1 className='text-6xl text-center font-bold items-center dark:text-light' variants={quote} initial='initial' animate='animate'>
           My <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>Experiences</span>
      </motion.h1>
      </div>
      <div className='flex lg:flex-col lg:justify-between items-center justify-center w-full'>
      <div className='w-1/2 lg:hidden'>
        <Image 
        src={experiencePic}
        alt='Experience Pic'
        className='w-[80%] h-auto'/>
      </div>

      <div className='pt-12 w-1/2 lg:w-full'>
          <ul className='w-full flex flex-col items-center justify-between pb-12'>
            <Details 
            position='Software Engineer'
            company='Beylikduzu Municipality'
            companyLink='https://www.beylikduzu.istanbul/'
            time='September 2023 - Present'
            address='Istanbul, Turkey'
            work= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda.'
            />
            <Details 
            position='Software Engineer'
            company='Beylikduzu Municipality'
            companyLink='https://www.beylikduzu.istanbul/'
            time='September 2023 - Present'
            address='Istanbul, Turkey'
            work= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda.'
            />
            <Details 
            position='Software Engineer'
            company='Beylikduzu Municipality'
            companyLink='https://www.beylikduzu.istanbul/'
            time='September 2023 - Present'
            address='Istanbul, Turkey'
            work= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda.'
            />
            <Details 
            position='Software Engineer'
            company='Beylikduzu Municipality'
            companyLink='https://www.beylikduzu.istanbul/'
            time='September 2023 - Present'
            address='Istanbul, Turkey'
            work= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda.'
            />

          <div className='hidden lg:inline-block'>
          <Image 
          src={experiencePic}
          alt='Experience Pic'
          className='w-[100%] h-auto self-center'/>
          </div>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
