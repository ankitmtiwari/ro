import React from "react";
import Why_us_card from "../Cards/Why_us_card";

function Why_us() {
  return (
    <>
      <div id="why_us" className="py-20 mt-30">
        <div className="text-center">
          <div className="text-blue-400 text-2xl font-semibold py-4">
           Why to choose
          </div>
          <div className="text-black lg:max-w-2xl mx-5 lg:mx-auto text-3xl lg:text-5xl font-extrabold">
          Aardhya Aqua Solutions
          </div>
          {/* <div className="text-black text-4xl font-bold ">Home Water Solutions</div> */}
        </div>
        {/* <div className="grid grid-cols-3 gap-10 py-10 px-5 mx-36"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2   gap-20  lg:gap-10 py-10 mx-5 lg:mx-36">
        <Why_us_card img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697897022/RO-IMAGES/flfkbmodshejlkhkojm9.png" title="Authorised Kent RO Service Center in U.P." desc="At Aardhya Aqua Solutions, we take pride in being the go-to destination for all your KENT RO water purifier service needs. We are officially authorized by KENT and dedicated to providing top-notch service to our valued customers."/>
        <Why_us_card img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697899126/RO-IMAGES/p6cyvvcxut1smvklcs5i.png" title="Dealer in New Kent water Purifier in U.P." desc="Our commitment to excellence extends to every service we provide. We ensure prompt and efficient service, transparent pricing, and a focus on customer satisfaction."/>
        {/* <Offered_solutions_card title="Solution No 3 Know More Below" desc="This is the description for the first solution and we are wiilling to provide the best solution.This is the description for the first solution and we are wiilling to provide the best solution"/> */}
        </div>
      </div>
    </>
  );
}

export default Why_us;
