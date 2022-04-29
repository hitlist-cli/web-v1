import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const DeleteLists = () => {
  return (
    <Docs title="Delete Lists">
      <HeaderText>Delete Lists ❌</HeaderText>
      <p className="mt-4 text-sm px-1 text-slate-600">
        This section contains details on how to delete public lists. Just
        kidding, you can&apos;t if you don&apos;t own it or have access to the
        account 🤣 <br />
        But, you can delete your own lists (or edit them, this is only possible
        in the web UI for now), you can delete any of your own lists by running
        any of the commands below in the terminal and confirming the prompt.
      </p>
      <Command mt={4}>hit delete [LIST NAME]</Command>
      <Text mt={2} fontSize="sm" textAlign="center">
        OR
      </Text>
      <Command mt={2}>hit x [LIST NAME]</Command>

      <PageButton next={true} page="extras">
        Extras 📚
      </PageButton>
      <PageButton next={false} page="view-list" mt="5">
        View Lists 🔎
      </PageButton>
    </Docs>
  );
};

export default DeleteLists;
