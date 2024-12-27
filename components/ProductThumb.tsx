import {Product} from "@/sanity.types";
// import Link from "next/link";
import Image from "next/image";
import {imageUrl} from "@/lib/ImageUrl";
import { EyeIcon } from "lucide-react";

function ProductThumb({product}:{ product: Product }) {
    // const isOutOfStock = product.stock != null && product.stock <= 0;

    // Extract text from block content
    // const getBlockText = (blocks: Product['categories']) => {
    //     if (!blocks || !Array.isArray(blocks)) return "No description available";
        
    //     return blocks
    //         .filter(block => block._type === 'block' && block.children)
    //         .map(block => 
    //             block.children
    //                 ?.map(child => child?.text || '')
    //                 .join('')
    //         )
    //         .join(' ');
    // };

    return(
        <div className="startup-card group">
              <div className="flex-between">
               <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-secondary"/>
                    <Image
                        src={imageUrl(product.image).url()}
                        alt={product.name || "Product image"}
                        width={48}
                        height={48}
                        layout="responsive"
                        objectFit="contain"
                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.categories[0].title}</p>
                </div>
                

               </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    

                </div>

            </div>

          
  {/* <p className="text-lg font-bold text-gray-900 mt-auto pt-2">
                    ${product.price?.toFixed(2)}
                </p> */}

        </div> 
    )
}
    
export default ProductThumb;