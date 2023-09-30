import GallerySwiper from "@/components/Swiper/GallerySwiper";
import React from "react";

const Gallery = () => {
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 "
      data-aos="zoom-in-up"
    >
      <div className="flex justify-center my-4">
        <h1 className="font-extrabold text-4xl text-gray-800">Our Gallery</h1>
      </div>

      <div className="flex justify-center relative">
        <GallerySwiper />
      </div>
    </div>
  );
};

export default Gallery;
