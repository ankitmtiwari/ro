import React from "react";
import All_brands_card from "../Cards/All_brands_card";

function All_brands_main() {
  return (
    <>
      <div className="py-10 bg-[#F4FAFE] mx-auto px-5">
      <div className="text-black lg:max-w-2xl mx-5 lg:mx-auto text-2xl lg:text-4xl font-semibold">
      PRODUCTS BY BRANDS
      </div>
        {/* <div className="text-4xl font-semibold text-center">PRODUCTS BY BRANDS</div> */}
        <div>
          <All_brands_card />
        </div>
      </div>
    </>
  );
}

export default All_brands_main;
