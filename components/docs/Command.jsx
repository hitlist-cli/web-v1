import React from "react";
import { Box, Button, Flex, Spacer, useToast } from "@chakra-ui/react";
import { IoCopyOutline } from "react-icons/io5";

const Command = ({ children, mt }) => {
  const toast = useToast();
  const copyText = () => {
    navigator.clipboard.writeText(children);
    toast({
      position: "top-right",
      duration: 2500,
      render: () => (
        <Box color="gray.300" py={4} px={10} bg="gray.700" borderRadius={10}>
          Copied!
        </Box>
      ),
    });
  };
  return (
    <Box
      w="100%"
      bgColor="gray.100"
      py="1.2rem"
      px="2rem"
      borderRadius={10}
      mt={mt ? mt : 10}
      fontSize="md"
      fontWeight="normal"
      textColor="gray.600"
    >
      <Flex>
        <Box fontFamily="mono" fontSize="sm">
          {children}
        </Box>
        <Spacer />
        <Box textColor="gray.400" onClick={copyText}>
          <IoCopyOutline size={20} />
        </Box>
      </Flex>
    </Box>
    // <span className="text-slate-400 font-normal">$</span>
  );
};

export default Command;
