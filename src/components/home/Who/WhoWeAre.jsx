import React from "react";
import NenserText from "../../../../public/assets/images/NENSER-PETROLEUM.svg";
import Image from "next/image";
import Who from "../../../../public/assets/images/who-we-are.svg";
import prodserv from "../../../../public/assets/images/product-services.svg";
import strategy from "../../../../public/assets/images/strategies.svg";
import Link from "next/link";

const array = [
  {
    id: 0,
    title: " Who We Are",
    image: <Image src={Who} alt="who-we-are" className=" w-72" />,
    desc: "NENSER is a new Bulk Distributing Company (BDC) that distributes quality petroleum products and provides storage services to the Ghana and West African sub-region (land-locked countries) markets. NENSER is a private limited liability company, owned and fully operated by Ghanaians.",
  },

  {
    id: 1,
    title: " Product & Services",
    image: <Image src={prodserv} alt="product-services" className=" w-72" />,
    desc: "Discover our wide selection of high-quality products and services, including Fuel Products, terminal services, West African market services, downstream advisory. Our products are sourced from reputable suppliers and undergo rigorous quality control to ensure optimal performance and..",
  },
  {
    id: 2,
    title: " Our Stretegy",
    image: <Image src={strategy} alt="our-strategy" className=" w-72" />,
    desc: "Our target is simple, exceptional service to our customers that exceeds their expectations while building lasting relationships and trustworthiness even as we ensure that our people uphold the highest regulatory, health, safety, environmental and quality standards applicable anywhere in...",
  },
];
const WhoWeAre = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <Image src={NenserText} alt="Nenser Text" /> */}

        {array.map((arr) => (
          <div className="flex flex-col items-center my-10" key={arr.id}>
            <h1 className="font-extrabold text-3xl text-gray-800 underline">
              {arr.title}
            </h1>
            <div className="flex justify-center mt-2 mb-1">{arr.image}</div>
            <div>
              <span className="text-lg text-gray-800 ">{arr.desc}</span>
              <div className="my-3 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="px-4 py-2 text-xs text-center text-yellow-500 border border-yellow-600 hover:bg-yellow-700 md:text-base hover:text-white font-base rounded"
                  target="_blank"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhoWeAre;
