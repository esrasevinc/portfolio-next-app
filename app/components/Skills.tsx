import React from 'react'
import { IconType } from 'react-icons'

type SkillsProps = {
    icon: React.ReactNode,
    title: string
}

const Skills = (props: SkillsProps) => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="rounded-full bg-pink-300/20 dark:bg-pink-300/20 shadow-md w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
        <span className="text-4xl md:text-5xl">{props.icon}</span>
      </div>
      <p className="text-base md:text-lg text-neutral-700 dark:text-pink-100 text-center mt-1 md:mt-2 drop-shadow-sm">
        {props.title}
      </p>
    </div>
  )
}

export default Skills
