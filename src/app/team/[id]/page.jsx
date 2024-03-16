"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
// import find from "loadash";
import { memberDetails } from "@/data";
import SubHeading from "@/components/atoms/SubHeading/SubHeading";
import Text from "@/components/atoms/Text/Text";
import LetsTalk from "@/components/home/letstalk/LetsTalk";

const Name = ({ params }) => {
  const userData = memberDetails.filter(
    (member) => member?.id === Number(params.id)
  );
  // console.log(userData);
  return (
    <>
      <Hero>
        <div className="flex justify-center flex-col items-center relative h-full">
          <h1 className="font-extrabold text-white text-4xl">
            {/* {params.id} */}
            {userData[0].name}
          </h1>
          <h3 className="leading-normal tracking-wider text-xl font-bold text-white my-1">
            {userData[0].role}
          </h3>
        </div>
      </Hero>
      <section className="relative inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="relative py-16 px-4 md:px-8 flex flex-col lg:flex-row gap-x-4 h-full">
          <div className="w-full flex justify-center py-4 border-2 border-yellow-500 rounded-lg">
            {/* <div className=""> */}
            <Image
              src={userData[0].full_image}
              alt={userData[0].alt}
              width={450}
              height={500}
              className="border rounded-lg shadow-xl"
            />
            {/* </div> */}
          </div>

          <div className="w-full">
            {userData[0].description.map((desc) => (
              <div key={desc.id}>
                <p className="leading-normal tracking-wider text-lg font-normal text-neutral-800 my-1">
                  {desc.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LetsTalk />
    </>
  );
};

export default Name;
