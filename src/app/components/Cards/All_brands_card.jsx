"use client"

import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {  Pagination ,Autoplay} from "swiper/modules";

const Logodata = [
  
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758449/RO-IMAGES/hkdxvt0mjf1yh6d2yelb.svg",
    },
  
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758959/RO-IMAGES/ucbotjp8axmi0sqjdxwk.svg",
    },
  
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758960/RO-IMAGES/geuqwrh0hoxr81cb6sh0.jpg",
    },
  
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758959/RO-IMAGES/ajeox2e5kbbjjsdgyy8v.webp",
    },
  
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696759254/RO-IMAGES/b27454firsj8om8yebzu.webp",
    },
  
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696759254/RO-IMAGES/bzler0ndan58e28fqalh.png",
    },
  
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696759967/RO-IMAGES/ynvn2p7xn0shqnig97rc.jpg",
    },
  
   
]

function All_brands_card() {
  return (
    <>
    <div className=" text-white  lg:pt-8">
        <div className="container m-auto">
            <div className="  border-white py-5 lg:py-8 sm:mx-5 lg:mx-0">
              <div className="">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={2}
                //   freeMode={true}
                  // pagination={{
                  //   clickable: true,
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[ Pagination,Autoplay]}
                  className="mySwiper"
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 2,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 4,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {Logodata.map((item, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <div className="relative h-20 w-24 sm:w-28 lg:h-28 fill-white stroke-white mx-auto">
                        <Image
                          src={item.img}
                          // layout="fill"
                          // objectFit="contain"
                          height={100}
                          width={100}
                          className=" h-24 w-24"
                          alt="logo img"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default All_brands_card