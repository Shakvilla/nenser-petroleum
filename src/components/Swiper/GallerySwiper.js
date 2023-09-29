"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Gallery = [
  {
    id: 0,
    image: (
      <img
        src="https://images.pexels.com/photos/10407689/pexels-photo-10407689.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="gallery-1"
        width="100%"
        height="100%"
        className="rounded-lg shadow-xl"
      />
    ),
  },
  {
    id: 1,
    image: (
      <img
        src="https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="gallery-2"
        width="100%"
        height="100%"
        className="rounded-lg shadow-xl"
      />
    ),
  },
  {
    id: 2,
    image: (
      <img
        src="https://images.pexels.com/photos/9805548/pexels-photo-9805548.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="gallery-1"
        width="100%"
        height="100%"
        className="rounded-lg shadow-xl "
      />
    ),
  },
];
export default function GallerySwiper() {
  return (
    <div className="w-full h-full lg:w-3/4 lg:h-3/5 ">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {Gallery.map((gal) => (
          <li key={gal.id} className="rounded-lg ">
            <SwiperSlide>{gal.image}</SwiperSlide>
          </li>
        ))}
      </Swiper>
    </div>
  );
}
