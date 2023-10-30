import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/app/all_prods";

function Product_card(props) {
  let img="";
  let name="";
  if(props.pid in products){
    img=products[props.pid].display_Image;
    name=products[props.pid].title ;
  }
  return (
    <>
      <Link href={`/products/${props.pid}`}>
        <div className=" bg-white  rounded-lg relative group cursor-pointer">
          <div id="parent" className="parent mx-auto ">
            <div>
              <Image
                src={img}
                width={300}
                height={800}
                className="p-2 sm:p-6 m-auto h-96"
              />
            </div>

            <div className="text-center p-2">
              <div
                id="child"
                className="child title font-bold text-lg group-hover:opacity-0 line-clamp-2"
              >
                {name}
              </div>
              {/* <div>${props.price}</div> */}
            </div>
            <div className="absolute  inset-0 rounded-lg bg-[#00A8FF] opacity-0 group-hover:opacity-50 transition-opacity duration-500">
              <div className="text-center absolute left-0  right-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-0">
                <div
                  id="child"
                  className="child title font-semibold text-lg  line-clamp-2 "
                >
                  {name}
                </div>
                {/* <div>${props.price}</div> */}
              </div>
            </div>

            <div className="absolute  inset-0 flex  justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-75">
              {/* <div className="transition-transform transform translate-y-2 group-hover:translate-y-0"> */}
              <div className="">
                <div className=" transform group-hover:translate-y-[400%] sm:group-hover:translate-y-[400%] duration-150 text-[#00A8FF]  px-4 py-3 sm:px-4 sm:py-3 bg-white text-base rounded-full w-fit hover:bg-black hover:text-white   transition-all ease-in-out delay-100 cursor-pointer">
                  <div className="font-semibold">View Details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product_card;
