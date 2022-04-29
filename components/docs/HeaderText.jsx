import React from "react";

const HeaderText = ({ children }) => {
  return (
    <h1 className="text-3xl lg:text-6xl font-semibold mt-[8vh] lg:mt-0">
      {children}
    </h1>
  );
};

export default HeaderText;
