import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProducts = async () => {
  const All_PRODUCTS_QUERY = defineQuery(`
    *[ 
      _type == "product"
    ] {
      _id,
      name,
      slug,
      price,
      description,
      stock,
      image {
        asset->{
          _id,
          url
        }
      },
      categories[]->
    } | order(name asc)
    
  `);

  try {
    const product = await sanityFetch({
      query: All_PRODUCTS_QUERY,
    });

    return product.data || [];
  } catch (error) {
    throw new Error("Error fetching products:", error as Error);
    return [];
  }
};