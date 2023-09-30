import React from "react";
import Engineer from "../../../../public/assets/images/engineers.svg";
import Image from "next/image";
import SubHeading from "@/components/atoms/SubHeading/SubHeading";
import Text from "@/components/atoms/Text/Text";
import Cube from "../../../../public/assets/images/Cube.svg";
const Experience = () => {
  return (
    <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 ">
      <div className="w-1/2 hidden lg:block">
        <Image src={Engineer} alt="engineer" className="w-[550px] h-[700px]" />
      </div>
      <div className="lg:w-1/2">
        <div className=" container">
          <div className="hidden lg:block left-0 mt-10 mb-2">
            <Image src={Cube} alt="cube" />
          </div>
          <div className="py-10">
            <h1
              className=" text-neutral-800 font-extrabold text-[32px] leading-[45px]
                tracking-[2.56px] "
            >
              <span className="flex items-center gap-x-1">Experience the</span>{" "}
              highest quality <span className="text-lime-800"> Petroleum</span>{" "}
              products and storage services with{" "}
              <span className="text-yellow-600">Nenser</span>
            </h1>
            <div className="lg:hidden my-4">
              <Image src={Engineer} alt="engineer" />
            </div>
            <Text>
              At <b className="text-yellow-600">Nenser</b>, we are committed to
              delivering top-notch petroleum products and reliable storage
              services to meet your needs.
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
                  industrial entities and the public.{" "}
                  <b className="text-yellow-600">NENSER</b>, will also supply
                  bulk consumers and will offer highly efficient and
                  environmental safe petroleum products tank farm services to
                  its clients in the downstream sector of the oil and gas
                  industry.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
