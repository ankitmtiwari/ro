import React from "react";
import Whatwedo_card from "../Cards/Whatwedo_card";

function Whatwedo() {
  return (
    <>
      <div id="whatwedo" className="bg-[#F4FAFE] py-8">
        <div className="text-center py-10">
          <div className="text-blue-400 text-2xl mx-2  font-bold py-4">
            What We Do
          </div>
          <div className="text-black lg:max-w-2xl mx-5 lg:mx-auto text-3xl lg:text-5xl font-extrabold">
            We transform ordinary tap water into clean
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3   gap-10  lg:gap-10 py-10 mx-5 lg:mx-36">
          <Whatwedo_card
            goto="/about/new_purifier"
            // name="New Water Purifier"
            // link="https://res.cloudinary.com/da5scjnwh/image/upload/v1696673605/RO-IMAGES/ttex8xbfqlp2netfxxrb.jpg"
            img="/new_water_purifier.png"
          />
          <Whatwedo_card
            goto="/about/repair_servicing"
            // name="Service Old Ones"
            // link="https://res.cloudinary.com/da5scjnwh/image/upload/v1696673605/RO-IMAGES/xoh6i5kyns42yo4j097h.jpg"
            img="/kent_ro_service.jpg"
          />
          <Whatwedo_card
            goto="/about/new_purifier"
            // name="AC & Fridge Servicing"
            // link="https://res.cloudinary.com/da5scjnwh/image/upload/v1696673604/RO-IMAGES/j3i3dir3vyohokjxlr5n.jpg"
            img="/ac_fridge_service.png"
          />
        </div>
      </div>
    </>
  );
}

export default Whatwedo;
