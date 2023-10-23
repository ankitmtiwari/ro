import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
function Whatwedo_card(props) {
  return (
    <>
      <div className=" bg-white rounded-md mt-2 ">
        <div className="w-full relative mx-auto">
          {/* <div className="w-full opacity-80 hover:opacity-100 duration-200"> */}
          <div className="w-full ">
            <Image
              className="rounded-md h-96 w-96 m-auto"
              src={props.img}
              height={400}
              width={400}
            />
            <div className="absolute w-full font-bold text-white text-2xl  md:text-3xl  top-44 text-center">
              {props.name}
            </div>
            <Link href={props.goto}>
              <div className="flex justify-center">
                <div className="right_arrow_parent absolute bg-white mx-auto rounded-full border-2 p-8 -bottom-10 ">
                  <IoIosArrowForward className="right_arrow" size={22} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatwedo_card;
