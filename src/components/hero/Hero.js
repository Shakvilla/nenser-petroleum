import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="w-full py-16 md:py-32  bg-gradient-to-br from-lime-900 to-lime-900/70 ">
      {children}
    </div>
  );
};

export default Hero;
