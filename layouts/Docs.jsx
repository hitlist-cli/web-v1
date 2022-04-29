/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react";
import Sticky from "react-sticky-el";
import Meta from "@/defaults/Meta";
import {
  Box,
  Stack,
  Flex,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";

const Docs = ({ children, title }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const Page = (page) => {
    const currentPage = router.pathname;
    if (`/${page}` === currentPage) {
      return "text-primary cursor-pointer text-sm";
    } else {
      return "cursor-pointer text-sm hover:scale-95 transition-all";
    }
  };
  return (
    <>
      <Meta title={title ? title : "Docs - HitList CLI"} />
      <div className="lg:relative fixed top-0 z-[99] w-[100%]">
        <Box
          w="100%"
          bgColor="white"
          paddingY={4}
          paddingX={8}
          borderBottom="1px"
          borderBottomColor="#e9e9e9"
        >
          <Flex>
            <img
              src="/images/Header-Black.svg"
              alt="Header"
              className="object-contain max-h-[4vh]"
            />
            <Spacer />
            <button
              type="submit"
              ref={btnRef}
              onClick={onOpen}
              className="lg:hidden focus:outline-none"
            >
              <RiMenu3Line size={25} />
            </button>
          </Flex>
        </Box>
      </div>
      <Sticky>
        <div className="lg:grid lg:grid-cols-12">
          <div className="hidden lg:block bg-white h-screen col-span-2">
            <Box
              w="100%"
              minH="100vh"
              paddingY="3rem"
              paddingX={6}
              borderRight="1px"
              borderRightColor="#e9e9e9"
            >
              <Stack spacing={3}>
                <Link href="/docs" passHref>
                  <div className={Page("docs")}>Getting Started</div>
                </Link>
                <Link href="/docs/installation" passHref>
                  <div className={Page("docs/installation")}>Installation</div>
                </Link>
                <Link href="/docs/authentication" passHref>
                  <div className={Page("docs/authentication")}>
                    Authentication
                  </div>
                </Link>
              </Stack>
            </Box>
          </div>

          <div className="lg:col-span-10 max-h-screen overflow-y-scroll">
            <div className="container w-[95vw] md:w-[80%] lg:w-4/5 2xl:w-3/6 mx-auto lg:mx-0 py-10 px-[3vw]">
              {children}

              <footer className="text-center text-xs text-slate-500 my-[10vh]">
                <p>
                  🛠 Built by{" "}
                  <a
                    className="underline text-slate-700"
                    href="https://twitter.com/trulyao"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ayodeji
                  </a>
                </p>
                <p className="mt-4">
                  🎨 Designed by{" "}
                  <a
                    className="underline text-slate-700"
                    href="https://twitter.com/AbdurrazzaqAbd9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bidemi
                  </a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </Sticky>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <img
            src="/images/Header-Black.svg"
            alt="Header"
            className="object-contain max-h-[4vh] mt-16"
          />
          <Stack spacing={5} px={8} mt={10}>
            <Link href="/docs" passHref>
              <div className={Page("docs")}>Getting Started</div>
            </Link>
            <Link href="/docs/installation" passHref>
              <div className={Page("docs/installation")}>Installation</div>
            </Link>
            <Link href="/docs/authentication" passHref>
              <div className={Page("docs/authentication")}>Authentication</div>
            </Link>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Docs;
