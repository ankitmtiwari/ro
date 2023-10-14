import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Fixed_footer() {
  return (
    <>
      <div className="block sm:hidden sticky bottom-0 left-0 z-20 border-t border-gray-200 w-full shadow">
        <div className="bg-[#00A8FF] flex justify-around align-middle items-center">
          <div className="flex flex-col items-center align-middle font-semibold text-white p-2">
            <div>
              <BsTelephone color="white p-2" size={22} />
            </div>
            <div>Call us</div>
          </div>
          <div className="flex flex-col  items-center align-middle font-semibold text-white p-2">
            <div>
              <TfiEmail color="white" size={22} />
            </div>
            <div>Email us</div>
          </div>
          <div className="flex flex-col items-center align-middle font-semibold text-white p-2">
            <div>
              <AiOutlineWhatsApp color="white" size={22} />
            </div>
            <div>Whatsapp</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fixed_footer;
