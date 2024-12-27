"use client";

import { Product} from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";

function ProductGrid({ products }: { products: Product[] }) {
    return(
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                {products?.map((product) => (
                    <AnimatePresence key={product._id}>
                        <motion.div
                            layout 
                            initial={{opacity:0.2}}
                            animate={{opacity:2}}
                            exit={{opacity:0}}
                            className="h-full min-h-[400px] group relative"
                        >
                            <ProductThumb key={product._id} product={product} />
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;