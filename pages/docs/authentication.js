import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const Authentication = () => {
  return (
    <Docs title="Authentication">
      <HeaderText>Authentication 🔐</HeaderText>
      <p className="mt-6 text-sm px-1 text-slate-600">
        Great work genius! You have Hit-List CLI installed on your machine now
        but you need to sign in or create an account to start using it, it is
        quite easy and fast.
      </p>

      <SubHeader>Creating An Account</SubHeader>
      <Description>
        There are two ways you can create a Hit-List account; via the web UI or
        the terminal, and both are equally fast but this doc focuses on the
        latter. To sign up/create a new account, run the following command in
        your terminal.
      </Description>
      <Command mt={4}>hit join</Command>

      <SubHeader>Login To An Account (Windows)</SubHeader>
      <Description>
        To run online commands; public or owned ones, you need to be be signed
        in to Hit-List CLI. Run the command below to login to your account.
      </Description>
      <Command mt={4}>hit login</Command>

      <SubHeader>Login To An Account (MacOS & Linux)</SubHeader>
      <Description>
        Using the Hit-List login command on these operating systems require
        special permissions just like installation. Use the command below to
        login to Hit-List CLI on your Mac or Linux computer
      </Description>
      <Command mt={4}>sudo hit login</Command>

      <SubHeader>Show Authenticated User</SubHeader>
      <Description>
        To display the current user, run the following command
      </Description>
      <Command mt={4}>hit me</Command>

      <PageButton next={true} page="create-list">
        Create Lists ➕
      </PageButton>
      <PageButton next={false} page="/installation" mt="5">
        Installation ✨
      </PageButton>
    </Docs>
  );
};
export default Authentication;
