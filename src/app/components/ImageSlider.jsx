"use client"
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider() {
  const slides = [
    {
      url: 'https://res.cloudinary.com/da5scjnwh/image/upload/v1696949127/RO-IMAGES/vlep3f4tf5rnszyh1j3o.jpg'
    },
    // {
    //   url: 'https://res.cloudinary.com/da5scjnwh/image/upload/v1696949497/RO-IMAGES/wzy8bawpah2cvhpg4ktg.jpg'
    // },
    {
      url: 'https://res.cloudinary.com/da5scjnwh/image/upload/v1696951387/RO-IMAGES/g1cpsltesymi6vewmwsz.webp'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1920px] h-[350px] lg:h-[700px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-sm lg:text-2xl rounded-full p-1 lg:p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide}  className='h-5 w-5 lg:h-7 lg:w-7'/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-sm lg:text-2xl rounded-full p-1 lg:p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} className='h-5 w-5 lg:h-7 lg:w-7'/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider