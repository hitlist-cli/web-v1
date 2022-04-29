/* eslint-disable @next/next/no-img-element */
import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";

const DocHome = () => {
  return (
    <>
      <Docs>
        <h1 className="text-3xl lg:text-6xl font-semibold mt-[6vh] lg:mt-0">
          Getting Started 🚀
        </h1>

        <p className="text-sm mt-8 text-neutral-800">
          <span className="text-primary text-medium">Hit List</span> is your
          online commands manager that allows you to take your command lists
          (i.e Hit Lists) with you anywhere and use them anytime.
        </p>

        <Box mt={8} p={4} border="1px" borderColor="#007cd5" borderRadius={10}>
          <Text fontSize="xs">
            Scenario 1 : You have 5 commands to start up your server/program
            every day, that really does break the DRY (Don&apos;t Repeat
            Yourself) rule. With{" "}
            <span className="text-primary text-medium">Hit List</span>, you can
            run these commands with just one HIT on any computer.
          </Text>
        </Box>

        <Box mt={4} p={4} border="1px" borderColor="#007cd5" borderRadius={10}>
          <Text fontSize="xs">
            Scenario 2 : You are a very cautious coder and you commit your work
            very often, but again you have to run 3/4 git commands; tsk, very
            inefficient. This is already baked into
            <span className="text-primary text-medium">Hit List</span> and you
            can easily run it with just ONE hit.
          </Text>
        </Box>
      </Docs>
    </>
  );
};

export default DocHome;
