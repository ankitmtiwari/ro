import React from "react";
import Article_card from "../Cards/Article_card";

function Articles() {
  return (
    <>
      <div className="bg-[#F4FAFE] ">
        <div className="text-center py-10">
          <div className="text-blue-400 text-xl font-bold py-4">
            News & Updates
          </div>
          <div className="text-black lg:max-w-2xl mx-5 lg:mx-auto text-3xl lg:text-5xl font-extrabold">
          Know more about water purifiers!
          </div>
          {/* <div className="text-black text-5xl font-extrabold">
            Know more about{" "}
          </div>
          <div className="text-black text-5xl font-extrabold">
            water purifiers!
          </div> */}
        </div>
        {/* <div className='grid grid-cols-3 gap-10 mx-48 py-5'> */}
        <div className="grid grid-cols-1 lg:grid-cols-3   gap-20  lg:gap-10 py-10 mx-5 lg:mx-36">
          <Article_card
            title="Why use RO Water Purifiers?"
            desc="Impurities, especially Dissolved ones are increasing in potable Water whether supplied by municipalities or from Ground well."
            goto="Why_use_ro"
          />
          <Article_card
            title="Which water heater is more technology advanced??"
            desc="This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works."
            goto="Why_use_ro"
          />
          <Article_card
            title="Which water heater is more technology advanced?"
            desc="This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works."
            goto="Why_use_ro"
          />
        </div>
      </div>
    </>
  );
}

export default Articles;
