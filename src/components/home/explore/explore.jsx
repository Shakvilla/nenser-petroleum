import SubHeading from "@/components/atoms/SubHeading/SubHeading";
import React from "react";
import Link from "next/link";
const Explore = () => {
  return (
    <div className=" bg-gradient-to-br from-lime-900 to-lime-900/70 py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row">
        <div className="">
          <h1 className="font-extrabold text-white text-normal leading-9 tracking-widest lg:text-yellow-400">
            Quality
          </h1>
          <div className="w-[366px] lg:w-[700px] lg:text-[58px] lg:leading-[58px] h-[109px] text-white text-[32px] font-extrabold leading-9 tracking-widest my-2">
            Explore our range of petroleum products
          </div>
        </div>
        <div className=" lg:w-2/5">
          <span className=" lg:w-96 text-white text-lg font-normal leading-normal tracking-wider my-3">
            Discover our wide selection of high-quality products and services,
            including Fuel Products, terminal services, West African market
            services, downstream advisory. Our products are sourced from
            reputable suppliers and undergo rigorous quality control to ensure
            optimal performance and reliability. With competitive prices and
            convenient delivery options, we are your trusted partner for all
            your petroleum needs
          </span>
          <div className="my-5">
            <Link
              href="/contact"
              className="px-4 py-2 text-xs text-center text-gray-700 bg-yellow-500 rounded hover:bg-yellow-700 hover:text-white md:text-base font-base "
              target="_blank"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
