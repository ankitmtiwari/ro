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
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680852260/unnamed_1_jlbvlt.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680857480/623dd76470712bdafc63c387_lirqci.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680857572/61fc00073cf0e70004222069_yvthrq.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680857714/godrej-logo_rcddqd.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680858356/93-931406_png-logos_p40x03.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680859228/IIFL-Finance_gwnej9.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680859697/SeekPng.com_new-logo-png_2468404_a4oihu.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680869215/Group_12971_rve33y.png",
    },
  
    {
      img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680869219/Group_12973_nutkmi.png",
    },
]

function All_brands_card() {
  return (
    <>
    <div className=" text-white  lg:pt-8">
        <div className="container m-auto">
            <div className=" border-2 border-white py-5 lg:py-8 mx-5 lg:mx-0">
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
                      slidesPerView: 4,
                      spaceBetween: 4,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {Logodata.map((item, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <div className="relative h-20 w-24 sm:w-28 lg:h-28 fill-white stroke-white mx-3">
                        <Image
                          src={item.img}
                          layout="fill"
                          objectFit="contain"
                          className=" h-fit w-fit "
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