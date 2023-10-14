"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail, TfiYoutube } from "react-icons/tfi";
import { BiLogoFacebook } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineClose,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaBars, FaBarsStaggered } from "react-icons/fa";
import Link from "next/link";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* for laptop and big size */}
      <div className="hidden sm:block z-50 bg-[#00A8FF] w-full  h-28 relative">
        <div className=" sm:mx-36 pt-4">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <div className="sm:flex  align-middle items-center sm:gap-10">
              <div className="cursor-pointer flex sm:justify-between align-middle items-center gap-2 p-1 sm:p-0">
                <div>
                  {/* <BsTelephone color="white" size={22} /> */}
                  <AiOutlineWhatsApp color="white" size={22} />
                </div>
                <div className="text-white text-md font-normal">7506145272</div>
              </div>
              <div className="cursor-pointer flex sm:justify-between p-1 sm:p-0 align-middle items-center gap-2">
                <div>
                  <TfiEmail color="white" size={22} />
                </div>
                <div className=" text-white text-md font-normal">
                  dev.ankit.tiwari@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-4 pb-1 sm:p-0">
              {/* <BiLogoFacebook size={20} className="nvicon " /> */}
              <BiLogoFacebook
                size={20}
                className="nvicon border p-2 h-6 w-6 rounded-full border-white"
              />
              <AiOutlineTwitter
                size={20}
                className="nvicon border p-2 h-6 w-6 rounded-full border-white"
              />
              <TfiYoutube
                size={20}
                className=" nvicon border p-2 h-6 w-6 rounded-full border-white"
              />
            </div>
          </div>
        </div>
        <div className="sm:absolute w-full sm:top-14">
          <div className=" bg-white lg:mx-36 px-1 py-2 sm:px-7 sm:py-5  rounded-lg ">
            <div className="flex justify-between align-middle items-center">
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/da5scjnwh/image/upload/v1696169160/RO-IMAGES/fjfigtpm4zmrgb4hiou4.png"
                  }
                  width={170}
                  height={170}
                />
              </div>
              <div className="sm:block hidden ">
                <div className="flex align-middle items-center gap-8 ">
                  <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                    Home
                  </div>
                  <Link href={"#offeredServices"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      About
                    </div>
                  </Link>
                  <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                    Services
                  </div>
                  <Link href={"#home_products"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Products
                    </div>
                  </Link>
                  <Link href={"#footer"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Contacts
                    </div>
                  </Link>
                </div>
              </div>
              <div className="sm:hidden block" onClick={handleNav}>
                {!nav ? <FaBars size={20} /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for mobile and small size */}
      {/* <div className="block sm:hiddw-full sm:top-14 bock sm:hidden"> */}
      <div className="block sm:hidden top-0 sticky left-0 z-20  w-full  rounded-b-lg">
        <div className="bg-white lg:mx-36 px-1 py-2 sm:px-7 sm:py-5  rounded-b-lg ">
          <div className="flex justify-between align-middle items-center">
            <div>
              <Image
                src={
                  "https://res.cloudinary.com/da5scjnwh/image/upload/v1696169160/RO-IMAGES/fjfigtpm4zmrgb4hiou4.png"
                }
                width={170}
                height={170}
              />
            </div>
            <div className="sm:hidden block p-1" onClick={handleNav}>
              {!nav ? <FaBars size={20} /> : ""}
            </div>
          </div>
          <div
            className={
              nav
                ? "z-50 bg-[#000300] fixed left-0 h-full top-0 w-[70%] border-r border-r-gray-900 transition-all ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <div className="flex">
              <div className="p-4 w-fit bg-white  m-1 rounded-md ">
                <Image
                  src={
                    "https://res.cloudinary.com/da5scjnwh/image/upload/v1696169160/RO-IMAGES/fjfigtpm4zmrgb4hiou4.png"
                  }
                  width={120}
                  height={120}
                  className="w-fit"
                />
              </div>
              <div className="mx-auto mt-auto" onClick={handleNav}>
                <AiOutlineClose size={40} color="white" />
              </div>
            </div>
            <div className="flex flex-col ml-3 mt-5  text-white gap-8 ">
              <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                Home
              </div>
              <Link href={"#offeredServices"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  About
                </div>
              </Link>
              <Link href={"/"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  Services
                </div>
              </Link>

              <Link href={"#home_products"}  onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  Products
                </div>
              </Link>
              <Link href={"#footer"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                  Contacts
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
