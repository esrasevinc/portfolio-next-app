import React from 'react'
import { IconType } from 'react-icons'

type SkillsProps = {
    icon: React.ReactNode,
    title: string
}

const Skills = (props: SkillsProps) => {
  return (
    <>
        <div className='flex flex-col items-center justify-center'>
            <span>{props.icon}</span>
            <p className='text-sm md:text-base font-medium dark:text-light mt-2 text-center'>{props.title}</p>
        </div>
    </>
  )
}

export default Skills
