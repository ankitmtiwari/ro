"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const Why_use_ro = () => {
    const slides = [
        {
            // url: "https://res.cloudinary.com/da5scjnwh/image/upload/v1697279664/RO-IMAGES/ftvwsndemutajwpw8rue.png",
        },
      ];
    
      return (
        <>
          <html>
            <head>
              <title>Why Use RO Water Purifier</title>
            </head>
            <body>
              {/* FOR MOBILE SIZES */}
              <div className="bock sm:hidden p-1 rounded-md  ">
                <Swiper
                  //  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  // navigation={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                >
                  {slides.map((slide, slideIndex) => (
                    <SwiperSlide>
                      <img className="rounded-md" src={slide.url} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* FOR BIG SCREENS LAPTOPS */}
              <div id="Why_use_ro" className="hidden sm:block sm:mt-0 p-1 rounded-md ">
                <Swiper
                  //  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  navigation={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  {slides.map((slide, slideIndex) => (
                    <SwiperSlide>
                      <img className="rounded-md" src={slide.url} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div>
                <div className=" text-[#75779f] mx-2">
                  <div className="container mx-auto items-center">
                    <div className="flex flex-row">
                      <div class=" mx-auto align-self-center">
                        <div class="text-left mx-auto w-75">
                          <div class="text-4xl text-black font-semibold mb-2">
                            Why use RO Water Purifiers?
                          </div>
                          <div className="leading-7 text-md">
                            Drinking impure water has harmful effects on your
                            health, as it acts like a slow poison, causing routine
                            illness like Cholera, Dysentery, Diarrhea, Jaundice,
                            Tuberculosis and even diseases like Cancer. More than
                            37.7 million Indians are affected by water borne
                            diseases annually, with over 1.5 million children are
                            estimated to die of Diarrhea alone. More than 80% of
                            stomach diseases in India are caused by polluted water.
                            <br />
                            A pioneer in the water purifier category, Livpure Smart
                            follows a customer-centric approach and is dedicated to
                            delivering innovative products that employ a host of
                            advanced technologies like RO, UV, and UF to ensure a
                            supply of clean, safe, and hygienic drinking water for
                            our customers.
                            <br />
                            These days, it has become extremely convenient for
                            people to access clean drinking water, especially given
                            how affordable it is to install an RO water purifier at
                            your home. Installing an RO purifier comes with a host
                            of benefits and now, you don’t even have to worry about
                            the upfront cost of a purifier. With Livpure Smart’s RO
                            Subscription Plans, RO water purifier installation has
                            become more affordable than ever before.
                            <br />
                            The importance of clean drinking water cannot be denied
                            as it is a well-known fact that drinking contaminated
                            water can lead to several ailments. Keeping all this in
                            mind, getting an RO water purifier for your home makes
                            perfect sense and with Livpure Smart’s easy subscription
                            plans, it does not even have to be a burden on your
                            pocket!
                            <br />
                          </div>
                          <div class="text-lg  mb-2 font-semibold text-black">
                            Increasing Dissolved Impurities
                          </div>
                          <div class="mb-2 ">
                            Impurities, especially Dissolved ones are increasing in
                            potable Water whether supplied by municipalities or from
                            Ground well.
                            <br />
                            Contamination of Groundwater: The underground water has
                            pesticides, insecticides, and harmful chemicals such as
                            arsenic, fluoride &amp; lead.
                            <br />
                            Pesticides &amp; Chemicals in River Water: Excessive use
                            of pesticides as well as contamination from industrial
                            waste affects river water. These soluble chemicals
                            result in water borne diseases.
                            <br />
                            Rusting of Pipes: The water from municipalities goes to
                            overhead tank from where it travels through rusted old
                            pipelines, which are also often unclean, causing further
                            water contamination.
                            <br />
                            Hence, it is essential to purify water before you drink.
                            For this reason, KENT’s domestic RO water purifiers are
                            ideal as they not only kill bacteria and viruses but
                            also remove harmful dissolved impurities from water,
                            making it 100% pure.
                            <br />
                          </div>
                          <div class="title  mb-2 font-semibold text-black text-3xl sm:text-5xl">
                            KENT - World’s Best &amp; India's Largest Selling <br />
                            RO Water Purifiers
                          </div>
                          <div class="mb-2 leading-8">
                            Water you get in the tap by municipality or borewell may
                            have bacteria and viruses along with dissolved
                            impurities. RO not only removes bacteria and viruses
                            also removes dissolved impurities, thus making it
                            totally pure. <br /> KENT RO stands the tallest. It has
                            more than 5 million satisfied consumers and are growing
                            every day. There are many reasons for choosing KENT that
                            offers the best RO water purifiers in India.
                            <br />
                            KENT’s best RO water purifiers for home and offices
                            comes with latest technologies and unique advantages
                            including:
                            <br />• Multiple Purification Process of RO+UV+UF+TDS
                            Control <br />
                            • Retention of Minerals
                            <br />
                            • UV LED in storage tank to keep water pure <br />
                            • Digital Display of Purity
                            <br />
                            • Zero Water Wastage <br />
                            • 4 Years Free Service
                            <br />
                            • Best Quality Certifications and Awards
                            <br />
                            Choose the best and protect your family from water borne
                            diseases. <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        </>
      );
}

export default Why_use_ro