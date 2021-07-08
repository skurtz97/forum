import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Login } from "./login";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
};

export default App;
