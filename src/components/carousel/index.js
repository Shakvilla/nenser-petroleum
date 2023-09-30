// src/components/Carousel.js
import React, { useState } from "react";
import Image from "next/image";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="w-full relative">
        <Image
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow-md text-gray-800"
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow-md text-gray-800"
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 mx-2 rounded-full ${
              activeIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-blue-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
