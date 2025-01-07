import { getActiveSaleByCouponCode } from "@/sanity/lib/Sales/getActiveSaleByCouponCode";


async function SalesBanner() {
    const Sales = await getActiveSaleByCouponCode ("BFRIDAY");
        if (!Sales.isActive) {
            return null
        }
    
    return <div className="startup-card">
        Black Fiday</div>
}

export default SalesBanner;