import React from "react";
import AuthenticationService from "./AuthenticationService";
import { Route, Redirect } from "react-router-dom";

function AuthenticatedRoute(props) {
  const { isUserLoggedIn } = AuthenticationService();

  if (isUserLoggedIn()) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default AuthenticatedRoute;
