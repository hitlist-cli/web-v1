/* eslint-disable @next/next/no-img-element */
import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";

const DocHome = () => {
  return (
    <>
      <Docs title="Getting Started">
        <HeaderText>Getting Started 🚀</HeaderText>

        <p className="text-sm mt-4 text-slate-600 px-1">
          <span className="text-primary text-medium">Hit-List</span> is an
          online commands manager that allows you to take your command lists
          (i.e Hit Lists) with you anywhere and use them anytime. Hit-List CLI
          tool is built to help you reduce time spent repeating commands in the
          terminal; consequently improving your workflow efficiency.
          <b className="block mt-2">
            New: HitList can now save and sync your hits locally from the cloud.
          </b>
        </p>

        {/* <p className="text-red-500 text-xs font-medium bg-red-50 border-[1px] border-red-500 py-4 px-5 mt-3 rounded-2xl">
          IMPORTANT: ON MACOS AND LINUX, YOU NEED TO USE THE SUDO PREFIX.
        </p> */}

        <div className="flex justify-center mt-7">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wGCJQfiwTRA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Info>
          <Text fontSize="xs">
            Scenario 1 : You have 5 commands to start up your server/program
            every day, that really does break the DRY (Don&apos;t Repeat
            Yourself) rule. With{" "}
            <span className="text-primary text-medium">Hit List</span>, you can
            run these commands with just one HIT on any computer.
          </Text>
        </Info>

        <Info mt={5}>
          <Text fontSize="xs">
            Scenario 2 : You are a very cautious coder and you commit your work
            very often, but again you have to run 3/4 git commands; tsk, very
            inefficient. This is already baked into{" "}
            <span className="text-primary text-medium">Hit List</span> and you
            can easily run it with just ONE hit.
          </Text>
        </Info>

        <PageButton page="installation" next={true}>
          Installation ✨
        </PageButton>
      </Docs>
    </>
  );
};

export default DocHome;
