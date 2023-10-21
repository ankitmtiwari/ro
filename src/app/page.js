import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Product from "./components/MainCards/Product";
import Articles from "./components/MainCards/Articles";
import Offered_solutions from "./components/MainCards/Why_us";
import Catchy_words from "./components/MainCards/Catchy_words";
import Whatwedo from "./components/MainCards/Whatwedo";
import All_brands_main from "./components/MainCards/All_brands_main";
import ImageSlider from "./components/ImageSlider";
import Fixed_footer from "./components/Shared/Fixed_footer";
export default function Home() {
  return (
    <>
      {/* <Why_use_ro /> */}
      {/* <Header /> */}
      <ImageSlider />
      <Catchy_words />
      <Whatwedo />
      <Product />
      <Offered_solutions />
      <Articles />
      <All_brands_main />
      {/* <Footer /> */}
    </>
  );
}
