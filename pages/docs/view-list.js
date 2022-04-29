import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const ViewLists = () => {
  return (
    <Docs title="View Lists">
      <HeaderText>View Lists 🔎</HeaderText>
      <p className="mt-4 text-sm px-1 text-slate-600">
        Nice job genius! You should have now created and executed a list or YOUR
        list by now. But, while you are building that <b>next big thing</b>, you
        could quite easily forget these lists you create, here is how to display
        all your lists.
      </p>
      <Command mt={5}>hit list</Command>
      <Description>Funny? Well, it is uneasy to forget this one.</Description>

      <PageButton next={true} page="delete-list">
        Delete Lists ❌
      </PageButton>
      <PageButton next={false} page="execute-list" mt="5">
        Execute Lists 🛠
      </PageButton>
    </Docs>
  );
};

export default ViewLists;
