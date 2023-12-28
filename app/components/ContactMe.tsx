'use client';

import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'

const ContactMe = () => {

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
    <div className='flex flex-col min-h-[80vh] px-80 items-center w-full'>
    <div className='pt-20'>
      <motion.h1 className='text-6xl text-center font-bold items-center' variants={quote} initial='initial' animate='animate'>
           Say <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>hello</span> to me!
      </motion.h1>
      </div>
      <div className='flex w-full items-center justify-between'>
        <div className='w-1/2'>
            <div className='flex flex-col w-[80%]'>
                <h5 className='text-2xl font-bold text-gray-900 pt-20'>Let's Connect!</h5>
                <motion.p className='font-medium text-gray-800 pt-4' initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusamus facere velit quia aspernatur eum quaerat ab alias voluptas corporis! Tempore perspiciatis numquam possimus sed ullam alias quibusdam esse quo!</motion.p>
                <div className='flex items-start gap-8 pt-4'>
                    <Link href='https://www.linkedin.com/in/esra-sevin%C3%A7-36436b224/' target={'_blank'}>
                        <FaLinkedinIn className='w-10 h-10 text-blue-700'/>
                    </Link>
                    <Link href='https://github.com/esrasevinc' target={'_blank'}>
                        <FaGithub className='w-10 h-10'/>
                    </Link>
                </div>
            </div>

        </div>
      
      <div className='w-1/2'>
        <form className='flex flex-col w-[80%] pt-32'>
            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-gray-900 font-medium text-base'>Your e-mail</label>
            <input 
            type='email' 
            id='email' 
            required
            placeholder='abcdefgh@gmail.com'
            className='bg-gray-50 border border-gray-500 px-2.5 py-1.5 rounded-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-gray-900 font-medium text-base'>Subject</label>
            <input 
            type='subject' 
            id='subject' 
            required
            placeholder='Just saying hi!'
            className='bg-gray-50 border border-gray-500 px-2.5 py-1.5 my-1.5 rounded-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-gray-900 font-medium text-base'>Message</label>
            <textarea 
            id='message' 
            required
            placeholder="Let's talk about..."
            className='bg-gray-50 border border-gray-500 px-2.5 py-1.5 my-1.5 rounded-lg'/>
            </div>

            <button 
            type='submit'
            className='bg-purple-950 hover:bg-purple-800 text-light font-medium rounded-lg py-2.5 px-5 w-full mb-6'
            >Send Message</button>

        </form>
      </div>
      </div>
    </div>
  )
}

export default ContactMe
