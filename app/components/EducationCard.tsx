j'use client';

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
    return <li className='flex flex-col w-[75%] items-center justify-between py-12 text-start'>
      <motion.div className='mt-1' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
        <h3 className='capitalize font-bold text-xl md:text-2xl dark:text-light'>{props.degree}&nbsp;<a href={props.universityLink} target='_blank' className='text-purple-800 dark:text-purple-300 capitalize'>@{props.university}</a></h3>
        <span className='capitalize font-medium text-gray-700 mt-1  dark:text-light'> {props.time} | {props.address} </span>
        {props.description.split("\n").map((str) => (
        <p key={props.degree} className='font-medium w-full mt-1 text-sm md:text-base dark:text-light'>{str}</p>
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
    <div className='flex flex-col items-center min-h-[80vh] lg:px-40 w-full'>
      <div className='pt-12 lg:pt-20'>
      <motion.h1 className='text-4xl lg:text-5xl text-center font-bold items-center' variants={quote} initial='initial' animate='animate'>
           <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>Education</span>
      </motion.h1>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:justify-center lg:w-full mt-6'>
      <div className='lg:w-1/2'>
        <Image 
        src={educationPic}
        alt='Education Pic'
        className='w-full h-auto'/>
      </div>

      <div className='pt-6 lg:pt-0 lg:w-1/2 w-full'>
          <ul className='w-full flex flex-col items-center justify-between pb-6 lg:pb-12'>
            <Details 
            degree='Software Engineering'
            university='Istinye University'
            universityLink='https://istinye.edu.tr/tr'
            time='2019 - 2023'
            address='Istanbul, Turkey'
            description= {'- Graduated as high honor student with 3.66 GPA and the 1st rank within over 80 students.\n- Relevant courses included Advanced Programming, Data Structures and Algorithms, Visual Programming, Database Systems, Object Oriented Programming, Data Analysis, Mobile Application Design and Development, Machine Learning and Deep Learning etc.\n- Thesis Subject: Face Mask Detection Using Vision Transformers.'}
            />
            <Details 
            degree='Management Information systems'
            university='Anadolu University'
            universityLink='https://www.anadolu.edu.tr/'
            time='2023 - Present'
            address='Istanbul, Turkey'
            description= {'- 1st year student still attending.\n- Includes courses such as Database Management Systems, Systems Analysis and Design, Business Intelligence and Analytics, Enterprise Resource Planning (ERP) Systems, Project Management in Information Systems, IT Ethics and Professionalism etc.'}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
