"use client";

import { Product} from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";

function ProductGrid({ products }: { products: Product[] }) {
    return(
        <div className="mb-1 mx-auto max-w-1xl px-4 py-44 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.map((product) => (
                    <AnimatePresence key={product._id}>
                        <motion.div
                            layout 
                            initial={{opacity:0.2}}
                            animate={{opacity:2}}
                            exit={{opacity:0}}
                            className="flex justify-center">

                            <ProductThumb key={product._id} product={product} />
                        </motion.div>
                    </AnimatePresence>
                ))}
        </div>
    );
}

export default ProductGrid;