import React from "react";
import Image from "next/image";
import Catchy_words_card from "../Cards/Catchy_words_card";

function Catchy_words() {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-24 bg-[#00A8FF] p-10 sm:p-14 ">
    {/* <div className="grid grid-cols-1 lg:grid-cols-3   gap-20  lg:gap-10 py-10 mx-5 lg:mx-36"> */}
      <Catchy_words_card title="Fast Delivery" img_url="https://res.cloudinary.com/da5scjnwh/image/upload/v1696520676/RO-IMAGES/ie7a1bcnhqhotdkfumwm.png"/>
      <Catchy_words_card title="Secure Packaing" img_url="https://res.cloudinary.com/da5scjnwh/image/upload/v1696520676/RO-IMAGES/tc6wrldcrjumzb2fhc4u.png"/>
      <Catchy_words_card title="On Time Delivery" img_url="https://res.cloudinary.com/da5scjnwh/image/upload/v1696520676/RO-IMAGES/h4tuq8wlmowel41lpt4r.png"/>
      <Catchy_words_card title="Deliver Anywhere" img_url="https://res.cloudinary.com/da5scjnwh/image/upload/v1696520676/RO-IMAGES/bxsircfaekgshmazhmfd.png"/>
    </div>
    </>
  );
}

export default Catchy_words;
