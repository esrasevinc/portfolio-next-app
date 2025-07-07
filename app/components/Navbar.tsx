'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { MdDarkMode, MdOutlineLightMode, MdOutlineMenu, MdCancel } from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  const { mode, setMode } = useThemeSwitcher(); 
  const [isOpen, setIsOpen] = useState(false)

  const baseLink = 'mx-4 relative group transition-all duration-300 dark:text-light'
  const selectedClass = 'text-pink-300 dark:text-pink-300'

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact Me' },
  ]

  const handleSwitchMode = () => setMode(mode === 'light' ? 'dark' : 'light')

  const handleOpenNav = () => setIsOpen(!isOpen)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar */}
      <div className='w-full h-[10vh] z-30 font-medium text-lg flex items-center justify-around mx-auto bg-white/60 dark:bg-black/20 backdrop-blur-md shadow-md sticky top-0 transition-all duration-300'>
        <Logo />
        
        {/* Desktop Nav */}
        <div className='hidden lg:flex items-center text-neutral-600'>
          <nav>
            <ul className='flex items-center'>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={`${baseLink} ${pathName === href ? selectedClass : 'hover:text-pink-300 dark:hover:text-pink-200'}`}>
                    {label}
                    <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-300 transition-all duration-300 group-hover:w-full ${pathName === href ? 'group-hover:w-0' : ''}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button onClick={handleSwitchMode} className='ml-4 p-1 rounded-full'>
            {mode === 'dark'
              ? <MdOutlineLightMode className='w-8 h-8 text-light' />
              : <MdDarkMode className='w-8 h-8 text-neutral-700' />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        {!isOpen && (
          <button className='lg:hidden flex items-center' onClick={handleOpenNav}>
            <MdOutlineMenu className='w-8 h-8 text-dark/80 dark:text-light' />
          </button>
        )}
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={handleOpenNav}
      />

      {/* Side Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-30 h-full w-3/4 max-w-sm bg-white dark:bg-zinc-900 shadow-lg transform transition-transform duration-300 flex flex-col`}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Close Button Top Right */}
        <button
          onClick={handleOpenNav}
          aria-label="Close menu"
          className="self-end m-4 p-2 rounded-full hover:bg-pink-200 dark:hover:bg-pink-800 transition"
        >
          <MdCancel className="w-8 h-8 text-pink-300" />
        </button>

        <nav className="px-8 flex-grow">
          <ul className="flex flex-col space-y-6 text-lg">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={handleOpenNav}
                  className={`${baseLink} block ${pathName === href ? selectedClass : 'text-neutral-800 dark:text-neutral-300 hover:text-pink-300'}`}
                >
                  {label}
                  <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-300 transition-all duration-300 group-hover:w-full ${pathName === href ? 'group-hover:w-0' : ''}`} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-8 pb-6">
          <button onClick={handleSwitchMode} className='rounded-full'>
            {mode === 'dark'
              ? <MdOutlineLightMode className='w-8 h-8 text-white' />
              : <MdDarkMode className='w-8 h-8 text-neutral-800' />}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar;
