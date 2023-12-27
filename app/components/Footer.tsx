import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='w-full border-t border-solid border-gray-700 px-[200px] font-base text-lg'>
        <div className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
            <div className='flex items-center'>
                Build with <span className='text-pink-600 text-2xl px-1'>&hearts; </span>
                by Esra Sevinc
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
