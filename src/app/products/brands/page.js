import products from "@/app/all_prods";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const All_Brands = () => {
  const Logodata = [
    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758449/RO-IMAGES/hkdxvt0mjf1yh6d2yelb.svg",
      brand: "KENT",
    },

    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758959/RO-IMAGES/ucbotjp8axmi0sqjdxwk.svg",
      brand: "LIVPURE",
    },

    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758960/RO-IMAGES/geuqwrh0hoxr81cb6sh0.jpg",
      brand: "AQUAGUARD",
    },

    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696758959/RO-IMAGES/ajeox2e5kbbjjsdgyy8v.webp",
      brand: "HAVELLS",
    },

    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696759254/RO-IMAGES/b27454firsj8om8yebzu.webp",
      brand: "AQUAFRESH",
    },

    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696759254/RO-IMAGES/bzler0ndan58e28fqalh.png",
      brand: "VENUSAQUA",
    },

    {
      img: "https://res.cloudinary.com/da5scjnwh/image/upload/v1696759967/RO-IMAGES/ynvn2p7xn0shqnig97rc.jpg",
      brand: "",
    },
  ];

  var brands = {};
  Object.keys(products).map((id, index) => {
    brands[products[id].required_desc.Brand] = "";
  });

  return (
    <>
      <div className="text-center py-9">
        <div className="text-black text-5xl font-bold">Products By Brand</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-10 p-10 m-10">
        {Logodata.map((image, index) => (
          <Link href={`/products/brands/${image.brand}`}>
            <div
              key={index}
              className="flex justify-center w-fit p-4 rounded-lg text-5xl font-serif font-extrabold cursor-pointer hover:transition-transform hover:-translate-y-3 shadow-lg hover:shadow-gray-400"
            >
              <Image
                src={image.img}
                height={100}
                width={100}
                className="h-80 w-80"
              />
              {/* {image.brand} */}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default All_Brands;
