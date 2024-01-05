'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";


const Navbar = () => {

    const pathName = usePathname();
    const { mode, setMode } = useThemeSwitcher(); 
    const [ isOpen, setIsOpen ] = useState(false)

    const normalClass = 'mx-6 hover:text-purple-700 hover:underline hover:underline-offset-4 dark:hover:underline dark:hover:underline-offset-4 dark:text-light dark:hover:text-slate-200'
    const selectedClass = 'text-purple-700 dark:text-light underline underline-offset-4 dark:underline dark:underline-offset-4'

    const handleOpenNav = () => {
      setIsOpen((isOpen) => !isOpen)
    }

    const handleSwitchMode = () => {
      setMode(mode === 'light' ? 'dark' : 'light')
    }

  return (
    <>
    <div className='w-full h-[10vh] z-30 font-medium text-lg flex items-center justify-around bg-gray-50 dark:bg-dark sticky top-0'>
        <Logo />
        <button className='justify-between items-center lg:hidden flex' onClick={handleOpenNav}>
          {isOpen ? <MdCancel className='w-12 h-12 md:w-14 md:h-14 text-dark/80 dark:text-light' /> : <MdOutlineMenu className='w-10 h-10 md:w-12 md:h-12 text-dark/80 dark:text-light'/>}
        </button>

        <div className='hidden lg:flex items-center justify-between'>

        <nav>
          <div className='flex items-center'>
          <ul>
            <Link href='/' className={`${normalClass} ${pathName === '/' ? selectedClass : ''}`}>Home</Link>
            <Link href='/about' className={`${normalClass} ${pathName === '/about' ? selectedClass : ''}`}>About Me</Link>
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
    </div>

    {isOpen &&
    <div className='z-20 fixed w-full h-screen bg-light dark:bg-dark items-center justify-center text-center text-xl sm:text-2xl pt-32 font-medium'> 
    <nav>
    <div>
    <ul className='flex flex-col'>
      <Link href='/' onClick={handleOpenNav} className={`${normalClass} mt-4 text-dark/80 ${pathName === '/' ? selectedClass : ''}`}>Home</Link>
      <Link href='/about' onClick={handleOpenNav} className={`${normalClass} mt-4 text-dark/80 ${pathName === '/about' ? selectedClass : ''}`}>About Me</Link>
      <Link href='/education' onClick={handleOpenNav} className={`${normalClass} mt-4 text-dark/80 ${pathName === '/education' ? selectedClass : ''}`}>Education</Link>
      <Link href='/experience' onClick={handleOpenNav} className={`${normalClass} mt-4 text-dark/80 ${pathName === '/experience' ? selectedClass : ''}`}>Experience</Link>
      <Link href='/contact' onClick={handleOpenNav} className={`${normalClass} mt-4 text-dark/80 ${pathName === '/contact' ? selectedClass : ''}`}>Contact Me</Link>
    </ul>
    <button
      onClick={handleSwitchMode}
      className='rounded-full mt-10'>
      {mode === 'dark' ?  <MdOutlineLightMode className='w-10 h-10 font-bold text-light' /> : <MdDarkMode className='w-10 h-10 text-dark' /> }
    </button>
    </div>
      
    </nav>
    </div>
    }
    </>
  )
}

export default Navbar
