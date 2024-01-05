'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'

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
    <div className='flex flex-col min-h-[80vh] lg:px-60 px-14 items-center w-full'>
    <div className='pt-12 lg:pt-20'>
      <motion.h1 className='text-4xl md:text-5xl text-center font-bold items-center dark:text-light' variants={quote} initial='initial' animate='animate'>
           Say <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>hello</span> to me!
      </motion.h1>
      </div>
      <div className='flex flex-col md:flex-row md:justify-around w-full items-center justify-between'>
        <div className='md:w-1/2 w-full'>
            <div className='flex flex-col md:w-[80%]'>
                <h5 className='text-lg md:text-2xl text-center md:text-start items-center font-bold text-gray-900 dark:text-light pt-6 md:pt-20'>Let's Connect!</h5>
                <motion.p className='text-base md:text-lg font-medium text-gray-800 text-start dark:text-light pt-2' initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:'spring'}}>
                As I embark on this exciting journey in the world of computer science, I invite you to explore my portfolio and witness firsthand the projects that reflect my commitment to excellence and creativity. Let&lsquo;s connect and explore how we can bring your ideas to life through the power of code.
                </motion.p>
                <div className='flex self-center md:self-start gap-8 pt-4'>
                    <Link href='https://www.linkedin.com/in/esra-sevin%C3%A7-36436b224/' target={'_blank'}>
                        <FaLinkedinIn className='w-10 h-10 text-blue-700 dark:text-light'/>
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
          <p className="text-green-600 font-semibold text-sm pt-12 text-center md:text-start md:mt-2 md:ml-10">
            Email sent successfully!
          </p>
        
      ) : 
      (
        <form className='flex flex-col w-full md:pt-20 pt-14' onSubmit={handleSubmit}>
            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-gray-900 dark:text-light font-medium text-sm md:text-base'>Your name</label>
            <input 
            type='text' 
            id='name' 
            name='name'
            required
            placeholder='Jack'
            onChange={(e) => setName(e.target.value)}
            className='bg-gray-50 border border-gray-500 px-2.5 py-1.5 rounded-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-gray-900 dark:text-light font-medium text-sm md:text-base'>Your e-mail</label>
            <input 
            type='email' 
            id='email' 
            name='email'
            required
            placeholder='abcdefgh@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-50 border border-gray-500 px-2.5 py-1.5 rounded-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-gray-900 dark:text-light font-medium text-sm md:text-base'>Subject</label>
            <input 
            type='text' 
            id='subject' 
            name='subject'
            required
            placeholder='Just saying hi!'
            onChange={(e) => setSubject(e.target.value)}
            className='bg-gray-50 border border-gray-500 px-2.5 py-1.5 my-1.5 rounded-lg'/>
            </div>

            <div className='mb-6 flex flex-col'>
            <label htmlFor='email' className='text-gray-900 dark:text-light font-medium text-sm md:text-base'>Message</label>
            <textarea 
            id='message' 
            name='message'
            required
            rows={5}
            placeholder="Let's talk about..."
            onChange={(e) => setMessage(e.target.value)}
            className='bg-gray-50 border border-gray-500 px-2.5 py-1.5 my-1.5 rounded-lg'/>
            </div>

            <button 
            type='submit'
            className='bg-purple-950 hover:bg-purple-800 dark:bg-light dark:text-purple-900 dark:hover:text-light text-light font-medium text-sm md:text-lg border rounded-lg py-2.5 px-5 w-full mb-6 shadow-md'
            >Send Message</button>

        </form> 
        )}
      </div>
      </div>
    </div>
  )
}

export default ContactMe
