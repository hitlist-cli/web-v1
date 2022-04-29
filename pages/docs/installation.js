import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";

const Installation = () => {
  return (
    <Docs title="Installation">
      <HeaderText>Installation ✨</HeaderText>

      <p className="mt-6 text-sm px-1">
        Let&apos;s take a look at how to get you setup so you can start using
        Hit List CLI
      </p>

      <h2 className="mt-6 font-semibold px-1">What You Need</h2>
      <Info mt="2">
        <ul className="space-y-3">
          <li>Node.js &gt;= v16.0.0</li>
          <li>Node Package Manager (NPM) &gt;= v6.0.0</li>
          <li>Internet Connection</li>
        </ul>
      </Info>

      <PageButton next={true} page="authentication">
        Authentication 🔐
      </PageButton>
      <PageButton next={false} page="" mt="5">
        Getting Started 🚀
      </PageButton>
    </Docs>
  );
};

export default Installation;
