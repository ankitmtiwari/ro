import React from "react";
import Image from "next/image";

function Product_card(props) {
  return (
    <>
      <div className=" bg-white  rounded-lg relative group">
        <div id="parent" className="parent mx-auto ">
          <Image
            src={props.img}
            width={300}
            height={800}
            className="p-2 sm:p-6 m-auto"
          />
          <div className="text-center p-2">
            <div id="child" className="child title font-bold text-lg group-hover:opacity-0">
             {props.name}
            </div>
            {/* <div>${props.price}</div> */}
          </div>
          <div className="absolute  inset-0 rounded-lg bg-[#00A8FF] opacity-0 group-hover:opacity-50 transition-opacity duration-500">

          <div className="text-center absolute left-0  right-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-0">
            <div id="child" className="child title font-semibold text-lg ">
            {props.name}
            </div>
            {/* <div>${props.price}</div> */}
          </div>
          </div>
       
          <div className="absolute  inset-0 flex r justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-75">
            {/* <div className="transition-transform transform translate-y-2 group-hover:translate-y-0"> */}
            <div className="transition-transform transform group-hover:translate-y-[50%] sm:group-hover:translate-y-[50%] duration-150">
            <div className='text-[#00A8FF]  px-4 py-3 sm:px-4 sm:py-3 bg-white text-base rounded-full w-fit hover:bg-black hover:text-white   transition-all ease-in-out delay-100 cursor-pointer'>
              <div className="font-semibold">
              View Details
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_card;
