import React, { useState } from "react";
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

import { Link as RouterLink, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
} from "../validate";

import { addUser } from "../firebase";
import { useAuth } from "./AuthContext";

import FormAlert from "./FormAlert";

const RegisterForm = () => {
  const [submitError, setSubmitError] = useState("");
  const { signup } = useAuth();
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: "", username: "", password: "", confirm: "" }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        try {
          actions.setSubmitting(true);
          await signup(values.email, values.password);
          addUser(values.email, values.username, values.password);
          actions.setSubmitting(false);
          history.push("/");
        } catch (err) {
          console.log(err.message);
          actions.resetForm();
          actions.setFieldError("submit", err.message);
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      {({ values, isSubmitting, handleBlur, handleChange, errors }) => (
        <Form>
          <Stack spacing="6">
            {errors.submit && (
              <FormAlert status="error" message={errors.submit} />
            )}
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
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
                  <Input
                    {...field}
                    id="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
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
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="confirm"
              validate={(confirm) =>
                validateConfirmPassword(confirm, values.password)
              }
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.confirm && form.touched.confirm}
                >
                  <FormLabel htmlFor="confirm">Confirm Password</FormLabel>
                  <Input
                    {...field}
                    id="confirm"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm}
                  />
                  <FormErrorMessage>{form.errors.confirm}</FormErrorMessage>
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
const RegisterAlert = ({ msg }) => {
  <Alert status="error">
    <AlertIcon />
    <AlertTitle>{msg}</AlertTitle>
    <CloseButton position="absolute" right="8px" top="8px" />
  </Alert>;
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
