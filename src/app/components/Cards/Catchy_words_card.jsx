import React from 'react'
import Image from "next/image";

function Catchy_words_card(props) {
    return (
        <>
          <div className="border-b-2 sm:border-0 ">
            <div className='flex justify-start align-middle items-center gap-4 sm:border-r-2'>
              <div>
                <Image
                  src={props.img_url}
                  width={90}
                  height={90}
                  className='h-14 sm:h-20 w-14 sm:w-20'
                />
              </div>
              <div className="text-white font-semibold text-sm sm:text-lg">
                {props.title}</div>
            </div>
          </div>
        </>
      );
}

export default Catchy_words_card