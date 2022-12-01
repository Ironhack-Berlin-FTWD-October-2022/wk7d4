import React from "react";
import { Navigate } from "react-router-dom";

const Homepage = ({ isLoggedIn }) => {
  if (isLoggedIn === false) {
    return <Navigate to="/projects" />;
  }
  return <h1>You are not welcome here</h1>;
};

export default Homepage;
