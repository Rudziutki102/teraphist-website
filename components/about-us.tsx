'use client'
import React from 'react'
import SectionHeader from './section-header'
import {motion} from 'framer-motion'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <motion.div
    className='w-2/3 mx-auto'
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
        <SectionHeader name='O Nas' />
            <div className='sm:flex'>
                <div className='relative basis-2/5'>
                    <div className='absolute w-full top-0 -left-[10%] h-2/4 bg-[#9da2ca] z-0 '></div>
                    <div className='absolute w-full top-[10%] left-[10%] h-2/4 bg-[#9da2ca] z-0 opacity-60 '></div>
                    <Image 
                    alt='hero' 
                    src='/hero.png' 
                    className='object-contain !relative sm:!absolute mb-10 sm:mb-0 z-10'
                    quality={75} 
                    fill={true}/>
                </div>
                <div className='basis-3/5 z-10'>
                    <div className='text-3xl uppercase font-semibold text-gray-600 dark:text-gray-200 sm:p-2'>Wiktoria</div>
                    <div className='text-xl tracking-wide dark:text-gray-100 text-gray-600 sm:p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida ultrices nulla, ut semper enim rutrum vitae. In vitae nibh semper, pretium magna sed, maximus nulla. Nunc interdum ligula at ligula lacinia maximus. Cras quis volutpat metus, laoreet dignissim tellus. Phasellus magna eros, scelerisque sit amet nibh vitae, semper vehicula nulla. Curabitur nec dui porttitor, porta lorem vel, commodo massa. Donec eu lorem tristique massa egestas malesuada non nec tortor. Donec ac rutrum justo. Vestibulum quis semper nisl, ac porta sem. Quisque laoreet consequat augue, vel tempor odio. Nunc fringilla sagittis ex, et fringilla justo tristique eu. Sed posuere neque ipsum, rutrum egestas ante accumsan vitae. Fusce suscipit a magna eget lobortis. Nam pellentesque sollicitudin nibh, porttitor pellentesque nulla faucibus ege Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida ultrices nulla, ut semper enim rutrum vitae. In vitae nibh semper, pretium magna sed, maximus nulla. Nunc interdum ligula at ligula lacinia maximus. Cras quis volutpat metus, laoreet dignissim tellus. Phasellus magna eros, scelerisque sit amet nibh vitae, semper vehicula nulla. Curabitur nec dui porttitor, porta lorem vel, commodo massa. Donec eu lorem tristique massa egestas malesuada non nec tortor. Donec ac rutrum justo. Vestibulum quis semper nisl, ac porta sem. Quisque laoreet consequat augue, vel tempor odio. Nunc fringilla sagittis ex, et fringilla justo tristique eu. Sed posuere neque ipsum, rutrum egestas ante accumsan vitae. Fusce suscipit a magna eget lobortis. Nam pellentesque sollicitudin nibh, porttitor pellentesque nulla faucibus ege Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida ultrices nulla, ut semper enim rutrum vitae. In vitae nibh semper, pretium magna sed, maximus nulla. Nunc interdum ligula at ligula lacinia maximus. Cras quis volutpat metus, laoreet dignissim tellus. Phasellus magna eros, scelerisque sit amet nibh vitae, semper vehicula nulla. Curabitur nec dui porttitor, porta lorem vel, commodo massa. Donec eu lorem tristique massa egestas malesuada non nec tortor. Donec ac rutrum justo. Vestibulum quis semper nisl, ac porta sem. Quisque laoreet consequat augue, vel tempor odio. Nunc fringilla sagittis ex, et fringilla justo tristique eu. Sed posuere neque ipsum, rutrum egestas ante accumsan vitae. Fusce suscipit a magna eget lobortis. Nam pellentesque sollicitudin nibh, porttitor pellentesque nulla faucibus ege</div>
                </div>
            </div>
    </motion.div>
  )
}

export default AboutUs