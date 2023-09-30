"use client";
import React from "react";
import MemberCard from "./MemberCard";

import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import CEO from "../../../../public/assets/images/ceo.svg";
import GM from "../../../../public/assets/images/GMN.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Team = () => {
  const memberDetails = [
    {
      id: 0,
      image: CEO,
      alt: "ceo",
      name: "Mesuna Sumaila",
      role: "CEO",
      description:
        "Mr. Sumaila Mesuna is the Executive Chairman and Director of Nenser Petroleum. He founded the company in January 2020",
      socialMedia: [
        {
          id: 0,
          icon: <BiLogoFacebook />,
          link: "#",
        },
        {
          id: 2,
          icon: <BiLogoTwitter />,
          link: "#",
        },
      ],
    },
    {
      id: 1,
      image: GM,
      alt: "general-manager",
      name: "Ida Mona Goh",
      role: "General Manager",
      description:
        "Ida is a commercial and business development professional in the downstream oil sector, at present she is the General Manager of Nenser ",
      socialMedia: [
        {
          id: 0,
          icon: <BiLogoFacebook />,
          link: "#",
        },
      ],
    },
  ];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="flex justify-center">
        <h1 className="font-extrabold text-4xl text-gray-800">Meet Our Team</h1>
      </div>
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
  );
};

export default Team;
