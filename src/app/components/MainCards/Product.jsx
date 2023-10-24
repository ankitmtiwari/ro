"use client";
import React, { useState } from "react";
import Product_card from "../Cards/Product_card";
import { FaUnsplash } from "react-icons/fa";
import Link from "next/link";
function Product() {
  const [show_more, setShow_more] = useState(false);

  function handleShowMore() {
    setShow_more(!show_more);
  }

  return (
    <>
      <div id="home_products" className="bg-[#F4FAFE] py-8">
        <div className="text-center py-8">
          <div className="text-blue-400 text-xl font-bold py-4">
            Most Popular
          </div>
          <div className="text-black text-5xl font-bold">Products</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-10 mx-5 lg:mx-36">
          {/* <div className='grid grid-cols-4 gap-10 mx-36 py-5'> */}
          <Product_card pid="1" />
          <Product_card pid="2" />
          <Product_card pid="3" />
          <Product_card pid="4" />
        </div>

        {/* <div
          className={
            show_more
              ? "grid grid-cols-2 lg:grid-cols-4 gap-5 pb-10 mx-5 lg:mx-36 "
              : "hidden"
          }
        >
          <Product_card name={"water-5"} price={"5000.00"} className="p-2" />
          <Product_card name={"water-6"} price={"6000.00"} className="p-2" />
          <Product_card name={"water-7"} price={"7000.00"} className="p-2" />
          <Product_card name={"water-8"} price={"8000.00"} className="p-2" />
        </div>
        <div
          onClick={handleShowMore}
          className="right-0 m-1 bg-slate-600 w-fit p-1 cursor-pointer text-white rounded-md "
        >
          {show_more ? "View Less" : "View More"}
        </div> */}
        <Link href={"/products/all_products"}>
          <div className="flex justify-center p-3 py-6">
            <div className="bg-[#00A8FF] px-6 py-4 text-white text-lg font-semibold rounded-full w-fit hover:bg-black hover:text-white  transition-all ease-in-out delay-100 cursor-pointer">
              View All Products
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Product;
