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

  const whatsapp = "+918655475886";
  const email = "devrajpathak093@gmail.com";
  // const logo= "https://res.cloudinary.com/da5scjnwh/image/upload/v1697367379/RO-IMAGES/cmutw27fbgwvlvsj5yfx.png";
  // const logo= "https://res.cloudinary.com/da5scjnwh/image/upload/v1697369204/RO-IMAGES/xvfohueml2tyr1ricdqg.png";
  // const logo= "https://res.cloudinary.com/da5scjnwh/image/upload/v1697386886/RO-IMAGES/yvrquerwywwkljyfyha3.png";
  // const logo="https://res.cloudinary.com/da5scjnwh/image/upload/v1697387088/RO-IMAGES/chg1zpfyeac5tal4u7a7.png";
  const logo =
    "https://res.cloudinary.com/da5scjnwh/image/upload/v1697387180/RO-IMAGES/vczuhhoylibdult5i08s.png";

  return (
    <>
      {/* for laptop and big size */}
      <div
        id="header"
        className="hidden sm:block z-50 bg-[#00A8FF] w-full  h-28 relative"
      >
        <div className=" sm:mx-36 pt-4">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <div className="sm:flex  align-middle items-center sm:gap-10">
              <Link href={`https://api.whatsapp.com/send/?phone=${whatsapp}`}>
                <div className="cursor-pointer flex sm:justify-between align-middle items-center gap-2 p-1 sm:p-0">
                  <div>
                    {/* <BsTelephone color="white" size={22} /> */}
                    <AiOutlineWhatsApp color="white" size={22} />
                  </div>
                  <div className="text-white text-md font-normal">
                    {whatsapp}
                  </div>
                </div>
              </Link>
              <Link href={`mailto:${email}`}>
                <div className="cursor-pointer flex sm:justify-between p-1 sm:p-0 align-middle items-center gap-2">
                  <div>
                    <TfiEmail color="white" size={22} />
                  </div>
                  <div className=" text-white text-md font-normal">{email}</div>
                </div>
              </Link>
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
          <div className=" bg-white lg:mx-36 px-1 py-2 sm:px-7 sm:py-5  rounded-lg border-b-slate-300 border-b-2">
            <div className="flex justify-between align-middle items-center">
              <div>
                <Link href={"/"}>
                  <Image
                    src={
                      logo
                      // "https://res.cloudinary.com/da5scjnwh/image/upload/v1696169160/RO-IMAGES/fjfigtpm4zmrgb4hiou4.png"
                      // "https://res.cloudinary.com/da5scjnwh/image/upload/v1697366973/RO-IMAGES/hvqv0jdwlksxypai5zkp.jpg"
                      // "https://res.cloudinary.com/da5scjnwh/image/upload/v1697367238/RO-IMAGES/pzpu8fovkvua1rlfj6i4.jpg"
                      // "https://res.cloudinary.com/da5scjnwh/image/upload/v1697367379/RO-IMAGES/cmutw27fbgwvlvsj5yfx.png"
                      // "https://www.canva.com/design/DAFxUiL0GLE/_b_uGDd-Ztfg_LDsAsPSgQ/edit?utm_content=DAFxUiL0GLE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    }
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="sm:block hidden ">
                <div className="flex align-middle items-center gap-8 ">
                  <Link href={"/"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Home
                    </div>
                  </Link>
                  <Link href={"/#home_products"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Products
                    </div>
                  </Link>
                  <Link href={"/#whatwedo"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Services
                    </div>
                  </Link>
                  <Link href={"/about"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      About
                    </div>
                  </Link>
                  <Link href={"/#why_us"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Why Us
                    </div>
                  </Link>
                  <Link href={"/#footer"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Contacts
                    </div>
                  </Link>
                  <Link href={"/#articles"}>
                    <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                      Blogs
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
      <div
        id="header"
        className="block sm:hidden top-0 sticky left-0 z-20  w-full border-b-slate-300 border-b-2 rounded-b-lg"
      >
        <div className="bg-white lg:mx-36 px-1 py-2 sm:px-7 sm:py-5  rounded-b-lg ">
          <div className="flex justify-between align-middle items-center">
            <div>
              <Link href={"/"}>
                <Image
                  src={
                    logo
                    // "https://res.cloudinary.com/da5scjnwh/image/upload/v1696169160/RO-IMAGES/fjfigtpm4zmrgb4hiou4.png"
                  }
                  width={90}
                  height={90}
                />
              </Link>
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
                    // "https://res.cloudinary.com/da5scjnwh/image/upload/v1696169160/RO-IMAGES/fjfigtpm4zmrgb4hiou4.png"
                    logo
                  }
                  width={100}
                  height={80}
                  className="w-fit"
                />
              </div>
              <div className="mx-auto mt-auto" onClick={handleNav}>
                <AiOutlineClose size={40} color="white" />
              </div>
            </div>
            <div className="flex flex-col ml-3 mt-5  text-white gap-8 ">
              <Link href={"/"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  Home
                </div>
              </Link>
              <Link href={"/#home_products"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  Products
                </div>
              </Link>
              <Link href={"/#whatwedo"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  Services
                </div>
              </Link>
              <Link href={"/about"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  About
                </div>
              </Link>
              <Link href={"/#why_us"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600">
                  Why Us
                </div>
              </Link>
              <Link href={"/#footer"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer border-b border-gray-600 ">
                  Contacts
                </div>
              </Link>
              <Link href={"/#articles"} onClick={handleNav}>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                  Blogs
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
