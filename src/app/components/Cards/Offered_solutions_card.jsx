import React from "react";
import Image from "next/image";

function Offered_solutions_card(props) {
  return (
    <>
      <div className="offer_parent bg-white ">
        <div className=" w-fit p-5 mx-auto  ">
          <div className="bg-[#00A8FF] p-11 rounded-full">
            <Image
              src={
                "https://res.cloudinary.com/da5scjnwh/image/upload/v1696516749/RO-IMAGES/gluiaeowfz2y57hxfsci.png"
              }
              // objectFit="contain "
              // layout="fixed"
              //   fill={true}
              width={100}
              height={100}
              className="h-24 w-24 mx-auto rounded-full "
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
    </>
  );
}

export default Offered_solutions_card;
