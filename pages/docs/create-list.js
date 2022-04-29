import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const CreateList = () => {
  return (
    <Docs title="Create List">
      <HeaderText>Create Lists ➕</HeaderText>

      <p className="mt-6 text-sm px-1 text-slate-600">
        Well done so far Jimmy Neutron 👏, let&apos;s take a look at how to
        create a List. A List or Hit List is simply a collection of commands
        specified by YOU.
      </p>

      <SubHeader>Creating Your First List</SubHeader>
      <Description>
        You can create a Hit List from the web UI but this doc focuses on
        creating lists with the terminal. Ensure that you are currently logged
        in by running the hit below.
      </Description>
      <Command mt={3}>hit me</Command>

      <Box mt={6}>
        <Description>
          Now that you have confirmed that it is indeed you logged in, you can
          continue to run the command below.
        </Description>
      </Box>
    </Docs>
  );
};

export default CreateList;
