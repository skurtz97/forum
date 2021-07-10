import React from "react";
import { Alert as ChakraAlert, AlertTitle, AlertIcon } from "@chakra-ui/react";

const FormAlert = ({ status, message }) => {
  return (
    <ChakraAlert status={status}>
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
    </ChakraAlert>
  );
};

export default FormAlert;
