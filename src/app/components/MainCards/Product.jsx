import React from 'react'
import Product_card from '../Cards/Product_card'

function Product() {
  return (
    <> 
    <div id="home_products" className='bg-[#F4FAFE] py-8'>
        <div className='text-center py-8'>
            <div className='text-blue-400 text-xl font-bold py-4'>Most Popular</div>
            <div className='text-black text-5xl font-bold'>Products</div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4   gap-10  lg:gap-10 py-10 mx-5 lg:mx-36'>
        {/* <div className='grid grid-cols-4 gap-10 mx-36 py-5'> */}

            <Product_card name={"water-1"} price={"1000.00"} className="p-2"/>
            <Product_card name={"water-2"} price={"2000.00"} className="p-2"/>
            <Product_card name={"water-3"} price={"3000.00"} className="p-2"/>
            <Product_card name={"water-4"} price={"4000.00"} className="p-2"/>
        </div>
        <div className='flex justify-center p-3 py-6'>
            <div className='bg-[#00A8FF] px-6 py-4 text-white text-lg font-semibold rounded-full w-fit hover:bg-black hover:text-white  transition-all ease-in-out delay-100 cursor-pointer'>
                View All Products
            </div>
        </div>
    </div>
    </>
  )
}

export default Product