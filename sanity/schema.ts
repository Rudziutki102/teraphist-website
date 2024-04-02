import { type SchemaTypeDefinition } from 'sanity'
import { blogItem } from './schemas/blogType'
import { sliderImageType } from './schemas/sliderImageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogItem,sliderImageType],
}
