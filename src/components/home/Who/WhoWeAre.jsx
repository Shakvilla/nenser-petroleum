import React from "react";
// import NenserText from "../../../../public/assets/images/NENSER-PETROLEUM.svg";
import Image from "next/image";
import Who from "../../../../public/assets/images/who-we-are.svg";
import prodserv from "../../../../public/assets/images/product-services.svg";
import strategy from "../../../../public/assets/images/strategies.svg";
import Link from "next/link";
import Text from "@/components/atoms/Text/Text";

const NenserText = [
  {
    id: 0,
    letter: "N",
  },
  {
    id: 1,
    letter: "E",
  },
  {
    id: 2,
    letter: "N",
  },
  {
    id: 3,
    letter: "S",
  },
  {
    id: 4,
    letter: "E",
  },
  {
    id: 5,
    letter: "R",
  },
  {
    id: 6,
    letter: "",
  },
];

const NenserText2 = [
  {
    id: 0,
    letter: "P",
  },
  {
    id: 1,
    letter: "E",
  },
  {
    id: 2,
    letter: "T",
  },
  {
    id: 3,
    letter: "R",
  },
  {
    id: 4,
    letter: "O",
  },
  {
    id: 5,
    letter: "L",
  },
  {
    id: 6,
    letter: "E",
  },
  {
    id: 7,
    letter: "U",
  },
  {
    id: 7,
    letter: "M",
  },
];
const array = [
  {
    id: 0,
    title: " Who We Are",
    image: <Image src={Who} alt="who-we-are" className=" w-52 h-52" />,
    desc: "NENSER is a new Bulk Distributing Company (BDC) that distributes quality petroleum products and provides storage services to the Ghana and West African sub-region (land-locked countries) markets. NENSER is a private limited liability company, owned and fully operated by Ghanaians.",
  },

  {
    id: 1,
    title: " Product & Services",
    image: (
      <Image src={prodserv} alt="product-services" className=" w-52 h-52" />
    ),
    desc: "Discover our wide selection of high-quality products and services, including Fuel Products, terminal services, West African market services, downstream advisory. Our products are sourced from reputable suppliers and undergo rigorous quality control to ensure optimal performance and..",
  },
  {
    id: 2,
    title: " Our Stretegy",
    image: <Image src={strategy} alt="our-strategy" className=" w-52 h-52" />,
    desc: "Our target is simple, exceptional service to our customers that exceeds their expectations while building lasting relationships and trustworthiness even as we ensure that our people uphold the highest regulatory, health, safety, environmental and quality standards applicable anywhere in...",
  },
];
const WhoWeAre = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <Image src={NenserText} alt="Nenser Text" /> */}
        <div className=" justify-center gap-x-3 hidden lg:flex">
          {NenserText.map((t) => (
            <span
              key={t.id}
              className=" text-8xl text-lime-900/25  font-extrabold"
            >
              {t.letter}
            </span>
          ))}

          {NenserText2.map((t) => (
            <span
              key={t.id}
              className=" text-8xl  text-lime-900/25 font-extrabold"
            >
              {t.letter}
            </span>
          ))}
        </div>
        <div className="md:flex">
          {array.map((arr) => (
            <div className="flex flex-col items-center my-10" key={arr.id}>
              <h1 className="font-extrabold text-3xl text-gray-800 ">
                {arr.title}
              </h1>
              <div className="flex justify-center mt-2 mb-1">{arr.image}</div>
              <div className="flex flex-col justify-center mx-4">
                <Text className="text-lg text-gray-800 ">{arr.desc}</Text>
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
      </div>
    </>
  );
};

export default WhoWeAre;
