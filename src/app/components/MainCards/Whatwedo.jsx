import React from "react";
import Whatwedo_card from "../Cards/Whatwedo_card";

function Whatwedo() {
  return (
    <>
      <div className="bg-[#F4FAFE] py-14">
        <div className="text-center py-10">
          <div className="text-blue-400 text-xl font-bold py-4">What We Do</div>
          <div className="text-black text-5xl font-extrabold">
            We transform ordinary tap
          </div>
          <div className="text-black text-5xl font-extrabold">
            water into clean
          </div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 py-10 mx-36">
          <Whatwedo_card
            name="New Water Purifier"
            link="https://res.cloudinary.com/da5scjnwh/image/upload/v1696673605/RO-IMAGES/ttex8xbfqlp2netfxxrb.jpg"
          />
          <Whatwedo_card
            name="Service Old Ones"
            link="https://res.cloudinary.com/da5scjnwh/image/upload/v1696673605/RO-IMAGES/xoh6i5kyns42yo4j097h.jpg"
          />
          <Whatwedo_card
            name="AC & Fridge Servicing"
            link="https://res.cloudinary.com/da5scjnwh/image/upload/v1696673604/RO-IMAGES/j3i3dir3vyohokjxlr5n.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Whatwedo;
