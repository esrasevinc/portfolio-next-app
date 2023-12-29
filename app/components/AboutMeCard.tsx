import React from 'react'

type AboutMeCardProps = {
  title: string,
  describtion: string
}

const AboutMeCard = (props: AboutMeCardProps) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center border border-dark border-solid rounded-lg px-4 py-2 dark:border-light shadow-md'>
        <h1 className='text-2xl font-semibold dark:text-purple-300 text-purple-800'>{props.title}</h1>
        <p className='text-lg font-medium text-dark dark:text-light my-1.5'>{props.describtion}</p>
      </div>
    </>
  )
}

export default AboutMeCard
