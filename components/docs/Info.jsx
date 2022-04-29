import React from "react";
import { Box } from "@chakra-ui/react";

const Info = ({ children, mt }) => {
  return (
    <Box
      w="100%"
      bgColor="gray.50"
      border="1px"
      borderColor="gray.200"
      py="1.6rem"
      px="2rem"
      borderRadius={15}
      mt={mt ? mt : 10}
      fontSize="sm"
      fontWeight="normal"
      textColor="gray.600"
    >
      {children}
    </Box>
  );
};

export default Info;
