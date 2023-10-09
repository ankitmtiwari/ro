import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail, TfiYoutube } from "react-icons/tfi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaBars, FaBarsStaggered } from "react-icons/fa";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="bg-[#00A8FF] w-full  h-28  sm:relative">
        <div className=" sm:mx-36 pt-4">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <div className="sm:flex  align-middle items-center sm:gap-10">
              <div className="flex sm:justify-between align-middle items-center gap-2 p-1 sm:p-0">
                <div>
                  <BsTelephone color="white" size={22} />
                </div>
                <div className="text-white text-md font-normal">235678421</div>
              </div>
              <div className="flex sm:justify-between p-1 sm:p-0 align-middle items-center gap-2">
                <div className="">
                  <TfiEmail color="white" size={22} />
                </div>
                <div className=" text-white text-md font-normal">
                  support@sitemane.com
                </div>
              </div>
            </div>
            <div className="flex gap-4 pb-1 sm:p-0">
              <BiLogoFacebook size={20} className="nvicon" />
              <AiOutlineTwitter size={20} className="nvicon" />
              <TfiYoutube size={20} className="nvicon" />
            </div>
          </div>
        </div>
        <div className="sm:absolute w-full sm:top-14">
          <div className="bg-white lg:mx-36 px-1 py-2 sm:px-7 sm:py-5  rounded-lg ">
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
              <div className="sm:hidden block">
                    <FaBars size={20} />
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
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-red-400 h-40">sdfgsdfgdfg</div> */}

      {/* <div className="container mx-auto w-full">
        <div>dfuighgh</div>
      </div> */}
    </>
  );
}

export default Header;
