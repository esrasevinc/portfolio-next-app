'use client';

import React from 'react'
import Image from 'next/image'
import aboutMePic from '../../public/images/about-me.png'
import { motion } from 'framer-motion'
import Link from 'next/link';

const About = () => {

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
    <div className='flex flex-col items-center min-h-[80vh] justify-between px-80 w-full'>
      <div className='pt-20'>
      <motion.h1 className='text-6xl text-center font-bold items-center' variants={quote} initial='initial' animate='animate'>
              So, who <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>am i? </span>
      </motion.h1>
      <motion.div className='text-gray-800' initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
      <p className='text-lg font-medium mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda fuga eum officia veniam eos repellendus placeat magnam alias dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos natus dicta dignissimos facilis? Odio voluptas omnis commodi vero excepturi magnam laboriosam quia. Eveniet esse sed distinctio ex aperiam vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur, suscipit sequi omnis autem saepe placeat veritatis necessitatibus amet dolore. Porro, ab in. Odio magni voluptates eius? Minima, facere sapiente! </p>
      <br/>
      <br />
      <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda fuga eum officia veniam eos repellendus placeat magnam alias dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos natus dicta dignissimos facilis? Odio voluptas omnis commodi vero excepturi magnam laboriosam quia. Eveniet esse sed distinctio ex aperiam vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur, suscipit sequi omnis autem saepe placeat veritatis necessitatibus amet dolore. Porro, ab in. Odio magni voluptates eius? Minima, facere sapiente! </p>
      <br/>
      <br />
      <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda fuga eum officia veniam eos repellendus placeat magnam alias dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos natus dicta dignissimos facilis? Odio voluptas omnis commodi vero excepturi magnam laboriosam quia. Eveniet esse sed distinctio ex aperiam vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur, suscipit sequi omnis autem saepe placeat veritatis necessitatibus amet dolore. Porro, ab in. Odio magni voluptates eius? Minima, facere sapiente! </p>
      <br/>
      <br />
      <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium quam ad optio! Illum temporibus vitae, sit repudiandae dignissimos assumenda fuga eum officia veniam eos repellendus placeat magnam alias dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos natus dicta dignissimos facilis? Odio voluptas omnis commodi vero excepturi magnam laboriosam quia. Eveniet esse sed distinctio ex aperiam vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur, suscipit sequi omnis autem saepe placeat veritatis necessitatibus amet dolore. Porro, ab in. Odio magni voluptates eius? Minima, facere sapiente! </p>
      
      </motion.div>
      
      </div>

      <div className='flex flex-col mt-16 items-center'>
        <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className='items-center px-6 py-3 bg-purple-950 text-light hover:bg-purple-800 hover:text-light rounded-xl text-lg font-semibold border'
              >
                Contact Me
        </Link>
      
        <Image 
        src={aboutMePic}
        alt='About Me Picture'
        className='w-80 h-auto pb-16'
        />
      </div>
      
      
    </div>
    </>
  )
}

export default About
