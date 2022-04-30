/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Feature = ({ children, image }) => {
  //AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className=" flex items-center space-x-5 bg-white drop-shadow-lg px-5 py-4 rounded-xl"
      data-aos="zoom-in-up"
    >
      <img
        src={`/images/${image}.svg`}
        alt={image}
        className="w-12 lg:w-12 aspect-square"
      />
      <div className="text-[11px] lg:text-xs text-slate-500 font-normal">
        {children}
      </div>
    </div>
  );
};

export default Feature;
