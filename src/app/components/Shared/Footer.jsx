import React from "react";
import { AiFillInstagram, AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GrMail, GrMailOption } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbCalendarEvent } from "react-icons/tb";
import Link from "next/link";

function Footer() {
  // const logo= "https://res.cloudinary.com/da5scjnwh/image/upload/v1697369204/RO-IMAGES/xvfohueml2tyr1ricdqg.png";
  const logo = "/aardhya_aqua_solution_footer_logo.png";
  // "https://res.cloudinary.com/da5scjnwh/image/upload/v1697386886/RO-IMAGES/yvrquerwywwkljyfyha3.png";

  return (
    <>
      <div
        id="footer"
        className="relative  w-full h-full bg-cover bg-top lg:overflow-x-hidden"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1683355353/background_footer_01_f0jbex.jpg)",
        }}
      >
        <div className="py-16 ">
          {/* <div className=" text-white bg-[rgba(255,255,255,0.1)] mt-10 mx-5 lg:mx-16 py-14">
            <div className="flex flex-col lg:flex-row justify-between align-middle items-center mx-2 lg:mx-10 ">
              <h1 className="text-[2rem] lg:text-[2.5rem] pb-4 lg:pb-0 text-center">
                Getting Confused !!
              </h1>
              <h1 className="text-[1rem] lg:text-[1.5rem] pb-4 lg:pb-0 text-center">
                While selecting safest water purifier for your family
              </h1>
              <div className="border px-5 py-3 border-[#01cab8] hover:bg-[#01cab8] hover:text-white flex justify-between align-middle items-center gap-4">
                <TbCalendarEvent size={22} color="" className="" />
                <h1>Schedule meeting</h1>
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-3 text-white py-10 mx-5 lg:mx-16 gap-5">
            <div className="col-span-1">
              <div>
                <img src={logo} className="h-28 w-40" />
              </div>
              <div className="text-sm mt-5 leading-[1.5rem]">
                We bring the years, global experience, and purity to guide our
                clients through new and often disruptive realities.
              </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between gap-5">
              <div className="col-span-1">
                <h1 className="mb-4 text-[1rem] font-[500]">Services</h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5 cursor-pointer">
                  Water Purifier Servicing
                </h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5 cursor-pointer">
                  A.C. Servicing
                </h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5 cursor-pointer">
                  Washing Machine Servicing
                </h1>
              </div>
              <div className="col-span-1">
                <h1 className="mb-4 text-[1rem] font-[500]">
                  Available Brands
                </h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5">
                  <Link href={"/products/brands/KENT"}>Kent RO</Link>
                </h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5">
                  <Link href={"/products/brands/AQUAGUARD"}>Aquaguad</Link>
                </h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5">
                  <Link href={"/products/brands/HAVELLS"}>Havells</Link>
                </h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5">
                  <Link href={"/products/brands/AQUAFRESH"}> Aqua Fresh</Link>
                </h1>
                <h1 className="text-[13px] font-[400] hover:text-gray-400 pb-0.5">
                  <Link href={"/products/brands/LIVPURE"}>Livpure</Link>
                </h1>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="mb-4 text-[1rem] font-[500]">Connect</h1>
              <div>
                <div className="flex gap-4 justify-start my-5">
                  <div className="relative border  rounded-full border-white hover:fill-[#01cab8] cursor-pointer hover:bg-white  p-2 h-10 w-10 fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                    </svg>
                  </div>
                  <div className="relative border  rounded-full border-white hover:fill-[#d60e0e] cursor-pointer hover:bg-white  p-2 h-10 w-10 fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                    </svg>
                  </div>
                  <div className="relative border  rounded-full border-white hover:fill-[#2114dd] cursor-pointer hover:bg-white  p-2 h-10 w-10 fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fillRule="evenodd"
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative border  rounded-full border-white hover:fill-[#00A8FF] cursor-pointer hover:bg-white  p-2 h-10 w-10 fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                      <path d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 002.345-2.951 10.696 10.696 0 01-3.388 1.295 5.334 5.334 0 00-9.089 4.864A15.143 15.143 0 013.809 5.411a5.321 5.321 0 00-.721 2.683 5.33 5.33 0 002.372 4.439 5.323 5.323 0 01-2.416-.667v.067a5.335 5.335 0 004.279 5.23 5.336 5.336 0 01-2.409.092 5.34 5.34 0 004.983 3.705 10.699 10.699 0 01-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 008.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0028 6.937z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="">
                <div>
                  <div className="flex justify-start align-middle items-center gap-2 pb-0.5">
                    <BsTelephoneFill size={12} />
                    <div className="text-[13px] font-[400]">+918655475886</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start align-middle items-center gap-2 pb-0.5">
                    <GrMail size={12} />
                    <div className="text-[13px] font-[400]">
                      devrajpathak093@gmail.com
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start align-middle items-center gap-2 pb-0.5">
                    <HiOutlineLocationMarker size={12} />
                    <div className="text-[13px] font-[400]">
                      Siddharth Nagar, UttarPradesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col lg:flex-row justify-start lg:justify-between lg:align-middle lg:items-center border-t border-white mx-5 lg:mx-16 pt-3 lg:pt-7 lg:gap-0 gap-3 ">
            <div className="text-[13px] font-[400]  ">
              ©2023 Aardhya Aqua Solutions. All rights reserved
            </div>
            <div className="  justify-start lg:justify-between align-middle items-center gap-5 lg:gap-10 lg:mr-20">
              <Link
                href={"https://www.linkedin.com/in/ankitmtiwari/"}
                target="new"
              >
                <div className="text-[13px] font-[400] hover:text-gray-400  cursor-pointer m-1">
                  Developed and Maintained By Ankit Tiwari
                </div>
              </Link>
              <div className="flex gap-5">
                <Link
                  href={"tel:+918104264836"}
                  target="new"
                  className="box-border border-2 rounded-md"
                >
                  <div className="text-[13px] font-[400] hover:bg-blue-400 rounded-md cursor-pointer py-1 px-2">
                    Call
                  </div>
                </Link>
                <Link
                  href={"https://api.whatsapp.com/send/?phone=7506145272"}
                  target="new"
                  className="box-border border-2 rounded-md"
                >
                  <div className="text-[13px] font-[400]  hover:bg-green-600 rounded-md  cursor-pointer py-1 px-2">
                    Whatsapp
                  </div>
                </Link>

                <Link
                  href={"mailto:tankit291389@gmail.com"}
                  target="new"
                  className="box-border border-2 rounded-md"
                >
                  <div className="text-[13px] font-[400] hover:bg-blue-400 rounded-md cursor-pointer py-1 px-2">
                    Mail
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
