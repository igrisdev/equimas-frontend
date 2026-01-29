"use client";

import Link from "next/link";
// import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/home/presentation.css";

export const CarouselHero = ({ hero }: { hero: any[] }) => {
  return (
    <div className="relative max-h-[500px] min-h-[500px] overflow-hidden rounded-2xl">
      <Swiper
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper swiper-slide"
      >
        {hero.map((p) => (
          <SwiperSlide key={p.id}>
            <Link href={`/product/${p.handle}`} className="block h-full w-full">
              <img
                src={p?.image?.image?.url ?? "not-found.png"}
                alt={p.id}
                className="h-[600px] w-[1000px]"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
