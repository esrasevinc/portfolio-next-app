import React, { useEffect } from 'react'
import Link from 'next/link'
import { DeveloperIcon } from './DeveloperIcon'

const HireMe = () => {

  return (
    <div className='fixed flex items-center  md:bottom-auto dark:text-light right-2 md:right-8 pt-8 md:pt-20 lg:pt-12 top-12 bottom-auto '>
      <div className='lg:w-48 h-auto flex items-center justify-center relative w-28 md:w-30'>
       
       <DeveloperIcon 
       className={`animate-spin-slow fill-dark dark:fill-light`}
       />
      
        <Link 
          href='mailto:esrasevinc@hotmail.com' 
          target={'_blank'}
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 dark:bg-light dark:text-dark text-light border-2 border-solid
          dark:border-light shadow-lg md:w-18 md:h-18 lg:w-20 lg:h-20 w-14 h-14 md:text-base lg:text-lg text-xs text-center rounded-full font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark/75 dark:hover:text-light hover:border-slate-600'
          >Hire Me</Link>
      
      </div>
    </div>
  )
}

export default HireMe
