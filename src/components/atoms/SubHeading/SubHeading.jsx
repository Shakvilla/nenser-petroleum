import React from "react";

const SubHeading = ({ children }) => {
  return (
    <div className="leading-normal tracking-wider text-xl font-bold text-neutral-800 my-1">
      {children}
    </div>
  );
};

export default SubHeading;
