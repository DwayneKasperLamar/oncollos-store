import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


// fucntion get all catergories from sanity
export const getAllCategories = async () => {
  const All_CATEGORIES_QUERY = defineQuery(`
    *[ 
      _type == "category"
    ] | order(name asc)
  `);

//this retruns empty when products is not found
  try {
    const categories = await sanityFetch({
      query: All_CATEGORIES_QUERY,
    });

    return categories.data || [];
  } catch (error) {
    throw new Error("Error fetching products:", error);
    return[];
  }
};