import React from "react";
import Image from "next/image";

const AC_WashingMachine_Servicing = () => {
  //   const img = "/about_us_1.png";
  const img = "/kent_ro_service.jpg";
  return (
    <>
      <div className="mt-10 sm:px-32">
        <div className="flex justify-center">
          <div className="p-2 items-center text-3xl font-bold">
            ABOUT SERVICES
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
            <div className=" sm:w-[50%] text-lg">
              <h1 className="text-xl font-medium">
                Your Premier Destination for Expert AC and Washing Machine
                Servicing in Basti, Uttar Pradesh
              </h1>
              <p className="leading-7">
                <br />{" "}
                <b>
                  Welcome to Aardhya Aqua Solutions – Where Comfort Meets
                  Reliability
                </b>
                <br />
                <br />
                At Aardhya Aqua Solutions, we don't just fix appliances; we make
                sure you never have to worry about staying cool in the heat or
                managing a pile of laundry. We're your go-to Service Center for
                AC and Washing Machine Repairs, delivering top-quality service
                in Basti, Uttar Pradesh.
              </p>
              <p className="leading-7">
                <br />
                <b>Our Services:</b>
                <br />
                <br />
                <b>AC Servicing and Repairs:</b> When your AC acts up on a
                scorching summer day, you need a solution fast. Our skilled
                technicians specialize in servicing and repairing various AC
                brands and models, ensuring you enjoy cool comfort without any
                interruption.
                <br />
                <b>Washing Machine Repairs:</b> Laundry piling up because your
                washing machine is acting out? Our proficient team is ready to
                diagnose and repair all types of washing machines, ensuring your
                daily routine runs smoothly.
              </p>
            </div>
          </div>
          <div className="p-2 m-2 text-lg">
            <p className="leading-7">
              <b>
                Why Choose Aardhya Aqua Solutions for AC and Washing Machine
                Servicing:
              </b>
              <br />
              <br />
              <li>
                <b>Competitive Pricing: </b>High-quality service shouldn't break
                the bank. We believe in affordability without compromising
                quality. That's why we offer the best competitive prices for AC
                and washing machine servicing in the market.
              </li>
              <li>
                <b>Multi-Brand Proficiency: </b> We understand that appliances
                come in various brands and models. Our team is well-versed in
                servicing and repairing a wide variety of AC and washing machine
                brands, ensuring your appliances are in expert hands, regardless
                of the make or model.
              </li>
              <li>
                <b>Prompt and Reliable Service: </b> We respect your time, and
                we understand the frustration of a malfunctioning appliance. Our
                dedicated team ensures swift, reliable, and efficient servicing
                and repairs, so you can get back to your daily routine without
                any hassle.
              </li>
              <li>
                <b>Genuine Parts for Lasting Repairs:</b>Your appliances deserve
                nothing but the best. To ensure lasting repairs and the
                longevity and efficiency of your AC and washing machine, we use
                only genuine spare parts.
              </li>
            </p>
            <p className="leading-7">
              <br />
              <b>Contact Us:</b> <br />
              <br />
              Ready to experience AC and washing machine servicing that combines
              affordability with excellence? Contact Aardhya Aqua Solutions
              today at [+918655475886]. We're your one-stop solution for AC and
              washing machine servicing and repairs in Basti, Uttar Pradesh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AC_WashingMachine_Servicing;
