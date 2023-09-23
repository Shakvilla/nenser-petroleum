import Image from "next/image";
import React from "react";
import Cube from "../../../../public/assets/images/Cube.svg";
import CurvedArrow from "../../../../public/assets/images/curved-arrow.svg";

const ShortDescription = () => {
  return (
    <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="left-0 mt-10 mb-2">
        <Image src={Cube} alt="cube" />
      </div>
      <div>
        <h1
          className=" text-neutral-800 font-extrabold text-[32px] leading-[45px]
tracking-[2.56px] "
        >
          <span className="flex items-center gap-x-1">
            Experience the <Image src={CurvedArrow} alt="curve-arrow" />
          </span>{" "}
          highest quality <span className="text-lime-800"> Petroleum</span>{" "}
          products and storage services with{" "}
          <span className="text-yellow-600">Nenser</span>
        </h1>
      </div>
    </div>
  );
};

export default ShortDescription;
