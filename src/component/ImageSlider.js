import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';

const slideImages = [
  {
    src: "/slide2.webp",
    heading: "Lessons and Insights",
    smheading: "from 9 years",
  },
  {
    src: "/slide4.webp",
    heading: "Grow Buisness fast",
    smheading: "For free of cost",
  },
  {
    src: "/slide3.webp",
    heading: "Learn Design and Illutration",
    smheading: "in 6 Months",
  },
];

function ImageSlider() {
  return (
    <div className=" py-4">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className=" bg-cover h-[400px]"
              style={{ backgroundImage: `url(${slideImage.src})` }}
            >
              <div className="p-16 sm:p-24">
                <h1 className="text-sm sm:text-3xl md:text-5xl font-bold text-black py-2">{slideImage.heading}</h1>
                <h2 className='text-md sm:text-2xl md:text-4xl text-green-500 font-bold py-3'>{slideImage.smheading}</h2>
                <p className='text-gray-500 text-xs sm:text-base py-3'>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <div className="">
                  <button className="bg-green-800 px-3 text-2xl text-white rounded-md py-1">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlider
