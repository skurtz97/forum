import React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const RegisterCard = ({ children }) => {
  return (
    <Box bg="white" py="8" px="4" shadow="base" rounded="lg">
      {children}
    </Box>
  );
};

const RegisterHeading = () => {
  return (
    <>
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Create a new account
      </Heading>
      <Text align="center" fontWeight="medium" maxW="md" mt="4" mb="8">
        <Text as="span">Already have an account? </Text>
        <Link
          as={RouterLink}
          to="/login"
          color="blue.400"
          _hover={{ color: "blue.600" }}
        >
          Login
        </Link>
      </Text>
    </>
  );
};

const Register = () => {
  return (
    <Box maxW="md" mx="auto">
      <RegisterHeading />
      <RegisterCard>
        <Heading>Register</Heading>
      </RegisterCard>
    </Box>
  );
};

export default Register;
