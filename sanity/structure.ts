import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Oncollos Store')
    .items([
      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('category').title('Category'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['product', 'category', 'author'] .includes(item.getId()!)
      )
    ]);
 
