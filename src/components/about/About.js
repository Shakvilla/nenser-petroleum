import ExportedImage from "next-image-export-optimizer";
import React from "react";
import FuelProducts from "../../../public/assets/images/fuel-pro.svg";
import Text from "@/components/atoms/Text/Text";
import Link from "next/link";
import TerminalService from "../../../public/assets/images/terminal-service.svg";
import WestAfrica from "../../../public/assets/images/west-africa.svg";
import Advisory from "../../../public/assets/images/down-stream-advisory.svg";

const products = [
  {
    id: 0,
    image: (
      <ExportedImage src={FuelProducts} alt="fuel-products" className="py-2" />
    ),
    title: "Our Vision",
    desc: "   We will become the primary BDC of choice for product supply and storage facility operations for Ghana and land-locked West African sub-region petroleum sector consumers through effective service and continuous innovation that exceeds their expectations.",
    link: "#",
  },

  {
    id: 1,
    image: (
      <ExportedImage
        src={TerminalService}
        alt="terminal-service"
        className="py-2"
      />
    ),
    title: "Our core values",
    desc: "   Every day we operate, we shall strive to enshrine these core values into the way we work because we believe that they are the keys to success for NENSER:",
    link: "#",
  },
];

const products2 = [
  {
    id: 0,
    image: (
      <ExportedImage
        src={WestAfrica}
        alt="west-africa-sub-region"
        className="py-2"
      />
    ),
    title: "Our Mission",
    desc: "  Our mission involves four major activities. Offer consumers the best products, at the best prices through our modern facility. Building strong partnerships locally and in the land-locked West African sub-region. Invest in the best people and technology to exceed consumer expectations.Adhering to our risk framework to ensure consumers experience the highest health, safety, environmental and quality standards.",
    link: "#",
  },
];
const About = () => {
  return (
    <div
      className="container mx-auto px-8 sm:px-6 lg:px-16 lg:py-16 "
      data-aos="zoom-in"
    >
      <div className=" flex justify-center">
        <h1 className="font-extrabold text-4xl text-lime-900">Our Company</h1>
      </div>
      <div className="flex flex-col lg:flex-row my-4">
        <div className="m-4 w-1/2">
          <h2 className="font-extrabold text-3xl my-4">
            We are focused on <span className="text-lime-900"> real-time</span>{" "}
            trading that creates real,{" "}
            <span className="text-yellow-600"> long-term</span> value.
          </h2>

          {products.map((p) => (
            <div className="flex flex-col" key={p.id} data-aos="zoom-in-up">
              {/* <ExportedImage  src={FuelProducts} alt="fuel-products" className="py-2" /> */}

              {p.image}
              <h1 className="font-extrabold text-3xl text-gray-800">
                {p.title}
              </h1>
              <div>
                <Text>{p.desc}</Text>
              </div>
              {/* <div className="my-4">
                <Link
                  href={p.link}
                  className="px-4 py-2 text-xs text-center text-yellow-500 border border-yellow-600 hover:bg-yellow-700 md:text-base hover:text-white font-base rounded"
                  target="_blank"
                >
                  Learn more
                </Link>
              </div> */}
            </div>
          ))}
        </div>
        <div className="w-1/2">
          {products2.map((p) => (
            <div className="flex flex-col" key={p.id} data-aos="zoom-in-up">
              {/* <ExportedImage  src={FuelProducts} alt="fuel-products" className="py-2" /> */}

              {p.image}
              <h1 className="font-extrabold text-3xl text-gray-800">
                {p.title}
              </h1>

              <div className="  ">
                <Text>{p.desc}</Text>
              </div>
              {/* <div className="my-4">
                <Link
                  href={p.link}
                  className="px-4 py-2 text-xs text-center text-yellow-500 border border-yellow-600 hover:bg-yellow-700 md:text-base hover:text-white font-base rounded"
                  target="_blank"
                >
                  Learn more
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
