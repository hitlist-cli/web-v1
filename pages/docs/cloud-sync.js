import React from "react";
import Docs from "@/layouts/Docs";
import { Box, Text } from "@chakra-ui/react";
import PageButton from "@/components/docs/PageButton";
import Info from "@/components/docs/Info";
import HeaderText from "@/components/docs/HeaderText";
import SubHeader from "@/components/docs/SubHeader";
import Command from "@/components/docs/Command";
import Description from "@/components/docs/Description";

const Sync = () => {
  return (
    <Docs title="Cloud Sync">
      <HeaderText>Cloud Sync ☁️</HeaderText>
      <p className="mt-4 text-sm px-1 text-slate-600">
        Hit-List CLI can now save your hits locally, and your hits will run even
        faster with local execution as the first priority. Let&apos;s take a
        look at how to use store your hits locally and update them from your
        cloud account.
      </p>

      <SubHeader>Syncing with HitList Cloud</SubHeader>
      <Description>
        Hits will now try to execute locally first before hitting the cloud. So,
        here is how to get these hits from HitList Cloud and make them
        accessible on your machine. It is as easy as running the command below.
      </Description>
      <Command mt={4}>hit sync</Command>

      <div className="mt-4 font-medium text-slate-600 text-xs px-2">
        Well, that is all for now! Happy hacking 😎
      </div>

      <PageButton next={true} page="extras">
        Extras 📚
      </PageButton>
      <PageButton next={false} page="delete-list" mt="5">
        Delete Lists ❌
      </PageButton>
    </Docs>
  );
};
export default Sync;
