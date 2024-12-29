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
            className={` bg-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-600 overflow-hidden w-full 
                ${isOutOfStock ? "opacity-50" : ""}`}
        > 
            <div className="relative w-full aspect-square bg-gray-100">
                {product.image?.asset && (
                    <Image
                        className="absolute inset-0 w-full h-full object-contain p-2 aspect-square rounded-md bg-gray-100 group-hover:opacity-75 lg:aspect-auto lg:h-80"
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
            <div className="mt-4 flex justify-evenly items-center w-full ">
                <h2 className="text-md text-black-500 p-15 font-medium">
                    {product.name}
                </h2>
                
                 {/* <h2 className="text-md text-gray-700 p-15">
                    {product.name}
                </h2> */}
                 <p className="font-bold text-black-500">
                    ${product.price?.toFixed(2)}
                </p>
            </div>
             <div className="p-3">
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2 p-5 ">
                    {getBlockText(product.description)}
                </p> 
                </div>
        </Link> 
    )
}
    
export default ProductThumb;