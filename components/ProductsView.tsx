import { Product, Category } from "@/sanity.types";
import ProductGrid from "./ProductGrid";


interface ProductsViewProps {
    products: Product[];
    categories:Category[]
}



const  ProductsView = ({ products ,categories} : ProductsViewProps) => {
    return (
         <div className="flex flex-col"> 
        {/* {categories} */}

            <div className="w-full sm:w-[200px]">
                 {/* <categorySelectorComponent categories={categories}/> */}

            </div>

            {/* {products} */}

        <div>
            <div>
                <ProductGrid products={products} />

                {/* <hr className="w-1/2 sm:w-3/4" /> */}
            </div>
        </div>
    </div>
    )
}
export default  ProductsView;