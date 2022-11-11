/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "@/defaults/Meta";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Feature from "@/components/web/Feature";
import CLI from "@/components/web/CLI";
import Link from "next/link";

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Meta title="Hit-List | A new way to run multiple commands faster" />
      <nav className="w-full flex justify-between items-center bg-white fixed top-0 py-6 lg:py-6 px-5 lg:px-7 drop-shadow-sm z-[999] bg-opacity-50 backdrop-blur-md">
        <img src="/images/Header-Black.svg" alt="Header" className="object-contain max-h-[4vh]" />

        <div>
          <a href="https://github.com/hitlist-cli/cli" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} />
          </a>
        </div>
      </nav>

      <section className="container w-[90vw] lg:w-4/6 2xl:w-3/6 mt-[13vh] mx-auto">
        <div className="w-max bg-teal-500 text-white text-[10px] px-3 py-1 mb-2 rounded-md">Version 2.x</div>

        <h1 className="lg:w-4/6 text-5xl lg:text-7xl leading-[1.2] font-black">Run multiple commands faster.</h1>

        <div className="flex gap-3 my-7 lg:my-12">
          <Link href="/auth/login" passHref>
            <div className="w-max bg-neutral-200 text-neutral-900 text-xs font-bold px-10 py-4 rounded-xl cursor-pointer hover:-translate-y-2 transition-all">
              Sign In
            </div>
          </Link>
          <Link href="/docs" passHref>
            <div className="w-max bg-neutral-900 text-white text-xs font-bold px-10 py-4 rounded-xl cursor-pointer hover:-translate-y-2 transition-all">
              Documentation
            </div>
          </Link>
        </div>

        <CLI />

        <div className="mx-auto bg-transparent grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 lg:mt-12">
          <Feature image="Share">
            Need to share a command with someone? Hit-List makes it easy to share commands with other people easily and quickly.
          </Feature>
          <Feature image="Hit">Work faster by running multiple commands at once anytime, anywhere.</Feature>
          <Feature image="Cloud">
            Keep your lists safely in the cloud and use them anytime even without an internet connection and on any device.
          </Feature>
          <Feature image="Doc">Open-source codebase and a detailed usage documentation for users.</Feature>
        </div>
      </section>

      <footer className="mt-8 py-8">
        <p className="text-xs text-center font-semibold">
          &copy; {currentYear} Hit-List. Built by{" "}
          <a href="//twitter.com/trulyao" target="_blank" rel="noreferrer" className="text-sky-700">
            Ayodeji
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;
