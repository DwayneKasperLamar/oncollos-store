import { getProductBySlug } from "@/sanity/lib/products/getProductsBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { imageUrl } from "@/lib/ImageUrl";


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
            
          </div>
         </section>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={` relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}>

          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              width={600}
              height={200}
              className="object-contain transition-transform duration-300 hover:scale-105 border border-black "
            />
          )}
          {isOutOfStock && (
            <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>
          <div className=" flex flex-col justify-between border border-black ">
            <div className="prose max-none"> 
            {Array.isArray(product.description) && (
              <PortableText value={product.description} />
            )}
            </div>
            <div className="text-xl font-semibold ">
              ${product.price?.toFixed(2)}
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;