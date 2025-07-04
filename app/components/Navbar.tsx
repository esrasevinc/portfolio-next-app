'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { MdDarkMode, MdOutlineLightMode, MdOutlineMenu, MdCancel } from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  const { mode, setMode } = useThemeSwitcher(); 
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenNav = () => setIsOpen(prev => !prev)
  const handleSwitchMode = () => setMode(mode === 'light' ? 'dark' : 'light')

  const baseLink = 'mx-6 relative group transition-all duration-300 dark:text-light'
  const selectedClass = 'text-pink-300 dark:text-pink-200'

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact Me' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <>
      <div className='w-full h-[10vh] z-30 font-medium text-lg flex items-center justify-around bg-white/60 backdrop-blur-sm shadow-md dark:bg-dark/70 sticky top-0 transition-all duration-300'>
        <Logo />

        {/* Mobil Menü Butonu */}
        <button className='lg:hidden flex items-center' onClick={handleOpenNav}>
          {isOpen
            ? <MdCancel className='w-12 h-12 text-dark/80 dark:text-light' />
            : <MdOutlineMenu className='w-10 h-10 text-dark/80 dark:text-light' />
          }
        </button>

        {/* Masaüstü Menü */}
        <div className='hidden lg:flex items-center justify-between'>
          <nav>
            <div className='flex items-center'>
              <ul className='flex'>
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={`${baseLink} ${pathName === href ? selectedClass : 'hover:text-pink-300'}`}>
                      {label}
                      <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-300 transition-all duration-300 group-hover:w-full ${pathName === href ? 'group-hover:w-0' : ''}`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button onClick={handleSwitchMode} className='ml-4 p-1 rounded-full'>
                {mode === 'dark'
                  ? <MdOutlineLightMode className='w-10 h-10 text-light' />
                  : <MdDarkMode className='w-10 h-10 text-dark' />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className='z-20 fixed w-full h-screen bg-light dark:bg-dark flex flex-col items-center justify-center text-center text-xl sm:text-2xl font-medium'>
          <nav>
            <ul className='flex flex-col'>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleOpenNav}
                    className={`${baseLink} mt-4 ${pathName === href ? selectedClass : 'text-dark/80 hover:text-pink-300'}`}
                  >
                    {label}
                    <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-300 transition-all duration-300 group-hover:w-full ${pathName === href ? 'group-hover:w-0' : ''}`}></span>
                  </Link>
                </li>
              ))}
            </ul>
            <button onClick={handleSwitchMode} className='mt-10 rounded-full'>
              {mode === 'dark'
                ? <MdOutlineLightMode className='w-10 h-10 text-light' />
                : <MdDarkMode className='w-10 h-10 text-dark' />}
            </button>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
