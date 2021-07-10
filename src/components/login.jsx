import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import FormAlert from "./FormAlert";
import { useAuth } from "./AuthContext";

const LoginForm = () => {
  const { signin } = useAuth();
  const history = useHistory();

  const validateEmail = (email) => {
    let error;
    if (!email) {
      error = "An email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      error = "Invalid email address";
    }
    return error;
  };
  const validatePassword = (password) => {
    let error;
    if (!password) {
      error = "A password is required";
    } else if (
      !/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/i.test(password)
    ) {
      error =
        "Must be at least 8 characters, including one letter, one number, and one special character";
    }
    return error;
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true);
          await signin(values.email, values.password);
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
      {({ isSubmitting, errors }) => (
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
                  <Input {...field} id="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
              Sign in
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

const LoginCard = ({ children }) => {
  return (
    <Box bg="white" py="8" px="4" shadow="base" rounded="lg">
      {children}
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <>
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Sign in to your account
      </Heading>
      <Text align="center" fontWeight="medium" maxW="md" mt="4" mb="8">
        <Text as="span">Don't have an account? </Text>
        <Link
          as={RouterLink}
          to="/register"
          color="blue.400"
          _hover={{ color: "blue.600" }}
        >
          Register
        </Link>
      </Text>
    </>
  );
};
const Login = () => {
  return (
    <Box maxW="md" mx="auto">
      <LoginHeader />
      <LoginCard>
        <LoginForm />
      </LoginCard>
    </Box>
  );
};

export default Login;
