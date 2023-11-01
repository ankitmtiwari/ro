"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function ImageSlider() {
  const slides = [
    {
      url: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696949127/RO-IMAGES/vlep3f4tf5rnszyh1j3o.jpg",
    },
    {
      url: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696949497/RO-IMAGES/wzy8bawpah2cvhpg4ktg.jpg",
    },
    {
      url: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696951387/RO-IMAGES/g1cpsltesymi6vewmwsz.webp",
    },
    {
      url: "https://res.cloudinary.com/da5scjnwh/image/upload/v1697279664/RO-IMAGES/ftvwsndemutajwpw8rue.png",
    },
  ];

  return (
    <>
      {/* FOR MOBILE SIZES */}
      <div id="imageSlider" className="bock sm:hidden p-1 rounded-md  ">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <img className="rounded-md" src={"/kent_purifier_banner"} alt="" />
          </SwiperSlide>
          {slides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <img className="rounded-md" src={slide.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* FOR BIG SCREENS LAPTOPS */}
      <div id="imageSlider" className="hidden sm:block sm:mt-0 p-1 rounded-md ">
        <Swiper
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <img className="rounded-md" src={slide.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ImageSlider;
