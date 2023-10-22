import React from "react";
import Image from "next/image";
const Repair_servicing = () => {
  const img = "/about_us_1.png";
  return (
    <>
      <div className="mt-10 sm:px-32">
        <div className="flex justify-center">
          <div className="p-2 items-center text-3xl font-bold">ABOUT US</div>
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
                Aardhya Aqua Solutions- Your Trusted Water Purifier Dealer and
                Service Center
              </h1>
              <p className="leading-7">
                <b>Who We Are:</b>
                <br /> Welcome to Aardhya Aqua Solutions, your trusted source
                for all things related to water purification. We are your
                one-stop destination for high-quality water purifiers and
                reliable service. Located in Basti District, Uttar Pradesh,
                Aardhya Aqua Solutions, we understand the importance of clean
                and safe drinking water, and we are dedicated to making it
                accessible to you.
              </p>
              <p className="leading-7">
                <b>Our Story:</b>
                <br /> Aardhya Aqua Solutions was founded with a vision to
                provide clean and healthy drinking water to every household.
                Established in [2016], we have since grown into a leading water
                purifier dealer and a Kent Authorized Service Center for Water
                Purifierslocated in Basti District, Uttar Pradesh. Our journey
                has been marked by a commitment to excellence, innovation, and
                customer satisfaction.
              </p>
            </div>
          </div>
          <div className="p-2 m-2">
            <p className="leading-7">
              <b>Our Mission:</b> <br />
              Our mission is clear and unwavering: to ensure that every drop of
              water you consume is pure and free from contaminants. We believe
              that access to safe drinking water is a fundamental right, and we
              are here to make it a reality for you.
            </p>
            <p className="leading-7">
              <b>What Sets Us Apart:</b>
              <br /> What distinguishes Aardhya Aqua Solutions from the rest is
              our comprehensive approach to water purification. As an authorized
              dealer for [KENT RO], we offer a range of cutting-edge water
              purifiers that are known for their efficiency and reliability.
              Moreover, our KENT Authorized Service Center ensures that your
              water purifier continues to operate at its best with regular
              maintenance, repairs, and genuine spare parts.
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
                Authorized Dealer: We are an authorized dealer for KENT RO,
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

export default Repair_servicing;
