import { getActiveSaleByCouponCode } from "@/sanity/lib/Sales/getActiveSaleByCouponCode";
import { COUPON_CODES } from "@/sanity/lib/Sales/CouponCode";


async function SalesBanner() {
    const Sales = await getActiveSaleByCouponCode(COUPON_CODES.NEWYEAR25);
        if (!Sales?.isActive) {
            return null;
        }
    
    return (
         <div className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
            SalesBanner
        {/* <div className="container mx-auto flex items-center justify-between">

        </div> */}
        </div>
    )
   
}

export default SalesBanner;