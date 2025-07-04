'use client';

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
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
  return <li className='flex flex-col first:mt-0 last:mb-0 w-[75%] items-start justify-between py-8'>
    <motion.div className='mt-1' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
      <h3 className='capitalize font-bold text-xl md:text-2xl dark:text-light text-neutral-800'>{props.position}&nbsp;<a href={props.companyLink} target='_blank' className='text-pink-300 capitalize hover:text-pink-400 transition-all duration-300'>@{props.company}</a></h3>
      <span className='capitalize font-medium text-neutral-700 dark:text-light mt-1'> {props.time} | {props.address} </span>
      {props.work.split("\n").map((str) => (
        <p key={props.position} className='font-medium w-full mt-1 text-sm md:text-base dark:text-light text-neutral-500'>{str}</p>
        ))}
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
        delay: 1
      }
    }
  }


  return (
    <div className='flex flex-col items-center min-h-[80vh] lg:px-40 w-full'>
      <div className='pt-12 lg:pt-20'>
      <motion.h1 className='text-4xl lg:text-5xl text-center font-bold items-center dark:text-light' variants={quote} initial='initial' animate='animate'>
           My <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text'>Experiences</span>
      </motion.h1>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:justify-center lg:w-full'>

      <div className='lg:w-1/2'>
        <Image 
        src={experiencePic}
        alt='Experience Pic'
        className='w-full h-auto'/>
      </div>

      <div className='pt-6 lg:pt-12 lg:w-1/2 w-full'>
          <ul className='w-full flex flex-col items-center justify-between pb-6 lg:pb-12'>
            <Details 
            position='Junior Software Engineer'
            company='Beylikduzu Municipality'
            companyLink='https://www.beylikduzu.istanbul/'
            time='September 2023 - Present'
            address='Istanbul, Turkey'
            work= {'✨ Gained hands-on experience in full-stack development, honing skills in both front-end and back-end technologies.\n✨ Assisted in the design and implementation of database solutions, optimizing data storage and retrieval processes.\n✨ Collaborated with team members to troubleshoot and resolve issues, ensuring the smooth functioning of applications.'}
            />
            <Details 
            position='Junior Software Developer'
            company='Istinye University'
            companyLink='https://istinye.edu.tr/tr'
            time='March 2023 - June 2023'
            address='Istanbul, Turkey'
            work= {'✨ Developed backend functionalities using .NET Core, contributing to the overall architecture of web applications.\n✨ Worked closely with the database team to design, implement, and maintain MSSQL databases, ensuring data consistency and performance.\n✨ Assisted in troubleshooting and resolving technical issues, contributing to the overall improvement of application stability.'}
            />
            <Details 
            position='AI Software Engineer Intern'
            company='Etiya'
            companyLink='https://www.etiya.com/tr'
            time='July 2022 - September 2022'
            address='Istanbul, Turkey'
            work= {'✨ Worked closely with the AI research and development team on projects involving deep learning, NLP, and transformers.\n✨ Collaborated in the design and implementation of AI models, contributing to the advancement of the company product offerings.\n✨ Conducted literature reviews and stayed informed about the latest research trends in deep learning and NLP.\n✨ Participated in team discussions, providing valuable insights and feedback during the development lifecycle.'}
            />
            <Details 
            position='Software Engineer Intern'
            company='MLPCARE'
            companyLink='https://www.mlpcare.com/'
            time='February 2022 - June 2022'
            address='Istanbul, Turkey'
            work= {'✨ Worked closely with the backend development team to design, implement, and maintain .NET-based applications supporting healthcare operations.\n✨ Collaborated with senior developers to enhance the scalability and responsiveness of existing MVC applications, improving overall system efficiency.\n✨ Assisted in database design and management tasks, ensuring the secure and efficient storage of healthcare data.'}
            />
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
