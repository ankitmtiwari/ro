import Image from "next/image";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Product from "./components/MainCards/Product";
import Articles from "./components/MainCards/Articles";
import Offered_solutions from "./components/MainCards/Offered_solutions";
import Catchy_words from "./components/MainCards/Catchy_words";
import Whatwedo from "./components/MainCards/Whatwedo";
import ImageSlider from "./components/ImageSlider";
import All_brands from "./components/Cards/All_brands";
import All_brands_main from "./components/MainCards/All_brands_main";

export default function Home() {
  const images = [
    "https://res.cloudinary.com/da5scjnwh/image/upload/v1696684010/RO-IMAGES/nuzprwepkewqmae7selu.png",
    // "https://res.cloudinary.com/da5scjnwh/image/upload/v1696673605/RO-IMAGES/ttex8xbfqlp2netfxxrb.jpg",
    // "https://res.cloudinary.com/da5scjnwh/image/upload/v1696673605/RO-IMAGES/xoh6i5kyns42yo4j097h.jpg",
    // "https://res.cloudinary.com/da5scjnwh/image/upload/v1696261374/product-thumb3_yaloba.png"
    // Add more image paths as needed
  ];
  return (
    <>
      <Header />
      {/* <ImageSlider images={images} /> */}
      <Whatwedo />
      <Product />
      <Offered_solutions />
      <Articles/>
      <All_brands_main/>
      <Catchy_words />
      <Footer />
      
    </>
  );
}
