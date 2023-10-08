import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

function Whatwedo_card(props) {
  return (
    <>
      <div className=" bg-white rounded-md ">
        <div className="w-full relative  ">
          <div className="w-full opacity-80 hover:opacity-100 duration-200">
            <Image
              className="rounded-md w-full"
              src={props.link}
              height={400}
              width={400}
            />
            <div className="absolute w-full font-bold text-white text-2xl  md:text-3xl  top-44 text-center">
              {props.name}
            </div>
            <div className="flex justify-center">
              <div className="right_arrow_parent absolute bg-white mx-auto rounded-full p-8 -bottom-10   ">
                <IoIosArrowForward className="right_arrow" size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatwedo_card;
