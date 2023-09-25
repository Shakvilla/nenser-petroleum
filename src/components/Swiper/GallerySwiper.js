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
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

const Gallery = [
  {
    id: 0,
    image: (
      <Image
        src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="gallery-1"
        width={500}
        height={700}
        className="rounded-lg shadow-xl"
      />
    ),
  },
  {
    id: 1,
    image: (
      <Image
        src="https://images.pexels.com/photos/3216911/pexels-photo-3216911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="gallery-2"
        width={500}
        height={700}
        className="rounded-lg shadow-xl"
      />
    ),
  },
  {
    id: 2,
    image: (
      <Image
        src="https://images.pexels.com/photos/9805548/pexels-photo-9805548.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="gallery-1"
        width={500}
        height={700}
        className="rounded-lg shadow-xl "
      />
    ),
  },
];
export default function GallerySwiper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {Gallery.map((gal) => (
          <li key={gal.id} className="rounded-lg ">
            <SwiperSlide>{gal.image}</SwiperSlide>
          </li>
        ))}
      </Swiper>
    </>
  );
}
