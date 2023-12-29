import React, { useEffect } from 'react'
import Image from 'next/image'
import jrSoftwareEngineer from '../../public/images/jr-software-engineer.png'
import jrDeveloperDark from '../../public/images/jr-developer-dark-mode.png'
import Link from 'next/link'
import useThemeSwitcher from './hooks/useThemeSwitcher'



const HireMe = () => {

  const { mode, setMode } = useThemeSwitcher()

  return (
    <div className='fixed left-8 bottom-4 flex items-center justify-center overflow-hidden dark:text-light md:right-8 md:left-auto md:bottom-1 md:top-auto'>
      <div className='w-56 h-auto flex items-center justify-center relative md:w-32'>
        {mode === 'light' 
        ? 
        <Image 
        src={jrSoftwareEngineer} 
        alt='Junior Software Engineer'
        priority
        className='animate-spin-slow' 
        />
        :
        <Image 
            src={jrDeveloperDark} 
            alt='Junior Software Engineer Dark'
            priority
            className='animate-spin-slow' 
        />
      }
            
            <Link 
            href='mailto:esrasevinc@hotmail.com' 
            target={'_blank'}
            className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 dark:bg-light dark:text-dark text-light border border-solid
            shadow-lg w-20 h-20 md:w-12 md:h-12 text-lg md:text-sm md:text-center rounded-full font-semibold hover:bg-light hover:text-dark hover:border-slate-600'
            >Hire Me</Link>
      </div>
    </div>
  )
}

export default HireMe
