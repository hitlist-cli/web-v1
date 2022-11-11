import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";

export default function CLI() {
  const One = useRef();
  const Two = useRef();
  const resOne = useRef();
  const resTwo = useRef();
  useEffect(() => {
    const typedOne = new Typed(One.current, {
      strings: ["hit me"],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2500,
    });

    return () => {
      typedOne.destroy();
    };
  }, []);

  useEffect(() => {
    const typedTwo = new Typed(Two.current, {
      strings: ["hit run superlist"],
      startDelay: 600,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2500,
    });

    return () => {
      typedTwo.destroy();
    };
  }, []);

  //GSAP
  useEffect(() => {
    gsap.fromTo(resOne.current, { opacity: 0 }, { opacity: 1, duration: 0.15 }).delay(2.2);

    gsap.fromTo(resTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.15 }).delay(3.3);
  }, []);
  return (
    <div className="bg-neutral-900 mx-auto rounded-lg drop-shadow-xl overflow-hidden">
      <div className="bg-[#101010] px-4 py-4 w-full flex justify-start items-center space-x-1.5 lg:space-x-2">
        <div className="bg-green-500 w-2.5 aspect-square rounded-full"></div>
        <div className="bg-yellow-500 w-2.5 aspect-square rounded-full"></div>
        <div className="bg-red-500 w-2.5 aspect-square rounded-full"></div>
      </div>

      <div className="px-4 lg:px-6 pb-[5.2rem]">
        <div className="py-5">
          <p className="text-neutral-400 text-xs lg:text-sm font-semibold">
            $ <span className="text-white font-semibold" ref={One}></span>
          </p>
          <span className="text-xs lg:text-sm font-semibold text-white px-[1px]" ref={resOne}>
            Currently logged in as <span className="text-green-500 font-semibold">trulyao</span>
          </span>
        </div>

        <div className="pb-4">
          <p className="text-neutral-400 text-xs lg:text-sm font-semibold">
            $ <span className="text-white font-semibold" ref={Two}></span>
          </p>
          <span className="text-xs lg:text-sm font-semibold text-white px-[1px]" ref={resTwo}>
            <span className="text-green-500 font-semibold">superlist</span> has been successfully executed 🚀
          </span>
        </div>
      </div>
    </div>
  );
}
