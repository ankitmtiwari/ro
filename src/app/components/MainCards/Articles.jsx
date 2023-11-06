import React from "react";
import Article_card from "../Cards/Article_card";
import Link from "next/link";

function Articles() {
  return (
    <>
      <div id="articles" className="bg-[#F4FAFE] ">
        <div className="text-center py-10">
          <div className="text-blue-400 text-xl font-bold py-4">
            News & Updates
          </div>
          <div className="text-black lg:max-w-2xl mx-5 lg:mx-auto text-3xl lg:text-5xl font-extrabold">
            Know more about water purifiers!
          </div>
          {/* <div className="text-black text-5xl font-extrabold">
            Know more about{" "}
          </div>
          <div className="text-black text-5xl font-extrabold">
            water purifiers!
          </div> */}
        </div>
        {/* <div className='grid grid-cols-3 gap-10 mx-48 py-5'> */}
        <div className="grid grid-cols-1 lg:grid-cols-3   gap-20  lg:gap-10 py-10 mx-5 lg:mx-36">
          <Article_card
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697363666/RO-IMAGES/ftfg5iljeohhw5qeaajc.webp"
            title="Why use RO Water Purifiers?"
            desc="Impurities, especially Dissolved ones are increasing in potable Water whether supplied by municipalities or from Ground well."
            goto="/articles/why_use_ro"
          />
          <Article_card
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697369548/RO-IMAGES/mgzi547vc5lujoccfrtm.jpg"
            title="How to Select the best water purifier?"
            desc="Water purifiers have become an essential home appliance because of rising pollution and unsuitable drinking water. Especially in cities, where water is always polluted and there is no access to groundwater or freshwater from water bodies. Thus, the water purifier is no longer a luxury but a necessity for every home. But buying one is not necessarily an easy task. You might end up buying the wrong one if you do not put your research into it. One must go for complete research before he/she goes to rent or buy a water purifier. Buy the best water purifier for your home using the following guide."
            goto="/articles/how_to_select"
          />
          <Article_card
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697891298/RO-IMAGES/pni7fpfndepsefprceba.jpg"
            title="Top Myths About Water...You Dont Know?"
            desc="There is no scientific evidence
            to support the claim that you need to drink 8 glasses of
            water a day. The amount of water a person needs can vary
            depending on their age, gender, weight, activity level,
            and climate. It is essential to listen to your body’s
            signals of thirst and drink enough water to maintain
            good hydration."
            goto="/articles/myths_about_water"
          />
        </div>
        <Link href={"/articles/all_articles"}>
          <div className="flex justify-center p-3 pb-6">
            <div className="bg-[#00A8FF] px-6 py-4 text-white text-lg font-semibold rounded-full w-fit hover:bg-black hover:text-white  transition-all ease-in-out delay-100 cursor-pointer">
              View All Articles
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Articles;
