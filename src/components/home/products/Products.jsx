import Image from "next/image";
import React from "react";
import FuelProducts from "../../../../public/assets/images/fuel-pro.svg";
import Text from "@/components/atoms/Text/Text";
import Link from "next/link";

const products = [
  {
    id: 0,
    image: <Image src={FuelProducts} alt="fuel-products" className="py-2" />,
    title: "Fuel Products",
    desc: "   Meeting customers’ gasoline and gas-oil needs which form 86% of products consumed in Ghana. Also Nenser Petroleum will provide   consumers with specialized products. E.g. the Mining sector with  high-quality low Sulphur gasoil products required for their specialized equipment and the general public with LPG required for cooking.",
    link: "#",
  },
];
const Products = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 ">
      <div className=" flex justify-center">
        <h1 className="font-extrabold text-4xl text-lime-900">Products</h1>
      </div>

      <h2 className="font-extrabold text-3xl my-4">
        We are focused on <span className="text-lime-900"> real-time</span>{" "}
        trading that creates real,{" "}
        <span className="text-yellow-600"> long-term</span> value.
      </h2>

      {products.map((p) => (
        <div className="flex flex-col" key={p.id}>
          {/* <Image src={FuelProducts} alt="fuel-products" className="py-2" /> */}

          {p.image}
          <h1 className="font-extrabold text-3xl text-gray-800">{p.title}</h1>
          <Text>{p.desc}</Text>
          <div className="my-4">
            <Link
              href={p.link}
              className="px-4 py-2 text-xs text-center text-yellow-500 border border-yellow-600 hover:bg-yellow-700 md:text-base hover:text-white font-base rounded"
              target="_blank"
            >
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
