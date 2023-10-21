import React from "react";
import Image from "next/image";
const dj = [{ name: "hdghgf" }, { name: "atul" }];

function Why_us_card(props) {
  return (
    <>
      <div className="offer_parent bg-white ">
        <div className=" w-fit p-5 mx-auto  ">
          <div className=" p-11 rounded-full">
            <Image
              src={
                props.img
                // "https://res.cloudinary.com/da5scjnwh/image/upload/v1697897022/RO-IMAGES/flfkbmodshejlkhkojm9.png"
              }
              // objectFit="contain "
              // layout="fixed"
              //   fill={true}
              width={100}
              height={100}
              className="h-40 w-40 mx-auto object-fill"
            />
            {/* <img
              alt="Burger"
              class="rounded-full h-16 mx-auto sm:h-28 md::h-32 lg:h-44 cursor-pointer hover:rotate-[5deg] transition duration-500 ease-in-out hover:opacity-60 my-2 sm:my-5 "
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693807794/istockphoto-807031028-2048x2048_1_fvirpc.jpg"
            /> */}
          </div>
        </div>
        <div className="text-center">
          <div className="offer_child text-2xl font-bold my-3.5">
            {props.title}
          </div>
          <div className="text-md line-clamp-3 px-8">{props.desc}</div>
        </div>
      </div>
      {/* <div>
        {dj.map((item, index) => (
          <div>{str(item.name.charAt(0).toUpperCase()}</div>
        ))}
      </div> */}
    </>
  );
}

export default Why_us_card;
