import {Product} from "@/sanity.types"
import Link from "next/link";


function ProductThumb({product}:{ product: Product }) {
const isOutofStock = product.stock != null && product.stock <= 0;

    return(
        <Link href={`/product/${product.slug?.current}`} className={`group flex flex-col bg0-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutofStock ? "opacity-50 cursor-not-allowed" : ""}`}>

            Product
        </Link> 
    )
}
    
export default ProductThumb;
