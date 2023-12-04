import React from "react";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Fixed_Floating = () => {
  const call = "8795550880";
  const whatsapp = "+918655475886";

  return (
    <>
      <div className="hidden mr-0 sm:block sticky bottom-0 z-20  w-fit p-2 ">
        <div className="p-1 m-1 ">
          {/* <div className="bg-green-400 p-2 m-2 rounded-lg text-white font-semibold cursor-pointer">
            Whatsapp
          </div>
          <div className="bg-blue-400 p-2 m-2 rounded-lg text-white font-semibold cursor-pointer">
            Call Now
          </div> */}
          <Link href={`https://wa.me/${whatsapp}`} target="new">
            <div className="bg-green-400 rounded-lg m-2 flex flex-col items-center align-middle font-semibold text-white p-2">
              <div>
                <AiOutlineWhatsApp color="white" size={22} />
              </div>
              <div>Whatsapp</div>
            </div>
          </Link>
          <Link href={`tel:+91${call}`} target="new">
            <div className="bg-blue-400 rounded-lg m-2 flex flex-col items-center align-middle font-semibold text-white p-2">
              <div>
                <BsTelephone color="white p-2" size={22} />
              </div>
              <div>Call us</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Fixed_Floating;
