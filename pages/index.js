/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "@/defaults/Meta";
import Typed from "typed.js";
import { gsap } from "gsap";
import Feature from "@/components/web/Feature";

const Home = () => {
  const router = useRouter();
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
    gsap
      .fromTo(resOne.current, { opacity: 0 }, { opacity: 1, duration: 0.15 })
      .delay(2.2);

    gsap
      .fromTo(resTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.15 })
      .delay(3.3);
  }, []);

  return (
    <main className="Body">
      <Meta title="Hit-List CLI" />
      <nav className="w-full bg-white fixed top-0 py-4 lg:py-5 px-5 lg:px-7 drop-shadow-md z-[99]">
        <img
          src="/images/Header-Black.svg"
          alt="Header"
          className="object-contain max-h-[4vh]"
        />
      </nav>

      <div className="w-[95%] md:w-[85%] lg:w-4/6 2xl:w-3/5 mx-auto pt-[15vh] lg:pt-[20vh]">
        <div className="w-[95%] lg:w-4/6 mx-auto text-center text-[2rem] lg:text-6xl leading-normal lg:leading-relaxed text-neutral-800 lg:font-semibold font-bold">
          Your <span className="text-primary font-semibold">online</span>{" "}
          commands manager
        </div>
        <h4 className="w-[90%] lg:w-4/5 mx-auto text-[12px] lg:text-sm font-medium text-center text-neutral-500 mt-[2vh] lg:mt-[3vh]">
          Hit-List CLI allows you to carry your commands with you everywhere in
          the cloud, share them with anyone, work smarter & faster.
        </h4>

        {/* DOCS BUTTON */}
        <div className="lg:w-3/5 mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 items-center justify-center pt-16 pb-6">
          <button
            className="w-[90%] lg:w-full py-4 px-10 text-white text-sm bg-primary rounded-lg hover:scale-95 transition-all drop-shadow-xl"
            onClick={() => router.push("/docs")}
          >
            Documentation
          </button>
          <button
            className="w-[90%] lg:w-full py-4 px-10 text-primary text-sm bg-white rounded-lg hover:scale-95 transition-all drop-shadow-xl"
            onClick={() => router.push("/auth/login")}
          >
            Sign In
          </button>
        </div>

        <div className="bg-neutral-800 w-[95%] lg:w-4/5 mx-auto mt-[3vh] lg:mt-[5vh] mb-4 px-6 py-4 rounded-lg drop-shadow-xl">
          <div className="lg:px-2 lg:py-1 w-full flex justify-end items-center space-x-1 lg:space-x-2">
            <div className="bg-green-500 w-2 lg:w-3 aspect-square rounded-full"></div>
            <div className="bg-yellow-500 w-2 lg:w-3 aspect-square rounded-full"></div>
            <div className="bg-red-500 w-2 lg:w-3 aspect-square rounded-full"></div>
          </div>

          <div className="px-3 pb-[5.2rem]">
            <div className="py-8">
              <p className="text-neutral-400 text-xs lg:text-sm font-semibold">
                $ <span className="text-white font-semibold" ref={One}></span>
              </p>
              <span
                className="text-xs lg:text-sm font-semibold text-white px-[1px]"
                ref={resOne}
              >
                Currently logged in as{" "}
                <span className="text-green-500 font-semibold">trulyao</span>
              </span>
            </div>

            <div className="pb-4">
              <p className="text-neutral-400 text-xs lg:text-sm font-semibold">
                $ <span className="text-white font-semibold" ref={Two}></span>
              </p>
              <span
                className="text-xs lg:text-sm font-semibold text-white px-[1px]"
                ref={resTwo}
              >
                <span className="text-green-500 font-semibold">superlist</span>{" "}
                has been successfully executed 🚀
              </span>
            </div>
          </div>
        </div>

        <div className="w-[95%] lg:w-full mx-auto pt-16 pb-24 bg-transparent grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5">
          <Feature image="Share">
            Share your commands with anyone easily and quickly
          </Feature>
          <Feature image="Hit">
            Make your workflow faster and cleaner by running multiple commands
            with one Hit
          </Feature>
          <Feature image="Cloud">
            Keep your lists safely on the cloud and use them anywhere and
            anytime
          </Feature>
          <Feature image="Doc">
            Easy to use with minimal learning curve or documentation required
          </Feature>
        </div>
      </div>
    </main>
  );
};

export default Home;
