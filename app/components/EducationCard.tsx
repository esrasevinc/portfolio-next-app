'use client';

import React from 'react'
import educationPic from '../../public/images/education-pic.png'
import { motion } from 'framer-motion'
import Image from 'next/image'


type DetailsProp = {
    degree: string,
    university: string,
    universityLink: string,
    time: string,
    address: string,
    description: string
  }

  const Details = ( props : DetailsProp ) => {
    return <li className='flex flex-col w-[75%] items-start justify-between py-12'>
      <motion.div className='mt-1' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
        <h3 className='capitalize font-bold text-2xl dark:text-light'>{props.degree}&nbsp;<a href={props.universityLink} target='_blank' className='text-purple-800 dark:text-purple-300 capitalize'>@{props.university}</a></h3>
        <span className='capitalize font-medium text-gray-700 mt-1 dark:text-light'> {props.time} | {props.address} </span>
        <p className='font-medium w-full mt-1 dark:text-light'> {props.description} </p>
      </motion.div>
    </li>
  }

const EducationCard = () => {

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
    <div className='flex flex-col items-center min-h-[80vh] px-60 w-full'>
      <div className='pt-20'>
      <motion.h1 className='text-6xl text-center font-bold items-center' variants={quote} initial='initial' animate='animate'>
           <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>Education</span>
      </motion.h1>
      </div>
      <div className='flex lg:flex-col items-center justify-center w-full'>
      <div className='w-1/2 lg:hidden'>
        <Image 
        src={educationPic}
        alt='Education Pic'
        className='w-full h-auto'/>
      </div>

      <div className='pt-12 w-1/2 lg:w-full lg:justify-between lg:self-center'>
          <ul className='w-full flex flex-col items-center justify-between pb-12'>
            <Details 
            degree='Software Engineering'
            university='Istinye University'
            universityLink='https://istinye.edu.tr/tr'
            time='2019 - 2023'
            address='Istanbul, Turkey'
            description= 'Graduated as high honor student with the first rank and 3.66 GPA.'
            />
            <Details 
            degree='Management Information systems'
            university='Anadolu University'
            universityLink='https://www.anadolu.edu.tr/'
            time='2023 - Present'
            address='Istanbul, Turkey'
            description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda.'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
