import SearchForm from "../../components/SearchForm";
import {getAllProducts} from "@/sanity/lib/products/getAllProducts";



export default  async function Home({searchParams}: { searchParams: Promise<{ query: string }>;
}) {

    const query = (await searchParams).query;

     const products = await getAllProducts();
    

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
    </>
  )
}