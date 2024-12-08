import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
// import  {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
// import {authorType} from './authorType'
import { productType } from './productType'
import { orderType } from './orderType'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, author, categoryType, orderType],
}
