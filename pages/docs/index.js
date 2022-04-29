/* eslint-disable @next/next/no-img-element */
import React from "react";
import Docs from "@/layouts/Docs";
import { Box } from "@chakra-ui/react";

const DocHome = () => {
  return (
    <>
      <Docs>
        <h1 className="text-3xl lg:text-6xl font-semibold mt-[6vh] lg:mt-0">
          Getting Started 🚀
        </h1>
      </Docs>
    </>
  );
};

export default DocHome;
