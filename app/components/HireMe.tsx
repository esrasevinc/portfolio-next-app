import React from 'react'
import Image from 'next/image'
import jrSoftwareEngineer from '../../public/images/jr-software-engineer.png'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-8 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-56 h-auto flex items-center justify-center relative'>
            <Image 
            src={jrSoftwareEngineer} 
            alt='Junior Software Engineer'
            className='animate-spin-slow' 
            />
            <Link 
            href='mailto:esrasevinc@hotmail.com' 
            target={'_blank'}
            className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-light border border-solid
            shadow-lg w-20 h-20 text-lg rounded-full font-semibold hover:bg-light hover:text-slate-900 hover:border-slate-600'
            >Hire Me</Link>
      </div>
    </div>
  )
}

export default HireMe
