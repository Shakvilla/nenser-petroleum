import Hero from "@/components/hero/Hero";
import Experience from "@/components/home/experience/Experience";
import Explore from "@/components/home/explore/explore";
import Gallery from "@/components/home/gallery/Gallery";
import LetsTalk from "@/components/home/letstalk/LetsTalk";
import Products from "@/components/home/products/Products";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero>
        <div className="flex justify-center items-center relative h-full">
          <h1 className="font-extrabold text-white text-4xl">
            Products & Services
          </h1>
        </div>
      </Hero>
      <Experience />
      <Explore />
      <Products />
      <Gallery />
      <LetsTalk />
    </div>
  );
};

export default page;
