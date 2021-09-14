import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from "../utils/constants";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn === true ? <Component {...props} /> : <Redirect to={routes.login} />
      }
    </Route>
  );
};

export default ProtectedRoute;
