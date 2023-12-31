import React from "react";
import Image from "next/image";
import Link from "next/link";

function Article_card(props) {
  return (
    <>
      <div className=" bg-white  rounded-lg">
        <div className="relative opacity-80 hover:opacity-100 duration-200">
          <Image
            src={props.img}
            width={700}
            height={700}
            className="rounded-t-lg h-56"
          />
          <Link href={props.goto}>
            <div className="flex justify-start absolute -bottom-5 left-5">
              <div className="bg-[#00A8FF] px-9 py-2.5 text-white text-md rounded-full w-fit hover:bg-black hover:text-white  transition-all ease-in-out delay-200 cursor-pointer">
                Read More
              </div>
            </div>
          </Link>
        </div>
        <div className="py-6 px-8">
          <div className=" text-[21px] font-semibold my-5">{props.title}</div>
          <div className="text-md mb-4 line-clamp-2">{props.desc}</div>
        </div>
      </div>
    </>
  );
}

export default Article_card;
