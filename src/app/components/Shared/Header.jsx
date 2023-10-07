import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail,TfiYoutube } from "react-icons/tfi";
import { BiLogoFacebook } from "react-icons/Bi";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="bg-[#00A8FF] w-full h-28  relative">
        <div className="mx-36 pt-4">
          <div className="flex justify-between">
            <div className="flex  align-middle items-center gap-10">
              <div className="flex justify-between align-middle items-center gap-2">
                <div>
                  <BsTelephone color="white" size={22} />
                </div>
                <div className="text-white text-md font-normal">C 235678421</div>
              </div>
              <div className="flex justify-between align-middle items-center gap-2">
                <div className="">
                  <TfiEmail  color="white" size={22} />
                </div>
                <div className=" text-white text-md font-normal">support@sitemane.com</div>
              </div>
            </div>
            <div className="flex gap-4">
              <BiLogoFacebook  size={20} className="nvicon"/>
              <AiOutlineTwitter ize={20} className="nvicon"/>
              <TfiYoutube  size={20} className="nvicon"/>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-14">
          <div className="bg-white mx-36 px-7 py-5  rounded-lg ">
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
              <div className="flex align-middle items-center gap-8">
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
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                  Products
                </div>
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                  Contacts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-400 h-40">sdfgsdfgdfg</div>

      {/* <div className="container mx-auto w-full">
        <div>dfuighgh</div>
      </div> */}
    </>
  );
}

export default Header;
