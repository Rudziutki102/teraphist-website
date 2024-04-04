// do zrobienia blog - mały image, tekst, nagłówek, kiedy opublikowano

import { defineType,defineField, defineArrayMember} from 'sanity'

export const blogItem = defineType({
    name:'post',
    title:'Post',
    type:'document',
    liveEdit: false,
    fields:[
        {
          name:"slug",
          type:'slug',
          title:'slug',
          validation:rule=>rule.required(),
          options:{
            source:'title',
          }
        },
        {
            name:'titleImage',
            type:'image',
            title:'Obraz'
        },
        {
          name:'publishedAt',
          title:"Data opublikowania",
          type:"datetime",
          initialValue:()=>new Date().toISOString()
      },
      {
          name:'title',
          type:'string',
          title:'Tytuł'
        },
        defineField({
            type:'array',
            name:"content",
            title:'Kontent',
            of:[{type:'block'}]
        }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tagi",
            of: [
              defineArrayMember({
                type: 'object',
                name: 'tag',
                fields: [
                  {type: 'string', name: 'label'},
                  {type: 'string', name: 'value'},
                ]
              })
            ]
          }),

    ]
})