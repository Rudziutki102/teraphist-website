'use client'
import React from 'react'
import {skills} from '@/lib/data'
import {Variants, motion} from 'framer-motion'
import SectionHeader from './section-header'
import {skillsAnimationVariant} from '@/lib/variants'



const SkillsSection = () => {
    
  return (
    <>
    <SectionHeader name='Usługi'/>
    <div className='flex w-2/3 mx-auto justify-center flex-wrap'>
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
    </>
  )
}

export default SkillsSection
