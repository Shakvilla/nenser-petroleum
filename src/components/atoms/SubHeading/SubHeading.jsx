import React from "react";

const SubHeading = ({ children }) => {
  return (
    <h3 className="leading-normal tracking-wider text-xl font-bold text-neutral-800 my-1">
      {children}
    </h3>
  );
};

export default SubHeading;
