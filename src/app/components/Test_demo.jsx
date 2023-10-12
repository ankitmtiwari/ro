"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Test_demo() {
  return (
    <>
      <Swiper
        //  modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img
            className="img"
            src={"https://picsum.photos/id/111/1920/1080"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src={"https://picsum.photos/id/112/1920/1080"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src={"https://picsum.photos/id/113/1920/1080"}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Test_demo;
