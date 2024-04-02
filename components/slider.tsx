import React from 'react'
import {client} from '@/sanity/lib/client'

import SliderComponent from './sliderComponent'

async function getSliderImages(){
  const query : string = `*[_type == 'slider_image']{
    _id,
    title,
    titleImage
  }`
  const data = await client.fetch(query)
  return data
}
const Slider = async () => {
  const images = await getSliderImages();
  return (
    <>
      {images && <SliderComponent imagesGallery={images} />}
    </>
  )
}

export default Slider