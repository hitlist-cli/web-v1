import React from "react";
import { useRouter } from "next/router";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

const PageButton = ({ page, next, children, mt }) => {
  const router = useRouter();
  return (
    <div className="hover:scale-95 transition-all">
      <Box
        w="100%"
        bgColor="none"
        border="1px"
        borderColor="gray.200"
        py="1.3rem"
        px="2rem"
        borderRadius={15}
        mt={mt ? mt : 10}
        fontSize="md"
        fontWeight="normal"
        textColor="gray.600"
        onClick={() => router.push(`/docs/${page}`)}
      >
        <Flex flexDirection={next ? "row" : "row-reverse"}>
          <Box>{children}</Box>
          <Spacer />
          <Box textColor="gray.400">
            {next ? <HiArrowSmRight size={25} /> : <HiArrowSmLeft size={25} />}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default PageButton;
