"use client";
import React from "react";
import MemberCard from "./MemberCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Text from "@/components/atoms/Text/Text";
import { memberDetails } from "@/data";

const Team = () => {
  return (
    <div className="container mx-auto px-8 sm:px-6 lg:px-16 py-8">
      <div className="flex justify-center">
        <h1 className="font-extrabold text-4xl text-gray-800">Meet Our Team</h1>
      </div>
      <div className="flex lg:justify-center">
        <span className="leading-normal tracking-wider text-normal md:text-lg font-normal lg:font-medium text-neutral-800  my-1">
          Get to know the talented people behind Nenser Petroleum
        </span>
      </div>
      <div className="hidden  lg:grid md:grid-cols-3 lg:grid-cols-5">
        {memberDetails.map((member) => (
          <div key={member.id} data-aos="zoom-in-up">
            <>
              <MemberCard
                id={member.id}
                image={member.image}
                short_desc={member.short_desc}
                alt={member.alt}
                name={member.name}
                role={member.role}
                description={member.description}
                socialMedia={member.socialMedia}
              />
            </>
          </div>
        ))}
      </div>

      <div className="lg:hidden" data-aos="zoom-in-up">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {memberDetails.map((member) => (
            <div key={member.id}>
              <SwiperSlide>
                <MemberCard
                  id={member.id}
                  image={member.image}
                  alt={member.alt}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  socialMedia={member.socialMedia}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
