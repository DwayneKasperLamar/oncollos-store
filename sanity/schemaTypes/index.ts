import { type SchemaTypeDefinition } from 'sanity'
// import { author } from './author'
// import  {blockContentType} from './blockContentType'
// import {category} from './categoryType'
// import {authorType} from './authorType'
import { productType } from './productType'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,],
}
