import React from 'react'

type AboutMeCardProps = {
  title: string,
  describtion: string
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ title, describtion }) => {
  return (
    <div className="bg-white/90 dark:bg-black/30 border border-pink-100 dark:border-pink-300/30 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-2 md:gap-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h4 className="text-xl md:text-2xl font-bold text-pink-400 dark:text-pink-200 mb-1 md:mb-2 drop-shadow-sm">{title}</h4>
      <p className="text-neutral-700 dark:text-neutral-200 text-base md:text-lg leading-relaxed">{describtion}</p>
    </div>
  )
}

export default AboutMeCard
