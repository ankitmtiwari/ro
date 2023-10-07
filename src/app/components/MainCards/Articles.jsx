import React from 'react'
import Article_card from '../Cards/Article_card'

function Articles() {
  return (
    <>
    <div className='bg-[#F4FAFE] '>

        <div className='text-center py-10'>
            <div className='text-blue-400 text-xl font-bold py-4'>News & Updates</div>
            <div className='text-black text-5xl font-extrabold'>Know more about </div>
            <div className='text-black text-5xl font-extrabold'>water purifiers!</div>
        </div>
        <div className='grid grid-cols-3 gap-10 mx-48 py-5'>
        <Article_card title="Which water heater is more technology advanced?" desc="Posuere tellus imperdiet facilisiab vaucibusy telluseu semper.…"/>
        <Article_card title="Which water heater is more technology advanced??" desc="This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works."/>
        <Article_card title="Which water heater is more technology advanced?" desc="This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works.This is water purifier basic details about the water purifier that how it works."/>
        </div>
    </div>
    </>
  )
}

export default Articles