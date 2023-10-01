import Image from "next/image";
import React from "react";

function Header() {
  return (
    <>
      <div className="bg-[#00A8FF] w-full h-28  relative">
        <div className="absolute w-full top-12">
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
                <div className="hover:text-[#00ABFF] text-lg font-medium cursor-pointer">
                  About
                </div>
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
