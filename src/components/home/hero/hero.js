"use client";
import React from "react";
// import ReactPlayer from 'react-player'

import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./hero.module.css";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Hero = () => {
  return (
    <div className="h-screen relative top-0  backdrop-brightness-50  ">
      {/* <video src={video} autoPlay={true} width="100%" height="100%" /> */}

      <ReactPlayer
        url="https://player.vimeo.com/external/394835713.sd.mp4?s=fdc0a162e4eaa040eb84ae539f6a1f9431a42f58&profile_id=164&oauth2_token_id=57447761"
        // url="assets/videos/hero-video.mp4"
        playing={true}
        width="100%"
        height="100%"
        loop={true}
        className={styles.videos}
      />

      <div className="flex bg-slate-900/15 backdrop-brightness-75 top-0 absolute w-full h-full">
        <div className="flex container mx-auto px-4 sm:px-6 lg:px-8   h-full">
          <div className="container relative   py-14 lg:w-3/5 ">
            <h1 className=" font-bold md:font-extrabold text-[35px] md:text-[80px] xxl:text-[90px] text-white leading-10 md:leading-[80px] xxl:leading-[90px] xxl:tracking-widest">
              Delivering Quality Petroleum Products and Storage Services
            </h1>

            <div className=" mt-4">
              <span className="md:w-[702px] md:h-[142px] text-white text-2xl md:text-3xl font-normal md:leading-7 md:tracking-widest md:my-48 mt-20 ">
                Nenser is a leading distributor of quality petroleum products
                and provider of storage services in Ghana and the West African
                sub-region. With our extensive network and expertise, we ensure
                reliable supply and efficient storage solutions to meet the
                needs of our customers
              </span>
            </div>

            <div className="flex gap-y-4 gap-x-2 mt-8">
              <Link
                href="/contact"
                className="px-4 py-2 text-xs text-center text-yellow-500 border border-yellow-600 hover:bg-yellow-700 md:text-base hover:text-white font-base rounded"
                target="_blank"
              >
                Learn more
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-xs text-center text-gray-700 bg-yellow-500 rounded hover:bg-yellow-700 hover:text-white md:text-base font-base "
                target="_blank"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
