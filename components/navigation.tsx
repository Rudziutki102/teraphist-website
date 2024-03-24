'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { links } from "@/lib/data";
import Image from "next/image";
import { motion } from 'framer-motion';


type SectionName = (typeof links)[number]['name']
const NavigationMenu = () => {
    const [activeSection,setActiveSection] = useState<SectionName>('O nas')
  return (
    <motion.nav 
    className="hidden sm:w-2/3 sm:flex w-50 py-2 items-center gap-10 uppercase"
    initial={{
        y:-100,
        opacity: 0
    }}
    animate={{
        y:0,
        opacity:1
    }}
    >
    <motion.div
    className="hidden sm:block"
    initial={{
        y:-100,
        opacity:0,
        scale: 0
    }}
    animate={{
        y:0,
        opacity:1,
        scale:1,
    }}
    transition={{
        type:'spring',
        delay:0.15,
        duration:0.5,
    }}>
        <Image width={70} quality={95} height={70} src='/Logo.png' alt="Logo"/>
    </motion.div>
    <ul className="ml-auto flex gap-10 font-semibold">
        {links.map(({name,hash})=>(
        <li key={name}>
            <Link 
            className={`text-lg tracking-wider text-gray-600 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-300`} 
            href={hash}
            onClick={()=>setActiveSection(name)}>
                {name}
            </Link>
            {activeSection === name &&(
                <motion.span
                initial={{
                    width:0
                }}
                animate={{
                    width:'100%'
                }}
                className="block bg-gray-500 h-1"></motion.span>
            )}
        </li>
        ))}
    </ul>
</motion.nav>  )
}

export default NavigationMenu