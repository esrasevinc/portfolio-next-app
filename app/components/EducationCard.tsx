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
    return <li className='flex flex-col items-center justify-between py-6 md:py-12 text-start'>
      <motion.div className='mt-1' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
        <h3 className='capitalize font-bold text-xl md:text-2xl dark:text-light text-neutral-800'>{props.degree}&nbsp;<a href={props.universityLink} target='_blank' className='text-pink-300 hover:text-pink-400 transition-all duration-300 capitalize'>@{props.university}</a></h3>
        <span className='capitalize font-medium text-pink-500 dark:text-pink-200 mt-1 text-sm md:text-base'> {props.time} | {props.address} </span>
        {props.description.split("\n").map((str) => (
        <p key={props.degree} className='font-medium w-full mt-1 text-sm md:text-base dark:text-light text-neutral-500 text-justify leading-relaxed"'>{str}</p>
        ))}

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
    <div className='flex flex-col items-center min-h-[80vh] px-6 md:px-16 lg:px-28 w-full'>
      <div className='pt-8 md:pt-16'>
      <motion.h1 className='text-4xl lg:text-5xl text-center font-bold items-center' variants={quote} initial='initial' animate='animate'>
           <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text'>Education</span>
      </motion.h1>
      <p className='mt-4 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-sm md:text-base'>
      Here's a look at my academic journey — the foundations that shaped my skills and passion for software development. Each step reflects curiosity, dedication, and a love for learning.
      </p>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-center w-full mt-6'>
      <div className='lg:w-1/2'>
        <Image 
        src={educationPic}
        alt='Education Pic'
        className='w-full h-auto'/>
      </div>
      <div className='lg:w-1/2'>


            <Details 
            degree='Software Engineering'
            university='Istinye University'
            universityLink='https://istinye.edu.tr/tr'
            time='2019 - 2023'
            address='Istanbul, Turkey'
            description= {'✨ Graduated as high honor student with 3.66 GPA and the 1st rank within over 80 students.\n✨ Relevant courses included Advanced Programming, Data Structures and Algorithms, Visual Programming, Database Systems, Object Oriented Programming, Data Analysis, Mobile Application Design and Development, Machine Learning and Deep Learning etc.\n✨ Thesis Subject: Face Mask Detection Using Vision Transformers.'}
            />
            </div>

      </div>
    </div>
  )
}

export default EducationCard
