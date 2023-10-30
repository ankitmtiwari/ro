import products from "@/app/all_prods";
import Product_card from "@/app/components/Cards/Product_card";
import React from "react";
const page = ({ params }) => {
  const brand = (params.brand).toUpperCase();
  const brand_prods=[];
  Object.keys(products).map((pid,index)=>{
    if((products[pid].required_desc.Brand).toUpperCase() === brand){
        brand_prods.push(pid);
    }
  })
  return (
    <>
      <div id="home_products" className="bg-[#F4FAFE] py-8">
        <div className="text-center py-8">
          <div className="text-black text-5xl font-bold">{brand}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-10 mx-5 lg:mx-36">
          {brand_prods.map((pids, index) => (
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
