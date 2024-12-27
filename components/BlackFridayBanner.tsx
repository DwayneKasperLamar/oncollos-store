import { getActiveSaleByCouponCode } from "@/sanity/lib/Sales/getActiveSaleByCouponCode";

async function BlackFridayBanner() {
    const sale = await getActiveSaleByCouponCode ("BFRIDAY");
        if (!sale.isActive) {
            return null
        }
    
    return <div>Black Fiday</div>
}

export default BlackFridayBanner;