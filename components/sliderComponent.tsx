'use client'
import React, { useEffect, useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import { motion, AnimatePresence } from 'framer-motion';
import {SliderComponentProps} from '@/lib/types'

const Slidercomponent : React.FC<SliderComponentProps> = ({ imagesGallery }) => {
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
  }, []);
  return (
    <motion.div className='mt-4 sm:mt-0 relative w-full pt-[56.6%] sm:pt-[16.9%]'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
        delay:0.7
    }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={slide}
          className='absolute object-contain h-full w-full top-0'
          alt={imagesGallery[slide].title}
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          exit={{
            opacity:0,
          }}
          src={urlForImage(imagesGallery[slide].titleImage)}
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default Slidercomponent;