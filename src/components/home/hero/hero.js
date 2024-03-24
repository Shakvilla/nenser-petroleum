"use client";
import React from "react";
// import ReactPlayer from 'react-player'

import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./hero.module.css";
import ExportedImage from "next-image-export-optimizer";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Hero = () => {
  return (
    <div className="h-[75vh] lg:h-[70vh] md:h-[40vh] relative top-0  backdrop-brightness-50  ">
      {/* <video src={video} autoPlay={true} width="100%" height="100%" /> */}

      <ExportedImage
        // url="https://player.vimeo.com/external/394835713.sd.mp4?s=fdc0a162e4eaa040eb84ae539f6a1f9431a42f58&profile_id=164&oauth2_token_id=57447761"
        // url="assets/videos/hero-video.mp4"
        // playing={true}
        src="https://images.pexels.com/photos/6045858/pexels-photo-6045858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fill
        objectFit="cover"
        // loop={true}
        // className={styles.videos}
        alt="hero-bg"
      />

      <div>
        <div
          className=" bg-slate-900/15 backdrop-brightness-75 top-0 absolute w-full h-full"
          data-aos="zoom-in-up"
        >
          {/* <div className="flex items-center justify-center mt-10">
            <ExportedImage 
              // url="https://player.vimeo.com/external/394835713.sd.mp4?s=fdc0a162e4eaa040eb84ae539f6a1f9431a42f58&profile_id=164&oauth2_token_id=57447761"
              // url="assets/videos/hero-video.mp4"
              // playing={true}
              src="/assets/images/logo.svg"
              width={400}
              height={300}
              objectFit="contain"
              // loop={true}
              // className={styles.videos}
              alt=""
            />
          </div> */}
          <div className="flex container mx-auto px-8 sm:px-6 lg:px-12   h-full">
            <div className="container relative   py-14 lg:w-3/5 ">
              <h1 className=" font-bold md:font-bold text-[35px] md:text-[65px] xxl:text-[70px] text-white leading-10 md:leading-[70px] xxl:leading-[80px] xxl:tracking-widest">
                Nenser Petroleum
              </h1>
              <h3 className="text-white text-xl">
                {" "}
                Delivering Quality Petroleum Products and Storage Services
              </h3>

              <div className=" mt-4">
                <span className="md:w-[702px] md:h-[142px] text-white text-xl md:text-xl font-normal   md:my-48 mt-20 ">
                  Nenser is a leading distributor of quality petroleum products
                  and provider of storage services in Ghana and the West African
                  sub-region. With our extensive network and expertise, we
                  ensure reliable supply and efficient storage solutions to meet
                  the needs of our customers
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
    </div>
  );
};

export default Hero;
