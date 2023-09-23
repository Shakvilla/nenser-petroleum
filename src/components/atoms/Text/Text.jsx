import React from "react";

const Text = ({ children }) => {
  return (
    <div className="leading-normal tracking-wider text-base font-normal text-neutral-800  my-1">
      {children}
    </div>
  );
};

export default Text;
