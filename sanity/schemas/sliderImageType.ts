import { defineType } from "sanity";

export const sliderImageType = defineType({
  name:'slider_image',
  title:'Obrazy do slidera',
  type:'document',
    fields: [
      {
        name:'title',
        type:'string',
        title:"Tytuł obrazka"
      },
      {
          name:'titleImage',
          type:'image',
          title:'Obraz'
      }
    ],
  })