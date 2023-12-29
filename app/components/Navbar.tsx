'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {

    const pathName = usePathname();
    const { mode, setMode } = useThemeSwitcher(); 
    const [ isOpen, setIsOpen ] = useState(false)

    const normalClass = 'mx-6 hover:text-purple-700 hover:underline hover:underline-offset-4 dark:hover:underline dark:hover:underline-offset-4 dark:text-light dark:hover:text-slate-50'
    const selectedClass = 'text-purple-700 dark:text-light underline underline-offset-4 dark:underline dark:underline-offset-4'

    const handleClick = () => {
      setIsOpen(!isOpen)
    }

    const handleSwitchMode = () => {
      setMode(mode === 'light' ? 'dark' : 'light')
    }

  return (

    <header className='w-full  h-[10vh] pt-3 pb-3 font-medium text-lg flex items-center justify-around bg-gray-50 dark:bg-dark relative'>

        <Logo />

        <button className='justify-center items-center hidden lg:flex' onClick={handleClick}>
          <MdOutlineMenu className='w-8 h-8 dark:text-light'/>
        </button>

        <div className='lg:hidden flex items-center justify-between'>

        <nav>
          <div className='flex items-center'>
          <ul>
            <Link href='/' className={`${normalClass} ${pathName === '/' ? selectedClass : ''}`}>Home</Link>
            <Link href='/about' className={`${normalClass} ${pathName === '/about' ? selectedClass : ''}`}>About Me</Link>
            <Link href='/skills' className={`${normalClass} ${pathName === '/skills' ? selectedClass : ''}`}>Skills</Link>
            <Link href='/education' className={`${normalClass} ${pathName === '/education' ? selectedClass : ''}`}>Education</Link>
            <Link href='/experience' className={`${normalClass} ${pathName === '/experience' ? selectedClass : ''}`}>Experience</Link>
            <Link href='/contact' className={`${normalClass} ${pathName === '/contact' ? selectedClass : ''}`}>Contact Me</Link>
          </ul>
          <button
            onClick={handleSwitchMode}
            className='ml-4 p-1 rounded-full'>
            {mode === 'dark' ?  <MdOutlineLightMode className='w-10 h-10 font-bold text-light' /> : <MdDarkMode className='w-10 h-10 text-dark' /> }
            </button>
            </div>
        </nav>
        </div>

      

        {/* <div className='min-w-[75vw] hidden lg:flex-col lg:flex items-center justify-around fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'> 
        <nav className='flex flex-col items-center justify-center'>
          
          <ul>
            <Link href='/' className={`${normalClass} ${pathName === '/' ? selectedClass : ''}`}>Home</Link>
            <Link href='/about' className={`${normalClass} ${pathName === '/about' ? selectedClass : ''}`}>About Me</Link>
            <Link href='/skills' className={`${normalClass} ${pathName === '/skills' ? selectedClass : ''}`}>Skills</Link>
            <Link href='/education' className={`${normalClass} ${pathName === '/education' ? selectedClass : ''}`}>Education</Link>
            <Link href='/experience' className={`${normalClass} ${pathName === '/experience' ? selectedClass : ''}`}>Experience</Link>
            <Link href='/contact' className={`${normalClass} ${pathName === '/contact' ? selectedClass : ''}`}>Contact Me</Link>
          </ul>
          <button
            onClick={handleSwitchMode}
            className='ml-4 p-1 rounded-full'>
            {mode === 'dark' ?  <MdOutlineLightMode className='w-10 h-10 font-bold text-light' /> : <MdDarkMode className='w-10 h-10 text-dark' /> }
          </button>
            
        </nav>
        </div> */}
        
    </header>
  )
}

export default Navbar
