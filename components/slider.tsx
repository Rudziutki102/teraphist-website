import React from 'react'
import {client} from '@/sanity/lib/client'

import SliderComponent from './sliderComponent'
import { SliderImageProps } from '@/lib/types'

async function getSliderImages(){
  const query : string = `*[_type == 'slider_image']{
    _id,
    title,
    titleImage
  }`
  const data = await client.fetch(query)
  return data
}
export const revalidate = 60
const Slider = async () => {
  const images : SliderImageProps[] = await getSliderImages();
  return (
    <>
      {images && <SliderComponent imagesGallery={images} />}
    </>
  )
}

export default Slider