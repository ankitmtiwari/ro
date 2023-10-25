"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import products from "@/app/all_prods";

function page({ params }) {
  const current_prod = params.prod;

  const img = products[current_prod].display_Image;
  const all_img = [img, ...products[current_prod].images];
  const title = products[current_prod].title;
  const desc = products[current_prod].desc;
  const reqDesc = products[current_prod].required_desc;
  const details = products[current_prod].details;

  const [bigImage, setBigImage] = useState(img);

  return (
    <>
      <div className="sm:mt-10 sm:px-40">
        <div className="sm:flex sm:flex-row m-2">
          <div className="font-bold text-xl mb-2 sm:hidden">{title}</div>
          <div className="flex flex-col">
            <div className=" h-96 w-fit border-[0.5px]">
              <Image
                src={bigImage}
                height={300}
                width={400}
                className="h-96 p-4 sm:p-5 object-contain"
              />
            </div>
            <div className="flex w-fit">
              {all_img.map((img_l) => (
                <div
                  className={`cursor-pointer box-border border-[0.5px] p-2 ${
                    img_l === bigImage ? "border-blue-500" : ""
                  }`}
                  onClick={() => setBigImage(img_l)}
                  onMouseEnter={() => setBigImage(img_l)}
                >
                  <Image
                    src={img_l}
                    height={300}
                    width={400}
                    className="h-10 w-10"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col px-2">
            <div className="font-bold text-xl hidden sm:block">{title}</div>
            <div className="hidden sm:block">
              {Object.keys(reqDesc).map((item, index) => (
                <div key={index} className="p-2">
                  <div className="flex justify-start ">
                    <div className="font-bold text-lg w-64">
                      {item.toUpperCase()} :
                    </div>
                    <div className="text-lg w-30">{reqDesc[item]}</div>
                  </div>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <div className="py-3">
          <div className="text-xl my-2 font-semibold">
            Product Description :
          </div>
          {Object.keys(details).map((item, index) => (
            <div key={index} className={`rounded-md px-1 p-2 m-auto`}>
              <div className="font-bold text-lg">{item.toUpperCase()} :</div>
              <div className="text-lg">{details[item]}</div>
            </div>
          ))}
        </div>
        <div className="py-3">
          <div className="text-xl my-2 font-semibold">
            Specifications/Features:
          </div>
          <div className="mb-1">
            {Object.keys(desc).map((item, index) => (
              <div
                key={index}
                className={`flex justify-between rounded-md px-1 ${
                  index % 2 == 0
                    ? "bg-blue-300 text-white"
                    : "bg-white text-black"
                }  p-2 m-auto`}
              >
                <div className="font-bold text-lg">{item.toUpperCase()} :</div>
                <div className="text-lg">{desc[item]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
