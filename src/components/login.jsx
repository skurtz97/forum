import React from "react";
import { Flex, Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Box>
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email address" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
      </form>
    </Box>
  );
};
export const Login = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box width="full" maxWidth="400px" borderRadius={4} boxShadow="lg">
        <Box p={4}>
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};
