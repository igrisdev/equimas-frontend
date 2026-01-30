import { getBestProductPoster } from "@/lib/shopify";
import BestProductPoster from "./best-product-poster";

import Fondo from "@/assets/images/fondo1.png";
import { Star } from "lucide-react";
import Link from "next/link";
import { AnimationButtonAppears } from "@/components/layout/navbar/navbar";

const InfoBestProduct = ({ bestProductInfo }: { bestProductInfo: any }) => {
  return (
    <section>
      <div className="sticky top-25 flex h-fit w-full flex-col">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <div className="mt-2">
          <span className="text-md font-light text-blue-400">
            Nuestro Mejor Producto
          </span>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:gap-8">
          <h2 className="text-xl font-semibold sm:text-2xl">
            {bestProductInfo.product.title}
          </h2>

          <span className="text-lg font-bold sm:text-2xl">$999.200</span>
        </div>

        <div className="mt-6">
          <h3 className="text-md text-blue-400">Descripción</h3>
          <hr className="mt-2 border-gray-500" />

          <p className="mt-4 text-sm text-gray-300">
            {bestProductInfo.product.description}
          </p>
        </div>

        <div className="mt-8">
          <AnimationButtonAppears firstColor="bg-blue-500" hidden={false}>
            <Link
              href={`/product/${bestProductInfo.product.handle}`}
              className="font-medium uppercase"
            >
              <span>Agregar al Carrito</span>
            </Link>
          </AnimationButtonAppears>
        </div>
      </div>
    </section>
  );
};

export const NewProducts = async () => {
  // const carouselNewProducts = await getNewProducts();
  const bestProductInfo = await getBestProductPoster();
  if (!bestProductInfo?.product) return null;

  return (
    <section className="max-w-8xl relative mx-auto mt-20 w-full px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {bestProductInfo.product.images.map((image, index) => (
            <BestProductPoster key={index} image={image} bg={Fondo} />
          ))}
        </section>

        <InfoBestProduct bestProductInfo={bestProductInfo} />
      </div>
    </section>
  );
};

{
  /* <Suspense fallback={<div className="h-72"></div>}>
  <CarouselProducts products={carouselNewProducts} />
</Suspense> */
}
