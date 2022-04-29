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
    <Docs title="Create Lists">
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
      <Command mt={5}>hit create [LIST NAME]</Command>
      <SubHeader>Required Parameters</SubHeader>
      <p className="mt-5 px-1 text-sm text-slate-600">
        After running this command, you will be asked to enter the following
        details:
      </p>
      <Info mt={4}>
        <ul className="space-y-2">
          <li>
            Hits separated by commas (eg. &quot;mkdir test-folder, cd
            test-folder&quot;)
          </li>
          <li>Description of the list (eg. This is my test list)</li>
          <li>
            Visibility of the list (Y/N) - A private list is not accessible to
            other users.
          </li>
        </ul>
      </Info>

      <p className="mt-5 px-1 text-sm text-slate-600">
        Amazing! You have successfully created a new list 👏
      </p>

      <PageButton next={true} page="execute-list">
        Execute Lists 🛠
      </PageButton>
      <PageButton next={false} page="create-list" mt="5">
        Authentication 🔐
      </PageButton>
    </Docs>
  );
};

export default CreateList;
