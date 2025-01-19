import { getProductBySlug } from "@/sanity/lib/products/getProductsBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { imageUrl } from "@/lib/imageUrl";

const ProductPage = async ({params,}
  : {
  params:Promise<{ slug: string }>;
}) => {
  
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">Date Goes here</p>
        <div className="heading">
          {Array.isArray(product.description) && (
            <PortableText value={product.description} />
          )}
        </div>
        <p className="sub-heading !max-w-5xl"></p>

        <div className={`relative aspects-sqaure overflow-hidden rounded-lg, shadow-lg  ${isOutOfStock ? "opacity-50" : ""}`}>
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductPage;