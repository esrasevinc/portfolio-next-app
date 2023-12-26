'use client';

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'


const Navbar = () => {

    const pathName = usePathname();

  return (
    <header className='w-full px-[200px] pt-3 pb-3 font-medium text-lg flex items-center justify-between bg-slate-50'>
        <Logo />
        <nav>
            <Link href='/' className={`mx-6 hover:text-purple-700 ${pathName === '/' ? 'text-purple-700' : ''}`}>Home</Link>
            <Link href='/about' className={`mx-6 hover:text-purple-700 ${pathName === '/about' ? 'text-purple-700' : ''}`}>About</Link>
            <Link href='/skills' className={`mx-6 hover:text-purple-700 ${pathName === '/skills' ? 'text-purple-700' : ''}`}>Skills</Link>
            <Link href='/education' className={`mx-6 hover:text-purple-700 ${pathName === '/education' ? 'text-purple-700' : ''}`}>Education</Link>
            <Link href='/experience' className={`mx-6 hover:text-purple-700 ${pathName === '/experience' ? 'text-purple-700' : ''}`}>Experience</Link>
            <Link href='/contact' className={`mx-6 hover:text-purple-700 ${pathName === '/contact' ? 'text-purple-700' : ''}`}>Contact</Link>
        </nav>
        
        {/* <nav>
            <Link href='/' target={'_blank'}>t</Link>
            <Link href='/' target={'_blank'}>t</Link>
        </nav> */}
    </header>
  )
}

export default Navbar
