'use client'
import React, { useEffect, useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import { motion, AnimatePresence } from 'framer-motion';
import {GalleryItemProps} from '@/lib/types'

const Slidercomponent = ({ imagesGallery }:{imagesGallery:GalleryItemProps[]}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setSlide(prevSlide => {
            if (prevSlide === imagesGallery.length - 1) {
              return 0;
            } else {
              return prevSlide + 1;
            }
          });
    }, 10000);
    return()=>clearInterval(interval)
  }, [imagesGallery.length]);
  return (
    <motion.div className='mt-4 sm:mt-0 relative w-full h-[250px] sm:h-[500px]'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
        delay:0.7
    }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={slide}
          className='absolute object-contain w-full top-0 h-full'
          alt={imagesGallery[slide].title}
          initial={{
            opacity:0,
            left:200
          }}
          animate={{
            opacity:1,
            left:0
          }}
          exit={{
            opacity:0,
            left:-200
          }}
          src={urlForImage(imagesGallery[slide].titleImage)}
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default Slidercomponent;