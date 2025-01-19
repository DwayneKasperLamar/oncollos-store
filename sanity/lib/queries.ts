// import { defineQuery } from "next-sanity";


// export const PRODUCT_BY_ID_QUERY = defineQuery(`

//   *[ _type == "product" && slug.current == $slug

//   ] | order(name asc) [0]
// `);

//   try {
//     const product = await sanityFetch({
//       query: All_PRODUCTS_QUERY,
//       params: {
//         slug,
//       },
//     });

//     return product.data || null;
//   } catch (error) {
//     throw new Error("Error fetching products:", error as Error);
//     return [];
//   }
// };