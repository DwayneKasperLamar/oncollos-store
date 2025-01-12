import { defineQuery } from "next-sanity";
import { CouponCode } from "./CouponCode";
import { sanityFetch } from "../live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
    *[
      _type == "Sales"  
      && isActive == true
      && couponCode == $couponCode
    ] | order(validFrom desc)[0] // Corrected: Removed extra spaces
  `);

  try {
    const activeSales = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: {
        couponCode,
      },
    });
    return activeSales ? activeSales.data : null;
  } catch (error) {
    console.error("Error fetching coupon code", error);
    return null;
  }
};