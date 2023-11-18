import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../UserContext";

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);
  if (login === true) return <Route {...props} />;
  else if (login === false) return <Redirect to="/login" />;
  else return null;
};

export default ProtectedRoute;
