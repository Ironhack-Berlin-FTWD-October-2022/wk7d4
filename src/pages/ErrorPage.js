import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>404 Turn Back, okay?</p>
      <Link to="/">GO BACK, OKAY</Link>
    </div>
  );
};

export default ErrorPage;
