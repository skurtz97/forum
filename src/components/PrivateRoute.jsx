import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useFirebase } from "../contexts/FirebaseContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useFirebase();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
