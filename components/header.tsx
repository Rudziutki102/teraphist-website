'use client'
import Image from "next/image";
import { Variants, motion,useMotionValue,useScroll } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Header() {
    const [headerActiveColor,setHeaderActiveColor] = useState(false)
    const backgroundVariants : Variants = {
        active: {background:'#fff'},
        disabled:{background:'#ff22'}
    }
    useEffect(()=>{
        const handleScroll = ()=>window.scrollY > 0 ? setHeaderActiveColor(true) : setHeaderActiveColor(false)
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return (
    <motion.header 
    className={`sticky w-full z-[999] top-0 flex items-center justify-center  transition-colors ${headerActiveColor ? 'bg-white bg-opacity-[0.4]' : 'bg-opacity-[0.03]'}`}
    variants={backgroundVariants}
    initial={{
        y:-100,
        opacity:0,
    }}
    animate={{
        y:0,
        opacity: 1,
    }}
    >
        <nav className="w-2/3 flex w-50 py-2 items-center gap-10 uppercase">
            <motion.div
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
                {/* taka kropka co zmienia lokalizację */}
                {links.map(({name,hash})=>(
                <li key={name}>
                    <Link className={`text-lg tracking-wider ${headerActiveColor ? 'text-gray-700' : 'text-gray-300'}`} href={hash}>
                        {name}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    </motion.header>
  )
}
