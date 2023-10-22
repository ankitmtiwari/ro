import React from "react";
import Image from "next/image";

const New_purifier = () => {
  //   const img = "/about_us_1.png";
  const img = "/new_water_purifier.png";
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
            <div className=" sm:w-[50%] text-lg">
              <h1 className="text-xl font-medium">
                Aardhya Aqua Solutions- Your Trusted Water Purifier Dealer
              </h1>
              <p className="leading-7">
                <br/><b>Who We Are:</b>
                <br /> <br />Welcome to Aardhya Aqua Solutions, your dedicated partner
                for a healthier life through pure and safe drinking water.
                Operating from Basti District, Uttar Pradesh, we're not just
                your local RO water purifier dealer but also an Authorized
                Service Center for Kent RO systems. Our mission is to make clean
                water accessible to every home and business in Uttar Pradesh,
                ensuring that we rank highly in your search for "RO dealer in
                Uttar Pradesh."
              </p>
              <p className="leading-7">
              <br /> <b>Our Offerings:</b>
                <br /><br />
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
          <div className="p-2 m-2  text-lg">
            <p className="leading-7">
            <br /> <br/><b>Our Commitment:</b> <br /><br/><br />
              At Aardhya Aqua Solutions, we believe that safe drinking water
              shouldn't come at an exorbitant cost, ranking us among the best
              choices for "Water purifier best dealer in UP." We take pride in
              offering competitive prices, making sure that access to pure water
              is within everyone's reach. Your well-being is our priority, and
              our cost-effective solutions provide you with peace of mind,
              wherever you are in Uttar Pradesh.
            </p>
            <p className="leading-7">
            <br /><b>Kent Authorized Service Center:</b><br />
              <br />
              As a Kent Authorized Service Center, we are deeply invested in
              delivering excellence. Our affiliation with Kent RO systems
              reflects our unwavering commitment to quality and customer
              satisfaction, ranking us high in your search for "Kent RO Dealer
              in Basti." When you choose Aardhya Aqua Solutions, you choose a
              trusted source for expert Kent RO service. We uphold the highest
              standards in maintaining and repairing Kent RO systems, whether
              you're in Basti or searching for "Kent RO Service Center near
              Siddharthnagar."
            </p>
            <p className="leading-7">
            <br /><b>After-Sale Service:</b><br />
              <br /> Our commitment extends beyond the sale, making us the
              preferred option for "Water purifier best service in Basti." We
              offer exceptional after-sale service to ensure your RO system
              consistently delivers clean, safe water. Our team of skilled
              technicians is just a phone call away, ready to provide
              maintenance, repairs, and immediate assistance for any concerns,
              no matter where you're located in Uttar Pradesh.
            </p>
            <p className="leading-7">
            <br /><b>Our Team:</b> <br /><br />
              Our dedicated team consists of skilled technicians, water quality
              experts, and customer service professionals. With years of
              experience and a deep understanding of water purification, they
              are always ready to assist you with your water purification needs.
            </p>
            <p className="leading-7">
            <br /> <b>Why Choose Us:</b> <br /><br />
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
                Brand Diversity: We offer a wide selection of leading RO water
                purifier brands to cater to your unique needs, ensuring you
                don't have to search for a "Water Purifier Dealer in Basti" or
                "RO Water purifier in Siddhartnagar" elsewhere.
              </li>
              <li>
                Kent Expertise: Our Kent Authorized Service Center status
                ensures expert service for Kent RO systems, whether you're in
                Basti or seeking a "Kent RO Service Center near Basti."{" "}
              </li>
              <li>
                Competitive Pricing: Aardhya Aqua Solutions offers
                market-competitive prices, ensuring quality without the premium
                cost, ranking us high among "RO dealers in Uttar Pradesh."
              </li>
              <li>
                Statewide Reach: While based in Basti District, our services
                extend throughout Uttar Pradesh, ensuring that clean water
                solutions are within reach for everyone, wherever you are in the
                state.
              </li>
            </p>
            <p className="leading-7">
            <br /><b>Contact Us:</b> <br /><br />
              Ready to experience the benefits of pure and safe drinking water?
              Connect with us today at [+918655475886] and let us guide you to
              the perfect RO water purifier for your home or business. Join the
              Aardhya Aqua Solutions family, where we're transforming clean
              water into a reality for every household in Uttar Pradesh, no
              matter where you're located.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default New_purifier;
