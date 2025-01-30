import { getProductBySlug } from "@/sanity/lib/products/getProductsBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { imageUrl } from "@/lib/ImageUrl";
import { ShoppingBasket } from 'lucide-react';
import { Star } from 'lucide-react';
import { UserRound } from 'lucide-react';



async function ProductPage ({ params, }:{params:Promise<{
  slug: string;}>;
}){

  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">Date Goes here</p>
        <h1 className="heading">{product.name}</h1>
          <div className="sub-heading !max-w-5xl">
            <h1 className="flex-1">{product.category}</h1>
          </div>
         </section>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 broder-black">
              <div className={` relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}>

          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              width={600}
              height={200}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>


        <div>
          <div className="flex flex-col border border-black-100 bg-black-200 h-52 rounded-xl   p-8 m-20">

            <div className="text-xl text-white font-semibold flex mt-5">
              ${product.price?.toFixed(2)}
              </div>

              <div className="bg-black-100 w-40 rounded-xl mt-5">
                 <Star/> raitings 5.5
              </div>

              <div className="bg-black-100 w-40 rounded-xl mt-5 ">
                <UserRound /> 
              </div>
             
               {/* <div>
                 <button className="bg-black-300 w-40 flex justify-evenly p-3 text-sm rounded-xl">
                  <ShoppingBasket/>shopping</button>
               </div> */}
                
           </div>

                <div className="absolute mt-30 p-8 border border-black m-10"> 

              {Array.isArray(product.description) && (
              <PortableText value={product.description} />
            )}
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;