import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Experience from "@/components/home/experience/Experience";
import LetsTalk from "@/components/home/letstalk/LetsTalk";
import Team from "@/components/home/team/Team";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero>
        <div className="flex justify-center items-center relative h-full">
          <h1 className="font-extrabold text-white text-4xl">About Us</h1>
        </div>
      </Hero>

      <Experience />
      <About />
      <Team />
      <LetsTalk />
    </div>
  );
};

export default page;
