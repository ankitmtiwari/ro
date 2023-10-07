import React from 'react'
import Image from "next/image";

function Catchy_words_card(props) {
    return (
        <>
          <div className=" border-r-2 border-r-gray-100">
            <div className='flex justify-start align-middle items-center gap-4'>
              <div>
                <Image
                  src={props.img_url}
                  width={90}
                  height={90}
                />
              </div>
              <div className="text-white font-semibold text-lg">
                {props.title}</div>
            </div>
          </div>
        </>
      );
}

export default Catchy_words_card