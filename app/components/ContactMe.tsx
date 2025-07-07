'use client';

import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'
import aboutMePic from '../../public/images/about-me.png'

const ContactMe = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

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

      const handleSubmit = (async (e: any) => {
        setLoading(true);
        e.preventDefault();

        // if (name == "" && email == "") {
        //     setLoading(false);
        //     alert("Please enter both name & email id");
        //     return false;
        // }

        const response = await fetch("/api/submit", {
            method: "POST",
            body: JSON.stringify({ name, email, subject, message }),
            headers: {
              "Content-Type": "application/json",
            },
        })

        const resData = await response.json();

        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        }
      })

  return (
    <div className='flex flex-col min-h-[80vh] px-6 md:px-16 lg:px-28 items-center w-full'>
    <div className='pt-8 lg:pt-16'>
      <motion.h1 className='text-4xl md:text-5xl text-center font-bold items-center dark:text-light text-neutral-800' variants={quote} initial='initial' animate='animate'>
           Say <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text'>hello</span> to me
      </motion.h1>
      </div>
      <div className='flex flex-col md:flex-row md:justify-around w-full items-center justify-between'>
        <div className='md:w-1/2 w-full'>
            <div className='flex flex-col md:w-[80%] items-center justify-center'>
            <Image 
              src={aboutMePic}
              alt='About Me Picture'
              className='w-32 h-auto pb-2'
              priority
            />
                <h5 className='text-xl md:text-3xl text-center md:text-start items-center font-bold text-pink-300'>Let's Connect!</h5>
                <motion.p className='text-base md:text-lg font-medium text-neutral-600 dark:text-light pt-2 text-justify leading-relaxed' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
                As I embark on this exciting journey in the world of computer science, I invite you to explore my portfolio and witness firsthand the projects that reflect my commitment to excellence and creativity. Let&lsquo;s connect and explore how we can bring your ideas to life through the power of code.
                </motion.p>
                <div className='flex self-center md:self-start gap-8 pt-4'>
                    <Link href='https://www.linkedin.com/in/esra-sevin%C3%A7-36436b224/' target={'_blank'}>
                        <FaLinkedinIn className='w-10 h-10 text-blue-900 dark:text-light'/>
                    </Link>
                    <Link href='https://github.com/esrasevinc' target={'_blank'}>
                        <FaGithub className='w-10 h-10 dark:text-light'/>
                    </Link>
                </div>
            </div>

        </div>
      
      <div className='md:w-1/2 w-full'>
      {emailSubmitted 
      ? 
      (
          <p className="text-green-500 font-semibold text-sm pt-12 text-center md:text-start md:mt-2 md:ml-14">
            Email sent successfully!
          </p>
        
      ) : 
      (
        <form className='flex flex-col w-full pt-8' onSubmit={handleSubmit}>
            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-neutral-800 dark:text-light font-medium text-sm md:text-base'>Your name</label>
            <input 
            type='text' 
            id='name' 
            name='name'
            required
            placeholder='Jack'
            onChange={(e) => setName(e.target.value)}
            className='bg-gray-50 border border-neutral-500 px-2.5 py-1.5 rounded-lg shadow-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-neutral-800 dark:text-light font-medium text-sm md:text-base'>Your e-mail</label>
            <input 
            type='email' 
            id='email' 
            name='email'
            required
            placeholder='jack@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-50 border border-neutral-500 px-2.5 py-1.5 rounded-lg shadow-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-neutral-800 dark:text-light font-medium text-sm md:text-base'>Subject</label>
            <input 
            type='text' 
            id='subject' 
            name='subject'
            required
            placeholder='Just saying hi!'
            onChange={(e) => setSubject(e.target.value)}
            className='bg-gray-50 border border-neutral-500 px-2.5 py-1.5 my-1.5 rounded-lg shadow-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-neutral-800 dark:text-light font-medium text-sm md:text-base'>Message</label>
            <textarea 
            id='message' 
            name='message'
            required
            rows={5}
            placeholder="Let's talk about..."
            onChange={(e) => setMessage(e.target.value)}
            className='bg-gray-50 border border-neutral-500 px-2.5 py-1.5 my-1.5 rounded-lg shadow-lg'/>
            </div>

            <button 
            type='submit'
            className='bg-pink-300 hover:bg-pink-400 transition-all duration-300 dark:bg-pink-100 dark:text-pink-400 dark:hover:bg-pink-200  dark:hover:text-pink-500 text-light font-medium text-sm md:text-lg rounded-lg py-2.5 px-5 w-full mb-6 shadow-lg'
            >Send Message</button>

        </form> 
        )}
      </div>
      </div>
    </div>
  )
}

export default ContactMe
