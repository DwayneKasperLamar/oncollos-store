"use client";

import { Product} from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";

function ProductGrid({ products }: { products: Product[] }) {
    return(
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products?.map((product) => (
                    <AnimatePresence key={product._id}>
                        <motion.div
                            layout 
                            initial={{opacity:0.2}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            className="h-full min-h-[400px]"
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