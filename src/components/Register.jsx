import React from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { validateEmail, validatePassword, validateUsername } from "../validate";

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing="6">
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input {...field} id="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="username" validate={validateUsername}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.username && form.touched.username}
                >
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input {...field} id="password" type="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
              Register
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
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
        <RegisterForm />
      </RegisterCard>
    </Box>
  );
};

export default Register;
