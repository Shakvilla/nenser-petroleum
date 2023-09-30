import SubHeading from "@/components/atoms/SubHeading/SubHeading";
import React from "react";
import Link from "next/link";
const LetsTalk = () => {
  return (
    <div className=" bg-gradient-to-br from-lime-900 to-lime-900/70 py-5">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row"
        data-aos="zoom-in-up"
      >
        <div className="">
          <h1 className="font-extrabold text-white text-normal leading-9 tracking-widest lg:text-yellow-400">
            Talk to us
          </h1>
          <div className="w-[366px] lg:w-[700px] lg:text-[58px] lg:leading-[58px] h-[109px] text-white text-[32px] font-extrabold leading-9 tracking-widest my-2">
            Have a question? We’d love to hear from you.
          </div>
        </div>
        <div
          className="w-full lg:w-2/5 flex items-center"
          data-aos="zoom-in-up"
        >
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

export default LetsTalk;
