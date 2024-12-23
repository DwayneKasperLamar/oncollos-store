import {Product} from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import {imageUrl} from "@/lib/ImageUrl";

function ProductThumb({product}:{ product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

    // Extract text from block content
    const getBlockText = (blocks: Product['description']) => {
        if (!blocks || !Array.isArray(blocks)) return "No description available";
        
        return blocks
            .filter(block => block._type === 'block' && block.children)
            .map(block => 
                block.children
                    ?.map(child => child?.text || '')
                    .join('')
            )
            .join(' ');
    };

    return(
        <Link 
            href={`/product/${product.slug?.current}`} 
            className={`group h-full bg-secondary rounded-lg shadow-sm hover:shadow-lg 
                transition-all duration-200 overflow-hidden flex flex-col
                ${isOutOfStock ? "opacity-50" : ""}`}
        > 
            <div className="relative w-full aspect-square bg-gray-100">
                {product.image?.asset && (
                    <Image
                        className="absolute inset-0 w-full h-full object-contain p-2"
                        src={imageUrl(product.image).url()}
                        alt={product.name || "Product image"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                )}
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span className="text-white font-bold text-lg">
                            Out Of Stock
                        </span>
                    </div>
                )}
            </div>
            <div className="flex flex-col flex-grow p-4 space-y-2 bg-white">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                    {product.name}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2 min-h-[2.5rem]">
                    {getBlockText(product.description)}
                </p>
                <p className="text-lg font-bold text-gray-900 mt-auto pt-2">
                    ${product.price?.toFixed(2)}
                </p>
            </div>
        </Link> 
    )
}
    
export default ProductThumb;