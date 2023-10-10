"use client";
import React from "react";
import MemberCard from "./MemberCard";

import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import CEO from "../../../../public/assets/images/ceo.svg";
import GM from "../../../../public/assets/images/GMN.svg";
import Finance from "../../../../public/assets/images/finance.svg";
import Executive from "../../../../public/assets/images/exec-director.svg";
import MarketingManger from "../../../../public/assets/images/marketing-manager.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Text from "@/components/atoms/Text/Text";

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
        {
          id: 3,
          icon: <BiLogoInstagram />,
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
        {
          id: 2,
          icon: <BiLogoTwitter />,
          link: "#",
        },
        {
          id: 3,
          icon: <BiLogoInstagram />,
          link: "#",
        },
      ],
    },

    {
      id: 2,
      image: Finance,
      alt: "finance-manager",
      name: "Cornelius M. Dapilaah",
      role: "FINANCE MANAGER",
      description:
        "Cornelius is the Finance Manager of Nenser Petroleum Limited. He is a pragmatic Business Finance Analyst and Adviser with over",
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
        {
          id: 3,
          icon: <BiLogoInstagram />,
          link: "#",
        },
      ],
    },

    {
      id: 3,
      image: Executive,
      alt: "finance-manager",
      name: "Ayisha Maigah",
      role: "EXECUTIVE DIRECTOR",
      description:
        "Madam Ayisha Maigah is an Executive Director of Nenser Petroleum. She is a certified teacher with a Diploma in...",
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
        {
          id: 3,
          icon: <BiLogoInstagram />,
          link: "#",
        },
      ],
    },
    {
      id: 4,
      image: MarketingManger,
      alt: "marketin-manager",
      name: "Faridah E Kudjo",
      role: "MARKETING MANAGER",
      description:
        "Faridah Esinam Kudjo is an astute marketing professional. She is currently the sales and marketing manager of Nenser..",
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
        {
          id: 3,
          icon: <BiLogoInstagram />,
          link: "#",
        },
      ],
    },
  ];
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
                image={member.image}
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
