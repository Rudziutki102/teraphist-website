'use client'
import React,{useState} from 'react'
import { motion} from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import {menuTopLineVariant, menuBottomLineVariant,menuMidLineVariant,menuAnimationVariant} from '@/lib/variants'

const BurgerMenu : React.FunctionComponent= () => {
  const [isSidebarVisible,setIsSidebarVisible] = useState<boolean>(false)
  return (
      <>
        <div className='border rounded-lg shadow-lg p-2 fixed right-4 top-4 sm:hidden' onClick={()=>setIsSidebarVisible(!isSidebarVisible)}>
        <motion.svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        className={`sm:hidden`}
        animate={isSidebarVisible ? "open" : 'closed'}
        initial="hidden"
        >
        <motion.line
            x1="0"
            y1="3"
            x2="25"
            y2="3"
            className='stroke-gray-950 dark:stroke-gray-200'
            strokeWidth='3'
            custom={2}
            variants={menuTopLineVariant}
          />
        <motion.line
            x1="0"
            y1="13.5"
            x2="25"
            y2="13.5"
            strokeWidth='3'
            className='stroke-gray-950 dark:stroke-gray-200'
            custom={2}
            variants={menuMidLineVariant}
          />
        <motion.line
            x1="0"
            x2="25"
            y1="23"
            y2="23"
            strokeWidth='3'
            className='stroke-gray-950 dark:stroke-gray-200'
            custom={2}
            variants={menuBottomLineVariant}
          />
        </motion.svg>
      </div>

      {isSidebarVisible && (
        <motion.div
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden' 
        transition={{
          delay:0.35,
          duration:0.7,
        }}>
        <motion.ul 
        >
        {links.map(({name,hash},index)=>(
                <motion.li
                  key={name}
                  variants={menuAnimationVariant}
                  initial="initial"
                  animate="animate"
                  custom={index}
                >
                    <Link 
                    className='font-semibold py-7 uppercase text-lg tracking-wider text-gray-600 dark:text-gray-200' 
                    href={hash}>
                        {name}
                    </Link>
                </motion.li>
                ))}
        </motion.ul>
      </motion.div>
      )}
    </>
  )
}

export default BurgerMenu