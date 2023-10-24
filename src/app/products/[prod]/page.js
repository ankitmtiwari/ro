"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import products from "@/app/all_prods";

function page({ params }) {
  const current_prod = params.prod;
  // const products = {
  //   1: {
  //     display_Image:
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
  //     images: [
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
  //     ],
  //     title:
  //       "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection",
  //     required_desc: {
  //       Brand: "KENT",
  //       Model_Name: "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //     },
  //     desc: {
  //       Model_Name: "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //       "Electrical Type": "DC",
  //       "Purification Features": "RO+UF+ULTRA",
  //       "Detachable Storage Tank": "YES",
  //       "Auto Shut Off": "YES",
  //       "Auto Start": "NO",
  //       "Overflow Protection": "YES",
  //       "Child Lock": "YES",
  //       "Filter Life": "100000LTR",
  //       "Filter Type": "7 LAYERS",
  //       "Membrane Type": "DONT KNOW",
  //       "Storage Tank Material": "PLASTIC",
  //       Indicators: "ON-OFF-PAUSE-WAIT",
  //       "Other Body Features": "NOTHING ",
  //       Alarms: "YES",
  //       "Other Convenience Features": "KYA BATAU",
  //       "Other Features": "NAHI PATA",
  //       "Filtration Capacity": "100LTR",
  //       "Purification Capacity": "100LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Cold Water Dispenser": "YES",
  //       "Hot Water Dispenser": "YES",
  //       "Maximum Input Water Temperature": "45",
  //       "Minimum Input Water Temperature": "5",
  //       "Installation Type": "wALL-MOUNT",
  //       "Purification Stages": "7",
  //       "Total Dissolved Solids (TDS) Levels": "2255",
  //       "Water Flow Rate": "",
  //       Width: "100",
  //       Height: "500",
  //       Depth: "20",
  //       Weight: "50KG",
  //     },
  //   },
  //   2: {
  //     display_Image:
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp",
  //     images: [
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
  //     ],
  //     title:
  //       "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier",
  //     required_desc: {
  //       Brand: "LIVPURE",

  //       Model_Name: "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //     },
  //     desc: {
  //       "Model Name": "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //       "Electrical Type": "DC",
  //       "Purification Features": "RO+UF+ULTRA",
  //       "Detachable Storage Tank": "YES",
  //       "Auto Shut Off": "YES",
  //       "Auto Start": "NO",
  //       "Overflow Protection": "YES",
  //       "Child Lock": "YES",
  //       "Filter Life": "100000LTR",
  //       "Filter Type": "7 LAYERS",
  //       "Membrane Type": "DONT KNOW",
  //       "Storage Tank Material": "PLASTIC",
  //       Indicators: "ON-OFF-PAUSE-WAIT",
  //       "Other Body Features": "NOTHING ",
  //       Alarms: "YES",
  //       "Other Convenience Features": "KYA BATAU",
  //       "Other Features": "NAHI PATA",
  //       "Filtration Capacity": "100LTR",
  //       "Purification Capacity": "100LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Cold Water Dispenser": "YES",
  //       "Hot Water Dispenser": "YES",
  //       "Maximum Input Water Temperature": "45",
  //       "Minimum Input Water Temperature": "5",
  //       "Installation Type": "wALL-MOUNT",
  //       "Purification Stages": "7",
  //       "Total Dissolved Solids (TDS) Levels": "2255",
  //       "Water Flow Rate": "",
  //       Width: "100",
  //       Height: "500",
  //       Depth: "20",
  //       Weight: "50KG",
  //     },
  //   },
  //   3: {
  //     display_Image:
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
  //     images: [
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
  //     ],
  //     title:
  //       "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter",
  //     required_desc: {
  //       Brand: "AQUA FRESH",

  //       Model_Name: "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //     },
  //     desc: {
  //       "Model Name": "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //       "Electrical Type": "DC",
  //       "Purification Features": "RO+UF+ULTRA",
  //       "Detachable Storage Tank": "YES",
  //       "Auto Shut Off": "YES",
  //       "Auto Start": "NO",
  //       "Overflow Protection": "YES",
  //       "Child Lock": "YES",
  //       "Filter Life": "100000LTR",
  //       "Filter Type": "7 LAYERS",
  //       "Membrane Type": "DONT KNOW",
  //       "Storage Tank Material": "PLASTIC",
  //       Indicators: "ON-OFF-PAUSE-WAIT",
  //       "Other Body Features": "NOTHING ",
  //       Alarms: "YES",
  //       "Other Convenience Features": "KYA BATAU",
  //       "Other Features": "NAHI PATA",
  //       "Filtration Capacity": "100LTR",
  //       "Purification Capacity": "100LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Cold Water Dispenser": "YES",
  //       "Hot Water Dispenser": "YES",
  //       "Maximum Input Water Temperature": "45",
  //       "Minimum Input Water Temperature": "5",
  //       "Installation Type": "wALL-MOUNT",
  //       "Purification Stages": "7",
  //       "Total Dissolved Solids (TDS) Levels": "2255",
  //       "Water Flow Rate": "",
  //       Width: "100",
  //       Height: "500",
  //       Depth: "20",
  //       Weight: "50KG",
  //     },
  //   },
  //   4: {
  //     display_Image:
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
  //     images: [
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
  //       "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
  //     ],
  //     title:
  //       "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter",
  //     required_desc: {
  //       Brand: "AQUA FRESH",
  //       Model_Name: "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //     },
  //     desc: {
  //       "Model Name": "abc23",
  //       Series: "a-23",
  //       Color: "wHITE",
  //       "Total Capacity": "100LTR",
  //       "Purifying Technology": "RO-UF+",
  //       "Power Requirement": "240W.",
  //       "Operating Voltage": "22V",
  //       "Power Consumptio": "3400",
  //       "Electrical Type": "DC",
  //       "Purification Features": "RO+UF+ULTRA",
  //       "Detachable Storage Tank": "YES",
  //       "Auto Shut Off": "YES",
  //       "Auto Start": "NO",
  //       "Overflow Protection": "YES",
  //       "Child Lock": "YES",
  //       "Filter Life": "100000LTR",
  //       "Filter Type": "7 LAYERS",
  //       "Membrane Type": "DONT KNOW",
  //       "Storage Tank Material": "PLASTIC",
  //       Indicators: "ON-OFF-PAUSE-WAIT",
  //       "Other Body Features": "NOTHING ",
  //       Alarms: "YES",
  //       "Other Convenience Features": "KYA BATAU",
  //       "Other Features": "NAHI PATA",
  //       "Filtration Capacity": "100LTR",
  //       "Purification Capacity": "100LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Hot Water Capacity": "10LTR",
  //       "Cold Water Dispenser": "YES",
  //       "Hot Water Dispenser": "YES",
  //       "Maximum Input Water Temperature": "45",
  //       "Minimum Input Water Temperature": "5",
  //       "Installation Type": "wALL-MOUNT",
  //       "Purification Stages": "7",
  //       "Total Dissolved Solids (TDS) Levels": "2255",
  //       "Water Flow Rate": "",
  //       Width: "100",
  //       Height: "500",
  //       Depth: "20",
  //       Weight: "50KG",
  //     },
  //   },
  // };

  const img = products[current_prod].display_Image;
  const all_img = [img, ...products[current_prod].images];
  const title = products[current_prod].title;
  const desc = products[current_prod].desc;
  const reqDesc = products[current_prod].required_desc;

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
            {/* <div className="flex box-border border-[0.5px] w-fit"> */}
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
                    // onClick={() => setBigImage(img_l)}
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
                    <div className="font-bold text-lg w-64">{item.toUpperCase()} :</div>
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
            Description/Features:
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

      {/* <div className="sm:mt-10">
        <div className="sm:flex sm:gap-6 sm:px-16">
          <div className="font-bold text-xl mb-2 p-2 sm:hidden">{title}</div>
          <div className="">
            <div className=" h-96 box-border border-[0.5px]">
              <Image
                src={bigImage}
                height={300}
                width={400}
                className="h-96 p-4 sm:p-5 object-contain"
              />
            </div>
            <div className="flex box-border border-[0.5px] w-fit">
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
                    // onClick={() => setBigImage(img_l)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-bold text-xl hidden sm:block">{title}</div>
            <div className="flex flex-col justify-between my-2">
              <div>
                {Object.keys(reqDesc).map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-evenly ">
                      <div className="font-bold text-lg">{item}</div>
                      <div className="text-md">{desc[item]}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-green-600 w-20 m-2 p-2 px-5 rounded-md items-center align-middle text-white cursor-pointer bottom-0">
                <AiOutlineWhatsApp size={30} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-16 mb-1">
          {Object.keys(desc).map((item, index) => (
            <div
              key={index}
              className={`flex justify-between rounded-md px-1 ${
                index % 2 == 0
                  ? "bg-blue-300 text-white"
                  : "bg-white text-black"
              }  p-2 m-auto`}
            >
              <div className="font-bold text-lg">{item}</div>
              <div className="text-sm">{desc[item]}</div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default page;
