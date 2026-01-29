"use client";

import { StaticImageData } from "next/image";

type Props = {
  image: string;
  bg?: string | StaticImageData;
  cta?: string;
  tagline?: string;
  className?: string;
};

export default function BestProductPoster({
  image,
  bg,
  cta = "Ver producto",
  tagline = "Descubre los nuevos productos que tenemos para ti",
  className = "",
}: Props) {
  if (!image) return null;

  const bgUrl = typeof bg === "string" ? bg : bg?.src;


  return (
    <article
      className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-2xl"
      style={
        bgUrl
          ? {
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="relative mx-auto aspect-[5/4] w-[92%] sm:aspect-[4/3] lg:aspect-[16/9]">
        <img
          src={image ?? "/not-found.png"}
          alt="Imagen del mejor producto"
          className="h-full w-full object-contain"
        />
      </div>
    </article>
  );
}
