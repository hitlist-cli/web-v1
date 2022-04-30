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
      className=" flex items-center space-x-5 border-[1px] border-primary px-5 py-4 rounded-xl"
      data-aos="zoom-up"
    >
      <img
        src={`/images/${image}.svg`}
        alt={image}
        className="lg:w-12 aspect-square"
      />
      <div className="text-xs text-slate-500 font-normal">{children}</div>
    </div>
  );
};

export default Feature;
