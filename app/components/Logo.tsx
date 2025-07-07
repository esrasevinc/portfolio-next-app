'use client';

import Link from 'next/link'
import React from 'react'

const Logo = () => {

  return (
    <div className='flex items-center justify-center my-4'>
        <Link 
        href='/' 
        className='md:w-14 md:h-14 w-12 h-12 hover:bg-pink-100 dark:hover:bg-pink-200 bg-pink-200 transition-all duration-300 border-2
      dark:text-pink-700 dark:hover:text-pink-600 border-pink-200 text-pink-400 dark:border-light items-center flex justify-center rounded-full md:text-2xl text-lg font-bold'
        > 
        ES
        </Link>
    </div>
  )
}

export default Logo