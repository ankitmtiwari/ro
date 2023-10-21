import React from "react";
import Article_card from "@/app/components/Cards/Article_card";

const page = () => {
  return (
    <>
      <div id="articles" className="bg-[#F4FAFE] ">
        <div className="text-center py-10">
          <div className="text-black lg:max-w-2xl mx-5 lg:mx-auto text-3xl lg:text-5xl font-extrabold">
            All Articles
          </div>
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
            title="Which water heater is more technology advanced?"
            desc="This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works."
            goto="/articles/myths_about_water"
          />
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
            title="Which water heater is more technology advanced?"
            desc="This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works."
            goto="/articles/myths_about_water"
          />
        </div>
      </div>
    </>
  );
};

export default page;
