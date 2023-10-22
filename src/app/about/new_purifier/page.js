import React from "react";
import Image from "next/image";

const New_purifier = () => {
  const img = "/about_us_1.png";

  return (
    <>
      <div className="mt-10 sm:px-32">
        <div className="flex justify-center">
          <div className="p-2 items-center text-3xl font-bold">
            Dealer Of Water Purifier
          </div>
        </div>
        <div>
          <div className="sm:flex sm:flex-row  p-2 m-2">
            <div className="rounded-md sm:w-[50%] hover:scale-95 transition duration-500 cursor-pointer">
              <Image
                src={img}
                width={600}
                height={500}
                className="rounded-md"
              />
            </div>
            <div className=" sm:w-[50%]">
              <h1 className="text-xl font-medium">
                Aardhya Aqua Solutions- Your Trusted Water Purifier Dealer
              </h1>
              <p className="leading-7">
                <b>Who We Are:</b>
                <br /> Welcome to Aardhya Aqua Solutions, your dedicated partner
                for a healthier life through pure and safe drinking water.
                Operating from Basti District, Uttar Pradesh, we're not just
                your local RO water purifier dealer but also an Authorized
                Service Center for Kent RO systems. Our mission is to make clean
                water accessible to every home and business in Uttar Pradesh,
                ensuring that we rank highly in your search for "RO dealer in
                Uttar Pradesh."
              </p>
              <p className="leading-7">
                <b>Our Offerings:</b>
                <br />
                At Aardhya Aqua Solutions, we're committed to providing you with
                the best in water purification technology. We proudly partner
                with renowned RO water purifier brands, including KENT RO,
                LIVPURE, AQUA GUARD, AQUA FRESH, HAVELS, AQUA VENUS, and more.
                Our diverse range of options ensures you have access to the
                industry's leading water purification solutions, making us your
                top choice as a "Water Purifier Dealer in Basti."
              </p>
            </div>
          </div>
          <div className="p-2 m-2">
            <p className="leading-7">
              <b>Our Commitment:</b> <br />
              At Aardhya Aqua Solutions, we believe that safe drinking water
              shouldn't come at an exorbitant cost, ranking us among the best
              choices for "Water purifier best dealer in UP." We take pride in
              offering competitive prices, making sure that access to pure water
              is within everyone's reach. Your well-being is our priority, and
              our cost-effective solutions provide you with peace of mind,
              wherever you are in Uttar Pradesh.
            </p>
            <p className="leading-7">
              <b>After-Sale Service:</b>
              <br /> Our commitment extends beyond the sale, making us the
              preferred option for "Water purifier best service in Basti." We
              offer exceptional after-sale service to ensure your RO system
              consistently delivers clean, safe water. Our team of skilled
              technicians is just a phone call away, ready to provide
              maintenance, repairs, and immediate assistance for any concerns,
              no matter where you're located in Uttar Pradesh.
            </p>
            <p className="leading-7">
              <b>Our Team:</b> <br />
              Our dedicated team consists of skilled technicians, water quality
              experts, and customer service professionals. With years of
              experience and a deep understanding of water purification, they
              are always ready to assist you with your water purification needs.
            </p>
            <p className="leading-7">
              <b>Why Choose Us:</b> <br />
              <li>
                Authorized Dealer: We are an authorized dealer for [KENT RO],
                offering their latest and most advanced water purification
                systems.
              </li>
              <li>
                Service Excellence: Our KENT Authorized Service Center provides
                top-notch service and support to ensure your water purifier
                operates flawlessly.
              </li>
              <li>
                Water Quality Experts: Our team is well-equipped to assess your
                water quality and recommend the ideal purifier for your needs.
              </li>
              <li>
                Customer-Centric: We prioritize your satisfaction and will go
                the extra mile to make sure you are delighted with our services.
              </li>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default New_purifier;
