'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { useState } from "react";
import BurgerMenu from "./burger-menu";

type SectionName = (typeof links)[number]['name']


export default function Header() {
    const [activeSection,setActiveSection] = useState<SectionName>('O nas')
  return (
    <motion.header 
    className={`sticky w-full z-[999] top-0 flex items-center sm:justify-center sm:shadow-lg sm:shadow-black/[0.03] sm:backdrop-blur-[0.5rem] transition-colors sm:bg-white bg-opacity-80 sm:dark:bg-gray-800 sm:dark:border-black/40 bg-transparent`}
    initial={{
        y:-100,
        opacity:0,
    }}
    animate={{
        y:0,
        opacity: 1,
    }}
    >
        <nav className="hidden sm:w-2/3 sm:flex w-50 py-2 items-center gap-10 uppercase">
            <motion.div
            className="hidden sm:block"
            initial={{
                opacity:0,
                scale: 0
            }}
            animate={{
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
                    className={`text-lg tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-300`} 
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
        </nav>
        <BurgerMenu/>
    </motion.header>
  )
}
