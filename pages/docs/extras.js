import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const Extras = () => {
  return (
    <Docs title="Extras">
      <HeaderText>Extras 📚</HeaderText>
      <p className="mt-4 text-sm px-1 text-slate-600">
        Just a bit of extra hits built in for you. This list will be updated
        often with newer hits as more features are added.
      </p>
      <SubHeader mt={4}>Clearing the terminal</SubHeader>
      <Description>Clear all terminal output using Hit-List CLI</Description>
      <Command mt={2}>hit c</Command>

      <SubHeader mt={4}>View Docs</SubHeader>
      <Description>
        Open this documentation website in your default browser
      </Description>
      <Command mt={2}>hit docs</Command>

      <SubHeader mt={8}>Pushing to Git</SubHeader>
      <Description>
        Push to a pre-configured git repository with one hit 😎
      </Description>
      <Command mt={2}>hit push [COMMIT MESSAGE]</Command>
      <Text mt={2} fontSize="sm" textAlign="center">
        OR
      </Text>
      <Command mt={2}>hit p [COMMIT MESSAGE]</Command>

      <SubHeader mt={8}>Check current version</SubHeader>
      <Description>
        Check the version Hit-List CLI you have installed and check for newer
        versions.
      </Description>
      <Command mt={2}>hit -V</Command>
      <Text mt={2} fontSize="sm" textAlign="center">
        OR
      </Text>
      <Command mt={2}>hit --version</Command>

      <SubHeader mt={4}>Command Details/Help</SubHeader>
      <Description>
        If you need help or want to know what a command does, run the following
      </Description>
      <Command mt={2}>hit help [COMMAND]</Command>

      <SubHeader mt={4}>View All Commands </SubHeader>
      <Description>To display all commands</Description>
      <Command mt={2}>hit</Command>

      <p className="my-8 text-[13px] text-slate-700 px-1">
        ❤️ If you need any more help, contact us at{" "}
        <span className="text-[13px] text-slate-500">hit@hitlist.dev</span> or
        on Twitter at{" "}
        <a
          className=" hover:scale-95 transition-all text-sky-500 inline"
          href="https://twitter.com/hitlistcli"
        >
          @hitlistcli
        </a>
      </p>

      <PageButton next={false} page="delete-list" mt={8}>
        Delete Lists ❌
      </PageButton>
    </Docs>
  );
};

export default Extras;
