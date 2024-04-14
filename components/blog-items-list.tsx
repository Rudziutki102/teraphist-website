'use client'
import React from 'react'
import {BlogListProps} from '@/lib/types'
import Link from 'next/link'
import SectionHeader from './section-header'
import {motion} from 'framer-motion'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image'


const BlogItemsList = ({blogItems}: {blogItems:BlogListProps[]}) => {
  console.log(blogItems)
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
              <div className='cursor-pointer group'>
                <div className='relative w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-out'>
                    {titleImage && <Image className='object-cover object-left' src={urlForImage(titleImage)} alt={title} fill/>}
                    <div className='absolute flex justify-between items-center bottom-0 w-full bg-white bg-opacity-20 backdrop-blur-lg p-3'>
                      <div>
                        <p className='font-bold'>
                        {title}                  
                        </p>
                        <p>
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
                          <div className='font-bold rounded' key={index}>{item.value}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                    {title}
                    {excerpt}
                </div>

              </div>
                
        ))}
    </div>
    </motion.div>
    
  )
}

export default BlogItemsList