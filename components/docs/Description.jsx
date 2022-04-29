import React from "react";

const Description = ({ children }) => {
  return (
    <h4 className="mt-2 text-xs lg:text-[13px] text-slate-500 px-1 leading-6">
      {children}
    </h4>
  );
};

export default Description;
