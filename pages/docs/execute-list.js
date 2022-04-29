import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const ExecuteList = () => {
  return (
    <Docs title="Create Lists">
      <HeaderText>Execute Lists 🛠</HeaderText>
      <p className="mt-6 text-sm px-1 text-slate-600">
        Hit-List allows you to run multiple custom commands in a single hit.
        This section provides information on how to run your own lists and other
        lists in the pool from other users.
      </p>

      <SubHeader>Executing A Public List</SubHeader>
      <Description>
        By default, all lists are set to public which means anyone with your
        username and the list name can use the list. This is especially useful
        if you work with a run and you run multiple commands to run your
        project. Running ia public list is very easy and here is how to do it.
      </Description>
      <Command mt={4}>hit run -p [USERNAME] [LIST NAME]</Command>
      <Text mt={2} fontSize="sm" textAlign="center">
        OR
      </Text>
      <Command mt={2}>hit r -p [USERNAME] [LIST NAME]</Command>

      <Text fontSize="sm" textColor="gray.600" mt={6} px={1}>
        For example, running the public command below will create 3 folders with
        the names &quot;demo&quot;, &quot;hit-demo&quot; and
        &quot;success&quot;. You cannot run a <b>private</b> list this way since
        you do not have access.
      </Text>
      <Command mt={5}>hit r -p realao hit-demo</Command>

      <SubHeader>Executing A Personal List</SubHeader>
      <Description>
        You can run lists that you own regardless of the visibility as long as
        you own them and it is as easy as running public lists but without the
        -p flag.
      </Description>
      <Command mt={4}>hit run [LIST NAME]</Command>
      <Text mt={2} fontSize="sm" textAlign="center">
        OR
      </Text>
      <Command mt={2}>hit r [LIST NAME]</Command>

      <PageButton next={true} page="view-list">
        View Lists 🔎
      </PageButton>
      <PageButton next={false} page="create-list" mt="5">
        Create Lists ➕
      </PageButton>
    </Docs>
  );
};

export default ExecuteList;
