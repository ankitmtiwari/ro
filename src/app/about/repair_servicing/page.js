import React from "react";
import Image from "next/image";
const Repair_servicing = () => {
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
        <div className="mt-4">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 mb-8">
            <div className="rounded-md  transition duration-500 cursor-pointer">
              <Image
                src={img}
                width={500}
                height={500}
                className="rounded-md w-full "
              />
            </div>
            <div className="text-lg">
              <h1 className="text-xl font-medium">
                Your Trusted Kent RO Service Center in Basti, Uttar Pradesh
              </h1>
              <p className="leading-7">
                <br />{" "}
                <b>
                  Welcome to Aardhya Aqua Solutions - Your Premier Water
                  Purifier Service and Repair Center
                </b>
                <br />
                <br />
                At Aardhya Aqua Solutions, we are more than just a water
                purifier dealer. We're your dedicated Kent RO Service Center
                based in Basti, Uttar Pradesh, committed to ensuring that you
                always have access to pure and safe drinking water. With the
                highest standard of service and a focus on water purifier
                servicing and repair, we are your one-stop destination for
                maintaining the health of your water purification system.
              </p>
              <p className="leading-7">
                <br />
                <b>Our Expertise: Kent RO and Beyond</b>
                <br />
                <br /> As an Authorized Kent RO Service Center, we hold the
                expertise to maintain, repair, and optimize your Kent RO system,
                ensuring it continues to deliver the purest water. Whether it's
                filter replacement, UV lamp servicing, or addressing any
                concerns with your Kent RO system, our skilled technicians are
                equipped to handle it all.
              </p>
            </div>
          </div>
          <div className="text-lg mb-5">
            <p className="leading-7">
              But our commitment doesn't stop with Kent. We understand that
              water purifiers come in various brands and models. Our experienced
              team is well-versed in servicing and repairing a wide range of
              water purifier brands, including KENT RO, LIVPURE, AQUA GUARD,
              AQUA FRESH, HAVELS, AQUA VENUS, and more. So, no matter the brand,
              you can trust us to provide top-notch servicing and repair
              solutions.
            </p>
            <p className="leading-7">
              <br />
              <b>Our Services:</b>
              <br />
              <br />
              <li>
                <b>Comprehensive Servicing: </b> We offer complete servicing
                packages to keep your water purifier in optimal condition. From
                routine maintenance to thorough check-ups, we cover it all.
              </li>
              <li>
                <b>Prompt Repairs:</b> Our technicians are ready to address any
                issues with your water purifier promptly. Whether it's a minor
                glitch or a major repair, we've got you covered.{" "}
              </li>
              <li>
                <b>enuine Spare Parts: </b>GWe use only genuine spare parts to
                ensure the longevity and efficiency of your water purifier.
              </li>
              <li>
                <b>Filter Replacements: </b>Regular filter replacements are
                crucial for maintaining water quality. We provide filter
                replacement services to keep your water safe.
              </li>
            </p>
            <p className="leading-7">
              <br />
              <b>Why Choose Aardhya Aqua Solutions for Servicing and Repair?</b>
              <br />
              <br />
              <li>
                <b>Kent Authorized Expertise: </b> Our Authorized Kent RO
                Service Center status ensures that your Kent water purifier is
                in the hands of specialists.
              </li>
              <li>
                <b>Multi-Brand Proficiency: </b> We bring our expertise to
                servicing and repairing a variety of water purifier brands,
                ensuring you don't have to go elsewhere.
              </li>
              <li>
                <b>Prompt and Reliable: </b> We understand the importance of
                clean water. Our team is committed to swift response times and
                reliable service.
              </li>
              <li>
                <b>Genuine Parts: </b> We use only genuine spare parts, ensuring
                the integrity of your water purifier.
              </li>
              <li>
                <b>Complete Water Solutions: </b> Whether it's servicing,
                repairs, or new installations, we offer complete water solutions
                for your peace of mind.
              </li>
            </p>
            <p className="leading-7">
              <br />
              <b>Contact Us:</b> <br />
              <br />
              Ready to ensure that your water purifier continues to provide pure
              and safe drinking water? Contact Aardhya Aqua Solutions today at
              [+918655475886]. Let us handle your water purifier servicing and
              repair needs, and experience the difference that expert care can
              make for your water purification system.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repair_servicing;
