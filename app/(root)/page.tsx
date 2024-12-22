import ProductsView from "@/components/ProductsView";
import SearchForm from "@/components/SearchForm";
import {getAllProducts} from "@/sanity/lib/products/getAllProducts";
import {getAllCategories} from "@/sanity/lib/products/getAllCategories";


export default  async function Home({searchParams}: { searchParams: Promise<{ query: string }>;
}) {

    const query = (await searchParams).query;
    const products = await getAllProducts();
     const categories = await getAllCategories();
    

    

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
           Furniture & Art that Reflect Your Personal Style
            </h1>
            <p className="sub-heading !max-w-3xl">
            Monetize Your Creativity: Upload Your Art and Start Earning with a Global Community of Creatives!
            </p>
            <SearchForm query={query}/>
      </section>
       
  

      <section className="section_conatiner">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Frame"}
        </p>

      </section>
       <div className="flex flex-col items-center justify-top min-h-screen bg-secondary-100 p4">
       <ProductsView products={products} categories={categories}/>
      </div>

    
    </>
  )
}