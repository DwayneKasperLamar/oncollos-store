import {Product} from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import {imageUrl} from "@/lib/ImageUrl";

function ProductThumb({product}:{ product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

    // Extract plain text from Portable Text description
    const getPlainText = (blocks: Product['description']) => {
        if (!blocks) return "No description available";
        return blocks
            .map(block => block.children
                ?.map(child => child.text)
                .join('') || '')
            .join(' ');
    };

    return(
        <Link href={`/product/${product.slug?.current}`} className={`group flex flex-col bg-primary rounded-lg border border-black-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
        > 
        <div className="relative aspect-square w-full overflow-hidden">
            {product.image?.asset && (
                <Image
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    src={imageUrl(product.image).url()}
                    alt={product.name || "Product image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            )}
            {isOutOfStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-primary font-bold text-lg">
                    Out Of Stock
                    </span>
                </div>
            )}
        </div>
        <div className="p-4">
            <h2 className="text-lg font-semibold text-secondary-800 truncate">
                {product.name}
            </h2>
            <p className="mt-2 text-sm text-secondary-600 line-clamp-2">
                {getPlainText(product.description)}
            </p>
            <p className="mt-2 text-lg font-bold text-gray-900">
                ${product.price?.toFixed(2)}
            </p>
        </div>
        </Link> 
    )
}
    
export default ProductThumb;