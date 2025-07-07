import React from 'react'

type AboutMeCardProps = {
  title: string,
  describtion: string
}

const AboutMeCard = (props: AboutMeCardProps) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center dark:bg-white/10 dark:backdrop-blur-md rounded-xl px-4 py-2 bg-white shadow-lg'>
        <h1 className='text-lg md:text-2xl font-semibold dark:text-pink-300 text-pink-400'>{props.title}</h1>
        <p className='text-sm md:text-lg font-medium text-neutral-600 dark:text-light my-1.5'>{props.describtion}</p>
      </div>
    </>
  )
}

export default AboutMeCard
