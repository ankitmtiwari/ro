import React from "react";
import Product_card from "@/app/components/Cards/Product_card";
const page = () => {
  return (
    <>
      <div id="home_products" className="bg-[#F4FAFE] py-8">
        <div className="text-center py-8">
          <div className="text-black text-5xl font-bold">All Products</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-10 mx-5 lg:mx-36">
          {/* <div className='grid grid-cols-4 gap-10 mx-36 py-5'> */}

          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="3"
            name={
              "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter"
            }
            price={"3000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp"
          />
          <Product_card
            pid="4"
            name={
              "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter"
            }
            price={"4000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="3"
            name={
              "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter"
            }
            price={"3000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp"
          />
          <Product_card
            pid="4"
            name={
              "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter"
            }
            price={"4000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="3"
            name={
              "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter"
            }
            price={"3000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp"
          />
          <Product_card
            pid="4"
            name={
              "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter"
            }
            price={"4000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="4"
            name={
              "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter"
            }
            price={"4000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="3"
            name={
              "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter"
            }
            price={"3000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp"
          />
          <Product_card
            pid="4"
            name={
              "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter"
            }
            price={"4000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="3"
            name={
              "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter"
            }
            price={"3000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp"
          />
          <Product_card
            pid="3"
            name={
              "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter"
            }
            price={"3000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp"
          />
          <Product_card
            pid="4"
            name={
              "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter"
            }
            price={"4000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="3"
            name={
              "Aqua Fresh Opel copper 18 ltr+copper filter 18 L RO + UV + UF + Copper + TDS Control Water Purifier with Prefilter"
            }
            price={"3000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/vqauzdc3ipwkknr9iugz.webp"
          />
          <Product_card
            pid="4"
            name={
              "Aqua Fresh Omega Audy+Ro+Uv+Uf+Tds+mineral 12 L RO + UV + UF + TDS Water Purifier with Prefilter"
            }
            price={"4000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/dkjjytilwreacmhabsan.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
          <Product_card
            pid="2"
            name={
              "LIVPURE LIV-PEP-PRO-STAR. 7 L RO + UV + UF + Minerals Water Purifier"
            }
            price={"2000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353572/RO-IMAGES/zvk3rztjbiboy2jammnn.webp"
          />
          <Product_card
            pid="1"
            name={
              "KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection"
            }
            price={"1000.00"}
            className="p-2"
            img="https://res.cloudinary.com/da5scjnwh/image/upload/v1697353573/RO-IMAGES/zohopqu51vyymzqppr2p.webp"
          />
        </div>
      </div>
    </>
  );
};

export default page;
