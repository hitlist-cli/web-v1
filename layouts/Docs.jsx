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
import { FaTwitter } from "react-icons/fa";
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
      <Meta
        title={title ? title : "Docs - HitList CLI"}
        desc="All you need you need to know to start using Hit-List CLI like a PRO!"
      />
      <div className="lg:relative fixed top-0 z-[99] w-[100%]">
        <Box
          w="100%"
          bgColor="white"
          paddingY={4}
          paddingX={8}
          borderBottom="1px"
          borderBottomColor="#e9e9e9"
        >
          <Flex alignItems="center">
            <Link href="/docs" passHref>
              <img
                src="/images/Header-Black.svg"
                alt="Header"
                className="object-contain max-h-[4vh]"
              />
            </Link>
            <Spacer />
            <button
              type="submit"
              ref={btnRef}
              onClick={onOpen}
              className="lg:hidden focus:outline-none"
            >
              <RiMenu3Line size={25} />
            </button>
            <h1 className="text-slate-500 text-sm hidden lg:block font-semibold">
              v2.0.0
            </h1>
          </Flex>
        </Box>
      </div>
      <Sticky>
        <div className="lg:grid lg:grid-cols-12 2xl:w-5/6 2xl:mx-auto">
          <div className="hidden lg:block bg-white h-screen col-span-2">
            <Box
              w="100%"
              minH="100vh"
              paddingY="3rem"
              borderRight="1px"
              borderRightColor="#e9e9e9"
            >
              <Flex w="100%" justifyContent="flex-start" px="2.5rem">
                <Stack spacing={6}>
                  <Link href="/docs" passHref>
                    <div className={Page("docs")}>
                      <span className="mr-2">🚀</span>Getting Started
                    </div>
                  </Link>
                  <Link href="/docs/installation" passHref>
                    <div className={Page("docs/installation")}>
                      <span className="mr-2">✨</span>Installation
                    </div>
                  </Link>
                  <Link href="/docs/authentication" passHref>
                    <div className={Page("docs/authentication")}>
                      <span className="mr-2">🔐</span>Authentication
                    </div>
                  </Link>
                  <Link href="/docs/create-list" passHref>
                    <div className={Page("docs/create-list")}>
                      <span className="mr-2">➕</span>Create Lists
                    </div>
                  </Link>
                  <Link href="/docs/execute-list" passHref>
                    <div className={Page("docs/execute-list")}>
                      <span className="mr-2">🛠</span> Execute Lists
                    </div>
                  </Link>
                  <Link href="/docs/view-list" passHref>
                    <div className={Page("docs/view-list")}>
                      <span className="mr-2">🔎</span>View Lists
                    </div>
                  </Link>
                  <Link href="/docs/delete-list" passHref>
                    <div className={Page("docs/delete-list")}>
                      <span className="mr-2">❌</span>Delete Lists
                    </div>
                  </Link>
                  <Link href="/docs/cloud-sync" passHref>
                    <div className={Page("docs/cloud-sync")}>
                      <span className="mr-2">☁️</span>Cloud Sync
                    </div>
                  </Link>
                  <Link href="/docs/extras" passHref>
                    <div className={Page("docs/extras")}>
                      <span className="mr-2">📚</span>Extras{" "}
                    </div>
                  </Link>
                </Stack>
              </Flex>
            </Box>
          </div>

          <div className="lg:col-span-8 max-h-screen overflow-y-scroll">
            <div className="container w-[95vw] md:w-[80%] lg:w-4/5 2xl:w-5/6 mx-auto py-8 px-[3vw] mt-[7vh] lg:mt-0 mb-[10vh]">
              <Box
                bgColor="green.50"
                border="1px"
                borderColor="green.300"
                textColor="green.400"
                fontSize={11}
                borderRadius={15}
                py={4}
                px={5}
                mb={3}
              >
                New: Cloud synchronization is now available! Check it out{" "}
                <Link href="/docs/cloud-sync">here</Link> 🎉
              </Box>

              {children}

              <footer className="lg:hidden text-center text-xs text-slate-500 my-[10vh]">
                <p className="my-4 text-[10px] text-slate-400">
                  Send feedback and reports to hit@hitlist.dev
                </p>
              </footer>
            </div>
          </div>

          {/* Third column */}
          <div className="hidden lg:block bg-white h-screen col-span-2">
            <Box
              w="100%"
              minH="100vh"
              paddingY="3rem"
              borderLeft="1px"
              borderLeftColor="#e9e9e9"
            >
              <Flex w="100%" justifyContent="center">
                <Stack spacing={5}>
                  <a
                    className="flex items-center space-x-2 hover:scale-95 transition-all text-sky-500"
                    href="https://twitter.com/hitlistcli"
                  >
                    <FaTwitter /> <div>Twitter</div>
                  </a>

                  <p className="text-[10px] text-slate-500">hit@hitlist.dev</p>
                </Stack>
              </Flex>
            </Box>
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
              <div className={Page("docs")}>
                <span className="mr-2">🚀</span>Getting Started
              </div>
            </Link>
            <Link href="/docs/installation" passHref>
              <div className={Page("docs/installation")}>
                <span className="mr-2">✨</span>Installation
              </div>
            </Link>
            <Link href="/docs/authentication" passHref>
              <div className={Page("docs/authentication")}>
                <span className="mr-2">🔐</span>Authentication
              </div>
            </Link>
            <Link href="/docs/create-list" passHref>
              <div className={Page("docs/create-list")}>
                <span className="mr-2">➕</span>Create Lists
              </div>
            </Link>
            <Link href="/docs/execute-list" passHref>
              <div className={Page("docs/execute-list")}>
                <span className="mr-2">🛠</span> Execute Lists
              </div>
            </Link>
            <Link href="/docs/view-list" passHref>
              <div className={Page("docs/view-list")}>
                <span className="mr-2">🔎</span>View Lists
              </div>
            </Link>
            <Link href="/docs/delete-list" passHref>
              <div className={Page("docs/delete-list")}>
                <span className="mr-2">❌</span>Delete Lists
              </div>
            </Link>
            <Link href="/docs/cloud-sync" passHref>
              <div className={Page("docs/cloud-sync")}>
                <span className="mr-2">☁️</span>Cloud Sync
              </div>
            </Link>
            <Link href="/docs/extras" passHref>
              <div className={Page("docs/extras")}>
                <span className="mr-2">📚</span>Extras{" "}
              </div>
            </Link>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Docs;
