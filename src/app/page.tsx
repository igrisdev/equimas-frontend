import type { Metadata } from "next";

import { Hero } from "@/components/home/hero/hero";
import { Bonds } from "@/components/home/bonds";
import { NewProducts } from "@/components/home/new-products/new-products";
import { Categories } from "@/components/home/categories";
import { Brands } from "@/components/home/brands/brands";
import { Reviews } from "@/components/home/reviews/reviews";
import { Info } from "@/components/home/info";

export const metadata: Metadata = {
  title:
    "Equimas | Equipos de Acero: Asadores, Hornos y Estufas a Medida",
  description:
    "Venta de equipos de acero de alta calidad: asadores, hornos, estufas de mesa, ollas, calderos y módulos a medida. ¡Equipa tu cocina con expertos!",
  keywords: [
    "Equimas",
    "equipos de acero",
    "asadores de acero",
    "módulos a medida",
    "hornos de acero",
    "ollas y calderos",
    "estufas de mesa",
    "planchas para asar",
    "acero inoxidable Colombia",
  ],
  openGraph: {
    title: "Equimas | Equipos de Acero Profesional",
    description:
      "Descubre nuestra línea de asadores, hornos y módulos a medida en acero. Calidad y durabilidad para tu cocina.",
    url: "https://equimas.com.co",
    siteName: "Equimas",
    images: [
      {
        url: "/image.webp",
        width: 1200,
        height: 630,
        alt: "Equimas - Equipos de Acero",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default async function Home() {
  return (
    <div className="mb-10 flex flex-col gap-8">
      <Hero />
      <Reviews />
      <Categories />
      {/* <Brands /> */}
      <NewProducts />
      {/* <Bonds /> */}
      <Info />
    </div>
  );
}
