/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Feature = ({ children, image }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col items-start gap-4 bg-neutral-200 bg-opacity-50 backdrop-blur-xl px-5 py-6 rounded-xl" data-aos="slide-up">
      <img src={`/images/${image}.svg`} alt={image} className="w-12 lg:w-12 aspect-square" />
      <p className="text-xs text-neutral-700 font-semibold leading-normal">{children}</p>
    </div>
  );
};

export default Feature;
