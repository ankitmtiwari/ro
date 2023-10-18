"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

function page({ params }) {
  const current_prod = params.prod;
  const products = {
    1: {
      display_Image:
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
      images: [
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
      ],
      title:
        "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection",
      desc: {
        Model_Name: "abc23",
        Series: "a-23",
        Color: "wHITE",
        "Total Capacity": "100LTR",
        "Purifying Technology": "RO-UF+",
        "Power Requirement": "240W.",
        "Operating Voltage": "22V",
        "Power Consumptio": "3400",
        "Electrical Type": "DC",
        "Purification Features": "RO+UF+ULTRA",
        "Detachable Storage Tank": "YES",
        "Auto Shut Off": "YES",
        "Auto Start": "NO",
        "Overflow Protection": "YES",
        "Child Lock": "YES",
        "Filter Life": "100000LTR",
        "Filter Type": "7 LAYERS",
        "Membrane Type": "DONT KNOW",
        "Storage Tank Material": "PLASTIC",
        Indicators: "ON-OFF-PAUSE-WAIT",
        "Other Body Features": "NOTHING ",
        Alarms: "YES",
        "Other Convenience Features": "KYA BATAU",
        "Other Features": "NAHI PATA",
        "Filtration Capacity": "100LTR",
        "Purification Capacity": "100LTR",
        "Hot Water Capacity": "10LTR",
        "Hot Water Capacity": "10LTR",
        "Cold Water Dispenser": "YES",
        "Hot Water Dispenser": "YES",
        "Maximum Input Water Temperature": "45",
        "Minimum Input Water Temperature": "5",
        "Installation Type": "wALL-MOUNT",
        "Purification Stages": "7",
        "Total Dissolved Solids (TDS) Levels": "2255",
        "Water Flow Rate": "",
        Width: "100",
        Height: "500",
        Depth: "20",
        Weight: "50KG",
      },
    },
    2: {
      display_Image:
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp",
      images: [
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
      ],
      title:
        "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier",
      desc: {
        "Model Name": "abc23",
        Series: "a-23",
        Color: "wHITE",
        "Total Capacity": "100LTR",
        "Purifying Technology": "RO-UF+",
        "Power Requirement": "240W.",
        "Operating Voltage": "22V",
        "Power Consumptio": "3400",
        "Electrical Type": "DC",
        "Purification Features": "RO+UF+ULTRA",
        "Detachable Storage Tank": "YES",
        "Auto Shut Off": "YES",
        "Auto Start": "NO",
        "Overflow Protection": "YES",
        "Child Lock": "YES",
        "Filter Life": "100000LTR",
        "Filter Type": "7 LAYERS",
        "Membrane Type": "DONT KNOW",
        "Storage Tank Material": "PLASTIC",
        Indicators: "ON-OFF-PAUSE-WAIT",
        "Other Body Features": "NOTHING ",
        Alarms: "YES",
        "Other Convenience Features": "KYA BATAU",
        "Other Features": "NAHI PATA",
        "Filtration Capacity": "100LTR",
        "Purification Capacity": "100LTR",
        "Hot Water Capacity": "10LTR",
        "Hot Water Capacity": "10LTR",
        "Cold Water Dispenser": "YES",
        "Hot Water Dispenser": "YES",
        "Maximum Input Water Temperature": "45",
        "Minimum Input Water Temperature": "5",
        "Installation Type": "wALL-MOUNT",
        "Purification Stages": "7",
        "Total Dissolved Solids (TDS) Levels": "2255",
        "Water Flow Rate": "",
        Width: "100",
        Height: "500",
        Depth: "20",
        Weight: "50KG",
      },
    },
    3: {
      display_Image:
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
      images: [
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
      ],
      title:
        "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter",
      desc: {
        "Model Name": "abc23",
        Series: "a-23",
        Color: "wHITE",
        "Total Capacity": "100LTR",
        "Purifying Technology": "RO-UF+",
        "Power Requirement": "240W.",
        "Operating Voltage": "22V",
        "Power Consumptio": "3400",
        "Electrical Type": "DC",
        "Purification Features": "RO+UF+ULTRA",
        "Detachable Storage Tank": "YES",
        "Auto Shut Off": "YES",
        "Auto Start": "NO",
        "Overflow Protection": "YES",
        "Child Lock": "YES",
        "Filter Life": "100000LTR",
        "Filter Type": "7 LAYERS",
        "Membrane Type": "DONT KNOW",
        "Storage Tank Material": "PLASTIC",
        Indicators: "ON-OFF-PAUSE-WAIT",
        "Other Body Features": "NOTHING ",
        Alarms: "YES",
        "Other Convenience Features": "KYA BATAU",
        "Other Features": "NAHI PATA",
        "Filtration Capacity": "100LTR",
        "Purification Capacity": "100LTR",
        "Hot Water Capacity": "10LTR",
        "Hot Water Capacity": "10LTR",
        "Cold Water Dispenser": "YES",
        "Hot Water Dispenser": "YES",
        "Maximum Input Water Temperature": "45",
        "Minimum Input Water Temperature": "5",
        "Installation Type": "wALL-MOUNT",
        "Purification Stages": "7",
        "Total Dissolved Solids (TDS) Levels": "2255",
        "Water Flow Rate": "",
        Width: "100",
        Height: "500",
        Depth: "20",
        Weight: "50KG",
      },
    },
    4: {
      display_Image:
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
      images: [
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp",
        "https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp",
      ],
      title:
        "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter",
      desc: {
        "Model Name": "abc23",
        Series: "a-23",
        Color: "wHITE",
        "Total Capacity": "100LTR",
        "Purifying Technology": "RO-UF+",
        "Power Requirement": "240W.",
        "Operating Voltage": "22V",
        "Power Consumptio": "3400",
        "Electrical Type": "DC",
        "Purification Features": "RO+UF+ULTRA",
        "Detachable Storage Tank": "YES",
        "Auto Shut Off": "YES",
        "Auto Start": "NO",
        "Overflow Protection": "YES",
        "Child Lock": "YES",
        "Filter Life": "100000LTR",
        "Filter Type": "7 LAYERS",
        "Membrane Type": "DONT KNOW",
        "Storage Tank Material": "PLASTIC",
        Indicators: "ON-OFF-PAUSE-WAIT",
        "Other Body Features": "NOTHING ",
        Alarms: "YES",
        "Other Convenience Features": "KYA BATAU",
        "Other Features": "NAHI PATA",
        "Filtration Capacity": "100LTR",
        "Purification Capacity": "100LTR",
        "Hot Water Capacity": "10LTR",
        "Hot Water Capacity": "10LTR",
        "Cold Water Dispenser": "YES",
        "Hot Water Dispenser": "YES",
        "Maximum Input Water Temperature": "45",
        "Minimum Input Water Temperature": "5",
        "Installation Type": "wALL-MOUNT",
        "Purification Stages": "7",
        "Total Dissolved Solids (TDS) Levels": "2255",
        "Water Flow Rate": "",
        Width: "100",
        Height: "500",
        Depth: "20",
        Weight: "50KG",
      },
    },
  };

  const img = products[current_prod].display_Image;
  const all_img = [img, ...products[current_prod].images];
  const title = products[current_prod].title;
  const desc = products[current_prod].desc;

  const [bigImage, setBigImage] = useState(img);

  // function handleCurrentImage(cImg){
  //   setCurImage(cImg);
  // }

  return (
    <>
      <div className="p-2">
        <div className="font-bold text-xl">{title}</div>
        <div className="flex flex-row justify-start">
          <div className="p-0">
            {all_img.map((img_l) => (
              <div
                className="cursor-pointer p-2 mb-2 border-2   hover:border-blue-400"
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
          <div className="p-2 border-2">
            <Image src={bigImage} height={300} width={400} className="h-96 p-5" />
          </div>
        </div>
        {Object.keys(desc).map((item, index) => (
          <div
            key={index}
            className={`flex justify-between ${
              index % 2 == 0 ? "bg-blue-300 text-white" : "bg-white text-black"
            }  p-4 m-auto`}
          >
            <div className="font-bold text-xl">{item}</div>
            <div className="text-sm">{desc[item]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default page;
