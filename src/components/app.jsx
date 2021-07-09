import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import theme from "../theme";
import Login from "./Login";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.50" minH="100vh" py="12">
        <Router>
          <Switch></Switch>
        </Router>
        <Login />
      </Box>
    </ChakraProvider>
  );
};

export default App;
