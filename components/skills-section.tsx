'use client'
import React from 'react'
import {skills} from '@/lib/data'
import  {motion} from 'framer-motion'
import SectionHeader from './section-header'
import {skillsAnimationVariant} from '@/lib/variants'



const SkillsSection = () => {
  return (
    <motion.div
    initial={{
      y:200,
      opacity:0
  }}
  animate={{
      y:0,
      opacity:1
  }}
  transition={{
      delay:.5
  }}>
    <SectionHeader name='Usługi'/>
    <div className='flex justify-center flex-wrap'>
        {skills.map((skill,index)=>(
            <motion.div 
            className='mx-3 font-semibold dark:text-gray-100 text-gray-600 text-lg' 
            key={index}
            custom={index}
            whileInView='animate'
            variants={skillsAnimationVariant}
            viewport={{
              once:true
            }}
            initial='initial'
            >{skill}</motion.div>
        ))}
    </div>
    </motion.div>
  )
}

export default SkillsSection
