import React from "react";

const HeaderText = ({ children }) => {
  return (
    <div className="text-3xl lg:text-6xl font-semibold mt-[2vh] lg:mt-[4vh] mb-[4vh]">
      {children}
      <h4 className="text-slate-400 text-[12px] font-medium mt-2 px-1">
        Last updated 29/04/2022
      </h4>
    </div>
  );
};

export default HeaderText;
