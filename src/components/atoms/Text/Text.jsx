import React from "react";

const Text = ({ children, custom = "" }) => {
  return (
    <div
      className={`leading-normal tracking-wider text-normal font-normal text-neutral-800 my-1 ${custom}`}
    >
      {children}
    </div>
  );
};

export default Text;
