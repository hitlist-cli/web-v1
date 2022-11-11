/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "@/defaults/Meta";
import Typed from "typed.js";
import { gsap } from "gsap";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Feature from "@/components/web/Feature";

const Home = () => {
  const router = useRouter();
  const One = useRef();
  const Two = useRef();
  const resOne = useRef();
  const resTwo = useRef();

  const currentDate = new Date();

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
    <main className="Body">
      <Meta title="Hit-List CLI" />
      <nav className="w-full bg-white fixed top-0 py-6 lg:py-6 px-5 lg:px-7 border-b border-b-neutral-100 z-[99]">
        <img src="/images/Header-Black.svg" alt="Header" className="object-contain max-h-[4vh]" />
      </nav>

      <section className="w-[95%] md:w-[85%] lg:w-4/6 2xl:w-3/5 mx-auto pt-[15vh] lg:pt-[20vh]">
        <div className="w-full mx-auto text-center text-[2rem] lg:text-6xl text-neutral-800 lg:font-semibold font-black">
          Your <span className="text-primary font-semibold">online</span>
        </div>
        <div className="w-[95%] mx-auto text-center text-[1.9rem] lg:text-[3.6rem] text-neutral-800 lg:font-semibold font-black">
          commands manager
        </div>
        <h4 className="w-full mx-auto text-[12px] lg:text-sm font-medium text-center text-neutral-500 mt-[2vh] lg:mt-[3vh] px-3">
          With Hit-List CLI, you can bundle all your frequently used (or just annoyingly long) commands into one, save it in the cloud, make your list
          accessible to anybody, and use them to work faster and smarter on any computer.
        </h4>

        <div className="lg:w-3/5 mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 items-center justify-center pt-16 pb-6">
          <button
            className="w-[90%] lg:w-full py-4 px-10 text-white text-sm bg-primary rounded-lg hover:scale-95 transition-all"
            onClick={() => router.push("/docs")}
          >
            Documentation
          </button>
          <button
            className="w-[90%] lg:w-full py-4 px-10 border-[1px] border-primary text-primary text-sm rounded-lg hover:scale-95 transition-all"
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

        <div className="w-[95%] lg:w-full mx-auto pt-16 pb-24 bg-transparent grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5">
          <Feature image="Share">Share your commands with anyone easily and quickly.</Feature>
          <Feature image="Hit">
            Make your workflow faster and cleaner by running multiple commands with one <b>hit</b>
          </Feature>
          <Feature image="Cloud">Keep your lists safely in the cloud and use them anytime even without an internet connection.</Feature>
          <Feature image="Doc">Open-source codebase and a detailed usage documentation for users.</Feature>
        </div>
      </section>
      <footer className="w-full bg-neutral-50 py-6 lg:py-10 px-6 lg:px-6">
        <div className="lg:w-4/5 flex items-center justify-between mx-auto">
          <div className="flex flex-col items-start space-y-3">
            <img src="/images/Header-Black.svg" alt="Header" className="object-contain h-6 lg:h-8" />
            <h4 className="lg:text-[11px] text-[10px] font-normal">&copy;{currentDate.getFullYear()}. Your Online Commands Manager</h4>
          </div>

          <div className="flex gap-2 lg:gap-3">
            <div className="bg-primary text-white p-2 rounded-full">
              <a href="https://twitter.com/hitlistcli" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={15} />
              </a>
            </div>
            <div className="bg-neutral-700 text-white p-2 rounded-full">
              <a href="https://github.com/hitlist-cli/cli" target="_blank" rel="noopener noreferrer">
                <FaGithub size={15} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
