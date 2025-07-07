import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='w-full border-t border-solid border-neutral-300 text-neutral-600 dark:border-light bottom-0 h-2.5 font-base md:text-base text-xs absolute'>
        <div className='py-2 md:py-8 flex items-center justify-around dark:text-light'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
            <div className='flex items-center'>
                Build with <span className='text-pink-300 text-2xl px-1'>&hearts; </span>
                by Esra Sevinc
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
