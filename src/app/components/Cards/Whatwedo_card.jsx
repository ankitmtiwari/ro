import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

function Whatwedo_card(props) {
  return (
    <>
      {/* <div className=" bg-black w-fit rounded-lg">
        <div className="relative group">
          <Image src={props.link} height={400} width={200} className="p-0" />
        </div>
      </div> */}
      <div className=" bg-white rounded-md ">
        <div className="w-fit relative  opacity-80 hover:opacity-100 duration-200">
          <Image className="rounded-md" src={props.link} height={400} width={400} />
          <div className="absolute font-bold text-white text-3xl  top-44 left-10">
            {props.name}
          </div>
          <div className="right_arrow_parent absolute bg-white mx-auto rounded-full p-8 -bottom-10 left-36  ">
            <IoIosArrowForward  className="right_arrow" size={22}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatwedo_card;
