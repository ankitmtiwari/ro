import React from "react";
import Offered_solutions_card from "../Cards/Offered_solutions_card";

function Offered_solutions() {
  return (
    <>
      <div id="offeredServices" className="py-20">
        <div className="text-center">
          <div className="text-blue-400 text-xl font-semibold py-4">
            What we offer
          </div>
          <div className="text-black text-4xl font-bold ">Home Water Solutions</div>
        </div>
        <div className="grid grid-cols-3 gap-10 py-10 px-5 mx-36">
        <Offered_solutions_card title="Whole Home Fillteration System" desc="This is the description for the first solution and we are wiilling to provide the best solution.This is the description for the first solution and we are wiilling to provide the best solution"/>
        <Offered_solutions_card title="Solution No 2" desc="This is the description for the first solution and we are wiilling to provide the best solution.This is the description for the first solution and we are wiilling to provide the best solution"/>
        <Offered_solutions_card title="Solution No 3 Know More Below" desc="This is the description for the first solution and we are wiilling to provide the best solution.This is the description for the first solution and we are wiilling to provide the best solution"/>
        </div>
      </div>
    </>
  );
}

export default Offered_solutions;
