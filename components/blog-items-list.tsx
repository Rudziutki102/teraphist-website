'use client'
import React from 'react'
import {BlogListProps} from '@/lib/types'
import Link from 'next/link'
import SectionHeader from './section-header'
import {motion} from 'framer-motion'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image'


const BlogItemsList = ({blogItems}: {blogItems:BlogListProps[]}) => {
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
            <SectionHeader name="Blog"/>
            <div id="blog" className='flex justify-between flex-wrap'>
        {blogItems.map(({slug,title,publishedAt,excerpt,titleImage,tags,_id})=>(
            <div key={_id} className='flex flex-wrap justify-between w-full sm:w-1/2 p-3'>
              <div className='group flex flex-wrap'>
                <div className='relative w-full h-80  mb-3 overflow-hidden'>
                    {titleImage && <Image className='object-cover object-left group-hover:scale-105 transition-transform duration-200 ease-out' src={urlForImage(titleImage)} alt={title} fill/>}
                    <div className='absolute flex justify-between items-center bottom-0 w-full bg-white bg-opacity-20 backdrop-blur-lg p-3'>
                      <div>
                        <p className='font-bold text-gray-900'>
                        {title}                  
                        </p>
                        <p className='font-semibold rounded text-gray-900'>
                          {new Date(publishedAt).toLocaleDateString(
                            'en-us',{
                              day:'numeric',
                              month:'numeric',
                              year:'numeric'
                            }
                          )}
                        </p>
                      </div>
                      <div>
                        {tags.map((item,index)=>(
                          <div className='font-semibold dark:text-gray-100 text-gray-900 rounded-full bg-[#9da2ca] py-2 px-3 w-auto ml-auto cursor-pointer border-2' key={index}>{item.value}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className='block font-bold dark:text-gray-100 text-gray-600 font-size text-lg mb-2'>
                    {title}
                  </span>
                  <span className='dark:text-gray-100 text-gray-600 mb-3 text-lg'>
                    {excerpt}
                  </span>
                  <Link href={`blog/${slug.current}`} className='transition-colors duration-200 ease-out group-hover:bg-opacity-60 font-semibold dark:text-gray-100 text-gray-900 rounded-full bg-[#9da2ca] py-2 px-3 w-auto ml-auto cursor-pointer border-2'>
                    Czytaj więcej
                  </Link>
                </div>

              </div>
                
        ))}
    </div>
    </motion.div>
    
  )
}

export default BlogItemsList