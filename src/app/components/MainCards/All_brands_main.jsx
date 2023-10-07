import React from "react";
import All_brands_card from "../Cards/All_brands_card";

function All_brands_main() {
  return (
    <>
      <div className="py-10">
        <div className="text-4xl font-semibold text-center">PRODUCTS BY BRANDS</div>
        <div>
          <All_brands_card />
        </div>
      </div>
    </>
  );
}

export default All_brands_main;
