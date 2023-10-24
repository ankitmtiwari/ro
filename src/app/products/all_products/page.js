import React from "react";
import Product_card from "@/app/components/Cards/Product_card";
import products from "@/app/all_prods";

const page = () => {
  const all_prods = Object.keys(products);
  return (
    <>
      <div id="home_products" className="bg-[#F4FAFE] py-8">
        <div className="text-center py-8">
          <div className="text-black text-5xl font-bold">All Products</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-10 mx-5 lg:mx-36">
          {all_prods.map((pids, index) => (
            <div key={index}>
              <Product_card pid={pids} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
