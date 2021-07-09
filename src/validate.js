export const validateEmail = (email) => {
  let error;
  if (!email) {
    error = "An email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    error = "Invalid email address";
  }
  return error;
};

export const validatePassword = (password) => {
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

/**
 *
 * @param {String} confirm The password in the confirm password input
 * @param {String} password The previous password (in the regular password box) that we are confirming
 */
export const validateConfirmPassword = (confirm, password) => {
  let error = "";
  if (!confirm) {
    error = "Enter the password again";
  } else if (confirm !== password) {
    error = "The passwords don't match";
  }
  return error;
};

export const validateUsername = (username) => {
  let error;
  if (!username) {
    error = "A username is required";
  }
  return error;
};
