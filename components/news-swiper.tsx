"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import { Button } from "./ui/button";
import { LeftArrow } from "./svg/left-arrow";
import RightArrow from "./svg/right-arrow";
import Link from "next/link";
import { GoToArrow } from "./svg/goto-arrow";

export function NewSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper"
    >
      <SwiperSlide style={{ height: 267 }} className="bg-yellow-400 ">
        Slide 2
      </SwiperSlide>
      <SwiperSlide
        style={{ height: 267 }}
        className=" overflow-hidden rounded-[10px] "
      >
        <Link
          href="https://www.cbc.ca/player/play/video/9.6631108"
          target="_blank"
          className="relative"
        >
          <img
            src="/slide_1.avif"
            alt="image slide one"
            className="h-full object-cover"
          />
          <GoToArrow className="absolute top-4 right-4" />
        </Link>
      </SwiperSlide>

      <SwiperNavigation />
    </Swiper>
  );
}

function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex gap-[35px] justify-center mt-7">
      <Button
        className="rounded-full w-[44.5px] h-[44.5px] bg-transparent border hover:bg-transparent cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <LeftArrow />
      </Button>
      <Button
        className="rounded-full w-[44.5px] h-[44.5px] bg-transparent border hover:bg-transparent cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <RightArrow />
      </Button>
    </div>
  );
}
