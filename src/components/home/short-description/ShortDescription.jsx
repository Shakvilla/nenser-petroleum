import Image from "next/image";
import React from "react";
import Cube from "../../../../public/assets/images/Cube.svg";
import CurvedArrow from "../../../../public/assets/images/curved-arrow.svg";
import Text from "@/components/atoms/Text/Text";
import SubHeading from "@/components/atoms/SubHeading/SubHeading";
import OilRefinery from "../../../../public/assets/images/oil-refinery.svg";
import SunRays from "../../../../public/assets/images/sun-rays.svg";
const ShortDescription = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 container">
          <div></div>
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

            <Text>
              At Nenser, we are committed to delivering top-notch petroleum
              products and reliable storage services to meet your needs.
            </Text>

            <div className="lg:flex gap-x-8">
              <div className="flex flex-col">
                <SubHeading>Quality</SubHeading>
                <Text>
                  Our target is simple, exceptional service to our customers
                  that exceeds their expectations while building lasting
                  relationships and trustworthiness even as we ensure that our
                  people uphold the highest regulatory, health, safety,
                  environmental and quality standards applicable anywhere in the
                  world.
                </Text>
              </div>

              <div className="flex flex-col">
                <SubHeading>Reliability</SubHeading>
                <Text>
                  Specifically, we will provide the oil marketing companies
                  (OMCs) with high quality petroleum products to market to
                  industrial entities and the public. NENSER will also supply
                  bulk consumers and will offer highly efficient and
                  environmental safe petroleum products tank farm services to
                  its clients in the downstream sector of the oil and gas
                  industry.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 items-center justify-center">
          <Image src={OilRefinery} alt="oil-refinery" className="" />
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={SunRays} alt="sun-rays" />
      </div>
    </div>
  );
};

export default ShortDescription;
