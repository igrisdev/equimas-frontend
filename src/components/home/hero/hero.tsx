import { getHeroItems } from "@/lib/shopify";
import { CreditCard, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { CarouselHero } from "./carousel-hero";
import { Suspense } from "react";

import ImageAddi from "@/assets/logo/new_addi.png";
import ImageBanco from "@/assets/logo/new_banco_de_bogota.png";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export const Hero = async () => {
  const hero = await getHeroItems();

  return (
    <section className="max-w-8xl mx-auto flex w-full flex-col justify-evenly gap-8 overflow-hidden px-4 py-10">
      <Suspense fallback={<div></div>}>
        <CarouselHero hero={hero} />
      </Suspense>

      <InfoHero />
    </section>
  );
};

const InfoHero = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h1 className="hidden flex-1 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-4xl leading-tight font-extrabold text-transparent uppercase md:text-5xl lg:block lg:text-5xl xl:text-7xl">
        ¡El Arte de Asar al Siguiente Nivel!
      </h1>

      <section className="flex flex-1 flex-col gap-6 md:flex-row">
        <div className="flex max-w-xl flex-col gap-6">
          <p className="w-full text-sm text-white sm:text-base">
            Barriles Ahumadores y equipos industriales diseñados para durar toda
            la vida.
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text leading-tight font-extrabold text-transparent">
              {" "}
              Eleva el nivel de tu negocio gastronómico hoy mismo.
            </span>
          </p>

          <div className="flex flex-wrap gap-3 text-sm sm:text-base">
            <Link
              href="/search"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-700 sm:w-max"
            >
              <ShoppingBag size={18} />
              Explorar productos
            </Link>
            <Link
              href="/credit"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-500 bg-green-500 px-4 py-2 font-medium text-black hover:bg-green-400 sm:w-max"
            >
              <IconBrandWhatsapp />
              Contáctenos
            </Link>
          </div>
        </div>

        <ul className="flex gap-4 md:flex-col [&>li]:h-20">
          <li>
            <img
              src={ImageAddi.src}
              alt=""
              className="h-full w-full object-contain"
            />
          </li>
          <li>
            <img
              src={ImageBanco.src}
              alt=""
              className="h-full w-full object-contain"
            />
          </li>
        </ul>
      </section>
    </div>
  );
};
