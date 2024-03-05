'use client'
import { useTheme } from '@/context/theme-context'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'



export default function ThemeSwitch() {
    const {theme,toggleTheme} = useTheme()
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] dark:bg-gray-600 border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all'
    onClick={toggleTheme}>
        {
            theme === 'light' ? (
                <BsSun/>
                ):
                (
                <BsMoon/>
                )
        }
    </button>
  )
}