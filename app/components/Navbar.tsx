'use client';

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const pathName = usePathname();
    const normalClass = 'mx-6 hover:text-purple-700 hover:underline hover:underline-offset-4'
    const selectedClass = 'text-purple-700 underline underline-offset-4'

  return (
    <header className='w-full px-[200px] h-[10vh] pt-3 pb-3 font-medium text-lg flex items-center justify-between bg-gray-50'>
        <Logo />
        <nav>
          <ul>
            <Link href='/' className={`${normalClass} ${pathName === '/' ? selectedClass : ''}`}>Home</Link>
            <Link href='/about' className={`${normalClass} ${pathName === '/about' ? selectedClass : ''}`}>About Me</Link>
            <Link href='/skills' className={`${normalClass} ${pathName === '/skills' ? selectedClass : ''}`}>Skills</Link>
            <Link href='/education' className={`${normalClass} ${pathName === '/education' ? selectedClass : ''}`}>Education</Link>
            <Link href='/experience' className={`${normalClass} ${pathName === '/experience' ? selectedClass : ''}`}>Experience</Link>
            <Link href='/contact' className={`${normalClass} ${pathName === '/contact' ? selectedClass : ''}`}>Contact Me</Link>
          </ul>
        </nav>
        
    </header>
  )
}

export default Navbar
