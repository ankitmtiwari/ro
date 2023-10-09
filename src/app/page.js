import Image from "next/image";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Product from "./components/MainCards/Product";
import Articles from "./components/MainCards/Articles";
import Offered_solutions from "./components/MainCards/Offered_solutions";
import Catchy_words from "./components/MainCards/Catchy_words";
import Whatwedo from "./components/MainCards/Whatwedo";
import All_brands_main from "./components/MainCards/All_brands_main";

export default function Home() {
  return (
    <>
      <Header />
      <Whatwedo />
      <Product />
      <Offered_solutions />
      <Articles />
      <All_brands_main />
      <Catchy_words />
      <Footer />
    </>
  );
}
