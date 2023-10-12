"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function test() {
  return (
    <>
      <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         slidesPerView={1}
         navigation
         autoplay={{ delay: 1000 }}
         pagination={{ clickable: true }}
      >
        <SwiperSlide>HIII</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default test;
