import React, { useEffect } from 'react'
import Image from 'next/image'
import jrSoftwareEngineer from '../../public/images/jr-software-engineer.png'
import jrDeveloperDark from '../../public/images/jr-developer-dark-mode.png'
import Link from 'next/link'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { DeveloperIcon } from './DeveloperIcon'



const HireMe = () => {

  const { mode, setMode } = useThemeSwitcher()

  return (
    <div className='fixed lg:left-8 lg:bottom-4 flex items-center  dark:text-light right-8 left-auto bottom-1 top-auto'>
      <div className='lg:w-56 h-auto flex items-center justify-center relative w-32'>
       
       <DeveloperIcon 
       className={`animate-spin-slow fill-dark dark:fill-light`}
       />

      
        <Link 
          href='mailto:esrasevinc@hotmail.com' 
          target={'_blank'}
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 dark:bg-light dark:text-dark text-light border border-solid
          shadow-lg lg:w-20 lg:h-20 w-12 h-12 lg:text-lg text-sm text-center rounded-full font-semibold hover:bg-light hover:text-dark hover:border-slate-600'
          >Hire Me</Link>
            
            
      </div>
    </div>
  )
}

export default HireMe
