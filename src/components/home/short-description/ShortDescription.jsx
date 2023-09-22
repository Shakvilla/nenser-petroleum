import Image from "next/image";
import React from "react";
import Cube from "../../../../public/assets/images/Cube.svg";

const ShortDescription = () => {
  return (
    <section className="flex container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="left-0 my-10">
        <Image src={Cube} alt="cube" />
      </div>
    </section>
  );
};

export default ShortDescription;
