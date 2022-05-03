import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const Installation = () => {
  return (
    <Docs title="Installation">
      <HeaderText>Installation ✨</HeaderText>

      <p className="mt-4 text-sm px-1 text-slate-600">
        Let&apos;s take a look at how to setup Hit-List CLI and start using it.
      </p>

      <h2 className="mt-6 font-semibold px-1">What You Need</h2>
      <Info mt="2">
        <ul className="space-y-3">
          <li>Node.js (at least v16.0.0)</li>
          <li>NPM (at least v6.0.0)</li>
          <li>An Internet Connection</li>
        </ul>
      </Info>

      <SubHeader>Mac/Linux Installation</SubHeader>
      <Description>
        Mac and Linux systems require special permissions for global
        installations. Run any of the commands below to install Hit-List CLI on
        your machine and enter your computer&apos;s password.
      </Description>
      <Command mt={4}>sudo npm i -g hitlist-cli</Command>

      <Description>Using Yarn</Description>
      <Command mt={2}>sudo yarn global add hitlist-cli</Command>

      <SubHeader>Windows Installation</SubHeader>
      <Description>
        Run the command below to install Hit-List CLI on your Windows machine
      </Description>
      <Command mt={4}>npm i -g hitlist-cli</Command>
      <Description>Using Yarn</Description>
      <Command mt={2}>yarn global add hitlist-cli</Command>

      <p className="mt-5 text-sm px-1">
        This should not take long Now that you&apos;ve got that setup,
        let&apos;s move on to authentication.{" "}
      </p>

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
