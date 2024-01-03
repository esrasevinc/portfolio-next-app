import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='w-full border-t border-solid border-gray-700 dark:border-light absolute bottom-0 h-2.5 font-base text-lg md:text-sm xs:text-xs'>
        <div className='py-8 flex items-center justify-around dark:text-light'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
            <div className='flex items-center'>
                Build with <span className='text-pink-600 dark:text-pink-400 text-2xl px-1'>&hearts; </span>
                by Esra Sevinc
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
